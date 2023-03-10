import React, { useState } from "react";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { _post } from "../Utils/Helper";

export default function CreacteRoomType() {
  const [form, setForm] = useState({
    room_name: "",
    room_type: "",
    no_of_pax: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }));
  };
  const [Loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (form.room_name && form.room_type && form.no_of_pax) {
      setForm({
        id,
        room_name: "",
        room_type: "",
        no_of_pax: "",
      });
    }
    setLoading(true);
    _post(
      "api/room_table",
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
          <h5 className="app_title">Create Room Type</h5>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          {/* <InputForm
            className="app_input"
            label="Room Id"
            value={form.room_id}
            onChange={handleChange}
            name="room_id"
            type="number"
          /> */}
          <InputForm
            className="app_input"
            label="Room Name"
            value={form.room_name}
            onChange={handleChange}
            name="room_name"
          />
          <label className="Label mt-2">Room Type</label>
          <select
            id="exampleSelect"
            className="app_input"
            value={form.room_type}
            onChange={handleChange}
            name="room_type"
            type="select"
          >
            <option>Select </option>
          </select>
          <InputForm
            className="app_input"
            label="Number of Pax"
            value={form.no_of_pax}
            onChange={handleChange}
            name="no_of_pax"
            type="number"
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
