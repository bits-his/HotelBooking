import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Input, Label, Row } from "reactstrap";
import { _get, _post } from "../Utils/Helper";

export default function Allotment() {
  const goto = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    _post('api/allotment', { query_type: 'select' }, (resp) => {
        setData(resp.results)
    }),
      (err) => {
        console.log(err)
      }
  }, [])

//     useEffect(() => {
//     _post(
//       "api/allotment",
//       (res) => {
//         //   navigate(`/agent`)
//         console.log(res);
//         setData(res.results[0]);
//       },
//       (err) => {
//         // setLoading(false)
//         console.log(err);
//       }
//     );
//   }, [0]);

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(data)} */}
      <Row>
        <Col md={12}>
          <button
            className="app_button p-3"
            style={{ width: 150 }}
            onClick={() => goto("/create-allotment")}
          >
            Add Allotement
          </button>
        </Col>
      </Row>
      <div className='card_div'>
        <Col md={12}>
          <div style={{display: 'flex', flexDirection: 'row', marginTop: 50}}>
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
                Id Number
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Hotel Name
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Allotment Type
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Supplier Name
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Reference ID
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Local Contact Details
              </th>
              <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Action
              </th>
            </thead>

          {data &&
              data.map((i) => (
              <tbody>
                <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                  {i.id_no}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                  {i.hotel_name}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                  {i.allotment_type}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                  {i.supplier_name}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                  {i.reference_id}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                  {i.details}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                  <Button size="sm" onClick={()=>goto(`/create-meal/${i.id}`)}>Edit</Button>
                </td>{" "}
              </tbody>
            ))}
        </table>
      </Row>
    </div>
    </Card>
  );
}