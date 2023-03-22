import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import {ReservationInvoice } from './ReservationInvoice'

export default function ViewReservationInvoice() {
    return (
        <div>
            <PDFViewer style={{ width: '100%', height: '100vh', padding: 10 }}>
                <ReservationInvoice />
            </PDFViewer>
        </div>
    )
}
