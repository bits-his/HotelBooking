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
// Create styles
const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  fontSize: {
    fontWeight: '100px',
  },
  naira: {
    content: '20A6',
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
  thead2: {
    backgroundColor: '#EBECF0',
    textAlign: 'center',
    // width: 150,
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
export const ReservationInvoice = ({setNew_data=[],form=f=>f}) => (
  <>
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
              <Image
                src={logo}
                style={{ width: 50, backgroundColor: 'black' }}
              />
            </View>
          </View>
          <View
            style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}
          >
            <View style={{ width: '50%' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
                VAT Rg No : <Text>{form&&form.vat_reg_no}</Text>
              </Text>
            </View>
            <View
              style={{
                width: '50%',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <View>
                <Text style={{ fontSize: 12 }}>
                  Print Date: {form&&form.check_in}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ textAlign: 'center' }}>
            <Text style={{ fontWeight: '900', marginTop: 20 }}>
              Proform&&forma Invoice
            </Text>
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
          <View
            style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}
          >
            <View style={{ width: '50%' }}>
              <Text
                style={{ fontWeight: 'bold', fontSize: 12, color: 'green' }}
              >
                Confirmed Invoice
              </Text>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 12, marginTop: 4 }}>
                  Agent Name : <Text style={{}}>{form&&form.agent_name}</Text>
                </Text>
                <Text style={{ fontSize: 12, marginTop: 4 }}>
                  Guest Name : <Text style={{}}>{form&&form.guest_name}</Text>
                </Text>
                <Text style={{ fontSize: 12, marginTop: 4 }}>
                  Nationality : <Text style={{}}>{form&&form.country_name}</Text>
                </Text>
                <Text style={{ fontSize: 12, marginTop: 4 }}>
                  Contact Name : <Text style={{}}>{form&&form.phone}</Text>
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
              <Text style={{ fontSize: 12, color: 'maroon' }}>
                Reservation No: <Text style={{ fontSize: 20 }}>{form&&form.reservation_number}</Text>
              </Text>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 12, marginTop: 4 }}>
                  TRN No: <Text>{form&&form.BRN_transport}</Text>
                </Text>{' '}
                <Text style={{ fontSize: 12, marginTop: 4 }}>
                  Client Ref No: <Text>111</Text>
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              border: 1,
              borderStyle: 'solid',
              borderColor: 'grey',
              borderWidth: 1,
              marginTop: 15,
            }}
          ></View>
          <View style={{ textAlign: '' }}>
            <Text style={{ color: 'grey', fontSize: 12, marginTop: 10 }}>
              Hotel Booking Details
            </Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Hotel</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Room Type</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Check-In</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Check-out</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Night</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Room</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Adult</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Meals</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Day Rate</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Ml.s Rate</Text>
              </View>
            </View>
          </View>
          {
           setNew_data&&setNew_data.map((i)=>(
            <View style={{ textAlign: '' }}>
            
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View style={styles.thead}>
                <Text style={styles.tableData}>{form&&form.hotel}</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>{i.room_type}</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>{i.check_in}</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>{i.check_out}</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>{i.night}</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>{i.no_of_room}</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>1</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>{i.meal_type}</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Day Rate</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>{i.total_meal_cost_rate}</Text>
              </View>
            </View>
          </View>
           )) 
          }
          <View style={{ textAlign: '' }}>
            <Text style={{ color: 'grey', fontSize: 12, marginTop: 10 }}>
              Transport Details
            </Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Date</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>From</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>To</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Move Type</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Vehicle</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Company</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Quantity</Text>
              </View>
              <View style={styles.thead}>
                <Text style={styles.tableData}>Rate</Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '40%' }}>
              <View>
                <Text style={{ color: 'grey', fontSize: 12, marginTop: 10 }}>
                  Flight Details
                </Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <View style={styles.thead2}>
                  <Text style={styles.tableData}>Date</Text>
                </View>
                <View style={styles.thead2}>
                  <Text style={styles.tableData}>Time</Text>
                </View>
                <View style={styles.thead2}>
                  <Text style={styles.tableData}>Flight</Text>
                </View>
                <View style={styles.thead2}>
                  <Text style={styles.tableData}>Carrier</Text>
                </View>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 9, marginTop: 4 }}>
                  Account Name :{' '}
                  <Text style={{}}> Roya Vision Hotel Operation Company</Text>
                </Text>
                <Text style={{ fontSize: 9, marginTop: 4 }}>
                  Bank Name : <Text style={{}}> Saudi National Bank</Text>
                </Text>
                <Text style={{ fontSize: 9, marginTop: 4 }}>
                  IBAN No : <Text style={{}}>SA3410000000300001300306</Text>
                </Text>
                <Text style={{ fontSize: 9, marginTop: 4 }}>
                  Bank Details : <Text style={{}}>SWIFT NCBKSAJE</Text>
                </Text>
              </View>
            </View>
            <View style={{ width: '60%' }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginLeft: 10,
                }}
              >
                <View style={{ width: '70%' }}>
                  <View
                    style={{
                      marginTop: 20,
                      border: '1px solid black',
                      display: 'flex',
                      padding: 5,
                    }}
                  >
                    <Text style={{ fontSize: 9, marginTop: 4 }}>
                      Hotel :{' '}
                      <Text style={{}}>
                        {' '}
                        Roya Vision Hotel Operation Company
                      </Text>
                    </Text>
                    <Text style={{ fontSize: 9, marginTop: 4 }}>
                      Meals : <Text style={{}}> Saudi National Bank</Text>
                    </Text>
                    <Text style={{ fontSize: 9, marginTop: 4 }}>
                      Additional Charge :{' '}
                      <Text style={{}}>SA3410000000300001300306</Text>
                    </Text>
                    <Text style={{ fontSize: 9, marginTop: 4 }}>
                      Transport : <Text style={{}}>SWIFT NCBKSAJE</Text>
                    </Text>
                    <Text style={{ fontSize: 9, marginTop: 4 }}>
                      Visa Fee : <Text style={{}}>SWIFT NCBKSAJE</Text>
                    </Text>{' '}
                    <Text style={{ fontSize: 9, marginTop: 4 }}>
                      Extra Service : <Text style={{}}>SWIFT NCBKSAJE</Text>
                    </Text>
                    <Text style={{ fontSize: 9, marginTop: 4 }}>
                      Discount : <Text style={{}}>SWIFT NCBKSAJE</Text>
                    </Text>
                  </View>
                </View>
                <View style={{ width: '30%' }}>
                  <View
                    style={{
                      marginTop: 20,
                      border: '1px solid black',
                      display: 'flex',
                      padding: 5,
                    }}
                  >
                    <Text style={{ fontSize: 9, marginTop: 4 }}>200,000</Text>
                    <Text style={{ fontSize: 9, marginTop: 4 }}>200,000</Text>
                    <Text style={{ fontSize: 9, marginTop: 4 }}>200,000</Text>
                    <Text style={{ fontSize: 9, marginTop: 4 }}>200,000</Text>
                    <Text style={{ fontSize: 9, marginTop: 4 }}>200,000</Text>
                    <Text style={{ fontSize: 9, marginTop: 4 }}>200,000</Text>
                    <Text style={{ fontSize: 9, marginTop: 4 }}>200,000</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  </>
)
