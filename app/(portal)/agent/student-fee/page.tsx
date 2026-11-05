'use client';

/**
 * The fee transactions of the agent's own students.
 *
 * The same rows the accounts team sees on the admin student fee page, narrowed
 * to the agent's students - one row per payment. Read only: nothing here can
 * record, confirm, edit or delete a transaction, so the admin actions are gone
 * and the printer is all that is left.
 *
 * The student's name opens their account history - the instalment plan the
 * college billed and every payment against it - which is the question an agent
 * chasing a payment actually has.
 */
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { FileText, Printer } from 'lucide-react';

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
  fetchAgentStudentAccounts,
  fetchAgentStudentFees,
  type AgentStudentAccount,
  type AgentStudentFeeRecord
} from '@/lib/portal';
import {
  AgentFilterBar,
  emptyAgentFilters,
  useAgentFilterOptions,
  type AgentListFilters
} from '@/components/dashboard/agent/agent-filter-bar';
import { PdfPreviewDialog } from '@/components/dashboard/agent/pdf-preview-dialog';
import { StudentFeeInvoice } from '@/components/dashboard/agent/student-fee-invoice-pdf';

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

/** A populated ref carries the name; an unpopulated one is just an id. */
const refName = (value: any, fallback?: string) =>
  (typeof value === 'object' && value?.name) || fallback || 'N/A';

const refId = (value: any): string =>
  typeof value === 'object' && value !== null
    ? String(value._id ?? '')
    : String(value ?? '');

const personName = (person: any) =>
  person?.name ||
  [person?.title, person?.firstName, person?.lastName]
    .filter(Boolean)
    .join(' ')
    .trim() ||
  person?.email ||
  'Student';

const installmentStyle = (status?: string) => {
  switch (status) {
    case 'Paid':
      return 'border-emerald-200 bg-emerald-50 text-emerald-700';
    case 'Partial':
      return 'border-amber-200 bg-amber-50 text-amber-700';
    case 'Overdue':
      return 'border-rose-200 bg-rose-50 text-rose-700';
    default:
      return 'border-gray-200 bg-gray-50 text-black';
  }
};

