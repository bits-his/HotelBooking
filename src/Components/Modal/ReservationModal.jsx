import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
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
      "api/reservations_and_availability?query_type=select",
      {},
      (resp) => {
        // setLoading(false)
        console.log(resp);
        // if (resp ) {
        setHotel(resp.results);
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
    <Card className="app_card dashboard_card shadow p-3 m-2 mt-2">
      <Col md={12}>
        <h5 className="app_title">Reservation List</h5>
        <hr />
      </Col>
      {/* {JSON.stringify(hotel)} */}
      <Col md={12}>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 0 }}>
          <label className="label_title">Search</label>
          <div className="search">
            <CiSearch style={{ fontSize: 30 }} />
            <input
              className="app_input2"
              type="text"
              placeholder="Search"
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
              Hotel Name
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              Hotel City
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
              Category
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              Filter Type
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              View
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              Print View
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              Date From
            </th>
            <th
              style={{
                border: "1px solid rgb(12, 134, 103)",
                padding: "5px 10px",
              }}
            >
              Date To
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
                      setForm((p) => ({ ...p, reservation_number: i.id }));
                      toggle();
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
                  {i.hotel}
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  {i.hotel_city}
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
                  {i.category}
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  {i.filter_type}
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  {i.view}
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  {i.print_view}
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  {i.date_from}
                </td>
                <td
                  style={{
                    border: "1px solid rgb(12, 134, 103)",
                    padding: "5px 10px",
                  }}
                >
                  {i.date_from}
                </td>
              </tbody>
            ))}
        </table>
      </Row>
    </Card>
  );
}
