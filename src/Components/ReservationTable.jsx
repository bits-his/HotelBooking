import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Button } from "reactstrap";
import { _get, _post } from "../Utils/Helper";

export default function ReservationTableS() {
  const _form = {
    search: "",
  };
  const [data, setData] = useState([]);
  const [form, setForm] = useState(_form);
  const [hotel, setHotel] = useState([]);
  const getHotels = () => {
    _get(
      "api/get_new_reservation_new?query_type=select_new_reservation",
      (resp) => {
        console.log(resp);
        if (resp.success) {
          setHotel(resp.results);
        }
      },
      (e) => {
        console.log(e);
      }
    );
  };
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const navigate = useNavigate();
  useEffect(() => {
    getHotels();
  }, []);

  const new_hotel = hotel.length
    ? hotel.filter(
        (item) =>
          item.guest_name.toLowerCase().includes(form.search.toLowerCase()) ||
          item.sub_agent_name.toLowerCase().includes(form.search.toLowerCase())
      )
    : hotel;

  return (
    <Card className="app_card dashboard_card shadow p-3 m-2 mt-2">
      <Col md={12}>
        <h5 className="app_title">Reservation List</h5>
        <hr />
        {/* {JSON.stringify({hotel,dd: "LSS"})} */}
      </Col>
      <button
        className="app_button p-2 mb-3"
        style={{ width: 150 }}
        onClick={() => navigate("/reservation-details")}
      >
        Add Reservation +
      </button>

      <Col md={12}>
        {/* {JSON.stringify(hotel)} */}
        <div style={{ display: "flex", flexDirection: "row", marginTop: 0 }}>
          <label className="label_title">Search</label>
          <div className="search">
            <CiSearch style={{ fontSize: 30 }} />
            <input
              className="app_input2"
              type="text"
              name="search"
              value={form.search}
              onChange={handleChange}
              // placeholder="Search"
              // value={}
            />
          </div>
        </div>
      </Col>
      <Row>
        <table
          style={{ border: "1px solid #ccc", padding: 12 }}
          className="mt-5"
        >
          <thead>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              Action
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              Reservation Number
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              Reservation Type
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              Status
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              Booking Type
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              Gust Name
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              Sub Agent Name
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              Country Name
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              Price Category
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              Option Date
            </th>
          </thead>

          {new_hotel &&
            new_hotel.map((i) => (
              <tbody>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  <Button
                    onClick={() => {
                      navigate(
                        `/reservation-details?reservation_number=${i.reservation_number}`
                      );
                    }}
                    // onClick={}
                  >
                    {" "}
                    Edit
                  </Button>
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  {i.reservation_number}
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  {i.reservation_type}
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  {i.status}
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  {i.booking_type}
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  {i.guest_name}
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  {i.sub_agent_name}
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  {i.country_name}
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  {i.price_category}
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  {i.option_date}
                </td>
              </tbody>
            ))}
        </table>
      </Row>
    </Card>
  );
}
