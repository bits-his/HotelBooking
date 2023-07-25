import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { _post, useQuery } from "../Utils/Helper";

export default function CreacteCountry() {
  const navigate = useNavigate();
  const query = useQuery();
  const country_name = query.get("country_name");
  const id = query.get("id");
  const [form, setForm] = useState({
    id,
    country_name,
    nationalism: "",
    query_type: country_name ? "update" : "create",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const [Loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (form.country_name && form.nationalism) {
      setForm({
        id,
        country_name: "",
        nationalism: "",
      });
    }
    setLoading(true);
    _post(
      "api/countries",
      form,
      (res) => {
        // setForm((p) => ({ ...p, hotel: '', address: '', price: '' }))
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
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
            onClick={() => navigate("/country")}
          >
            <FaArrowLeft style={{ marginRight: 10 }} /> Back
          </button>
          <h5 className="app_title" style={{ fontSize: 30, width: "80%" }}>
            Create New Country
          </h5>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Country Name"
            value={form.country_name}
            onChange={handleChange}
            name="country_name"
          />
        </Col>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Nationalism"
            value={form.nationalism}
            // value={form.country_name}
            onChange={handleChange}
            name="nationalism"
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
