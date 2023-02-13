import React, { useState } from 'react'
<<<<<<< HEAD:src/Components/CustomerReg.jsx
import { Button, Card, Col, Input, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm';
=======
import { Typeahead } from 'react-bootstrap-typeahead';
import { Button, Card, Col, Label, Row } from 'reactstrap'
import InputForm from './Component/InputForm'
>>>>>>> d496e06ca2ebae687e75613a0a9f1b66bb46905e:src/CustomerReg.jsx

export default function CustomerReg() {
    const [form, setForm] = useState({
        name_of_cus: '',
        no_of_rooms: '',
        date_from: '',
        date_to: '',
        agent_name: ''
    })
<<<<<<< HEAD:src/Components/CustomerReg.jsx
=======
    const [multiSelections, setMultiSelections] = useState([]);

    // const handleAdd = (e) => {
    //     e.preventDefault()
    //     if( 
    //         form.name_of_cus === '' ||
    //         form.agent_name === '' ||
    //         form.no_of_rooms === ''
    //      ){
    //         alert('Input All values')
    //      }
    //      if (form.name_of_cus&&form.agent_name&&form.no_of_rooms) {
    //         setForm({
    //             name_of_cus: '',
    //             no_of_rooms: '',
    //             agent_name: ''
    //         })
    //      }
    // }
>>>>>>> d496e06ca2ebae687e75613a0a9f1b66bb46905e:src/CustomerReg.jsx

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }));
        console.log(form)
    }

  return (
    <Row className='m-0 p-0'>
        <Col md= {5} style={{margin: 'auto'}}>
            <Card body className='mt-4' >
                <InputForm
                    label='Name of Customer'
                    value= {form.name_of_cus}
                    onChange={handleChange}
                    name= 'name_of_cus'
                />
                <Label className='Label1'>No of Rooms</Label>
                <Typeahead md= {5}
                    id="basic-typeahead-multiple"
                    labelKey="name"
                    multiple
                    onChange={setMultiSelections}
                    options={['Number 1']}
                    placeholder="Room Number"
                    selected={multiSelections}
                    name="no_of_rooms"
                    className="input_field p-2"
                />
                <InputForm 
                    label='From'
                    type= 'date'
                    value= {form.date_from}
                    onChange={handleChange}
                    name= 'date_from'
                />
                <InputForm 
                    label='To'
                    type= 'date'
                    value= {form.date_to}
                    onChange={handleChange}
                    name= 'date_to'
                />
                <InputForm 
                    label='Agent Name'
                    value= {form.agent_name}
                    onChange={handleChange}
                    name= 'agent_name'
                />
                <Button style={{marginTop: 20, fontWeight: 500, fontSize: 18}}>Save</Button>
            </Card>
        </Col>
    </Row>
  )
}
