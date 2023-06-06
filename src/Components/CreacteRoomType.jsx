import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { _post } from "../Utils/Helper";

export default function CreacteRoomType() {
  const goto = useNavigate();
  const [form, setForm] = useState({
    room_type: "",
    room_name: "",
    no_pax: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }));
  };
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (form.room_name && form.room_type && form.no_pax) {
      setForm({
        // id,
        room_type: "",
        room_name: "",
        no_pax: "",
      });
    }
    setLoading(true);
    _post(
      "api/room_type?query_type=create",
      form,
      (res) => {
        // setForm((p) => ({ ...p, hotel: '', address: '', price: '' }))
        navigate(-1);
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
    // console.log(form)
  };

  const [hotel, setHotel] = useState([]);
  const getHotels = () => {
    _post(
      "api/hotels?in_query_type=select-all",
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp);
        // if (resp ) {
        setHotel(resp.resp);
        //  alert('dfasfsadf'+resp)
        // }
      },
      (e) => {
        console.log(e);
        // setLoading(false)
        // alert(e)
      }
    );
  };
  useEffect(() => {
    getHotels();
  }, [0]);

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      <Row>
        {JSON.stringify(form)}
        <Col
          md={12}
          style={{ display: "flex", width: "100%", textAlign: "center" }}
        >
          <button
            className="app_button p-2 mb-3"
            style={{ width: 150, fontSize: 16, fontWeight: 500 }}
            onClick={() => goto("/room-type")}
          >
            <FaArrowLeft style={{ marginRight: 10 }} /> Back
          </button>
          <h5 className="app_title" style={{ fontSize: 30, width: "80%" }}>
            Create New Room
          </h5>
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
          {/* <select
            id="exampleSelect"
            className="app_input mt-4"
            name="hotel_n"
            type="select"
            onChange={handleChange}
            value={form.hotel_n}
            // className="mt-3"
          >
            {hotel.map((i) => (
              <option
                value="select"
                onClick={() => setForm((p) => ({ ...p, hotel_id: i.id }))}
              >
                {i.hotel_name}
              </option>
            ))}
          </select> */}
          <InputForm
            className="app_input"
            label="Room Name"
            value={form.room_name}
            onChange={handleChange}
            name="room_name"
          />
          <InputForm
            className="app_input"
            label="Number of Pax"
            value={form.no_pax}
            onChange={handleChange}
            name="no_pax"
          />
        </Col>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Room Type"
            value={form.room_type}
            onChange={handleChange}
            name="room_type"
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
