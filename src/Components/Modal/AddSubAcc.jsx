import React, { useState } from "react";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../../CustomComponents/InputForm";
import { CiSearch } from "react-icons/ci";

export default function AddSubAcc() {
  const [form, setForm] = useState({
    master_acc: "",
    master_acc_name: '',
    new_acc_no: '',
    acc_name_eng: '',
    acc_name_arabic: '',
    status: '',
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
        <Col md= {6}>
            <label className="Label mt-2">Master Account</label>
            <div className="search_input_form">
              <input
                className="app_input3"
                value={form.master_acc}
                name="master_acc"
                onChange={handleChange}
                type="number"
              />
              <CiSearch className="search_icon" />
            </div>
        </Col>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Master Account Name"
            value={form.master_acc_name}
            name="master_acc_name"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label= "New Account No"
            value={form.new_acc_no}
            name="new_acc_no"
            onChange={handleChange}
          />
        </Col>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Account Name English"
            value={form.acc_name_eng}
            name="acc_name_eng"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Account Name Arabic"
            value={form.acc_name_arabic}
            name="acc_name_arabic"
            onChange={handleChange}
          />
        </Col>
        <Col md={6}>
          <label className="Label mt-2">Status</label>
          <select
            className="app_input"
            value={form.status}
            name="status"
            onChange={handleChange}
          >
            <option>Select....</option>
            <option value="pending">Pending</option>
            <option value="active">Active</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <label className="Label mt-2">Cost Center</label>
          <select
            className="app_input"
            value={form.cost_center}
            name="cost_center"
            onChange={handleChange}
          >
            <option>Select....</option>
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