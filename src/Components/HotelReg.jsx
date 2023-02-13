import React, { useState } from 'react'
import { Button, Card, Col, Input, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'

export default function HotelReg() {
    const [form, setForm] = useState({
        name: '',
        address: '',
        floor: '',
        room_no: '',
        price: ''
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
                    label='Name'
                    value= {form.name}
                    onChange={handleChange}
                    name= 'name'
                />
                <InputForm 
                    label='Address'
                    value= {form.address}
                    onChange={handleChange}
                    name= 'address'
                />
                <InputForm 
                    label='Floor'
                    type= 'number'
                    value= {form.floor}
                    onChange={handleChange}
                    name= 'floor'
                />
                <InputForm 
                    label='Room No.'
                    type= 'number'
                    value= {form.room_no}
                    onChange={handleChange}
                    name= 'room_no'
                />
                <InputForm 
                    label='Price'
                    type= 'number'
                    value= {form.price}
                    onChange={handleChange}
                    name= 'price'
                />
                <Button style={{marginTop: 20, fontWeight: 500, fontSize: 18}}>Save</Button>
            </Card>
        </Col>
    </Row>
  )
}
