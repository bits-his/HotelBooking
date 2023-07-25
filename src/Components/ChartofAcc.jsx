import React, { useEffect, useState } from "react";
import { Card, Col, Modal, Row } from "reactstrap";
import { RiFileExcel2Fill } from "react-icons/ri";
import InputForm from "../CustomComponents/InputForm";
import AddMasterAcc from "./Modal/AddMasterAcc";
import AddSubAcc from "./Modal/AddSubAcc";
import { _get, _post } from "../Utils/Helper";

export default function ChartofAcc() {
  const [form, setForm] = useState({
    category: "",
    search: "",
  });
  
  const [data, setData] = useState([]);
  const getAgent = () => {
    _get(
      "api/get_add_master_account?query_type=select",
      (res) => {
        console.log(res);
        if (res.results.length) {
          setData(res.results);
          navigate(-1);
        }
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
    console.log(form)
  };

  useEffect(() => {
    getAgent();
  }, []);

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const toggle = () => setModal(!modal);
  const toggle2 = () => setModal2(!modal2);

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(data)} */}
      <Row>
        <Col md={12}>
          <center>
            <h5 className="app_title" style={{ fontSize: 23 }}>
              Chart of Account
            </h5>
            <hr />
          </center>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <label className="Label mt-2">Category</label>
          <select
            className="app_input"
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option>All</option>
          </select>
        </Col>
        <Col md={4}>
          <InputForm
            className="app_input"
            label="Search"
            value={form.search}
            onChange={handleChange}
            name="search"
          />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <div style={{ display: "flex", gap: 15 }}>
            <button
              className="app_button p-2 mt-3 "
              style={{ width: "20%", fontSize: 16, fontWeight: 500 }}
              onClick={toggle2}
            >
              Add Master Account
            </button>
            <Modal isOpen={modal2} toggle={toggle2} size="xl" style={{height: 200}}>
              <AddMasterAcc setForm={setForm} toggle={toggle2} />
            </Modal>
            <button
              className="app_button p-2 mt-3 "
              style={{ width: 150, fontSize: 16, fontWeight: 500 }}
              onClick={toggle}
            >
              Add Sub Account
            </button>
            <Modal isOpen={modal} toggle={toggle} size="xl" style={{height: 200}}>
              <AddSubAcc setForm={setForm} toggle={toggle} />
            </Modal>
            <button
              className="app_button p-2 mt-3 "
              style={{ width: 150, fontSize: 16, fontWeight: 500 }}
              // onClick={() => navigate('/table-meal')}
            >
              Print
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
              <RiFileExcel2Fill /> Exel DownLoad
              {/* </CSVLink> */}
            </button>
          </div>
        </Col>
      </Row>
      <div className="m-2">
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
                    Account Type
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Account Type
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Category
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Trade
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Master Account Number
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Status
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Action
                  </td>
                </tr>
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
                    {i.account_number}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.account_name_english}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.master_account_number}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.parent_account}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.transaction_method}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.income_statement}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.master_account_number}
                  </td> <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.status}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    <button
                      size="sm"
                      className="app_button"
                      style={{ borderRadius: 5 }}
                      onClick={() =>
                        goto(
                          `/new-agent?agent_name=${i.agent_name}&agent_id=${i.agent_id}`
                        )
                      }
                    >
                      Edit
                    </button>
                  </td>{" "}
                </tbody>
              ))}
            </table>
          </div>
        </Row>
      </div>
    </Card>
  );
}
