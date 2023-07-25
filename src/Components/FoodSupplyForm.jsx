import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { _post, useQuery } from "../Utils/Helper";

export default function CreateSupplier() {
  const navigate = useNavigate();
  const query = useQuery();
  //   const country_name = query.get("country_name");
  //   const id = query.get("id");
  const [form, setForm] = useState({
    // id,
    company_name: "",
    company_address: "",
    company_email: "",
    company_phone: "",
    company_website: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }));
  };

  const [Loading, setLoading] = useState(false);
  // const navigate = useNavigate()
  const handleSubmit = () => {
    setLoading(true);
    _post(
      "api/food-supply?query_type=insert",
      form,
      (res) => {
        // setForm((p) => ({ ...p, hotel: '', address: '', price: '' }))
        setLoading(false);
        setForm({
          company_name: "",
          company_address: "",
          company_email: "",
          company_phone: "",
          company_website: "",
        });
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
        <Col
          md={12}
          style={{ display: "flex", width: "100%", textAlign: "center" }}
        >
          <button
            className="app_button p-2 mb-3"
            style={{ width: 150, fontSize: 16, fontWeight: 500 }}
            onClick={() => navigate("/food-supplier")}
          >
            <FaArrowLeft style={{ marginRight: 10 }} /> Back
          </button>
          <h5 className="app_title" style={{ fontSize: 30, width: "80%" }}>
            Food Supply Registration
          </h5>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Company Name"
            value={form.company_name}
            onChange={handleChange}
            name="company_name"
          />
        </Col>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Company Address"
            value={form.company_address}
            // value={form.country_name}
            onChange={handleChange}
            name="company_address"
          />
          {/* <label className="Label mt-2">Country Type</label>
                <select
                    id="exampleSelect"
                    className="app_input"
                    value={form.nationalism}
                    name="nationalism"
                    type="select"
                    onChange={handleChange}
                >
                    <option>Select </option>
                </select> */}
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Company Email"
            value={form.company_email}
            onChange={handleChange}
            name="company_email"
          />
        </Col>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Phone"
            value={form.company_phone}
            // value={form.country_name}
            onChange={handleChange}
            name="company_phone"
          />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Company Website"
            value={form.company_website}
            onChange={handleChange}
            name="company_website"
          />
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
