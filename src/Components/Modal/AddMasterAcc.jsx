import React, { useState } from "react";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../../CustomComponents/InputForm";
import { CiSearch } from "react-icons/ci";
import { _post } from "../../Utils/Helper";

export default function AddMasterAcc() {
  const _form = {
    account_number: "",
    account_name: "",
    account_name_english: "",
    master_account_number: "",
    parent_account: "",
    transaction_method: "",
    income_statement: "",
    cost_center: "",
  };

  const [form, setForm] = useState(_form);
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const [loading, setLoading] = useState();
  const handleSubmit = () => {
    setLoading(true);
    _post(
      "api/add_master_account?query_type=insert",
      form,
      (res) => {
        navigate(-1);
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
    console.log(form);
  };

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      <Row>
        <Col
          md={12}
          style={{ display: "flex", width: "100%", textAlign: "center" }}
        >
          <h5 className="app_title" style={{ fontSize: 30, width: "80%" }}>
            Add Master Account
          </h5>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Account Number"
            value={form.account_number}
            name="account_number"
            onChange={handleChange}
          />
        </Col>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Account Name"
            value={form.account_name}
            name="account_name"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Account Name English"
            value={form.account_name_english}
            name="account_name_english"
            onChange={handleChange}
          />
        </Col>
        <Col md={6}>
          <label className="Label mt-2">Master Account Number</label>
          <div className="search_input_form">
            <input
              className="app_input3"
              value={form.master_account_number}
              name="master_account_number"
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
            value={form.parent_account}
            name="parent_account"
            onChange={handleChange}
          >
            <option>All</option>
          </select>
        </Col>
        <Col md={6}>
          <label className="Label mt-2">Transaction Method</label>
          <select
            className="app_input"
            value={form.transaction_method}
            name="transaction_method"
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
            value={form.income_statement}
            name="income_statement"
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
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Col>
      </Row>
    </Card>
  );
}
