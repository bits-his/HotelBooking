import React from 'react'
import { Card, Col, Label, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'

export default function AllotmentReport() {
  return (
    <div>
      <Card className="app_card dashboard_card shadow p-3 m-3">
        <Row>
          <Col md={12}>
            <h5 className="app_title">Allotment Report</h5>
          </Col>
        </Row>
        <div className="d-flex" style={{ gap: 10 }}>
          <InputForm
            className="app_input"
            label="Date From"
            name="date"
            type="Date"
          />
          <InputForm
            className="app_input"
            label="Date To"
            name="date"
            type="Date"
          />
          <div>
            <Label className="mt-2 Label">Select Supplier Name</Label>
            <select className="app_input">
              <option>-select name-</option>
            </select>
          </div>
          <div>
            <Label className="mt-2 Label">Select Hotel Name</Label>
            <select className="app_input">
              <option>-select name-</option>
            </select>
          </div>
        </div>
        <div className="mt-3 d-flex" style={{ gap: 10 }}>
          <button className="app_button px-3">View Record</button>
          <button className="app_button px-3">Reset</button>
          <button className="app_button px-3">Add Allotment</button>
        </div>
        <div
          className="d-flex align-items-center mt-5"
          style={{ justifyContent: 'space-between' }}
        >
          <div className="" style={{ gap: 10 }}>
            <button className="download_button">Excel Download</button>
            <button className="download_button">CSV Download</button>
          </div>

          <div className="">
            <input type="checkbox" /> Show All <input type="checkbox" />{' '}
            Pagination
            <InputForm
              className="app_input"
              // placeholder="Search"
              name="date"
              type="search"
            />
          </div>
        </div>
        <div style={{ overflowX: 'auto', marginTop: 10 }}>
          <table id="customers" style={{ width: '250%' }}>
            <tr>
              <th>ID No</th>
              <th>Edit Allotment</th>
              <th>Tran No</th>
              <th>Hotel Name</th>
              <th>View</th>
              <th>Supplier Name</th>
              <th>Payment Type</th>
              <th>Room Type</th>
              <th>Date From</th>
              <th>Date To</th>
              <th>Night</th>
              <th>Room</th>
              <th>Day Rent</th>
              <th>Total Amount</th>
              <th>Meals Amount</th>
              <th>Net Total</th>
              <th>VAT</th>
              <th>Total With VAT</th>
              <th>Meals Type</th>
              <th>Status</th>
              <th>User</th>
              <th>Cr. Rate</th>
              <th>Post Ref No</th>
            </tr>
            <tr>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdf</td>
              <td>fasfasdfvvvv</td>
              <td>fasfasdfvvvv</td>
            </tr>
          </table>
        </div>
      </Card>
    </div>
  )
}
