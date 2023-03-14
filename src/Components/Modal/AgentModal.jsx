import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { Card, Col, Row } from 'reactstrap'
import { _post } from '../../Utils/Helper';
// import { _get, _post } from "../Utils/Helper";

export default function AgentModal() {
     const [data, setData] = useState([]);

    const [hotel,setHotel]=useState([])
    const getHotels = () => {
        _post( 
        'api/room_type?query_type=select',
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
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Action
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                IDD
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Agent Namex
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Country
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                City
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Email
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Account No.
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Telephone No
              </th>
              {/* <th style={{border: '1px solid #ccc', padding: "5px 10px"}}>City</th>
                      <th style={{border: '1px solid #ccc', padding: "5px 10px"}}>Zip</th> */}
            </thead>

            {hotel &&
              hotel.map((i) => (
                <tbody>
                  <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                    {i.room_name}
                  </td>
                  <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                    {i.room_name}
                  </td>
                  <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                    {i.room_name}
                  </td>
                  <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                    {i.room_name}
                  </td>
                  <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                    {i.room_name}
                  </td>
                  <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                    {i.room_type}
                  </td>
                  <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                    {i.no_pax}
                  </td>
                  <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                    <Button size="sm">Edit</Button>
                  </td>{" "}
                </tbody>
              ))}
          </table>
        </Row>

    </Card>
  )
}
