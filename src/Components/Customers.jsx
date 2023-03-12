import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { Card, Col, Modal, Row, Table } from 'reactstrap'
// import InputForm from '../CustomComponents/InputForm'
import { _get, _post } from '../Utils/Helper'
import CustomerReg from './CustomerReg'

export default function Customers() {
  const [customersList, setCustomersList] = useState([])
  // const [customerObj, setCustomerObj] = useState({})
  const [custData, setCustData] = useState([])
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [hotelList, setHotelList] = useState([])
  const [loading1, setLoading1] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  const toggle2 = () => {
    setOpen2(!open2)
  }

  const customerLists = () => {
    setLoading(true)
    _post (
      'api/customer?query_type=select',
      {},
      (res) => {
        setLoading(false)
        console.log(res)
        setCustomersList(res.resp)
        // toggle()
        alert(success)
      },
      (err) => {
        setLoading(false)
        console.log(err)
      },
    )
  }

  useEffect(() => {
    customerLists()
  }, [])

  const customerData = (id) => {
    setLoading1(true)
    _get(
      `customer/${id}`,
      (resp) => {
        console.log(resp)
        setLoading1(false)
        // if (resp && resp.length) {
        setCustData(resp)
        // }
      },
      (e) => {
        setLoading1(false)
        console.log(e)
      },
    )
  }
  // useEffect(() => {
  //   customerData()
  // }, [customerData.id])

  const getHotels = () => {
    _post( 
      'api/hotels?query_type=select',
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp)
        setHotelList(resp.resp)
        // setSelectedRoom({ ...resp.resp[0], hotel: resp.resp[0].id })
      },
      (e) => {
        console.log(e)
        // setLoading(false)
        // alert(e)
      },
    )
  }

  useEffect(() => {
    // setLoading(true)
    getHotels()
  }, [])

  const hotelName = (hotelId) => {
    return hotelList.filter((h) => h.id === hotelId)[0]?.hotel_name
  }


  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(customersList)} */}
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
                {/* <td>Room(s)</td> */}
                <td>Ch-in</td>
                <td>Ch-out</td>
                {/* <td>Price</td> */}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <span>Loading customers...</span>
              ) : (
                customersList.map((item, index) => (
                  <tr
                    onClick={() => {
                      toggle2()
                      // setCustomerObj(item)
                      customerData(item.id)
                    }}
                  >
                    <td>{item.customer_name}</td>
                    <td>{hotelName(parseInt(item.hotel_id))}</td>
                    {/* <td>fdsaf</td> */}
                    <td>{moment(item.from_date).format('DD/MM/YYYY')}</td>
                    <td>{moment(item.to_date).format('DD/MM/YYYY')}</td>
                    {/* <td>200</td> */}
                  </tr>
                ))
              )}
              {!loading && customersList.length === 0 ? (
                <span>No Data</span>
              ) : (
                ''
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal toggle={toggle} isOpen={open}>
        <CustomerReg toggle={toggle} fetchCustomers={customerLists} />
      </Modal>

      <Modal toggle={toggle2} isOpen={open2}>
        <Card body className="app_card shadow mt-3">
          <h5 className="app_title">Customer Details</h5>
          {/* {JSON.stringify(customerObj)} */}
          {/* {JSON.stringify(custData)} */}
          {loading1 ? (
            <span>Loading...</span>
          ) : (
            <div>
              <p>
                Name:{' '}
                <span style={{ fontWeight: 'bold' }}>
                  {custData?.customer?.name}
                </span>
              </p>
              <p>
                Hotel:{' '}
                <span style={{ fontWeight: 'bold' }}>
                  {hotelName(custData?.customer?.hotel)}
                  {/* {hotelName(parseInt(item.hotel))} */}
                </span>
              </p>
              <p>
                Room No:{' '}
                <span style={{ fontWeight: 'bold' }}>
                  {custData?.rooms?.map((item) => item.room_number)}
                </span>
              </p>
              <p>
                Chk-in:{' '}
                <span style={{ fontWeight: 'bold' }}>
                  {/* {custData?.customer?.from_date} */}
                  {moment(custData?.customer?.from_date).format('DD/MM/YYYY')}
                </span>
              </p>
              <p>
                Chk-out:{' '}
                <span style={{ fontWeight: 'bold' }}>
                  {moment(custData?.customer?.to_date).format('DD/MM/YYYY')}
                  {/* {custData?.customer?.to_date} */}
                </span>
              </p>
            </div>
          )}
        </Card>
      </Modal>
    </Card>
  )
}
