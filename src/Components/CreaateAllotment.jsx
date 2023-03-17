import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Col, Input, Label, Row, Table } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'
import { _get, _post } from '../Utils/Helper'
import AllaotmentTable from './Table/AllaotmentTable'

export default function CreaateAllotment({form={},setForm=(f)=>f}) {
  const navigate = useNavigate()
  const [data, setData] = useState([])

  
  const handleChange = ({ target: { name, value } }) => {
    // console.log(form)
    setForm((p) => ({ ...p, [name]: value }))
  }

  const handleSubmit = () => {
    if (form.id_no&&form.hotel_name&&form.allotment_type&&form.supplier_name&&form.reference_id&&form.details) {
      setForm({
        id_no: '',  
        hotel_name: '',
        allotment_type: '',
        supplier_name: '',
        reference_id: '',
        details: '',
      })
    }
    _post('api/allotment', form, (resp) => {
      console.log(resp)
    }),
    (err) => {
      console.log(err)
    }
  }
  
    const getMeals_table = () => {
    _post(
      'api/hotels?in_query_type=select-all',
      {},
      (res) => {
        console.log(res);
        setData(res.resp);
      },
      (err) => {
        // setLoading(false)
        console.log(err);
      }
    );
    // console.log(form)
  };

  useEffect(() => {
    // getData();
    getMeals_table();
  }, []);

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
        {/* {JSON.stringify(data)} */}
      <Row>
        <Col
          md={12}>
          <h5 className="app_title" style={{ fontSize: 30}}>
            <center >Create Allotement</center> 
          </h5>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h5 className="app_title">Allotment</h5>
        </Col>
        <Col md={2} style={{ display: 'flex', flexDirection: 'row' }}>
          <InputForm
            className="app_input"
            label="ID No"
            value={form.id_no}
            onChange={handleChange}
            name="id_no"
            type="number"
          />
        </Col>
        <Col md={4}>
          <label className="Label mt-2">Hotel Name</label>
          <select
            id="exampleSelect"
            className="app_input"
            value={form.hotel_name}
            onChange={handleChange}
            name="hotel_name"
            type="select"
          >
          {data.map(item => ( <option value={item.hotel_name}>{item.hotel_name} </option>))}

          </select>
        </Col>
        <Col md={2}>
          <label className="Label mt-2">Allotment Type</label>
          <select
            id="exampleSelect"
            className="app_input"
            value={form.allotment_type}
            name="allotment_type"
            type="select"
            onChange={handleChange}
          >
            <option value="AMfD">AMfD </option>
            <option value="AMfv">AMfv </option>
          </select>
        </Col>
        <Col md={4}>
          <label className="Label mt-2">Supplier Name</label>
          <select
            id="exampleSelect"
            className="app_input"
            value={form.supplier_name}
            name="supplier_name"
            type="select"
            onChange={handleChange}
          >
            <option value="AMD">AMD </option>
            <option value="AMv">AMv </option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <InputForm
            className="app_input"
            label="Reference ID"
            value={form.reference_id}
            onChange={handleChange}
            name="reference_id"
            type="number"
          />
        </Col>
        <Col md={3} style={{ marginTop: 30 }}>
          <Label>
            <Input type="checkbox" /> Show All Pending Transaction
          </Label>
        </Col>
        <Col md={2} style={{ marginTop: 30 }}>
          <Label>
            <Input type="checkbox" /> Show GI Post
          </Label>
        </Col>
        <Col md={2} style={{ marginTop: 30 }}>
          <Label>
            <Input type="checkbox" /> Rate Update by Total
          </Label>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <label>Local Contact Details</label>
          <textarea
            className="app_input"
            placeholder="While............"
            name="details"
            value={form.details}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <button
            className="app_button p-1"
            style={{
              width: 200,
              backgroundColor: 'rgb(12, 134, 103)',
              height: 40,
              marginTop: 30,
            }}
            onClick={handleSubmit}
          >
            Save
          </button>
        </Col>
        <Col md={4}>
          <button
            className="app_button bg-danger p-1"
            style={{
              width: 200,
              backgroundColor: 'rgb(12, 134, 103)',
              height: 40,
              marginTop: 30,
            }}
            // onClick={() => goto('/sign-ip')}
          >
            Cancel
          </button>
        </Col>
        <Col md={4}>
          <button
            className="app_button  p-1"
            style={{
              width: 200,
              backgroundColor: 'orange',
              height: 40,
              marginTop: 30,
            }}
            // onClick={() => goto('/sign-ip')}
          >
            Add Row
          </button>
        </Col>
      </Row>
      {/* <AllaotmentTable /> */}
    </Card>
  )
}
