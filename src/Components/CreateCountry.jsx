import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { _post,useQuery } from "../Utils/Helper";


export default function CreacteCountry() {
    const navigate =useNavigate()
  const query = useQuery();
  const country_name = query.get("country_name");
  const id = query.get("id");
  const [form, setForm] = useState({
    id, 
    country_name,
    nationalism: "",
    query_type:country_name?"update":"create"
  });
  const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
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
        // navigate(-1)
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
          <h5 className="app_title">Create Country</h5>
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
          <InputForm
            className="app_input"
            label="Nationalism"
            value={form.nationalism}
            // value={form.country_name}
            onChange={handleChange}
            name="nationalism"
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
