import React from 'react'
import { Card, Col, Row } from 'reactstrap'

export default function HotelChart() {
    let styles =  {border: '1px solid rgb(12, 134, 103)', padding: '5px 12px'}
  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
        <Row>
            <Col
            md={12}>
            <h5 className="app_title mb-5" style={{ fontSize: 30}}>
                <center >Hotel Chart</center> 
            </h5>
            </Col>
        </Row>
        <Row>
            <table>
                <thead>
                    <tr>
                        <th style={styles}>Reservation ID</th>
                        <th style={styles}>Agent</th>
                        <th style={styles}>Room type</th>
                        <th style={styles}>Date</th>
                        <th style={styles}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </Row>
    </Card>
  )
}
