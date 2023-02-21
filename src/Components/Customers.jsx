import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Modal, Row, Table } from 'reactstrap'
// import InputForm from '../CustomComponents/InputForm'
import { _get } from '../Utils/Helper'
import CustomerReg from './CustomerReg'

export default function Customers() {
  const [customersData, setCustomersData] = useState([])
  const [open, setOpen] = useState(false)
  const [hotelList, setHotelList] = useState([])
  const toggle = () => {
    setOpen(!open)
  }

const customerLists=()=>{
  _get(
    `customers`,
    (resp) => {
      console.log(resp)
      if (resp && resp.length) {
        setCustomersData(resp)
      }
    },
    (e) => {
      console.log(e)
    },
  )
}

  useEffect(() => {
  customerLists()
  }, [])

  useEffect(() => {
    _get(
      'hotels/',
      (resp) => {
        console.log(resp)
        if (resp && resp.length) {
          setHotelList(resp)
        }
      },
      (e) => {
        console.log(e)
      },
    )
  }, [])

  const hotelName = (hotelId) => {
    return hotelList.filter((h) => h.id === hotelId)[0]?.name
  }

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(hotelList)} */}
      <Row>
        <Col md={12}>
          <Row>
            <Col md={6} sm={6} xs={6}>
              <h5 className="app_title">Customers</h5>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <button
                style={{ float: 'right' }}
                className="app_button"
                onClick={toggle}
              >
                Add New
              </button>
            </Col>
          </Row>
          <Table
            striped
            size="sm"
            responsive
            className=""
            style={{ fontSize: 13 }}
          >
            <thead>
              <tr>
                <td>Name</td>
                <td>Hotel</td>
                <td>Room(s)</td>
                <td>Ch-in</td>
                <td>Ch-out</td>
                {/* <td>Price</td> */}
              </tr>
            </thead>
            <tbody>
              {customersData.map((item, index) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{hotelName(parseInt(item.hotel))}</td>
                  <td>fdsaf</td>
                  <td>{moment(item.from_date).format('DD/MM/YYYY')}</td>
                  <td>{moment(item.to_date).format('DD/MM/YYYY')}</td>
                  {/* <td>200</td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal toggle={toggle} isOpen={open}>
        <CustomerReg toggle={toggle} fetchCustomers={customerLists}/>
      </Modal>
    </Card>
  )
}
