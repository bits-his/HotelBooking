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
export const ItenaryReport = () => (
  <Document>
    <Page size="A4" orientation="potrait" style={styles.page}>
      <View style={{ padding: 20 }}>
       <Text>Hello</Text>
         
      </View>
    </Page>
  </Document>
)
