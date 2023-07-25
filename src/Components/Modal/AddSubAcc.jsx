import React, { useState } from "react";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../../CustomComponents/InputForm";
import { CiSearch } from "react-icons/ci";
import { _post } from "../../Utils/Helper";

export default function AddSubAcc() {
  const _form = {
    master_account:"",
    master_account_name:"",
    new_account_no:"",
    account_name_english:"",
    account_name_arabic:"",
    status:"",
    cost_center:"",
  };
  const [form, setForm] = useState(_form);
  const handleChange = ({ target: { name, value }}) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const [loading, setLoading] = useState();
  const handleSubmit = () => {
    setLoading(true);
    _post(
      "api/add_sub_account?query_type=insert",
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
      {/* {JSON.stringify(form)} */}
      <Row>
        <Col
          md={12}
          style={{ display: "flex", width: "100%", textAlign: "center" }}
        >
          <h5 className="app_title" style={{ fontSize: 30, width: "80%" }}>
            Add Sub Account
          </h5>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <label className="Label mt-2">Master Account</label>
          <div className="search_input_form">
            <input
              className="app_input3"
              value={form.master_account}
              name="master_account"
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
            value={form.master_account_name}
            name="master_account_name"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="New Account No"
            value={form.new_account_no}
            name="new_account_no"
            onChange={handleChange}
          />
        </Col>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Account Name English"
            value={form.account_name_english}
            name="account_name_english"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Account Name Arabic"
            value={form.account_name_arabic}
            name="account_name_arabic"
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
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Col>
      </Row>
    </Card>
  );
}
