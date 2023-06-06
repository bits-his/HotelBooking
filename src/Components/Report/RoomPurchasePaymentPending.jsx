import React, { useEffect, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Modal, Row, Table } from "reactstrap";
import { _get, _post } from "../../Utils/Helper";
import InputForm from "../../CustomComponents/InputForm";
// import { _get, _post } from '../Utils/Helper'
// import { Floors } from './Floors'
import { RiFileExcel2Fill } from "react-icons/ri";

export default function RoomPurchasePaymentPending() {
  const [form, setForm] = useState({
    check_in: "",
    check_out: "",
    hotel: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const [hotelList, setHotelList] = useState([]);
  //   const handleSubmit = () => {
  //     let finalObj = {
  //       name: form.name,
  //       address: form.address,
  //       floors: selected,
  //     }
  //     setLoading(true)
  //     _post(
  //       'api/hotels?in_query_type=create',
  //       form,
  //       (res) => {
  //         setForm((p) => ({
  //           ...p,
  //           hotel_in: '',
  //           hotel_name: '',
  //           address: '',
  //           city: '',
  //           phone: '',
  //           email: '',
  //           website: '',
  //         }))
  //         setLoading(false)
  //         console.log(res)
  //         getHotels()
  //         toggle()
  //       },
  //       (err) => {
  //         setLoading(false)
  //         console.log(err)
  //       },
  //     )
  //     console.log(finalObj)
  //   }

  //   const getHotels = () => {
  //     _post(
  //       'api/hotels?in_query_type=select-all',
  //       {},
  //       (resp) => {
  //         // setLoading(false)
  //         console.log(resp)
  //         // if (resp ) {
  //         setHotelList(resp.resp)
  //         //  alert('dfasfsadf'+resp)
  //         // }
  //       },
  //       (e) => {
  //         console.log(e)
  //         // setLoading(false)
  //         // alert(e)
  //       },
  //     )
  //   }

  const getRoom_purchase_pending = () => {
    _get(
      "api/get_room_purchase_pending?query_type=select",
      (res) => {
        // navigate(-1)
        console.log(res);
        setHotelList(res.results);
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
    // console.log(form)
  };
  const handleUpadte = (reservation_no) => {
    _post(
      `api/room_purchase_active?query_type=update_room_purchase&reservation_no=${reservation_no}`,
      {},
      (resp) => {
        if(resp.success)
         alert("Updated")
      },
      (e) => {
        console.log(e);
      }
    );
  }

  useEffect(() => {
    // setLoading(true)
    getRoom_purchase_pending();
  }, []);

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {JSON.stringify(hotelList)}
      <Row>
        <Col md={12}>
          <center>
            <h5 className="app_title" style={{ fontSize: 23 }}>
              Room Purchase Payment Pending
            </h5>
            <hr />
          </center>
        </Col>
      </Row>
      <div className="m-2">
        <Col md={12}>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 50 }}>
            {/* {JSON.stringify(data)} */}
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
          <div className="table_overflow">
            <table
              style={{
                border: "1px solid #ccc",
                padding: 10,
                width: "3000px",
                overflowX: "scroll",
              }}
              className="mt-5 mb-2"
            >
              <thead>
                <tr>
                  {/* <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Hotel In</td> */}
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
                    Quest Name
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Agent Name
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
                    Room Type
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Opt.Date
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Check In
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Check Out
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Night
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Room
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Sales Rate
                  </th>
                  {/* <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Total
                  </th> */}
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Purch Rate
                  </th>
                  {/* <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Total.Purch
                  </th> */}
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Pay To
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Amount Payable
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Sup.AccNo
                  </th>
                  <th
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    Ref No
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {JSON.stringify(hotelList)} */}
                {hotelList.length === 0 ? (
                  <span>Loading Rooms...</span>
                ) : (
                  hotelList.map((item, index) => (
                    <tr>
                      {/* <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <Button
                          onClick={() => {
                            setForms((p) => ({ ...p, hotel: item.hotel_name })),
                              toggles();
                          }}
                        >
                          select
                        </Button>
                      </td> */}
                    <td
                        style={{ 
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        <Button
                          onClick={() => {
                            handleUpadte(item.reservation_no)
                            getRoom_purchase_pending()
                            // navigate(
                            //   `/create-transport-reservation?agent_name=${item.agent_name}&BRN_transport=${item.BRN_transport}&guest_name=${item.guest_name}&transport_type=${item.transport_type}`
                            // );
                          }}
                          // onClick={}
                        >
                          {" "}
                          Comfirm
                        </Button>
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.guest_name}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.agent_name}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.hotel}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.room_type}
                      </td>

                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.option_date}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.check_in}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.check_out}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.night}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.no_of_room}
                      </td>
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.total_room_sale_rate}
                      </td>
                      {/* <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.total_room_sale_rate}
                      </td> */}

                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.room_sale_purch_vat}
                      </td>
                      {/* <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.purch_rate}
                      </td> */}
                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.pay_to}
                      </td>

                      <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.amount_payable}
                      </td>
                       <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.supplier_account_no}
                      </td>
                        <td
                        style={{
                          border: "1px solid rgb(12, 134, 103)",
                          padding: "5px 10px",
                        }}
                      >
                        {item.ref_no}
                      </td>
                      
                        
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Row>
      </div>
    </Card>
  );
}
