import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Button, Card, Col, Modal, Row, Table } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { RiFileExcel2Fill } from "react-icons/ri";


export default function JournalReportByDate() {
  const [form, setForm] = useState({
    journal_no: "",
    date: "",
    date_from: '',
    reservation_no: "",
  });
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      <Row>
        <Col md={12}>
          <center>
            <h5 className="app_title" style={{ fontSize: 23 }}>
              Journal Report by Date
            </h5>
            <hr />
          </center>
        </Col>
      </Row>
      <Row>
        <Col >
          <InputForm
            className="app_input"
            label="Journal Number"
            value={form.journal_no}
            onChange={handleChange}
            name="journal_no"
            type="number"
          />
        </Col>
        <Col >
          <label className="Label mt-2">Reservation Number</label>
          <div className="search_input_form">
            <input
              id="exampleSelect"
              className="app_input3"
              value={form.reservation_no}
              onClick={handleChange}
              name="reservation_no"
              type="number"
            />
            <CiSearch
              className="search_icon"
              // onClick={toggle}
            />
            {/* <Modal isOpen={modal} toggle={toggle}size="xl" >
                        <HotelReg/>
                    </Modal> */}
          </div>
        </Col>
        <Col >
          <InputForm
            className="app_input"
            label="Date from"
            value={form.date_from}
            onChange={handleChange}
            name="date_from"
            type="date"
          />
        </Col>
        <Col >
          <InputForm
            className="app_input"
            label="Date To"
            value={form.date}
            onChange={handleChange}
            name="date"
            type="date"
          />
        </Col>
        <Col md={4}>
          <label className="Label mt-2">Filter Type</label>
          <select
            id="exampleSelect"
            className="app_input"
            name="filter_type"
            type="select"
            onClick={handleChange}
            value={form.filter_type}
          >
            <option>Select </option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div style={{ display: "flex", gap: 15 }}>
            <button
              className="app_button p-2 mt-3 "
              style={{ width: 170, fontSize: 16, fontWeight: 500 }}
              // onClick={() => navigate('/table-meal')}
            >
              View Record
            </button>
            <button
              className="app_button p-2 mt-3 "
              style={{ width: 170, fontSize: 16, fontWeight: 500 }}
              // onClick={() => navigate('/table-meal')}
            >
              Reset
            </button>
            <button
              className="app_button p-2 mt-3 "
              style={{ width: 170, fontSize: 16, fontWeight: 500 }}
              // onClick={() => navigate('/table-meal')}
            >
              Print
            </button>
          </div>
        </Col>
      </Row>
      <div className="m-2">
        <Col md={6}>
          <div style={{ display: "flex", gap: 15 }}>
            <button
              className="app_button p-2 mt-3 "
              style={{ width: 170, fontSize: 16, fontWeight: 500 }}
              // onClick={() => navigate('/table-meal')}
            >
              {/* <CSVLink
                data={news ? news : []}
                style={{
                    color: "#fff",
                    textDecoration: 'none'
                }}
                className="csv_link"
                filename={"Hotel Comfirma"}
              > */}
                <RiFileExcel2Fill /> Exel DownLoad
              {/* </CSVLink> */}
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
                    textDecoration: 'none'
                }}
                className="csv_link"
                filename={"Hotel Comfirma"}
              > */}
                <RiFileExcel2Fill /> CSV DownLoad
              {/* </CSVLink> */}
            </button>
          </div>
        </Col>
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
          <div className="table_overflow">
            <table
              style={{
                border: "1px solid #ccc",
                padding: 10,
                width: "100%",
                overflowX: "scroll",
              }}
              className="mt-5 mb-2"
            >
              <thead>
                <tr>
                  {/* <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Hotel In</td> */}
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Date
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Journal No
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Account Number
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Account Name
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Invoice Type
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Doc No
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Debit 
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Credit
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Describtion
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Cost Center
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Sub Cost Center
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Reservation No
                  </td>
                </tr>
              </thead>
              {/* <tbody>
                    {JSON.stringify(hotelList)}
                    {hotelList.length === 0 ? (
                        <span>Loading Rooms...</span>
                    ) : (
                        hotelList.map((item, index) => (
                        <tr>
                            <td
                            style={{
                                border: '1px solid rgb(12, 134, 103)',
                                padding: '5px 10px',
                            }}
                            >
                            <Button onClick={()=>{setForms((p)=>({...p,hotel:item.hotel_name})),toggles()}}>select</Button>
                            </td>
                            <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>{item.hotel_in}</td>
                            <td
                            style={{
                                border: '1px solid rgb(12, 134, 103)',
                                padding: '5px 10px',
                            }}
                            >
                            {item.hotel_name}
                            </td>
                            <td
                            style={{
                                border: '1px solid rgb(12, 134, 103)',
                                padding: '5px 10px',
                            }}
                            >
                            {item.address}
                            </td>
                            <td
                            style={{
                                border: '1px solid rgb(12, 134, 103)',
                                padding: '5px 10px',
                            }}
                            >
                            {item.city}
                            </td>
                            <td
                            style={{
                                border: '1px solid rgb(12, 134, 103)',
                                padding: '5px 10px',
                            }}
                            >
                            {item.phone}
                            </td>
                            <td
                            style={{
                                border: '1px solid rgb(12, 134, 103)',
                                padding: '5px 10px',
                            }}
                            >
                            {item.email}
                            </td>
                            <td
                            style={{
                                border: '1px solid rgb(12, 134, 103)',
                                padding: '5px 10px',
                            }}
                            >
                            {item.website}
                            </td>
                        </tr>
                        ))
                    )}
                    </tbody> */}
            </table>
          </div>
        </Row>
      </div>
    </Card>
  );
}