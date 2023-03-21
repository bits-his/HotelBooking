import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { Button, Card, Col, Row } from 'reactstrap'
import { _post } from '../../Utils/Helper';

export default function AgentModal({setForm=f=>f,toggle=f=>f}) {

    const [hotel,setHotel]=useState([])
    const getHotels = () => {
        _post( 
        'api/bank_account_details',
        {},
        (resp) => {
            // setLoading(false)
            console.log(resp)
            // if (resp ) {
            setHotel(resp.results)
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
    useEffect(
        ()=>{
        getHotels()
        },[0]
  )
  return (
    <Card className="app_card dashboard_card shadow p-3 m-2 mt-2">
      {/* {JSON.stringify(hotel)} */}
        <Col md= {12}>
            <h5 className="app_title">Agent List</h5> 
            <hr />
        </Col>
        <Col md={12}>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 0}}>
                <label className='label_title' >Search</label>
                <div className='search'>
                    <CiSearch style={{fontSize: 30}}/>
                    <input 
                        className='app_input2'
                        type='text'
                        placeholder='Search'
                        name='Search'
                        // value={}
                    />
                </div>
            </div>
        </Col>
        <Row>
          <table
            style={{ border: "1px solid #ccc", padding: 12 }}
            className="mt-5"
          >
            <thead>
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
                Agent Id
              </th>
              <th
                style={{
                  border: '1px solid rgb(12, 134, 103)',
                  padding: '5px 10px',
                }}
              >
                Name
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
                Country
              </th>
              <th
                style={{
                  border: '1px solid rgb(12, 134, 103)',
                  padding: '5px 10px',
                }}
              >
                State
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
                Zip
              </th>
            </thead>

            {hotel &&
              hotel.map((i) => (
                <tbody>
                  <td
                    style={{
                      border: '1px solid rgb(12, 134, 103)',
                      padding: '5px 10px',
                    }}
                  >
                    <button
                      className="app_button"
                      onClick={()=>{setForm((p)=>({...p,agent_name:i.agent_name}));toggle()}}
                      // onClick={toggle}
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
                    {i.agent_id}
                  </td>
                  <td
                    style={{
                      border: '1px solid rgb(12, 134, 103)',
                      padding: '5px 10px',
                    }}
                  >
                    {i.agent_name}
                  </td>
                  <td
                    style={{
                      border: '1px solid rgb(12, 134, 103)',
                      padding: '5px 10px',
                    }}
                  >
                    {i.phone}
                  </td>
                  <td
                    style={{
                      border: '1px solid rgb(12, 134, 103)',
                      padding: '5px 10px',
                    }}
                  >
                    {i.country}
                  </td>
                  <td
                    style={{
                      border: '1px solid rgb(12, 134, 103)',
                      padding: '5px 10px',
                    }}
                  >
                    {i.state}
                  </td>
                  <td
                    style={{
                      border: '1px solid rgb(12, 134, 103)',
                      padding: '5px 10px',
                    }}
                  >
                    {i.city}
                  </td>
                  <td
                    style={{
                      border: '1px solid rgb(12, 134, 103)',
                      padding: '5px 10px',
                    }}
                  >
                    {i.zipcode}
                  </td>{' '}
                </tbody>
              ))}
          </table>
        </Row>

    </Card>
  )
}