'use client';

/**
 * The receipt for one fee transaction, as the accounts team issues it.
 *
 * Ported from the admin student fee page so an agent's copy is the same
 * document the college holds. One transaction, one invoice - the instalment
 * plan belongs to the account, not to the payment, so it is not repeated here.
 */
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import moment from 'moment';

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#111827'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#111827'
  },
  title: { fontSize: 22, color: '#111827', fontFamily: 'Helvetica-Bold' },
  subtitle: { fontSize: 9, color: '#6B7280', marginTop: 2 },
  headerRight: { alignItems: 'flex-end' },
  headerMeta: { fontSize: 9, color: '#6B7280' },
  headerMetaStrong: {
    fontSize: 11,
    color: '#111827',
    fontFamily: 'Helvetica-Bold'
  },
  sectionTitle: {
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: '#374151',
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    fontFamily: 'Helvetica-Bold'
  },
  block: { marginBottom: 16 },
  row: { flexDirection: 'row', marginBottom: 3 },
  label: { width: 110, color: '#6B7280', fontSize: 9 },
  value: { fontSize: 10, flex: 1 },
  amountBox: { marginTop: 8 },
  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6'
  },
  amountLabel: { color: '#6B7280', fontSize: 9 },
  amountValue: { fontSize: 10 },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
    backgroundColor: '#F3F4F6'
  },
  totalLabel: { fontSize: 11, fontFamily: 'Helvetica-Bold' },
  totalValue: { fontSize: 11, fontFamily: 'Helvetica-Bold' },
  footer: {
    marginTop: 24,
    paddingTop: 8,
    fontSize: 8,
    color: '#9CA3AF',
    textAlign: 'center'
  }
});

const toLabel = (value: unknown): string | null =>
  typeof value === 'string' && value.trim().length > 0 ? value.trim() : null;

const currency = (amount: number | undefined | null) => {
  const value =
    typeof amount === 'number' && !Number.isNaN(amount) ? amount : 0;
  return `£${value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
};

export function StudentFeeInvoice({ fee }: { fee: any }) {
  const student = fee.studentId || {};
  const course = fee.courseId || {};
  const term = fee.courseTermId || {};

  const intakeName = toLabel(course?.intakeId?.termName);
  const courseName =
    toLabel(course?.name) || toLabel(course?.courseCode) || 'N/A';
  const studentName =
    toLabel(student?.name) ||
    [toLabel(student?.firstName), toLabel(student?.lastName)]
      .filter(Boolean)
      .join(' ') ||
    'Student';

  // `tcid` is the accounting reference; `refId` is the one the lists show, and
  // is what an agent is actually able to quote back to the college.
  const invoiceNumber = toLabel(fee.tcid) || toLabel(fee.refId) || 'N/A';
  const invoiceDate = fee.invoiceDate || fee.transactionDate || null;

  return (
    <Document title={`Invoice ${invoiceNumber}`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>INVOICE</Text>
            <Text style={styles.subtitle}>Student Fee Payment Receipt</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.headerMeta}>Invoice No.</Text>
            <Text style={styles.headerMetaStrong}>{invoiceNumber}</Text>
            {invoiceDate ? (
              <>
                <Text style={styles.headerMeta}>Date</Text>
                <Text style={styles.headerMetaStrong}>
                  {moment(invoiceDate).format('DD MMM YYYY')}
                </Text>
              </>
            ) : null}
          </View>
        </View>

        <View style={styles.block}>
          <Text style={styles.sectionTitle}>Billed To</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Student</Text>
            <Text style={styles.value}>{studentName}</Text>
          </View>
          {toLabel(student?.email) ? (
            <View style={styles.row}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>{student.email}</Text>
            </View>
          ) : null}
          <View style={styles.row}>
            <Text style={styles.label}>Course</Text>
            <Text style={styles.value}>
              {intakeName ? `${courseName} - ${intakeName}` : courseName}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Course Term</Text>
            <Text style={styles.value}>{toLabel(term?.name) || 'N/A'}</Text>
          </View>
          {toLabel(term?.year) ? (
            <View style={styles.row}>
              <Text style={styles.label}>Year</Text>
              <Text style={styles.value}>
                {term.year.charAt(0).toUpperCase() + term.year.slice(1)}
              </Text>
            </View>
          ) : null}
          {fee.installmentOrder ? (
            <View style={styles.row}>
              <Text style={styles.label}>Installment</Text>
              <Text style={styles.value}>{String(fee.installmentOrder)}</Text>
            </View>
          ) : null}
          {toLabel(fee.groupId?.name) ? (
            <View style={styles.row}>
              <Text style={styles.label}>Group</Text>
              <Text style={styles.value}>{fee.groupId.name}</Text>
            </View>
          ) : null}
        </View>

        <View style={styles.block}>
          <Text style={styles.sectionTitle}>Payment Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Method</Text>
            <Text style={styles.value}>
              {toLabel(fee.transactionMethod?.name) || 'N/A'}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Reference</Text>
            <Text style={styles.value}>{toLabel(fee.refId) || 'N/A'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Status</Text>
            <Text style={styles.value}>
              {fee.paymentStatus === 'paid' ? 'Paid' : 'Pending'}
            </Text>
          </View>
        </View>

        <View style={styles.amountBox}>
          <View style={styles.amountRow}>
            <Text style={styles.amountLabel}>Total Amount</Text>
            <Text style={styles.amountValue}>
              {currency(fee.transactionAmount)}
            </Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Paid</Text>
            <Text style={styles.totalValue}>
              {currency(fee.transactionAmount)}
            </Text>
          </View>
        </View>

        <Text style={styles.footer}>
          This is a system generated invoice for transaction {invoiceNumber}. It
          is valid without a signature.
        </Text>
      </Page>
    </Document>
  );
}

export default StudentFeeInvoice;
