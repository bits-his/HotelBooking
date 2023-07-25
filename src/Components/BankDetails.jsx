import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Card, Col, Input, Label, Row } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import useQuery, { _get, _post } from "../Utils/Helper";
import { useEffect } from "react";

export default function BankDetails({ form = {}, setForm = (f) => f }) {
  const [file, setFile] = useState();
  const query = useQuery();
  const agent_id = query.get("agent_id");
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  function handleFileChange(e) {
    console.log(e.target.file);
    setFile(URL.createObjectURL(e.target.file[0]));
  }
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    if (
      form.bank_acc_no &&
      form.bank_name &&
      form.beneficiary_name &&
      form.branch_and_address &&
      form.credit_limit &&
      form.gl_acc_no_sales &&
      form.gl_acc_no_supplier &&
      form.price_category &&
      form.payment_method &&
      form.local_contact_details &&
      form.vat_reg_no &&
      form.mofa_file_no &&
      form.region &&
      form.agent_type &&
      form.cash_guarantee &&
      form.bank_guarantee &&
      form.agent_supplier
    ) {
      setForm({
        bank_acc_no: "",
        bank_name: "",
        beneficiary_name: "",
        branch_and_address: "",
        credit_limit: "",
        gl_acc_no_sales: "",
        gl_acc_no_supplier: "",
        price_category: "",
        payment_method: "",
        local_contact_details: "",
        vat_reg_no: "",
        mofa_file_no: "",
        region: "",
        agent_type: "",
        cash_guarantee: "",
        bank_guarantee: "",
        agent_supplier: "",
      });
    }
    setLoading(true);
    _post(
      "api/bank_account_details",
      form,
      (res) => {
        // setForm((p) => ({ ...p, hotel: '', address: '', price: '' }))

        setLoading(false);
        console.log(res);
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
    // console.log(form)
  };
  const getAgent = () => {
    _get(
      `api/get_agent_supplier?query_type=select-one&agent_id=${agent_id}`,
      (res) => {
        //   navigate(`/agent`)
        console.log(res);
        setForm((p)=>({...p,...res.results[0]}));
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
    // console.log(form)
  };

  useEffect(() => {
    getAgent();
  }, []);
  const getBank = () => {
    _get(
      `api/get_bank_details?query_type=select-one&agent_id=${agent_id}`,
      (res) => {
        //   navigate(`/agent`)
        console.log(res);
        setForm((p)=>({...p,...res.results[0]}));
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
    // console.log(form)
  };

  useEffect(() => {
    getBank();
  }, []);

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3 mt-0 ">
        {/* {JSON.stringify(form)} */}
      <Row>
        <Col md={12}>
          <h5 className="app_title">Bank Account Details</h5>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Account Number"
            value={form.bank_acc_no}
            onChange={handleChange}
            name="bank_acc_no"
            type="number"
          />
          <InputForm
            className="app_input"
            label="Account Name"
            value={form.bank_name}
            onChange={handleChange}
            name="bank_name"
          />
        </Col>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Beneficiary Name"
            value={form.beneficiary_name}
            onChange={handleChange}
            name="beneficiary_name"
          />
          {/* <label>Branch & Address</label> */}
          <InputForm
            className="app_input"
            label="Branch Address"
            value={form.branch_and_address}
            onChange={handleChange}
            name="branch_and_address"
          />
        </Col>
        <hr className="mt-2 mb-3" />
      </Row>
      <Row>
        <Col md={6}>
          <InputForm
            className="app_input"
            label="Credit Limit"
            value={form.credit_limit}
            onChange={handleChange}
            name="credit_limit"
            type="number"
          />
          <label className="Label mt-2">GL Account No.(Sales)</label>
          <div className="search_input_form">
            <input
              className="app_input3"
              value={form.gl_acc_no_sales}
              onChange={handleChange}
              name="gl_acc_no_sales"
            />
            <CiSearch
              className="search_icon"
              // onClick={}
            />
          </div>
        </Col>
        <Col md={6}>
          <label className="Label mt-2">GL Account No.(Supplier)</label>
          <div className="search_input_form">
            <input
              className="app_input3"
              value={form.gl_acc_no_supplier}
              onChange={handleChange}
              name="gl_acc_no_supplier"
            />
            <CiSearch
              className="search_icon"
              // onClick={}
            />
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <label className="Label mt-2">Price Category</label>
          <select
            id="exampleSelect"
            // bbbbb{JSON.stringify(selectedRoom)}
            className="app_input"
            name="price_category"
            type="select"
            onClick={handleChange}
            value={form.price_category}
          >
            <option>Select </option>
          </select>
          {/* <label>Local Contact Details</label> */}
          <InputForm
            className="app_input"
            label="Local Contact Details"
            value={form.local_contact_details}
            onChange={handleChange}
            name="local_contact_details"
            // type= "file"
          />
          <InputForm
            className="app_input"
            label="Agent Image"
            value={file}
            onChange={(e) => handleFileChange(e)}
            name="file"
            type="file"
          />
        </Col>
        <Col md={6}>
          <label className="Label mt-2">Payment Method</label>
          <select
            id="exampleSelect"
            // bbbbb{JSON.stringify(selectedRoom)}
            className="app_input"
            name="payment_method"
            type="select"
            onChange={handleChange}
            value={form.payment_method}
          >
            <option>---select---</option>
            <option>Cash</option>
            <option>Credit</option>
          </select>
          <InputForm
            className="app_input"
            label="Vat Reg No"
            value={form.vat_reg_no}
            onChange={handleChange}
            name="vat_reg_no"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          {/* <h5 className="app_title"></h5> */}
          <InputForm
            className="app_input"
            label="MOFA File No."
            value={form.mofa_file_no}
            onChange={handleChange}
            name="mofa_file_no"
          />
          <label className="Label mt-2">Agent Type </label>
          <select
            id="exampleSelect"
            // bbbbb{JSON.stringify(selectedRoom)}
            className="app_input"
            name="agent_type"
            type="select"
            onChange={handleChange}
            value={form.agent_type}
          >
            <option>---select---</option>
            <option>Reservation</option>
            <option>Umarah</option>
          </select>
          {/* <InputForm
                    className="app_input"
                    label="Agent Type"
                    value={form.agent_type}
                    onChange={handleChange}
                    name="agent_type"
                /> */}
          <InputForm
            className="app_input"
            label="Bank Guarantee"
            value={form.bank_guarantee}
            onChange={handleChange}
            name="bank_guarantee"
          />
          <Label>
            <Input type="checkbox" /> Block service
          </Label>
        </Col>
        <Col md={6}>
          {/* <h5 className="app_title"></h5> */}
          <label className="Label mt-2">Region</label>
          <select
            id="exampleSelect"
            // bbbbb{JSON.stringify(selectedRoom)}
            className="app_input"
            name="region"
            type="select"
            onClick={handleChange}
            value={form.region}
          >
            <option>kano</option>
          </select>
          {/* <InputForm
                    className="app_input"
                    label="Region"
                    value={form.region}
                    onChange={handleChange}
                    name="region"
                /> */}
          <InputForm
            className="app_input"
            label="Cash Guarantee"
            value={form.cash_guarantee}
            onChange={handleChange}
            name="cash_guarantee"
          />
          <label className="Label mt-2">Agent/Supplier Type</label>
          <select
            id="exampleSelect"
            // bbbbb{JSON.stringify(selectedRoom)}
            className="app_input"
            name="agent_supplier"
            type="select"
            onChange={handleChange}
            value={form.agent_supplier}
          >
            <option>---select---</option>
            <option>Reservation</option>
            <option>Supplier</option>
          </select>
          {/* <InputForm
                    className="app_input"
                    label="Agent/Supplier Type"
                    value={form.agent_supplier}
                    onChange={handleChange}
                    name="agent_supplier"
                /> */}
        </Col>
        {/* <button
                className="app_button p-4"
                style={{ width: 200, marginLeft: 15, marginTop: 20}}
                // onClick={() => goto('/sign-ip')}
                >
                Submit
            </button> */}
      </Row>
      {/* <div>
            {loading ? (
              <button className="app_button  mt-3 p-2 shadow">
                Loading...
              </button>
            ) : (
              <button
                className="app_button mt-3 p-2 shadow"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div> */}
    </Card>
  );
}
