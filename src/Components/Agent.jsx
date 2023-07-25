import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Card, Col, Input, Label, Row } from "reactstrap";
import { _post } from "../Utils/Helper";

export default function Agent() {
  const _form = {
    search: "",
  };
  const [form, setForm] = useState(_form);
  const goto = useNavigate();
  const [data, setData] = useState([]);

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const getAgent = () => {
    _post(
      "api/bank_account_details",
      {},
      (res) => {
        console.log(res);
        setData(res.results);
        navigate(-1);
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(form)
  };

  useEffect(() => {
    getAgent();
  }, []);

  const new_data = data.length
    ? data.filter((item) =>
        item.agent_name.toLowerCase().includes(form.search.toLowerCase())
      )
    : data;

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      <Row>
        <Col md={12}>
          <button
            className="app_button p-2"
            style={{ width: 200 }}
            onClick={() => goto("/new-agent")}
          >
            Add Agent/Supplier
          </button>
        </Col>
      </Row>
      <div className="m-2">
        <Col md={12}>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 50 }}>
            {/* {JSON.stringify(form)} */}
            <label className="label_title">Search</label>
            <div className="search">
              <CiSearch style={{ fontSize: 30 }} />
              <input
                className="app_input2"
                type="text"
                name="search"
                value={form.search}
                onChange={handleChange}
              />
            </div>
          </div>
        </Col>
        <Row>
          <table
            style={{ border: "1px solid rgb(12, 134, 103)", padding: 12 }}
            className="mt-5"
          >
            <thead>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Agent Id
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Name
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Phone
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Country
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                State
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                City
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Zip
              </th>
              <th
                style={{
                  border: "1px solid rgb(12, 134, 103)",
                  padding: "5px 10px",
                }}
              >
                Action
              </th>
            </thead>

            {new_data &&
              new_data.map((i) => (
                <tbody>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.agent_id}
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
                    {i.phone}
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
                    {i.state}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.city}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    {i.zipcode}
                  </td>
                  <td
                    style={{
                      border: "1px solid rgb(12, 134, 103)",
                      padding: "5px 10px",
                    }}
                  >
                    <button
                      size="sm"
                      className="app_button"
                      style={{ borderRadius: 5 }}
                      onClick={() =>
                        goto(
                          `/new-agent?agent_name=${i.agent_name}&agent_id=${i.agent_id}`
                        )
                      }
                    >
                      Edit
                    </button>
                  </td>{" "}
                </tbody>
              ))}
          </table>
        </Row>
      </div>
    </Card>
  );
}
