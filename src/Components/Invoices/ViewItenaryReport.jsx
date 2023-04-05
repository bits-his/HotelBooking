import { PDFViewer } from '@react-pdf/renderer'
import React from 'react'
import ItenaryReport from './ItenaryReport'

export default function ViewItenaryReport() {
  return (
    <div>
        <PDFViewer style={{ width: '100%', height: '100vh', padding: 10 }}>
            <ItenaryReport />
        </PDFViewer>
    </div>
  )
}
