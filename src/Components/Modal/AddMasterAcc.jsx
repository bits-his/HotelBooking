import React, { useState } from "react";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../../CustomComponents/InputForm";
import { CiSearch } from "react-icons/ci";

export default function AddMasterAcc() {
  const [form, setForm] = useState({
    acc_number: "",
    acc_name: '',
    acc_name_eng: '',
    master_acc_no: '',
    parent_acc: '',
    tran_method: '',
    income_stt: '',
    cost_center: ''
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      <Row>
            <Col md={12} style={{display: 'flex', width: '100%',textAlign: 'center'}}>
                <h5 className="app_title" style={{fontSize: 30, width: '80%'}}>Add Master Account</h5>
            </Col>
        </Row>
      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Account Number"
            value={form.acc_number}
            name="acc_number"
            onChange={handleChange}
          />
        </Col>
        <Col md= {6}>
          <InputForm
            className="app_input"
            label="Account Name"
            value={form.acc_name}
            name="acc_name"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Account Name English"
            value={form.acc_name_eng}
            name="acc_name_eng"
            onChange={handleChange}
          />
        </Col>
        <Col md= {6}>
            <label className="Label mt-2">Master Account Number</label>
            <div className="search_input_form">
              <input
                className="app_input3"
                value={form.master_acc_no}
                name="master_acc_no"
                onChange={handleChange}
                type="number"
              />
              <CiSearch className="search_icon" />
            </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <label className="Label mt-2">Parent Account</label>
          <select
            className="app_input"
            value={form.parent_acc}
            name="parent_acc"
            onChange={handleChange}
          >
            <option>All</option>
          </select>
        </Col>
        <Col md={6}>
          <label className="Label mt-2">Transaction Method</label>
          <select
            className="app_input"
            value={form.tran_method}
            name="tran_method"
            onChange={handleChange}
          >
            <option>All</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <label className="Label mt-2">Income Statement</label>
          <select
            className="app_input"
            value={form.income_stt}
            name="income_stt"
            onChange={handleChange}
          >
            <option>All</option>
          </select>
        </Col>
        <Col md={6}>
          <label className="Label mt-2">Cost Center</label>
          <select
            className="app_input"
            value={form.cost_center}
            name="cost_center"
            onChange={handleChange}
          >
            <option>All</option>
          </select>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <button
            className="app_button p-2"
            style={{ width: 150, float: "right" }}
            // onClick={handleSubmit}
          >
            Submit
          </button>
        </Col>
      </Row>
    </Card>
  );
}