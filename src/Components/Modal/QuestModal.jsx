import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { Card, Col, Row } from 'reactstrap'
import { _get } from '../../Utils/Helper';

export default function QuestModal() {
     const [data, setData] = useState([]);

  const getCustomer = () => {
    _get(
      "api/get_customer",
      // {},
      (res) => {
        //   navigate(`/agent`)
        console.log(res);
        setData(res.resp[0]);
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
    // console.log(form)
  };

  useEffect(() => {
    getCustomer();
  }, []);
  return (
    <Card className="app_card dashboard_card shadow p-3 m-2 mt-2">
        <Col md= {12}>
            <h5 className="app_title">Quest List</h5> 
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
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Action
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Hotel
                  </th>
              {/* <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Agent Id</th> */}
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Costomer Name
              </th>

                      <th
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                    Country
                      </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                 Room No.
                  </th>

              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Room View
              </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
               Room Type
                  </th>
                  <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
           Meal
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
            Arrival Date
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
            Depart Date
              
              </th>
            </thead>

            {data &&
              data.map((i) => (
                <tbody>
                  <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                      <Button 
                        // onClick={}
                      > Select</Button>
                  </td>
                  <td 
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.hotel}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.customer_name}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.country}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.room_no}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.room_view}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.room_type}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.meal}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.arrival_date}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.departure_date}
                  </td>
                  {
                  " "}
                </tbody>
              ))}
          </table>
        </Row>

    </Card>
  )
}
