import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Input, Label, Row } from "reactstrap";
import { _get, _post } from "../Utils/Helper";

export default function Country() {
  const goto = useNavigate();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    _get(
      "api/get_countries",
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
  }, [0]);

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      <Row>
        <Col md={12}>
          <button
            className="app_button p-3"
            onClick={() => goto("/create-country")}
          >
            Add Country +
          </button>
        </Col>
      </Row>
      <div className="card_div">
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
          {/* {JSON.stringify(data)} */}
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
                Country Name
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Nationality
              </th>
              {/* <th style={{border: '1px solid #ccc', padding: "5px 10px"}}>Number of Pax</th> */}
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Action
              </th>
              {/* <th style={{border: '1px solid #ccc', padding: "5px 10px"}}>City</th>
                      <th style={{border: '1px solid #ccc', padding: "5px 10px"}}>Zip</th> */}
            </thead>

            {data &&
              data?.map((i) => (
                <tbody>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.country_name}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.nationality}
                  </td>
                  {/* <td style={{border: '1px solid #ccc', padding: "5px 10px"}}>{i.country}</td> */}
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    <center>
                      <Button
                        size="sm"
                        onClick={() =>
                          navigate(
                            `/create-country?country_name=${i.country_name}&id=${i.id}`
                          )
                        }
                      >
                        Edit
                      </Button>
                    </center>
                  </td>{" "}
                </tbody>
              ))}
          </table>
        </Row>
      </div>
    </Card>
  );
}
