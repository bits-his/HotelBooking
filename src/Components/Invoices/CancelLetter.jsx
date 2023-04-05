import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer'
import logo from '../../images/1.png'
const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  thead: {
    backgroundColor: '#EBECF0',
    textAlign: 'center',
    width: 150,
    border: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    margin: 0,
    padding: 5,
  },
  tableData: {
    fontSize: 10,
  },
})

// Create Document Component
export const CancelLetter = () => (
  <Document>
    <Page size="A4" orientation="potrait" style={styles.page}>
      <View style={{ padding: 20 }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View>
            <Image src={logo} style={{ width: 50, backgroundColor: 'black' }} />
          </View>
        </View>
        <View
          style={{
            border: 1,
            borderStyle: 'solid',
            borderColor: 'grey',
            borderWidth: 1,
            marginTop: 5,
          }}
        ></View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
          <View style={{ width: '50%' }}>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 12, marginTop: 4 }}>
                To : <Text style={{}}>Yasir</Text>
              </Text>
              <Text style={{ fontSize: 12, marginTop: 4 }}>
                Subject : <Text style={{}}>Hassan</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '50%',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 12, marginTop: 4 }}>
                Date: <Text>22/22/23</Text>
              </Text>{' '}
              <Text style={{ fontSize: 12, marginTop: 4 }}>
                Reservation No: <Text>111</Text>
              </Text>
            </View>
          </View>
        </View>
        <Text style={{ fontSize: 10, marginTop: 40 }}>
          First of all, we would like to take this opportunity to send you our
          best regards from Roya Vision Hotel Operation Company reference to
          your reservation below
        </Text>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
          <View style={{ width: '50%' }}>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 10, marginTop: 4 }}>
                Guest Name : <Text style={{}}>Yasir</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '50%',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 10, marginTop: 4 }}>
                Nationality: <Text>Nigeria</Text>
              </Text>{' '}
            </View>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Hotel</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Room Type</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>#Room</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Check-In</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Check-out</Text>
          </View>
        </View>
        <Text style={{fontSize:10, marginTop:20}}>
          Please be inform you that we are relectantly compelled to cancel the
          above reservation,as we didnot recieve and esponce form your side and
          further the option date for payment and confirmation to your tendative
          reservation were 17/04/2023.
        </Text>
        <Text style={{fontSize:10}}>
          Meanwhile,Your usual support and your kind confidence in Roya Vision
          Hotel Operation Company is highly appreciated.
        </Text>
      </View>
    </Page>
  </Document>
)
