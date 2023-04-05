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
 const ItenaryReport = () => (
  <Document>
    <Page size="A4" orientation="potrait" style={styles.page}>
      <View style={{ padding: 10 }}>
       <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: "100%",
            // 
          }}
        >
          <View style={{
            width: '60%',
          }}>
            <Image src={logo} style={{ width: 50, backgroundColor: 'black', marginLeft: "auto", marginRight: 30 }} />
          </View>
          <View style={{width: '30%', marginLeft: 50}}>
            <Text style={{textAlign: 'center', color: '#b30000',marginBottom: '15px'}}><Text style={{fontSize: 25}}>*</Text><Text style={{fontSize: 30}}>4</Text><Text style={{fontSize: 25}}>*</Text></Text>
            <Text style={{fontSize: 10, marginLeft: 10, fontWeight: 'bolder'}}>Print Date: 4/5/2023 12:40:50 PM<Text>{}</Text></Text>
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
        <View style={{display: 'flex', flexDirection: "row", marginTop: 10}}>
            <View style={{width: '50%'}}>
                <Text style={{fontWeight: 'bolder', fontSize: 15, color: '#074635'}}>Guest Itinerary </Text>
            </View>
            <View style={{width: '50%', color: "#b30000"}}>
                <Text style={{fontWeight: 'bolder', textAlign: 'right', marginRight: 40, fontSize: 14}}>Reservation No. </Text>
            </View>
        </View>
        <View style={{display: 'flex', flexDirection: "row",marginTop: 5}}>
            <View style={{width: '80%'}}>
                <Text style={{fontWeight: 'bolder', fontSize: 13}}>ALRAWASSE </Text>
            </View>
            <View style={{width: '20%',color: "#b30000"}}>
                <Text style={{fontWeight: 'bolder', textAlign: 'center', marginRight: 60, fontSize: 18}}> 4 </Text>
            </View>
        </View>
        <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row' }}>
            <View style={{width: '50%'}}>
                <Text style={{fontWeight: 'bolder', fontSize: 12, marginBottom: 5}}>Guest Name</Text>
                <Text style={{fontWeight: 'bolder', fontSize: 13, marginBottom: 5, color: "gray"}}>Group AI Rawasse</Text>
                <Text style={{fontWeight: 'bolder', fontSize: 12, marginBottom: 5}}>Contact Name </Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={{fontWeight: 'bolder', fontSize: 12, marginBottom: 5}}>Nationality</Text>
                <Text style={{fontWeight: 'bolder', fontSize: 13, marginBottom: 5}}>Jordan </Text>
                <Text style={{fontWeight: 'bolder', fontSize: 12, marginBottom: 5}}>Client RefNo </Text>
            </View>
        </View>
        <View>
            <View style={{width: '100%', marginTop: 20}}>
                <Text style={{fontWeight: 900, color: 'gray', textAlign: 'center', fontSize: 13}}>Hotel Booking Details</Text>
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
            <Text style={styles.tableData}>Check-In</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Check-out</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>#Night</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>#Room</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Adult</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Child</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Meals</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Conf No</Text>
          </View>
        </View>
        <View>
            <View style={{width: '100%', marginTop: 20}}>
                <Text style={{fontWeight: 900, color: 'gray', textAlign: 'center', fontSize: 13}}>Transport Details</Text>
            </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
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
            <Text style={styles.tableData}>Move.Type</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Vehicle</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Qty</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Adult</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Child</Text>
          </View>
        </View>
        <View>
            <View style={{width: '60%', marginTop: 20}}>
                <Text style={{fontWeight: 900, color: 'gray', textAlign: 'center', fontSize: 13}}>Flight Details </Text>
            </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 ,width: '60%'}}>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Date</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Time</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Flight</Text>
          </View>
          <View style={styles.thead}>
            <Text style={styles.tableData}>Carrier</Text>
          </View>
        </View>
        <View style={{marginLeft: 20}}>
            <Text style={{ marginTop: 20, fontSize: 15, color:'gray'}}>Important Conctact</Text>
        </View>
      </View>
    </Page>
  </Document>
)

export default ItenaryReport