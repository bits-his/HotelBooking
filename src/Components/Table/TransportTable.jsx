import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Input, Label, Row } from "reactstrap";
import { _get } from "../../Utils/Helper";
// import { _get, _post } from "../Utils/Helper";

export default function TransportTable() {
  const goto = useNavigate();
  const [datas, setDatas] = useState([]);

  const getMeals_table = () => {
    _get(
      "api/get_new_reservation_new?query_type=select_transport_booking",
      (res) => {
        console.log(res);
        if (res.results.length) {
          setDatas(res.results);
        }
      },
      (err) => {
        setLoading(false);
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
            style={{ width: 250 }}
            onClick={() => goto("/create-transport-reservation")}
          >
            Add Transport Reservation +
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
          <div style={{ overflowX: "auto", marginTop: 50 }}>
            <table id="customers" className="mt-5">
              <thead>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Route
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Mov type
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Pickup From
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Pickup To
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Adult
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  child
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Pickup Date
                </th>
                {/* <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Transport Company
                </th> */}
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Transport Type
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Qty
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Sale Rate
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Total
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Discount
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Vat %
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Vat Amount
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Net Total
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Purch Rate
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Vat %
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Vat Cost %
                </th>{" "}
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Flight
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Flight No
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  City
                </th>{" "}
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Arrive Or Dep Time
                </th>{" "}
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Remark
                </th>
                <th
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Status
                </th>
              </thead>
              {/* {JSON.stringify(data)} */}
              <tbody>
                {datas &&
                  datas?.map((data) => (
                    <tr>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.route}
                          name="route"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.mov_type}
                          name="mov_type"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.pickup_from}
                          name="pickup_from"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.pickup_to}
                          name="pickup_to"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.adult}
                          name="adult"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.child}
                          name="child"
                        />
                      </td>{" "}
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.pickup_date}
                          name="pickup_date"
                        />
                      </td>
                      {/* <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  <input
                    className="table_input"
                    value={data.BRN_transport}
                    name="BRN_transport"
                  />
                </td> */}
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.transport_type}
                          name="transport_type"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.qty}
                          name="qty"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.sale_rate}
                          name="sale_rate"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.total}
                          name="total"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.discount}
                          name="discount"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.vat}
                          name="vat"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.vat_amount}
                          name="vat_amount"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.net_total}
                          name="net_total"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.purch_rate}
                          name="purch_rate"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.vat_amount}
                          name="vat1"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.vat_cost}
                          name="vat_cost"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.flight}
                          name="flight"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.flight_no}
                          name="flight_no"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.city}
                          name="city"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.arrive_or_dep_time}
                          name="arrive_or_dep_time"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <input
                          className="table_input"
                          value={data.remark}
                          name="remark"
                        />
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {data.status}
                      </td>
                      {/* <td
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
                                `/create-country?country_name=$&id=${data.id}`
                              )
                            }
                        >
                          Edit
                        </Button>
                      </center>
                    </td>{" "} */}
                    </tr>
                  ))}
              </tbody>
              {/* ))} */}
            </table>
          </div>
        </Row>
      </div>
    </Card>
  );
}
