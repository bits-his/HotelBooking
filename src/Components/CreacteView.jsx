import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { _post } from "../Utils/Helper";

export default function CreacteView() {
    const navigate = useNavigate()
  const [form, setForm] = useState({
    view_name: "",
    view_type: "",
  });
  
  const [Loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (form.view_name && form.view_type) {
      setForm({
        view_name: "",
        view_type: "",
      });
    }
    setLoading(true);
    _post(
      "api/views",
      form,
      (res) => {
        // setForm((p) => ({ ...p, hotel: '', address: '', price: '' }))

        setLoading(false);
        console.log(res);
        navigate(-1)
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
    // console.log(form)
  };
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
        <Col md={12} style={{display: 'flex', width: '100%',textAlign: 'center'}}>
            <button
                className="app_button p-3 mb-3"
                style={{ width: 150, fontSize: 16, fontWeight: 500}} 
                onClick={() => goto('/view')}
            >
                <FaArrowLeft style={{marginRight: 10}} /> Back
            </button>
            <h5 className="app_title" style={{fontSize: 30, width: '80%'}}>Create Room View</h5>
        </Col>
        <Row>
            <Col md={6}>
                {/* <InputForm
                    className="app_input"
                    label="View Id"
                    value={form.view_id}
                    onChange={handleChange}
                    name="view_id"
                    type= 'number'
                /> */}
                <InputForm
                    className="app_input"
                    label="View Name"
                    value={form.view_name}
                    onChange={handleChange}
                    name="view_name"
                />
            </Col>
            <Col>
                <label className="Label mt-2">View Type</label>
                <select
                    id="exampleSelect"
                    className="app_input"
                    value={form.view_type}
                    name="view_type"
                    type="select"
                    onChange={handleChange}
                >
                    <option>Select </option>
                </select>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col md= {6}>
                <button
                    className="app_button p-3"
                    style={{ width: 150, float: 'right'}} 
                    onClick={() => goto('/creact-room-type')}
                    >
                    Submit
                </button>
            </Col>
        </Row>
      <Row>
        <Col md={12}>
          <h5 className="app_title">Create Room View</h5>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="View Name"
            value={form.view_name}
            onChange={handleChange}
            name="view_name"
          />
          <label className="Label mt-2">View Type</label>
          <InputForm
            id="exampleSelect"
            className="app_input"
            value={form.view_type}
            name="view_type"
            type="select"
            onChange={handleChange}
          />
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
