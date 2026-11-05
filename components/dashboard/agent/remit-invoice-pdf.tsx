'use client';

/**
 * The remit report, as the accounts team issues it.
 *
 * Ported from the admin remit page so an agent's copy is the same document the
 * college holds - year, term and group belong to the whole remit rather than
 * to any one student, so they are stated once in the header instead of being
 * repeated down every row.
 */
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import moment from 'moment';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Helvetica'
  },
  sectionTitle: {
    fontSize: 11,
    color: '#19c7f8',
    marginBottom: 5,
    fontFamily: 'Helvetica-Bold'
  },
  value: {
    fontSize: 10,
    marginBottom: 3
  },
  twoColumnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  label: {
    fontSize: 12,
    paddingBottom: 2,
    fontFamily: 'Helvetica-Bold'
  },
  table: {
    width: '100%',
    marginTop: 20
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#19c7f8'
  },
  tableHeaderCell: {
    padding: 5,
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: '#fff',
    fontFamily: 'Helvetica-Bold'
  },
  tableHeaderAmountCell: {
    padding: 5,
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold'
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tableCell: {
    padding: 5,
    fontSize: 10,
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  totalRow: {
    flexDirection: 'row',
    backgroundColor: '#19c7f8'
  },
  totalLabel: {
    width: '85%',
    padding: 5,
    fontSize: 11,
    color: 'white',
    textAlign: 'right',
    fontFamily: 'Helvetica-Bold'
  },
  totalValue: {
    width: '15%',
    padding: 5,
    fontSize: 11,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold'
  },
  grayText: {
    color: '#262626'
  },
  grayBackground: {
    backgroundColor: '#f3f3f3'
  }
});

export interface RemitPDFStudent {
  firstName?: string;
  lastName?: string;
  course?: string;
  intakeName?: string;
  amount: number;
}

export interface RemitPDFData {
  remitTo?: {
    name?: string;
    email?: string;
    location?: string;
    sortCode?: string;
    accountNo?: string;
    beneficiary?: string;
  };
  reference?: string;
  createdAt?: string;
  year?: string;
  termName?: string;
  groupName?: string;
  noOfStudents?: number;
  students?: RemitPDFStudent[];
  totalAmount?: number;
}

export const RemitInvoicePDF = ({ remit = {} }: { remit: RemitPDFData }) => {
  const {
    remitTo = {},
    reference = '',
    createdAt = '',
    year = '',
    termName = '',
    groupName = '',
    noOfStudents = 0,
    students = [],
    totalAmount = 0
  } = remit;

  const formattedYear = year
    ? year.charAt(0).toUpperCase() + year.slice(1)
    : 'N/A';

  return (
    <Document title={`Remit report ${reference}`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.twoColumnContainer}>
          <View>
            <Text style={styles.sectionTitle}>REMIT TO</Text>
            <Text style={styles.label}>{remitTo.name || 'N/A'}</Text>
            <Text style={styles.value}>Email: {remitTo.email || 'N/A'}</Text>
            <Text style={styles.value}>
              Address: {remitTo.location || 'N/A'}
            </Text>
          </View>
          <View>
            <Text style={styles.sectionTitle}>REMIT REPORT</Text>
            <Text style={styles.value}>Reference: {reference}</Text>
            <Text style={styles.value}>
              Date:{' '}
              {createdAt ? moment(createdAt).format('Do MMM, YYYY') : 'N/A'}
            </Text>
            <Text style={styles.value}>No of Students: {noOfStudents}</Text>
            <Text style={styles.value}>Year: {formattedYear}</Text>
            <Text style={styles.value}>Term: {termName || 'N/A'}</Text>
            <Text style={styles.value}>Group: {groupName || 'N/A'}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>PAYMENT INFORMATION</Text>
        <Text style={styles.value}>Sort Code: {remitTo.sortCode || 'N/A'}</Text>
        <Text style={styles.value}>
          Account No: {remitTo.accountNo || 'N/A'}
        </Text>
        <Text style={styles.value}>
          Beneficiary: {remitTo.beneficiary || 'N/A'}
        </Text>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderCell, { width: '8%' }]}>SL</Text>
            <Text
              style={[
                styles.tableHeaderCell,
                { width: '62%', textAlign: 'left' }
              ]}
            >
              NAME
            </Text>
            <Text style={[styles.tableHeaderAmountCell, { width: '30%' }]}>
              AMOUNT
            </Text>
          </View>

          {students.map((student, index) => (
            <View
              style={[
                styles.tableRow,
                index % 2 !== 0 ? styles.grayBackground : {}
              ]}
              key={index}
            >
              <Text style={[styles.tableCell, { width: '8%' }]}>
                {index + 1}
              </Text>

              <View
                style={{
                  width: '62%',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start'
                }}
              >
                <Text style={[styles.tableCell, { textAlign: 'left' }]}>
                  {[student.firstName, student.lastName]
                    .filter(Boolean)
                    .join(' ')}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    styles.grayText,
                    { textAlign: 'left' }
                  ]}
                >
                  {student.course}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    styles.grayText,
                    { textAlign: 'left', fontSize: 8 }
                  ]}
                >
                  {student.intakeName || '-'}
                </Text>
              </View>

              <Text style={[styles.tableCell, { width: '30%' }]}>
                £{Number(student.amount || 0).toFixed(2)}
              </Text>
            </View>
          ))}

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>TOTAL</Text>
            <Text style={styles.totalValue}>
              £{Number(totalAmount || 0).toFixed(2)}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default RemitInvoicePDF;
