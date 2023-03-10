import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Input, Label, Row } from "reactstrap";
import { _get, _post } from "../Utils/Helper";

export default function Meal() {
  const navigate = useNavigate()
  const goto = useNavigate();
  const [data, setData] = useState([]);

  const getMeals_table = () => {
    _get(
      "api/meals_tables",
      (res) => {
          navigate(-1)
        console.log(res);
        setData(res.results[0]);
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
  }, [getMeals_table]);

  return (
<<<<<<< HEAD
    <Card className="app_card dashboard_card shadow p-3 m-3">
        <Row>
            <Col md= {12}>
                <button
                    className="app_button p-3"
                    style={{ width: 150}}
                    onClick={() => goto('/create-meal')}
                    >
                   Add Meal +
                </button>
            </Col>
        </Row>
        <div className='card_div'>

          <Col md={12}>
              <div style={{display: 'flex', flexDirection: 'row', marginTop: 50}}>
                  {/* {JSON.stringify(data)} */}
                  <label style={{fontSize: 20, display: 'flex', marginRight: 20, width: '100%'}}>Search
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
                  </label>
              </div>
          </Col>
          <Row>
              <table style={{border: '1px solid rgb(12, 134, 103)', padding: 12}} className= 'mt-5'>
                  <thead>
                      {/* <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Meal Id</th> */}
                      <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Meal Name</th>
                      <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Meal Type</th>
                      {/* <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Number of Pax</th> */}
                      <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Action</th>
                      {/* <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>City</th>
                      <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Zip</th> */}
                  </thead>
                
                      {data&&data.map((i)=>  <tbody>
                          {/* <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>{i.agent_id}</td> */}
                          <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>{i.agent_name}</td>
                          <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>{i.phone}</td>
                          {/* <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>{i.country}</td> */}
                          <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Action</td>
                          {/* <td style={{border: '1px solid rgb(12, 134, 103)'}}>{i.city}</td>
                          <td style={{border: '1px solid rgb(12, 134, 103)'}}>{i.zipcode}</td>*/} </tbody> 
                      )}
                    
                
              </table>
          </Row>
        </div>
=======
    <Card className="app_card dashboard_card shadow p-4 m-3">
      {/* {JSON.stringify(data)} */}
      <Row>
        <Col md={12}>
          <button
            className="app_button p-3"
            style={{ width: 150 }}
            onClick={() => goto("/create-meal")}
          >
            Add Meal +
          </button>
        </Col>
      </Row>
      <Col md={12}>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 50 }}>
          {/* {JSON.stringify(data)} */}
          <label
            style={{
              fontSize: 20,
              display: "flex",
              marginRight: 20,
              width: "100%",
            }}
          >
            Search
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
          </label>
        </div>
      </Col>
      <Row>
        <table
          style={{ border: "1px solid #ccc", padding: 12 }}
          className="mt-5"
        >
          <thead>
            <th style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
              Meal Name
            </th>
            <th style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
              Meal Type
            </th>
            <th style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
              Action
            </th>
          </thead>
>>>>>>> 81a13d2acaa687baaa38aab3f7a7ae8a2a5086bf

          {data &&
            data.map((i) => (
              <tbody>
                <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                  {i.meal_name}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                  {i.meal_type}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                  <Button size="sm">Edit</Button>
                </td>{" "}
              </tbody>
            ))}
        </table>
      </Row>
    </Card>
  );
}
