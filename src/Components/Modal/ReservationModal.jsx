import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Button } from "reactstrap";
import { _post } from "../../Utils/Helper";

export default function ReservationModal({
  setForm = (f) => f,
  toggle = (f) => f,
}) {
  const [data, setData] = useState([]);

  const [hotel, setHotel] = useState([]);
  const getHotels = () => {
    _post(
      "api/new-reservation?query_type=select_reservation",
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp);
        if (resp.success ) {
        setHotel(resp.results);
        //  alert('dfasfsadf'+resp)
        }
      },
      (e) => {
        console.log(e);
        // setLoading(false)
        // alert(e)
      }
    );
  };
  const navigate =useNavigate()
  useEffect(() => {
    getHotels();
  }, [0]);
  return (
    <Card className="app_card dashboard_card shadow p-3 m-2 mt-2">
      <Col md={12}>
        <h5 className="app_title">Reservation List</h5>
        <hr />
      </Col>
       {/* {JSON.stringify(hotel)}  */}
      <Col md={12}>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 0 }}>
          <label className="label_title">Search</label>
          <div className="search">
            <CiSearch style={{ fontSize: 30 }} />
            <input
              className="app_input2"
              type="text"
              // placeholder="Search"
              name="Search"
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
              booking status
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              booking type
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >agent name
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              sub agent name
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
             country name
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
             price category
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
             option date
            </th>
            {/* <th style={{border: '1px solid #ccc', padding: "5px 10px"}}>City</th>
                      <th style={{border: '1px solid #ccc', padding: "5px 10px"}}>Zip</th> */}
          </thead>

          {hotel &&
            hotel.map((i) => (
              <tbody>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  <Button
                    onClick={() => {
                      setForm((p) => ({ ...p, reservation_number: i.reservation_number }));
                      toggle();
                      navigate(`/reservation-details?reservation_number=${i.reservation_number}`)
                    }}
                    // onClick={}
                  >
                    {" "}
                    Select
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
                  {i.agent_name}
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
