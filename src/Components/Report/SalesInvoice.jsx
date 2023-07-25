import React, { useEffect, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Modal, Row, Table } from "reactstrap";
import { _get, _post } from "../../Utils/Helper";
import InputForm from "../../CustomComponents/InputForm";
// import { _get, _post } from '../Utils/Helper'
// import { Floors } from './Floors'
// import { RiFileExcel2Fill } from "react-icons/ri";
// import { CSVLink } from "react-csv";

export default function SalesInvoice() {
  const [form, setForm] = useState({
    date_frm: "",
    date_to: "",
    hotel: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const [hotelList, setHotelList] = useState([]);
  const [sells_invoice_pending_post, setSells_invoice_pending_post] = useState(
    []
  );

  const get_sells_invoice_pending_post = () => {
    _get(
      "api/get_sells_invoice_pending_post?query_type=select",
      (res) => {
        // navigate(-1)
        console.log(res);
        setSells_invoice_pending_post(res.results);
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
    // console.log(form)
  };

  useEffect(() => {
    // setLoading(true)
    get_sells_invoice_pending_post();
  }, []);

  // let news = data[0];

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(sells_invoice_pending_post)} */}
      <Row>
        <Col md={12}>
          <center>
            <h5 className="app_title" style={{ fontSize: 23 }}>
              Sells Invoice Pending to Post
            </h5>
            <hr />
          </center>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <InputForm
            className="app_input"
            label="Date From"
            value={form.date_frm}
            onChange={handleChange}
            name="date_frm"
            type="date"
          />
        </Col>
        <Col md={4}>
          <InputForm
            className="app_input"
            label="Date To"
            value={form.date_to}
            onChange={handleChange}
            name="date_to"
            type="date"
          />
        </Col>
        <Col md={4}>
          <label className="Label mt-2">Filter Type</label>
          <select
            id="exampleSelect"
            className="app_input"
            name="hotel"
            type="select"
            onClick={handleChange}
            value={form.hotel}
          >
            <option>Select </option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <div style={{ display: "flex", gap: 15 }}>
            <button
              className="app_button p-2 mt-3 "
              style={{ width: 150, fontSize: 16, fontWeight: 500 }}
              // onClick={() => navigate('/table-meal')}
            >
              Refresh
            </button>
            <button
              className="app_button p-2 mt-3 "
              style={{ width: 170, fontSize: 16, fontWeight: 500 }}
              // onClick={() => navigate('/table-meal')}
            >
              {/* <CSVLink
                data={news ? news : []}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
                className="csv_link"
                filename={"Sells Invoice"}
              >
                <RiFileExcel2Fill /> Exel DownLoad
              </CSVLink> */}
            </button>
          </div>
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
                // placeholder="Search"
                name="Search"
                // value={}
              />
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
                  {/* <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Hotel In</td> */}
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Post
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Delete
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Reserve Id
                  </th>
                  {/* <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    #
                  </th> */}
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Comfirm Date
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
                    CI.RefNo
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
                    Total
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Debit
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Credit
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Balance
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Create Date
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Cr.User
                  </th>
                </tr>
              </thead>
              {/* {JSON.stringify(hotelList)} */}
              <tbody>
                {sells_invoice_pending_post.length === 0 ? (
                  <span>Loading Rooms...</span>
                ) : (
                  sells_invoice_pending_post.map((item, index) => (
                    <tr>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <Button
                          onClick={() => {
                            setForms((p) => ({ ...p, hotel: item.hotel_name })),
                              toggles();
                          }}
                        >
                          Post   
                        </Button>
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.hotel_in}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.reservation_id}
                      </td>
                      {/* <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.address}
                      </td> */}
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.city}
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
                        {item.ref_no}
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
                        {item.total}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.a}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.a}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.a}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.a}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.a}
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
