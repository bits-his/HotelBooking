import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Input, Label, Row } from "reactstrap";
// import { _get, _post } from "../Utils/Helper";

export default function TransportTable() {
  const goto = useNavigate();
//   const [data, setData] = useState([]);

//   const getMeals_table = () => {
//     _get(
//       "api/meals_tables",
//       (res) => {
//         console.log(res);
//         setData(res.results[0]);
//       },
//       (err) => {
//         setLoading(false)
//         console.log(err);
//       }
//     );
//     console.log(form)
//   };

//   useEffect(() => {
//     getMeals_table();
//   }, []);

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(data)} */}
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
        <div style={{ overflowX: "auto", marginTop: 50 }}>
          <table id="customers" className="mt-5">
            <thead>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Router
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
                Adult child
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Pickup Date
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Transport Company
              </th>
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
            </thead>
            {/* {JSON.stringify(data)} */}
            {/* {data &&
              data?.map((i) => (
                <tbody>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    <input
                      className="table_input"
                      value={i.route}
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
                      value={i.mov_type}
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
                      value={i.pickup_from}
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
                      value={i.pickup_to}
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
                      value={i.aduil_child}
                      name="aduil_child"
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
                      value={i.pickup_date}
                      name="pickup_date"
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
                      value={i.transport_company}
                      name="transport_company"
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
                      value={i.transport_type}
                      name="transport_type"
                    />
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    <input className="table_input" value={i.qty} name="qty" />
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    <input
                      className="table_input"
                      value={i.sale_rote}
                      name="sale_rote"
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
                      value={i.total}
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
                      value={i.discount}
                      name="discount"
                    />
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    <input className="table_input" value={i.vat} name="vat" />
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    <input
                      className="table_input"
                      value={i.vat_amount}
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
                      value={i.net_total}
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
                      value={i.purch_rate}
                      name="purch_rate"
                    />
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    <input className="table_input" value={i.vat1} name="vat1" />
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    <input
                      className="table_input"
                      value={i.vat_cost}
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
                      value={i.flight}
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
                      value={i.flight_no}
                      name="flight_no"
                    />
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    <input className="table_input" value={i.city} name="city" />
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    <input
                      className="table_input"
                      value={i.arrive_or_dep_time}
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
                      value={i.remark}
                      name="remark"
                    />
                  </td> */}
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
                                `/create-country?country_name=$&id=${i.id}`
                              )
                            }
                        >
                          Edit
                        </Button>
                      </center>
                    </td>{" "} */}
                {/* </tbody> */}
              {/* ))} */}
          </table>
        </div>
      </Row>
    </div>
    </Card>
  );
}