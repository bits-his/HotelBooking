import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Input, Label, Row } from "reactstrap";
import { _get, _post } from "../Utils/Helper";

export default function RouteTable() {
  const navigate = useNavigate();
  const goto = useNavigate();
  const [data, setData] = useState([]);

  const getMeals_table = () => {
    _get(
      "api/get_locations?query_type=select_route",
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
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(data)} */}
      <Row>
        <Col md={12}>
          <button
            className="app_button p-2"
            style={{ width: 150 }}
            onClick={() => goto("/route")}
          >
            Add New Route +
          </button>
        </Col>
      </Row>
      <div className="m-2">
        <Col md={12}>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 50 }}>
            {/* {JSON.stringify(data)} */}
            <label className="label_title">Search</label>
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
                Route
              </th>
              {/* <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>
                Action
              </th> */}
            </thead>
            {data &&
              data.map((i) => (
                <tbody>
                  <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                    {i.route}
                  </td>
                </tbody>
              ))}
          </table>
        </Row>
      </div>
    </Card>
  );
}
