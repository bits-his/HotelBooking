import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Card, Col, Input, Label, Row } from "reactstrap";
import { _post } from "../Utils/Helper";

export default function CreacteNewRoom() {
  const goto = useNavigate();
  const [data, setData] = useState([]);

  const getAgent = () => {
    _post(
      "api/bank_account_details",
      {},
      (res) => {
        //   navigate(`/agent`)
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
    getAgent();
  }, []);

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      <Row>
        <Col md={12}>
          <button
            className="app_button p-2"
            style={{ width: 200 }}
            onClick={() => goto("/creact-new-room")}
          >
            Create New Room
          </button>
        </Col>
      </Row>
      <div className="card_div">
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
            style={{ border: "1px solid rgb(12, 134, 103)", padding: 12 }}
            className="mt-5"
          >
            <thead>
              {/* <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Agent Id</th> */}
              {/* <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Hotel Id</th> */}
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Room Id
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Room
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Floor
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Room Type
              </th>
            </thead>

            {data &&
              data.map((i) => (
                <tbody>
                  {/* <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>{i.agent_id}</td> */}
                  {/* <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>{i.agent_name}</td> */}
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.phone}
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
                    {i.state}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.city}
                  </td>
                </tbody>
              ))}
          </table>
        </Row>
      </div>
    </Card>
  );
}
