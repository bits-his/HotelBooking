import React, { useState } from 'react'
import { Card, Col, Input, Row, Table } from 'reactstrap'
import '../AppStyles/GeneralStyle.css'
import InputForm from '../CustomComponents/InputForm'
import { Modal } from 'reactstrap'
import StatusUpdate from './StatusUpdate'
export default function Dashboard() {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div>
      <Card className="app_card dashboard_card shadow p-3 m-3">
      <h5 className='app_title'>Dashboard</h5>

        <div className="status_button_div mt-3 mb-3">
          <button className="clean_button status_button">Cleaned (0)</button>
          <button className="occupied_button status_button">
            Occupied (0)
          </button>
          <button className="checkout_button status_button">
            Checkout (0)
          </button>
        </div>
        <div className="search_button">
          <select id="exampleSelect" className='app_input' name="select" type="select">
            <option>Select Hotel</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <input className='app_input' id="" name="search" placeholder="Search" type="search" />
        </div>
        <Table striped size="sm" responsive className="mt-4" style={{fontSize:13}}>
          <thead>
            <tr>
              <td>S/N</td>
              <td>Room Number</td>
              <td>Status</td>
              <td>Comments</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>123</td>
              <td onClick={toggle} className="green_td">
                <div className="green"></div>
              </td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>123</td>
              <td onClick={toggle} className="red_td">
                <div className="red"></div>
              </td>

              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>123</td>
              <td onClick={toggle} className="orange_td">
                <div className="orange"></div>
              </td>

              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </Card>

      <Modal toggle={toggle} isOpen={open}>
        <StatusUpdate />
      </Modal>
    </div>
  )
}
