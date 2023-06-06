import React, { useEffect, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Modal, Row, Table } from "reactstrap";
import { _get, _post } from "../../Utils/Helper";
import InputForm from "../../CustomComponents/InputForm";
// import { _get, _post } from '../Utils/Helper'
// import { Floors } from './Floors'
import { RiFileExcel2Fill } from "react-icons/ri";

export default function RoomPurchasePaymentComfirmationPending() {
  const [form, setForm] = useState({
    check_in: "",
    check_out: "",
    hotel: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  // const [hotelList, setHotelList] = useState([]);
  const [transport, setTransport] = useState([]);

  const getRoom_purchase_pending = () => {
    _post(
      "api/room_purchase_active?query_type=select",
      {},
      (resp) => {
        if (resp.success) setTransport(resp.results);
      },
      (e) => {
        console.log(e);
      }
    );
  };

  useEffect(() => {
    getRoom_purchase_pending();
  }, []);

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      <Row>
        {JSON.stringify(transport)}
        <Col md={12}>
          <center>
            <h5 className="app_title" style={{ fontSize: 23 }}>
              Room Purchase Comfirmation Payment Pending
            </h5>
            <hr />
          </center>
        </Col>
      </Row>
      <div className="m-2">
        <Col md={12}>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 50 }}>
            <label className="label_title">Search</label>
            <div className="search">
              <CiSearch style={{ fontSize: 30 }} />
              <input className="app_input2" type="text" name="Search" />
            </div>
          </div>
        </Col>
        <Row>
          <div className="table_overflow">
            <table
              style={{
                border: "1px solid #ccc",
                padding: 10,
                width: "3000px",
                overflowX: "scroll",
              }}
              className="mt-5 mb-2"
            >
              <thead>
                <tr>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    rv Id
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Quest Name
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Agent Name
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Hotel Name
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Room Type
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Opt.Date
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Check In
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Check Out
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Night
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
                    Sales Rate
                  </th>
                  {/* <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Total
                  </th> */}
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Purch Rate
                  </th>
                  {/* <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Total.Purch
                  </th> */}
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Pay To
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Amount Payable
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Sup.AccNo
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Ref No
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {JSON.stringify(transport)} */}
                {transport.length === 0 ? (
                  <span>Loading Rooms...</span>
                ) : (
                  transport.map((item, index) => (
                    <tr>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {index + 1}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.agent_name}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.guest_name}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.hotel}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.room_type}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.option_date}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.check_in}
                      </td>
                      <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      {item.check_out}
                    </td>
                       <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      {item.night}
                    </td> 
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      {item.qty}
                    </td> 
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.total_room_sale_rate}
                      </td>
                      {/* <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.total}
                      </td> */}
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.room_sale_purch_vat}
                      </td>
                      {/* <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.pay_to}
                      </td> */}
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.amount_payable}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.supplier_account_no}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.ref_no}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.ref_no}
                      </td>
                    </tr>
                    
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Row>
      </div>
    </Card>
  );
}
