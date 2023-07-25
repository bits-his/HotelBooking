import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { _post } from "../Utils/Helper";

export default function Transport() {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const _form = {
    transport_company: "",
    transport_type: "",
  };

  const [form, setForm] = useState(_form);

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  
  const type = id ? "update" : "create";
  const [Loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (form.transport_company && form.transport_type) {
      setForm({
        transport_company: "",
        transport_type: "",
      });
    }
    setLoading(true);
    _post(
      "api/transport?query_type=create_transport",
      form,
      (res) => {

        setLoading(false);
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
      {/* {JSON.stringify(data)} */}
      <Row>
        <Col
          md={12}
          style={{ display: "flex", width: "100%", textAlign: "center" }}
        >
          <button
            className="app_button p-2 mb-3"
            style={{ width: 150, fontSize: 16, fontWeight: 500 }}
            onClick={() => navigate("/transport-tablee")}
          >
            <FaArrowLeft style={{ marginRight: 10 }} /> Back
          </button>
          <h5 className="app_title" style={{ fontSize: 30, width: "80%" }}>
            Create New Transport
          </h5>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Transport Company"
            name="transport_company"
            type="text"
            onChange={handleChange}
            value={form.transport_company}
          />
        </Col>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Transport Type"
            name="transport_type"
            type="text"
            onChange={handleChange}
            value={form.transport_type}
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
