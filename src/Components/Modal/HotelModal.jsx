import React, { useEffect, useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Col, Modal, Row, Table } from 'reactstrap'
import { _post } from '../../Utils/Helper'
import useQuery from '../../Utils/Helper'
// import { Floors } from './Floors'

export default function HotelReg() {
  const [modal, setModal] = useState(false)
  const query = useQuery()
  const hotel_name = query.get('hotel_name')
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
    let finalObj = {
      name: form.name,
      address: form.address,
      floors: selected,
    }
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
    <Card className="app_card dashboard_card shadow p-3 m-2 mt-2">
      <Col md={12}>
        <h5 className="app_title">Hotels List</h5>
        <hr />
      </Col>
      <Col md={12}>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 0 }}>
          <label className="label_title">Search</label>
          <div className="search">
            <CiSearch style={{ fontSize: 30 }} />
            <input
              className="app_input2"
              type="text"
              // placeholder="Search"
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
              <th
                style={{
                  border: '1px solid rgb(12, 134, 103)',
                  padding: '5px 10px',
                }}
              >
                Action
              </th>
              <th
                style={{
                  border: '1px solid rgb(12, 134, 103)',
                  padding: '5px 10px',
                }}
              >
                Hotel Name
              </th>
              <th
                style={{
                  border: '1px solid rgb(12, 134, 103)',
                  padding: '5px 10px',
                }}
              >
                Address
              </th>
              <th
                style={{
                  border: '1px solid rgb(12, 134, 103)',
                  padding: '5px 10px',
                }}
              >
                City
              </th>
              <th
                style={{
                  border: '1px solid rgb(12, 134, 103)',
                  padding: '5px 10px',
                }}
              >
                Phone
              </th>
              <th
                style={{
                  border: '1px solid rgb(12, 134, 103)',
                  padding: '5px 10px',
                }}
              >
                Email
              </th>
              <th
                style={{
                  border: '1px solid rgb(12, 134, 103)',
                  padding: '5px 10px',
                }}
              >
                Website
              </th>
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
                    <button
                      className="app_button"
                      onClick={toggle}
                    >
                      {' '}
                      Select
                    </button>
                  </td>
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
    </Card>
  )
}
