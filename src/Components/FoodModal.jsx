import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { Button, Card, Col, Row } from 'reactstrap'
import { _post } from '../Utils/Helper';


export default function FoodModal({setForm=f=>f,toggle=f=>f,}) {

    const [data, setData] = useState([]);

    const getMeals_table = () => {
      _post(
        "api/food-supply?query_type=select",
        {},
        (res) => {
            // navigate(-1)
          console.log(res);
          setData(res.results);
        },
        (err) => {
          // setLoading(false)
          console.log(err);
        }
      );
      // console.log(form)
    };
  
    useEffect(() => {
      getMeals_table();
    }, []);
  return (
    <Card className="app_card dashboard_card shadow p-3 m-2 mt-2">
      {/* {JSON.stringify(hotel)} */}
      {/* {JSON.stringify(names)} */}
        <Col md= {12}>
            <h5 className="app_title">Food Supliers</h5> 
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
              Company Name
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
            Company Address
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
            Company Website
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
            Company Phone
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
            Company Email
              </th>
             
            </thead>

          {data &&
            data.map((i) => (
              <tbody>
                  <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                  <button className="app_button" size="sm" onClick={()=>{setForm((p)=>({...p,supplier1:i.company_name}));toggle()}}>Select</button>
                </td>
                <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                  {i.company_name}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                  {i.company_address}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                  {i.company_website}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                  {i.company_phone}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                  {i.company_email}
                </td>
              
              </tbody>
            ))}
        </table>
        </Row>

    </Card>
  )
}