export default function AgentStudentFeePage() {
  const agent = useSelector((state: any) => state.auth.user);
  const agentId = agent?._id;

  const [fees, setFees] = useState<AgentStudentFeeRecord[]>([]);
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

  const [invoiceFee, setInvoiceFee] = useState<AgentStudentFeeRecord | null>(
    null
  );

  /** Every account of the agent's students, for the history dialog. */
  const [accounts, setAccounts] = useState<AgentStudentAccount[]>([]);
  const [historyFor, setHistoryFor] = useState<{
    name: string;
    studentId: string;
    courseId: string;
  } | null>(null);

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
        // A transaction carries the term itself, and the term carries the
        // year - so the year only narrows the term list, it is never sent.
        if (applied.term) params.courseTermId = applied.term.value;
        if (applied.group) params.groupId = applied.group.value;

        const { result, meta } = await fetchAgentStudentFees(agentId, params);
        if (cancelled) return;
        setFees(result);
        setTotalPages(meta?.totalPage || 1);
        setTotal(meta?.total || 0);
        setLoadFailed(false);
      } catch (error) {
        console.error('Failed to fetch fees:', error);
        if (!cancelled) {
          setFees([]);
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

  // The account history is a second, unpaged read: it is the same handful of
  // accounts whichever page of transactions is on screen, so it is fetched
  // once rather than per row.
  useEffect(() => {
    if (!agentId) return;
    let cancelled = false;

    (async () => {
      try {
        const data = await fetchAgentStudentAccounts(agentId);
        if (!cancelled) setAccounts(data.result);
      } catch (error) {
        console.error('Could not load account history:', error);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [agentId]);

  /** The account behind the name that was clicked. */
  const history = useMemo(() => {
    if (!historyFor) return null;

    return (
      accounts.find(
        (item) =>
          refId(item.studentId) === historyFor.studentId &&
          refId(item.applicationCourseId?.courseId) === historyFor.courseId
      ) ||
      // A student with one account and a transaction whose course did not
      // populate still has a history worth showing.
      accounts.find(
        (item) => refId(item.studentId) === historyFor.studentId
      ) ||
      null
    );
  }, [accounts, historyFor]);

  /**
   * What has been received against each term of the open account.
   *
   * The instalment carries what was billed; the payments carry what came in.
   * Matching them back to the term they were made against is what lets the
   * plan show what is still owed on that term, rather than only on the course.
   */
  const paidByTerm = useMemo(() => {
    const totals = new Map<string, number>();
    (history?.invoices || []).forEach((invoice) => {
      const key = refId(invoice.courseTermId);
      totals.set(key, (totals.get(key) || 0) + (Number(invoice.amount) || 0));
    });
    return totals;
  }, [history]);

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
          Student Fee
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
          searchPlaceholder="Student or reference"
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
                <TableRow className="bg-gray-50/80">
                  <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                    Date
                  </TableHead>
                  <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                    Reference
                  </TableHead>
                  <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                    Student
                  </TableHead>
                  <TableHead className="h-9 w-[25%] px-4 text-[11px] font-semibold uppercase">
                    Course
                  </TableHead>
                  <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                    Method
                  </TableHead>
                  <TableHead className="h-9 px-4 text-right text-[11px] font-semibold uppercase">
                    Amount
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
                {fees.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="py-12 text-center">
                      <div className="flex flex-col items-center gap-2 text-black">
                        <FileText className="h-8 w-8" />
                        <p className="text-sm font-medium">
                          {loadFailed
                            ? 'We could not load your students’ fees'
                            : 'No fees found'}
                        </p>
                        <p className="text-xs">
                          {loadFailed
                            ? 'Please refresh the page and try again in a moment.'
                            : hasFilters
                              ? 'Try adjusting your filters'
                              : 'No confirmed payments yet'}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  fees.map((fee) => {
                    const course = fee.courseId;
                    const intakeName = course?.intakeId?.termName;
                    const courseName =
                      course?.name || course?.courseCode || 'N/A';

                    return (
                      <TableRow
                        key={fee._id}
                        className="group transition-colors hover:bg-gray-100"
                      >
                        <TableCell className="px-4 py-3 text-xs text-black">
                          {formatDate(fee.transactionDate)}
                        </TableCell>

                        <TableCell className="px-4 py-3 text-xs font-medium text-black">
                          {fee.refId || '-'}
                        </TableCell>

                        <TableCell className="px-4 py-3">
                          {/* The name opens this student's account history. */}
                          <button
                            type="button"
                            onClick={() =>
                              setHistoryFor({
                                name: personName(fee.studentId),
                                studentId: refId(fee.studentId),
                                courseId: refId(fee.courseId)
                              })
                            }
                            className="text-left text-xs font-medium text-black underline-offset-2 hover:text-watney hover:underline focus:outline-none focus-visible:text-watney focus-visible:underline"
                          >
                            {personName(fee.studentId)}
                          </button>
                        </TableCell>

                        <TableCell className="max-w-[160px] truncate px-4 py-3">
                          <p className="text-xs font-medium text-black">
                            {intakeName
                              ? `${courseName} - ${intakeName}`
                              : courseName}
                          </p>
                          <p className="text-[10.5px] text-black">
                            {titleCase(fee.courseTermId?.year)}
                            {fee.courseTermId?.name
                              ? ` · ${fee.courseTermId.name}`
                              : ''}
                            {fee.groupId?.name ? ` · ${fee.groupId.name}` : ''}
                          </p>
                        </TableCell>

                        <TableCell className="px-4 py-3 text-xs text-black">
                          {fee.transactionMethod?.name || 'N/A'}
                        </TableCell>

                        <TableCell className="px-4 py-3 text-right text-sm font-semibold text-black">
                          {currency(fee.transactionAmount)}
                        </TableCell>

                        <TableCell className="px-4 py-3">
                          <Badge
                            variant="outline"
                            className={
                              fee.paymentStatus === 'paid'
                                ? 'gap-1 border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700'
                                : 'gap-1 border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700'
                            }
                          >
                            {fee.paymentStatus === 'paid' ? 'Paid' : 'Pending'}
                          </Badge>
                        </TableCell>

                        <TableCell className="px-4 py-3">
                          <div className="flex items-center justify-end gap-1.5">
                            {fee.paymentStatus === 'paid' && (
                              <Button
                                size="icon"
                                title="Print Invoice"
                                onClick={() => setInvoiceFee(fee)}
                                className="h-7 w-7 bg-watney text-white hover:bg-watney/90"
                              >
                                <Printer className="h-3.5 w-3.5" />
                                <span className="sr-only">Print invoice</span>
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })
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

      {/* The student's account history, opened by their name. */}
      <Dialog
        open={!!historyFor}
        onOpenChange={(open) => !open && setHistoryFor(null)}
      >
        <DialogContent className="max-h-[85vh] max-w-4xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {historyFor?.name} — Account history
            </DialogTitle>
          </DialogHeader>

          {!history ? (
            <p className="rounded-lg border border-dashed border-gray-200 p-4 text-sm text-black">
              No fee account has been opened for this student yet.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { label: 'Total billed', value: currency(history.totalFees) },
                  { label: 'Paid', value: currency(history.claimAmount) },
                  { label: 'Outstanding', value: currency(history.balanceDue) }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-gray-200 p-3"
                  >
                    <p className="text-[11px] text-black">{item.label}</p>
                    <p className="mt-1 text-lg font-semibold text-black">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold text-black">
                  Instalment plan
                </h3>
                {history.installments.length === 0 ? (
                  <p className="rounded-lg border border-dashed border-gray-200 p-4 text-sm text-black">
                    No instalments have been set for this course yet.
                  </p>
                ) : (
                  <div className="overflow-hidden rounded-md border border-gray-200">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50/80">
                          <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                            Term
                          </TableHead>
                          <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                            Year
                          </TableHead>
                          <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                            Due from
                          </TableHead>
                          <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                            Status
                          </TableHead>
                          <TableHead className="h-9 px-4 text-right text-[11px] font-semibold uppercase">
                            Amount
                          </TableHead>
                          <TableHead className="h-9 px-4 text-right text-[11px] font-semibold uppercase">
                            Paid
                          </TableHead>
                          <TableHead className="h-9 px-4 text-right text-[11px] font-semibold uppercase">
                            Outstanding
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {history.installments.map((installment, index) => {
                          const billed = Number(installment.amount) || 0;
                          const paid =
                            paidByTerm.get(refId(installment.courseTermId)) || 0;

                          return (
                          <TableRow key={`installment-${index}`}>
                            <TableCell className="px-4 py-3 text-xs font-medium text-black">
                              {refName(
                                installment.courseTermId,
                                installment.termName
                              )}
                            </TableCell>
                            <TableCell className="px-4 py-3 text-xs text-black">
                              {titleCase(installment.year) || 'N/A'}
                            </TableCell>
                            <TableCell className="px-4 py-3 text-xs text-black">
                              {formatDate(installment.installmentStartDate)}
                            </TableCell>
                            <TableCell className="px-4 py-3">
                              <Badge
                                variant="outline"
                                className={`px-2 py-0.5 text-[11px] font-medium ${installmentStyle(
                                  installment.status
                                )}`}
                              >
                                {installment.status || 'Pending'}
                              </Badge>
                            </TableCell>
                            <TableCell className="px-4 py-3 text-right text-sm text-black">
                              {currency(billed)}
                            </TableCell>
                            <TableCell className="px-4 py-3 text-right text-sm text-black">
                              {currency(paid)}
                            </TableCell>
                            {/* What is still owed on this term alone. A
                                negative means it was overpaid, which is worth
                                seeing rather than rounding away to nought. */}
                            <TableCell className="px-4 py-3 text-right text-sm font-semibold text-black">
                              {currency(billed - paid)}
                            </TableCell>
                          </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold text-black">
                  Payment history
                </h3>
                {history.invoices.length === 0 ? (
                  <p className="rounded-lg border border-dashed border-gray-200 p-4 text-sm text-black">
                    No payments have been recorded on this account yet.
                  </p>
                ) : (
                  <div className="overflow-hidden rounded-md border border-gray-200">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50/80">
                          <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                            Receipt
                          </TableHead>
                          <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                            Term
                          </TableHead>
                          <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                            Date
                          </TableHead>
                          <TableHead className="h-9 px-4 text-[11px] font-semibold uppercase">
                            Method
                          </TableHead>
                          <TableHead className="h-9 px-4 text-right text-[11px] font-semibold uppercase">
                            Amount
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {history.invoices.map((invoice, index) => (
                          <TableRow key={`invoice-${index}`}>
                            <TableCell className="px-4 py-3 font-mono text-[11px] text-black">
                              {invoice.invoiceId || '-'}
                            </TableCell>
                            <TableCell className="px-4 py-3 text-xs text-black">
                              {refName(invoice.courseTermId, invoice.termName)}
                            </TableCell>
                            <TableCell className="px-4 py-3 text-xs text-black">
                              {formatDate(invoice.paymentDate)}
                            </TableCell>
                            <TableCell className="px-4 py-3 text-xs text-black">
                              {refName(invoice.paymentMethod)}
                            </TableCell>
                            <TableCell className="px-4 py-3 text-right text-sm font-semibold text-black">
                              {currency(invoice.amount)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <PdfPreviewDialog
        open={!!invoiceFee}
        onOpenChange={(open) => !open && setInvoiceFee(null)}
        title={`Invoice - ${invoiceFee?.refId ?? ''}`}
        fileName={`${invoiceFee?.refId || 'invoice'}.pdf`}
        pdfDocument={
          invoiceFee ? <StudentFeeInvoice fee={invoiceFee} /> : null
        }
      />
    </div>
  );
}
