import React, { useState } from 'react'
import { Button, Card, Col, Input, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm';

export default function CustomerReg() {
    const [form, setForm] = useState({
        name_of_cus: '',
        no_of_rooms: '',
        date_from: '',
        date_to: '',
        agent_name: ''
    })

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
                <InputForm 
                    label='No. of Rooms'
                    type= 'number'
                    value= {form.no_of_rooms}
                    onChange={handleChange}
                    name= 'no_of_rooms'
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
