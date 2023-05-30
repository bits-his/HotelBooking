import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Input, Label, Row } from "reactstrap";
import { _get } from "../../Utils/Helper";

export default function Location1Modal({ handleChange = (f) => f, toggle2 }) {
  const navigate = useNavigate();
  const goto = useNavigate();
  const [data, setData] = useState([]);

  const getMeals_table = () => {
    _get(
      "api/get_locations?query_type=select_location",
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
      <Row>
        <Col md={12}>
          <button
            className="app_button p-2"
            style={{ width: 150 }}
            onClick={() => goto("/location")}
          >
            Add Location +
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
                Action
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Location
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
                    <Button
                      onClick={() => {
                        handleChange("pickup_to", i.location);
                        toggle2();
                      }}
                    >
                      {" "}
                      Select
                    </Button>
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "5px 10px" }}>
                    {i.location}
                  </td>
                </tbody>
              ))}
          </table>
        </Row>
      </div>
    </Card>
  );
}
