import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import InputForm from "../CustomComponents/InputForm";
import { _post } from "../Utils/Helper";

export default function CreacteMeal() {
  const params = useParams()
  const id = params.id
  const navigate = useNavigate();
  const [form, setForm] = useState({
    // meal_id: "",
    meal_name: "",
    meal_type: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }));
  };
  const type = id ? 'update':'create'
  const [Loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (form.meal_name && form.meal_type) {
      setForm({
        meal_name: "",
        meal_type: "",
      });
    }
    setLoading(true);
    _post(
      `api/meals_tables?in_query_type=${type}`,
      form,
      (res) => {
        // setForm((p) => ({ ...p, hotel: '', address: '', price: '' }))

        setLoading(false);
        navigate(-1);
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
    // console.log(form)
  };
const [data,setData]=useState()
  const getMeals =()=>{
    _post(
      `api/meals_tables?in_query_type=select&id=${id}`,
      {},
      (res) => {
        if(res.success){
      setForm(res.results[0])
    }
      },
      (err) => {
        // setLoading(false);
        console.log(err);
      }
    );
    // console.log(form)
  
  }
  useEffect(()=>{
    getMeals()
  },[])
  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
      {/* {JSON.stringify(data)} */}
      <Row>
            <Col md={12} style={{display: 'flex', width: '100%',textAlign: 'center'}}>
                <button
                    className="app_button p-3 mb-3"
                    style={{ width: 150, fontSize: 16, fontWeight: 500}} 
                    onClick={() => navigate('/meal')}
                >
                    <FaArrowLeft style={{marginRight: 10}} /> Back
                </button>
                <h5 className="app_title" style={{fontSize: 30, width: '80%'}}>Create New Meal</h5>
            </Col>
        </Row>
      <Row>
        <Col md={6}>
          {/* <InputForm
            className="app_input"
            label="meal Id"
            value={form.meal_id}
            onChange={handleChange}
            name="meal_id"
            type="number"
          /> */}
          <InputForm
            className="app_input"
            label="meal Name"
            value={form.meal_name}
            onChange={handleChange}
            name="meal_name"
          />
          </Col>
          <Col>
          <InputForm
            id="exampleSelect"
            label= "Meal Type"
            className="app_input"
            value={form.meal_type}
            name="meal_type"
            type="select"
            onChange={handleChange}
          />
          {/* <option>Select </option> */}
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
