import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Input, Label, Row } from "reactstrap";
import { _get, _post } from "../Utils/Helper";

export default function ReservationDetails() {
  const goto = useNavigate();
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
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(hotel)} */}
      <Row>
        <Col md={12}>
          <button
            className="app_button p-3"
            // style={{ width: 200 }}
            onClick={() => goto("/new-reservation-details")}
          >
            Add Reservation Details
          </button>
        </Col>
      </Row>
      <div className=''>

        <Col md={12}>
          <div style={{display: 'flex', flexDirection: 'row', marginTop: 50}}>
                  {/* {JSON.stringify(data)} */}
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
            style={{ border: "1px solid #ccc", padding: '' }}
            className="mt-5"
          >
            <thead>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Hotel Name
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Room Type
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Veiw
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Check In
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Night
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Check Out
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Action
              </th>
            </thead>

            {hotel &&
              hotel.map((i) => (
                <tbody>
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
                    {i.no_pax}
                  </td>
                  <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                    {i.no_pax}
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
      </div>
    </Card>
  );
}

