import React, { useEffect, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Modal, Row, Table } from "reactstrap";
import { _post } from "../../Utils/Helper";
import InputForm from "../../CustomComponents/InputForm";
// import { _get, _post } from '../Utils/Helper'
// import { Floors } from './Floors'
import { RiFileExcel2Fill } from "react-icons/ri";
import { CSVLink } from "react-csv";

export default function TransportPAyment() {
  const [form, setForm] = useState({
    date_f: "",
    date_t: "",
    tran_company: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  
  const [data, setData] = useState([]);

  const [transport, setTransport] = useState([]);

  const getTransport = () => {
    _post(
      "api/getTransport?query_type=pending",
      {},
      (resp) => {
        console.log(resp);
        setTransport(resp.results);
      },
      (e) => {
        console.log(e);
      }
    );
  };

  useEffect(() => {
    // setLoading(true)
    getTransport();
  }, []);

  let news = data[0];

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(transport)} */}
      <Row>
        <Col md={12}>
          <center>
            <h5 className="app_title" style={{ fontSize: 23 }}>
              Transportation Payment Pending
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
            value={form.date_f}
            onChange={handleChange}
            name="date_f"
            type="date"
          />
        </Col>
        <Col md={4}>
          <InputForm
            className="app_input"
            label="Date To"
            value={form.date_t}
            onChange={handleChange}
            name="date_t"
            type="date"
          />
        </Col>
        <Col md={4}>
          <label className="Label mt-2">Tranport Company</label>
          <div className="search_input_form">
            <input
              id="exampleSelect"
              className="app_input3"
              value={form.tran_company}
              onClick={handleChange}
              name="tran_company"
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
      </Row>
      <Row>
        <Col md={4}>
          <div style={{ display: "flex", gap: 15 }}>
            <button
              className="app_button p-2 mt-3 "
              style={{ width: 150, fontSize: 16, fontWeight: 500 }}
              // onClick={() => navigate('/table-meal')}
            >
              View Record
            </button>
            <button
              className="app_button p-2 mt-3 "
              style={{ width: 170, fontSize: 16, fontWeight: 500 }}
              // onClick={() => navigate('/table-meal')}
            >
              <CSVLink
                data={news ? news : []}
                style={{
                    color: "#fff",
                    textDecoration: 'none'
                }}
                className="csv_link"
                filename={"Transportation Payment "}
              >
                <RiFileExcel2Fill /> Exel DownLoad
              </CSVLink>
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
              <tr>
                {/* <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Hotel In</td> */}
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Reserve id
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Quest Name
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Agent Name
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Transport Company
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Acc No.
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Date From
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Date To
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
                  Balance
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Vat
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Total
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  Net Total
                </td>
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
                      {item.hotel_in}
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      {item.hotel_name}
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      {item.transport_company}
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      {item.transport_company}
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      {item.pickup_date}
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      {item.arrive_or_dep_time}
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      {item.vat_amount}
                    </td>
                    <td
                      style={{
                        border: "1px solid rgb(12, 134, 103)",
                        padding: "5px 10px",
                      }}
                    >
                      {item.vat_cost}
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
                      {item.vat}
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
                      {item.net_total}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </Row>
      </div>
    </Card>
  );
}
