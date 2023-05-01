import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Input, Label, Row } from "reactstrap";
import { _get, _post } from "../Utils/Helper";

export default function View() {
  const goto = useNavigate();
  const [data, setData] = useState([]);

  const getViews = () => {
    _get(
      "api/get_views",
      (res) => {
        //   navigate(`/agent`)
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
    getViews();
  }, []);

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(data)} */}
      <Row>
        <Col md={12}>
          <button
            className="app_button p-3"
            style={{ width: 150 }}
            onClick={() => goto("/create-view")}
          >
            Add View +
          </button>
        </Col>
      </Row>
      <div className="m-2">
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
                View Name
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                View Type
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Action
              </th>
            </thead>

            {data &&
              data.map((i) => (
                <tbody>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.view_name}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.view_type}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    <center>
                      <button
                        size="sm"
                        className="app_button"
                        style={{ borderRadius: 5 }}
                      >
                        Edit
                      </button>
                    </center>
                  </td>
                </tbody>
              ))}
          </table>
        </Row>
      </div>
    </Card>
  );
}
