'use client';

/**
 * The agent's own remittances.
 *
 * The same rows the accounts team raises on the admin remit page, read as the
 * agent they were raised for - one row per remit, which is one course term for
 * one course, covering every student on it. The agent columns and actions are
 * dropped: there is only ever one agent here, and nothing on this page can
 * raise, edit or settle a remit.
 */
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Eye, FileText, Printer } from 'lucide-react';

import { BlinkingDots } from '@/components/blinking-dots';
import { DataTablePagination } from '@/components/data-table-pagination';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  fetchAgentRemitList,
  type AgentRemitListRecord
} from '@/lib/portal';
import {
  AgentFilterBar,
  emptyAgentFilters,
  useAgentFilterOptions,
  type AgentListFilters
} from '@/components/dashboard/agent/agent-filter-bar';
import { PdfPreviewDialog } from '@/components/dashboard/agent/pdf-preview-dialog';
import {
  RemitInvoicePDF,
  type RemitPDFData
} from '@/components/dashboard/agent/remit-invoice-pdf';

function currency(amount: number | undefined | null) {
  const value =
    typeof amount === 'number' && !Number.isNaN(amount) ? amount : 0;
  return `£${value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

function formatDate(value: string | undefined | null) {
  if (!value) return '-';
  return moment(value).format('DD MMM YYYY');
}

const titleCase = (value?: string) =>
  value ? value.charAt(0).toUpperCase() + value.slice(1) : '';

/**
 * Whether one line of a remit has been paid.
 *
 * The remit's own status settles it: paying a remit pays every student in it.
 * A line keeps its own `status` only while the remit is still due - remits
 * paid before the line statuses were kept in step still read `due` there.
 */
const isStudentPaid = (student: any, remit: any) =>
  remit?.status === 'paid' || student?.status === 'paid';

const studentName = (student: any) =>
  student?.studentId?.name ||
  [student?.studentId?.firstName, student?.studentId?.lastName]
    .filter(Boolean)
    .join(' ') ||
  student?.studentId?.email ||
  'Student';

export default function AgentRemitPage() {
  const agent = useSelector((state: any) => state.auth.user);
  const agentId = agent?._id;

  const [remits, setRemits] = useState<AgentRemitListRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);

  // What is typed, and what was last submitted. Only the applied copy reaches
  // the API, so nothing is fetched until Search is pressed - bar the first
  // load, which runs on the empty set.
  const [draft, setDraft] = useState<AgentListFilters>(emptyAgentFilters);
  const [applied, setApplied] = useState<AgentListFilters>(emptyAgentFilters);

  const { courseOptions, yearOptions, termOptionsFor, groupOptions } =
    useAgentFilterOptions(agentId, draft.course?.value, draft.term?.value);
  const termOptions = useMemo(
    () => termOptionsFor(draft.year?.value),
    [termOptionsFor, draft.year]
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(100);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  const [viewRemit, setViewRemit] = useState<AgentRemitListRecord | null>(null);
  const [preview, setPreview] = useState<AgentRemitListRecord | null>(null);

  useEffect(() => {
    if (!agentId) return;
    let cancelled = false;

    (async () => {
      setLoading(true);
      try {
        const params: Record<string, unknown> = {
          page: currentPage,
          limit: entriesPerPage
        };

        if (applied.searchTerm.trim())
          params.searchTerm = applied.searchTerm.trim();
        if (applied.course) params.courseId = applied.course.value;
        if (applied.year) params.year = applied.year.value;
        // The remit denormalises the term's name, so that is what it filters on.
        if (applied.term) params.termName = applied.term.label;
        if (applied.group) params.groupId = applied.group.value;

        const { result, meta } = await fetchAgentRemitList(agentId, params);
        if (cancelled) return;
        setRemits(result);
        setTotalPages(meta?.totalPage || 1);
        setTotal(meta?.total || 0);
        setLoadFailed(false);
      } catch (error) {
        console.error('Failed to fetch remits:', error);
        if (!cancelled) {
          setRemits([]);
          setLoadFailed(true);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [agentId, currentPage, entriesPerPage, applied]);

  const runSearch = () => {
    setApplied(draft);
    setCurrentPage(1);
  };

  const resetSearch = () => {
    setDraft(emptyAgentFilters);
    setApplied(emptyAgentFilters);
    setCurrentPage(1);
  };

  /** The shape `RemitInvoicePDF` reads, built from one remit row. */
  const buildPdfData = (remit: AgentRemitListRecord): RemitPDFData => ({
    remitTo: {
      name: agent?.name || agent?.email || 'N/A',
      email: agent?.email,
      location: agent?.location || agent?.organization,
      sortCode: agent?.sortCode,
      accountNo: agent?.accountNo,
      beneficiary: agent?.beneficiaryName || agent?.beneficiary
    },
    reference: remit._id,
    createdAt: remit.paidDate || remit.createdAt,
    year: remit.year,
    termName: remit.courseTermId?.name || remit.termName,
    groupName: remit.groupId?.name,
    noOfStudents: remit.students?.length || 0,
    students: (remit.students || []).map((student) => ({
      firstName:
        student.studentId?.name || student.studentId?.firstName || 'Student',
      lastName: student.studentId?.lastName || '',
      course: remit.courseId?.name || '',
      intakeName: remit.courseId?.intakeId?.termName || '',
      amount: student.amount
    })),
    totalAmount: remit.totalBalance ?? remit.totalAmount
  });

  const hasFilters =
    !!applied.searchTerm.trim() ||
    !!applied.course ||
    !!applied.year ||
    !!applied.term ||
    !!applied.group;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-black">
          Remit
        </h1>
       
      </div>

      <div className="overflow-hidden ">
        <AgentFilterBar
          value={draft}
          onChange={setDraft}
          onSearch={runSearch}
          onReset={resetSearch}
          loading={loading}
          courseOptions={courseOptions}
          yearOptions={yearOptions}
          termOptions={termOptions}
          groupOptions={groupOptions}
          searchPlaceholder="Course or term"
          show={{ year: true, term: true, group: true }}
        />
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <BlinkingDots size="large" color="bg-watney" />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="overflow-hidden ">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                    Date
                  </TableHead>
                  <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                    Course
                  </TableHead>
                  <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                    Students
                  </TableHead>
                  <TableHead className="h-9 px-4 text-right text-[11px] font-semibold uppercase">
                    Total
                  </TableHead>
                  <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                    Status
                  </TableHead>
                  <TableHead className="h-9 px-4 text-right text-[11px] font-semibold uppercase">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {remits.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="py-12 text-center">
                      <div className="flex flex-col items-center gap-2 text-black">
                        <FileText className="h-8 w-8" />
                        <p className="text-sm font-medium">
                          {loadFailed
                            ? 'We could not load your remittances'
                            : 'No remits found'}
                        </p>
                        <p className="text-xs">
                          {loadFailed
                            ? 'Please refresh the page and try again in a moment.'
                            : hasFilters
                              ? 'Try adjusting your filters'
                              : 'No settled remittances yet'}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  remits.map((remit) => (
                    <TableRow
                      key={remit._id}
                      className="group transition-colors hover:bg-gray-100"
                    >
                      <TableCell className="px-4 py-3 text-xs text-black">
                        {formatDate(remit.createdAt)}
                      </TableCell>

                      <TableCell className="max-w-[220px] truncate px-4 py-3">
                        <p className="text-xs font-medium text-black">
                          {remit.courseId?.name ||
                            remit.courseId?.courseCode ||
                            'N/A'}
                        </p>
                        {/* Year, term and group belong to the whole remit, so
                            they sit under the course rather than in columns. */}
                        <p className="text-[10.5px] text-black">
                          {titleCase(remit.year)}
                          {remit.termName ? ` · ${remit.termName}` : ''}
                          {remit.groupId?.name ? ` · ${remit.groupId.name}` : ''}
                        </p>
                      </TableCell>

                      <TableCell className="px-4 py-3 text-xs text-black">
                        {remit.students?.length || 0}
                      </TableCell>

                      <TableCell className="px-4 py-3 text-right text-sm font-semibold text-black">
                        {currency(remit.totalBalance ?? remit.totalAmount)}
                      </TableCell>

                      <TableCell className="py-3">
                        <Badge
                          variant="outline"
                          className={
                            remit.status === 'paid'
                              ? 'gap-1 border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700'
                              : 'gap-1 border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700'
                          }
                        >
                          {remit.status === 'paid' ? 'Paid' : 'Due'}
                        </Badge>
                      </TableCell>

                      <TableCell className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setViewRemit(remit)}
                            className="h-7 gap-1 px-2 text-[11px] font-medium"
                          >
                            <Eye className="h-3 w-3" />
                            View
                          </Button>

                          <Button
                            size="icon"
                            title="Print remit report"
                            onClick={() => setPreview(remit)}
                            className="h-7 w-7 bg-watney text-white hover:bg-watney/90"
                          >
                            <Printer className="h-3.5 w-3.5" />
                            <span className="sr-only">Print remit report</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Nothing to page through until there is more than one page. */}
          {totalPages > 1 && (
            <DataTablePagination
              pageSize={entriesPerPage}
              setPageSize={(size: number) => {
                setEntriesPerPage(size);
                setCurrentPage(1);
              }}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      )}

      {/* The students on one remit. Held closed behind the preview so the two
          never stack. */}
      <Dialog
        open={!!viewRemit && !preview}
        onOpenChange={(open) => !open && setViewRemit(null)}
      >
        <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto">
          {viewRemit && (
            <>
              <DialogHeader>
                <DialogTitle>
                  {viewRemit.courseId?.name || 'Remit'}
                  {viewRemit.courseId?.intakeId?.termName
                    ? ` — ${viewRemit.courseId.intakeId.termName}`
                    : ''}
                </DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {[
                  { label: 'Date', value: formatDate(viewRemit.createdAt) },
                  {
                    label: 'Year',
                    value: titleCase(viewRemit.year) || 'N/A'
                  },
                  {
                    label: 'Term',
                    value:
                      viewRemit.courseTermId?.name || viewRemit.termName || 'N/A'
                  },
                  {
                    label: 'Group',
                    value: viewRemit.groupId?.name || 'N/A'
                  },
                  {
                    label: 'Students',
                    value: String(viewRemit.students?.length || 0)
                  }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-gray-200 p-3"
                  >
                    <p className="text-[11px] text-black">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-black">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-md border border-gray-200">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50/80">
                      <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                        Student
                      </TableHead>
                      <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                        Status
                      </TableHead>
                      <TableHead className="h-9 px-4 text-right text-[11px] font-semibold uppercase">
                        Amount
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(viewRemit.students || []).map((student, index) => (
                      <TableRow key={`${student.applicationCourseId}-${index}`}>
                        <TableCell className="px-4 py-3">
                          <p className="text-xs font-medium text-black">
                            {studentName(student)}
                          </p>
                          <p className="text-[10.5px] text-black">
                            {student.studentId?.email || '-'}
                          </p>
                        </TableCell>
                        <TableCell className="px-4 py-3">
                          {/* A paid remit is paid in full - the header settles
                              every line in it, so a line is never still due
                              once the remit itself has been paid. */}
                          <Badge
                            variant="outline"
                            className={
                              isStudentPaid(student, viewRemit)
                                ? 'border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700'
                                : 'border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700'
                            }
                          >
                            {isStudentPaid(student, viewRemit) ? 'Paid' : 'Due'}
                          </Badge>
                        </TableCell>
                        <TableCell className="px-4 py-3 text-right text-sm font-semibold text-black">
                          {currency(student.amount)}
                        </TableCell>
                      </TableRow>
                    ))}

                    <TableRow className="bg-gray-50/80">
                      <TableCell
                        colSpan={2}
                        className="px-4 py-3 text-right text-xs font-semibold uppercase text-black"
                      >
                        Total
                      </TableCell>
                      <TableCell className="px-4 py-3 text-right text-sm font-bold text-black">
                        {currency(viewRemit.totalBalance ?? viewRemit.totalAmount)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="flex justify-end">
                <Button
                  size="sm"
                  onClick={() => setPreview(viewRemit)}
                  className="bg-watney text-white hover:bg-watney/90"
                >
                  <Printer className="mr-1.5 h-3.5 w-3.5" />
                  Print remit report
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <PdfPreviewDialog
        open={!!preview}
        onOpenChange={(open) => !open && setPreview(null)}
        title={`Remit Report — ${preview?.courseId?.name || ''}`}
        fileName={`remit-${preview?.termName || 'report'}.pdf`}
        pdfDocument={
          preview ? <RemitInvoicePDF remit={buildPdfData(preview)} /> : null
        }
      />
    </div>
  );
}
