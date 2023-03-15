import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { Card, Col, Input, Label, Modal, Row } from 'reactstrap'
import InputForm from '../CustomComponents/InputForm'
import AgentModal from './Modal/AgentModal'
import HotelReg from './Modal/HotelModal'

export default function Reservation() {
    const [modal, setModal] = useState(false)
    const [check, setCheck] = useState(false)
    const [form, setForm] = useState({
        date: '',
        status: '',
        view: '',
        hotel: '',
        category: '',
        print_view: '',
        hotel_city: '',
        filter_type: ''
    })
    const handleChange = ({ target: { name, value } }) => {
    // console.log({ target })
    setForm((p) => ({ ...p, [name]: value }))
    }

    const toggle = () => setModal(!modal);
    // const toggle = setModal(!modal)
  return (
    // <Card className="app_card dashboard_card shadow p-3 m-3">
    //   <Row>
    //     <Col md={12}>
    //       <h5 className="app_title">Reservations And Availabity</h5>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col md={4}>
    //       <InputForm
    //         className="app_input"
    //         label="Date From"
    //         value={form.date}
    //         onChange={handleChange}
    //         name="date"
    //         type="Date"
    //       />
    //       <label className="Label mt-2">Status</label>
    //       <select
    //         id="exampleSelect"
    //         className="app_input"
    //         name="status"
    //         type="select"
    //         onChange={handleChange}
    //         value={form.status}
    //       >
    //         <option>Select </option>
    //         <option>ejrdfkj </option>
    //         <option>kjdsa </option>
    //       </select>
    //       <label className="Label mt-2">View</label>
    //       <select
    //         id="exampleSelect"
    //         className="app_input"
    //         value={form.view}
    //         name="view"
    //         type="select"
    //         onChange={handleChange}
    //       >
    //         <option>Select </option>
    //         <option>ksjaasj </option>
    //         <option>kjdsd </option>
    //       </select>
    //     </Col>
    //     <Col md={4}>
    //       <label className="Label mt-2">Hotel</label>
    //       <select
    //         id="exampleSelect"
    //         className="app_input"
    //         value={form.hotel}
    //         name="hotel"
    //         type="select"
    //         onChange={handleChange}
    //       >
    //         <option>Select </option>
    //         <option>jskd </option>
    //         <option>kjwkkj </option>
    //       </select>
    //       <label className="Label mt-2">Category</label>
    //       <select
    //         id="exampleSelect"
    //         className="app_input"
    //         value={form.category}
    //         name="category"
    //         type="select"
    //         onChange={handleChange}
    //       >
    //         <option>Select </option>
    //         <option>dsmsd </option>
    //         <option>laskklesk </option>
    //       </select>
    //       <label className="Label mt-2">Print View</label>
    //       <select
    //         id="exampleSelect"
    //         className="app_input"
    //         value={form.print_view}
    //         name="print_view"
    //         type="select"
    //         onChange={handleChange}
    //       >
    //         <option>Select </option>
    //         <option>saklkld </option>
    //         <option>jskam </option>
    //       </select>
    //     </Col>
    //     <Col md={4}>
    //       <label className="Label mt-2">Hotel City</label>
    //       <select
    //         id="exampleSelect"
    //         className="app_input"
    //         value={form.hotel_city}
    //         name="hotel_city"
    //         type="select"
    //         onChange={handleChange}
    //       >
    //         <option>Select </option>
    //         <option>ewijks </option>
    //         <option>uewio </option>
    //       </select>
    //       <label className="Label mt-2">Filter Type</label>
    //       <select
    //         id="exampleSelect"
    //         className="app_input"
    //         value={form.filter_type}
    //         name="filter_type"
    //         type="select"
    //         onChange={handleChange}
    //       >
    //         <option>Select </option>
    //         <option>oiew </option>
    //         <option>ewioksl </option>
    //       </select>
    //       <Label className="mt-5">
    //         <Input
    //           type="switch"
    //           role="switch"
    //           // name='check'
    //           checked={check}
    //           onChange={() => {
    //             setCheck(!check);
    //           }}
    //         />{" "}
    //         Allotment Only
    //       </Label>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col md={3}>
    //       <button
    //         className="app_button p-1"
    //         style={{
    //           width: 200,
    //           backgroundColor: "rgb(12, 134, 103)",
    //           height: 40,
    //           marginTop: 30,
    //         }}
    //         // onClick={() => goto('/sign-ip')}
    //       >
    //         View Record
    //       </button>
    //     </Col>
    //     <Col md={3}>
    //       <button
    //         className="app_button bg-danger p-1"
    //         style={{
    //           width: 200,
    //           backgroundColor: "rgb(12, 134, 103)",
    //           height: 40,
    //           marginTop: 30,
    //         }}
    //         // onClick={() => goto('/sign-ip')}
    //       >
    //         Reset
    //       </button>
    //     </Col>
    //     <Col md={3}>
    //       <button
    //         className="app_button  p-1"
    //         style={{
    //           width: 200,
    //           backgroundColor: "orange",
    //           height: 40,
    //           marginTop: 30,
    //         }}
    //         // onClick={() => goto('/sign-ip')}
    //       >
    //         Print
    //       </button>
    //     </Col>{" "}
    //     <Col md={3}>
    //       <button
    //         className="app_button p-1"
    //         style={{
    //           width: 200,
    //           backgroundColor: "rgb(12, 134, 103)",
    //           height: 40,
    //           marginTop: 30,
    //         }}
    //         onClick={handleSubmit}
    //       >
    //         Submit
    //       </button>
    //     </Col>
    //     <Col md={4}>
    //       <Label className="mt-5">
    //         <Input
    //           type="switch"
    //           role="switch"
    //           // name='check'
    //           checked={check}
    //           onClick={() => {
    //             setCheck(!check);
    //           }}
    //         />{" "}
    //         Allotment Only
    //       </Label>
    //     </Col>
    //   </Row>
    //   <Row>
    //     {/* {JSON.stringify(data)} */}
    //     <table
    //       style={{ border: "1px solid #ccc", padding: 12 }}
    //       className="mt-5"
    //     >
    //       <thead>
    //         <th
    //           style={{
    //             border: "1px solid rgb(12, 134, 103)",
    //             padding: "5px 10px",
    //           }}
    //         >
    //           Hotel Name
    //         </th>
    //         <th
    //           style={{
    //             border: "1px solid rgb(12, 134, 103)",
    //             padding: "5px 10px",
    //           }}
    //         >
    //           Hotel City
    //           </th>
    //         {/* <th style={{border: '1px solid #ccc', padding: "5px 10px"}}>Number of Pax</th> */}
    //         <th
    //           style={{
    //             border: "1px solid rgb(12, 134, 103)",
    //             padding: "5px 10px",
    //           }}
    //         >
    //           Category
    //         </th><th
    //           style={{
    //             border: "1px solid rgb(12, 134, 103)",
    //             padding: "5px 10px",
    //           }}
    //         >
    //           View
    //         </th>
    //       </thead>

    //       {data &&
    //         data.map((i) => (
    //           <tbody>
    //             <td
    //               style={{
    //                 border: "1px solid rgb(12, 134, 103)",
    //                 padding: "5px 10px",
    //               }}
    //             >
    //               {i.hotel}
    //             </td>
    //             <td
    //               style={{
    //                 border: "1px solid rgb(12, 134, 103)",
    //                 padding: "5px 10px",
    //               }}
    //             >
                  
    //         </Col>
    //         <Col md={4}>
    //             <label className="Label mt-2">Hotel</label>
    //             <div className='search_input_form'>
    //                 <select
    //                     id="exampleSelect"
    //                     className="app_input3"
    //                     value={form.hotel}
    //                     name="hotel"
    //                     type="select"
    //                     onClick={handleChange}
    //                 >
    //                     <option>Select </option>
    //                 </select>
    //                 <CiSearch   
    //                     className='search_icon'
    //                     onClick={toggle}
    //                 />
    //                 <Modal isOpen={modal} toggle={toggle}size="xl" >
    //                     <HotelReg/>
    //                 </Modal>
    //             </div>
    //             <label className="Label mt-2">Category</label>
    //             <select
    //                 id="exampleSelect"
    //                 className="app_input"
    //                 value={form.category}
    //                 name="category"
    //                 type="select"
    //                 onClick={handleChange}
    //             >
    //                 <option>Select </option>
    //             </select>
    //             <label className="Label mt-2">Print View</label>
    //             <select
    //                 id="exampleSelect"
    //                 className="app_input"
    //                 value={form.print_view}
    //                 name="print_view"
    //                 type="select"
    //                 onClick={handleChange}
    //             >
    //                 <option>Select </option>
    //             </select>
    //         </Col>
    //         <Col md={4}>
    //             <label className="Label mt-2">Hotel City</label>
    //             <select
    //                 id="exampleSelect"
    //                 className="app_input"
    //                 value={form.hotel_city}
    //                 name="hotel_city"
    //                 type="select"
    //                 onClick={handleChange}
    //             >
    //                 <option>Select </option>
    //             </select>
    //             <label className="Label mt-2">Filter Type</label>
    //             <select
    //                 id="exampleSelect"
    //                 className="app_input"
    //                 value={form.filter_type}
    //                 name="filter_type"
    //                 type="select"
    //                 onClick={handleChange}
    //             >
    //                 <option>Select </option>
    //             </select>
    //             <Label className='mt-5'>
    //                 <Input
    //                     type='switch'
    //                     role="switch"
    //                     // name='check'
    //                     checked={check}
    //                     onClick={() => {
    //                         setCheck(!check)
    //                     }}
    //                 /> Allotment Only
    //             </Label>
    //         </Col>
    //     </Row>
    //     <Row>
    //         <Col md= {3}>
    //             <button
    //                 className="app_button p-1"
    //                 style={{ width: 200, backgroundColor: 'rgb(12, 134, 103)', height: 40, marginTop: 30}}
    //                 // onClick={() => goto('/sign-ip')}
    //                 >
    //                 View Record
    //             </button>
    //         </Col>
    //         <Col md= {3}>
    //             <button
    //                 className="app_button bg-danger p-1"
    //                 style={{ width: 200, backgroundColor: 'rgb(12, 134, 103)', height: 40, marginTop: 30}}
    //                 // onClick={() => goto('/sign-ip')}
    //                 >
    //                 Reset
    //             </button>
    //         </Col>
    //         <Col md= {3}>
    //             <button
    //                 className="app_button  p-1"
    //                 style={{ width: 200, backgroundColor: 'orange', height: 40, marginTop: 30}}
    //                 // onClick={() => goto('/sign-ip')}
    //                 >
    //                 Print
    //             </button>
    //         </Col>
    //         <Col md={4}>
    //             <Label className='mt-5'>
    //                 <Input
    //                     type='switch'
    //                     role="switch"
    //                     // name='check'
    //                     checked={check}
    //                     onClick={() => {
    //                         setCheck(!check)
    //                     }}
    //                 /> Allotment Only
    //             </Label>   
    //         </Col>
    //     </Row>
    //     <Row>
    //         {/* <table style={{border: '1px solid #ccc', padding: 12}} className= 'mt-5'>
    //             <thead>
    //                 <tr>
                        
    //                 </tr>
    //                 <tr>
                        
    //                 </tr>
    //                 <th style={{border: '1px solid #ccc'}}>head</th>
    //                 <th style={{border: '1px solid #ccc'}}>head</th>
    //                 <th style={{border: '1px solid #ccc'}}>head</th>
    //                 <th style={{border: '1px solid #ccc'}}>head</th>
    //                 <th style={{border: '1px solid #ccc'}}>head</th>
    //             </thead>
    //             <tbody>
    //                 <td style={{border: '1px solid #ccc'}}>head</td>
    //                 <td style={{border: '1px solid #ccc'}}>head</td>
    //                 <td style={{border: '1px solid #ccc'}}>head</td>
    //                 <td style={{border: '1px solid #ccc'}}>head</td>
    //                 <td style={{border: '1px solid #ccc'}}>head</td>
    //             </tbody>
    //         </table> */}
    //     </Row>
    //     <center><h1 className='mt-5' style={{color:"red"}}><b>COMING SOON !!!</b></h1></center> 
    // </Card>
    <h1>Hello world</h1>
  );
}
