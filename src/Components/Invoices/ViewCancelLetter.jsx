import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import { CancelLetter } from './CancelLetter'

export default function ViewCancelLetter() {
  return (
    <div>
      <PDFViewer style={{ width: '100%', height: '100vh', padding: 10 }}>
        <CancelLetter />
      </PDFViewer>
    </div>
  )
}
