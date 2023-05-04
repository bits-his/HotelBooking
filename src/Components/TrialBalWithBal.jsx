import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { RiFileExcel2Fill } from "react-icons/ri";


export default function TrialBalWithBal() {
  const [form, setForm] = useState({
    financial_year: "",
    date: "",
    date_from: '',
    sub_brnch: "",
    acc_n_frm: '',
    acc_n_t: '',
    acc_name_frm: '',
    acc_name_t: '',
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
        <Col md={12} style={{display: 'flex', flexDirection: 'row'}}>
          <center>
            <h5 className="app_title" style={{ fontSize: 23,marginTop: 20 }}>
              Trial Balance With Balance
            </h5>
          </center>
          <Col md={3}></Col>
          <Col md={6} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 'auto'}}>
            <Col style={{marginRight: 10, marginLeft: 54}}>
                <label className="Label mt-2">Financial Year</label>
                <select
                    id="exampleSelect"
                    className="app_input"
                    name="financial_year"
                    type="select"
                    onClick={handleChange}
                    value={form.financial_year}
                >
                    <option>2023 </option>
                </select>
            </Col>
            <Col>
                <label className="Label mt-2">Sub Branch</label>
                <select
                    id="exampleSelect"
                    className="app_input"
                    name="sub_brnch"
                    type="select"
                    onClick={handleChange}
                    value={form.sub_brnch}
                >
                    <option>Select </option>
                </select>
            </Col>
          </Col>
        </Col>
      </Row>
      <div style={{width: '100%', border: '1px solid #cccccc', marginTop: 20, marginBottom: 20}}></div>
      <Row>
        <Col md={6}>
            <Col md={12}>
                <InputForm
                    className="app_input"
                    label="Date from"
                    value={form.date_from}
                    onChange={handleChange}
                    name="date_from"
                    type="date"
                />
            </Col>
            <Col md={12}>
                <label className="Label mt-2">Account Number From</label>
                <div className="search_input_form">
                    <input
                    id="exampleSelect"
                    className="app_input3"
                    value={form.acc_n_frm}
                    onClick={handleChange}
                    name="acc_n_frm"
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
            <Col md={12}>
                <label className="Label mt-2">Account Number To</label>
                <div className="search_input_form">
                    <input
                    id="exampleSelect"
                    className="app_input3"
                    value={form.acc_n_t}
                    onClick={handleChange}
                    name="acc_n_t"
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
        </Col>
        <Col md={6}>
            <Col md={12}>
                <InputForm
                    className="app_input"
                    label="Date To"
                    value={form.date}
                    onChange={handleChange}
                    name="date"
                    type="date"
                />
            </Col>
            <Col md={12}>
                <InputForm
                    className="app_input"
                    label="Account Name From"
                    value={form.acc_name_frm}
                    onChange={handleChange}
                    name="acc_name_frm"
                    type="number"
                />
            </Col>
            <Col md={12}>
                <InputForm
                    className="app_input"
                    label="Account Name To"
                    value={form.acc_name_t}
                    onChange={handleChange}
                    name="acc_name_t"
                    type="number"
                />
            </Col>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
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
                      textAlign: 'center'
                    }}
                    rowspan="2"
                  >
                    Account Number
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                      textAlign: 'center'
                    }}
                    rowspan="2"
                  >
                    Account Name
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                      textAlign: 'center'
                    }}
                    rowspan="2"
                  >
                    ...
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                      textAlign: 'center'
                    }}
                    colspan="2"
                  >
                    Balance
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                      textAlign: 'center'
                    }}
                    colspan="2"
                  >
                    Action
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