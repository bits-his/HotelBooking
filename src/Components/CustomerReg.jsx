import React, { useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Button, Card, Col, Input, Label, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'

export default function CustomerReg() {
  const [form, setForm] = useState({
    name_of_cus: '',
    no_of_rooms: '',
    date_from: '',
    date_to: '',
    agent_name: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
    console.log(form)
  }

  const [multiSelections, setMultiSelections] = useState([])

  return (
    <Card body className="app_card shadow mt-3">
      <h5 className='app_title'>Customer Registration</h5>
      <InputForm
        label="Name of Customer"
        value={form.name_of_cus}
        onChange={handleChange}
        name="name_of_cus"
        className='mb-2'
      />
      <Label className="Label1 mt-2">No of Rooms</Label>
      <Typeahead
        id="basic-typeahead-multiple"
        labelKey="name"
        multiple
        onChange={setMultiSelections}
        options={['Number 1']}
        placeholder="Room Number"
        selected={multiSelections}
        name="no_of_rooms"
        className="app_input"
      />
      <InputForm
        label="From"
        type="date"
        value={form.date_from}
        onChange={handleChange}
        name="date_from"
      />
      <InputForm
        label="To"
        type="date"
        value={form.date_to}
        onChange={handleChange}
        name="date_to"
      />
      <InputForm
        label="Agent Name"
        value={form.agent_name}
        onChange={handleChange}
        name="agent_name"
      />
      <button className="app_button mt-3 p-2">Save</button>
    </Card>
  )
}
