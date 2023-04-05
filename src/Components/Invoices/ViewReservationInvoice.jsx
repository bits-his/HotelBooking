import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import {ReservationInvoice } from './ReservationInvoice'

export default function ViewReservationInvoice({setNew_data=[],form=f=>f}) {
    return (
        <div>
            {/* {JSON.stringify(setNew_data[0].meal_type)} */}
            <PDFViewer style={{ width: '100%', height: '100vh', padding: 10 }}>
                <ReservationInvoice setNew_data={setNew_data} form={form}/>
            </PDFViewer>
        </div>
    )
}
