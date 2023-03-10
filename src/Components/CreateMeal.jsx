import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { _post } from "../Utils/Helper";

export default function CreacteMeal() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    // meal_id: "",
    meal_name: "",
    meal_type: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }));
  };
  const [Loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (form.meal_name && form.meal_type) {
      setForm({
        meal_name: "",
        meal_type: "",
      });
    }
    setLoading(true);
    _post(
      "api/meals_tables",
      form,
      (res) => {
        // setForm((p) => ({ ...p, hotel: '', address: '', price: '' }))

        setLoading(false);
        navigate(-1);
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
    // console.log(form)
  };
  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      <Row>
        <Col md={12}>
          <h5 className="app_title">Create Meal</h5>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          {/* <InputForm
            className="app_input"
            label="meal Id"
            value={form.meal_id}
            onChange={handleChange}
            name="meal_id"
            type="number"
          /> */}
          <InputForm
            className="app_input"
            label="meal Name"
            value={form.meal_name}
            onChange={handleChange}
            name="meal_name"
          />
          <label className="Label mt-2">meal Type</label>
          <InputForm
            id="exampleSelect"
            className="app_input"
            value={form.meal_type}
            name="meal_type"
            type="select"
            onChange={handleChange}
          />
          {/* <option>Select </option> */}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <button
            className="app_button p-3"
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
