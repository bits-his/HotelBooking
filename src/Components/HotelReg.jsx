import React, { useEffect, useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Modal, Row, Table } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'
import { _get, _post } from '../Utils/Helper'
import { Floors } from './Floors'

export default function HotelReg() {
  const goto = useNavigate()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    hotel_in: '',
    hotel_name: '',
    address: '',
    city: '',
    phone: '',
    email: '',
    website: '',
  })

  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  const [hotelList, setHotelList] = useState([])

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
  }
  const [selected, setSelected] = useState([])
  const handleSelected = (s) => {
    setSelected(s)
  }

  const handleSubmit = () => {
    setLoading(true)
    _post(
      'api/hotels?in_query_type=create',
      form,
      (res) => {
        setForm((p) => ({
          ...p,
          hotel_in: '',
          hotel_name: '',
          address: '',
          city: '',
          phone: '',
          email: '',
          website: '',
        }))
        setLoading(false)
        console.log(res)
        getHotels()
        toggle()
      },
      (err) => {
        setLoading(false)
        console.log(err)
      },
    )
    console.log(finalObj)
  }

  const getHotels = () => {
    _post(
      'api/hotels?in_query_type=select-all',
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp)
        // if (resp ) {
        setHotelList(resp.resp)
        //  alert('dfasfsadf'+resp)
        // }
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
  
  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
       <Row>
        <Col md={12}>
          <button
            className="app_button p-3"
            style={{ width: 150 }}
            onClick={() => goto('/create-hotel')}
          >
            Add Hotel +
          </button>
        </Col>
      </Row>
      <div className="card_div">
        <Col md={12}>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: 50 }}>
            {/* {JSON.stringify(data)} */}
            <label className="label_title">Search</label>
            <div className="search">
              <CiSearch style={{ fontSize: 30 }} />
              <input
                className="app_input2"
                type="text"
                placeholder="Search"
                name="Search"
                // value={}
              />
            </div>
          </div>
        </Col>
        <Row>
          <table
            style={{ border: '1px solid #ccc', padding: 12 }}
            className="mt-5"
          >
            <thead>
              <tr>
                {/* <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Hotel In</td> */}
                <td
                  style={{
                    border: '1px solid rgb(12, 134, 103)',
                    padding: '5px 10px',
                  }}
                >
                  Hotel Name
                </td>
                <td
                  style={{
                    border: '1px solid rgb(12, 134, 103)',
                    padding: '5px 10px',
                  }}
                >
                  Address
                </td>
                <td
                  style={{
                    border: '1px solid rgb(12, 134, 103)',
                    padding: '5px 10px',
                  }}
                >
                  City
                </td>
                <td
                  style={{
                    border: '1px solid rgb(12, 134, 103)',
                    padding: '5px 10px',
                  }}
                >
                  Phone
                </td>
                <td
                  style={{
                    border: '1px solid rgb(12, 134, 103)',
                    padding: '5px 10px',
                  }}
                >
                  Email
                </td>
                <td
                  style={{
                    border: '1px solid rgb(12, 134, 103)',
                    padding: '5px 10px',
                  }}
                >
                  Website
                </td>
              </tr>
            </thead>
            <tbody>
              {/* {JSON.stringify(hotelList)} */}
              {hotelList.length === 0 ? (
                <span>Loading Rooms...</span>
              ) : (
                hotelList.map((item, index) => (
                  <tr>
                    {/* <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>{item.hotel_in}</td> */}
                    <td
                      style={{
                        border: '1px solid rgb(12, 134, 103)',
                        padding: '5px 10px',
                      }}
                    >
                      {item.hotel_name}
                    </td>
                    <td
                      style={{
                        border: '1px solid rgb(12, 134, 103)',
                        padding: '5px 10px',
                      }}
                    >
                      {item.address}
                    </td>
                    <td
                      style={{
                        border: '1px solid rgb(12, 134, 103)',
                        padding: '5px 10px',
                      }}
                    >
                      {item.city}
                    </td>
                    <td
                      style={{
                        border: '1px solid rgb(12, 134, 103)',
                        padding: '5px 10px',
                      }}
                    >
                      {item.phone}
                    </td>
                    <td
                      style={{
                        border: '1px solid rgb(12, 134, 103)',
                        padding: '5px 10px',
                      }}
                    >
                      {item.email}
                    </td>
                    <td
                      style={{
                        border: '1px solid rgb(12, 134, 103)',
                        padding: '5px 10px',
                      }}
                    >
                      {item.website}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </Row>
      </div>
    </Card>
  )
}
