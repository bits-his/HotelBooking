import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Input, Label, Row } from 'reactstrap'
import { _post } from '../Utils/Helper'


export default function Agent() {
  const goto = useNavigate()
const [data,setData]=useState([])

  const getAgent = ()=>{
    _post(
        'api/bank_account_details',
        {},
        (res) => {
          
        //   navigate(`/agent`)
          console.log(res)
          setData(res.results)
        },
        (err) => {
          // setLoading(false)
          console.log(err)
        },
      )
      // console.log(form)
    }
  
  useEffect(() => {
    getAgent()
  }, [])

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
        <Row>
            <Col md= {12}>
                <button
                    className="app_button p-3"
                    style={{ width: 200}}
                    onClick={() => goto('/new-agent')}
                    >
                    Add Agent
                </button>
            </Col>
        </Row>
        <div className='card_div'>
          <Col md={12}>
              <div style={{display: 'flex', flexDirection: 'row', marginTop: 50}}>
                  {/* {JSON.stringify(data)} */}
                  <label className='label_title' >Search</label>
                  <div className='search'>
                    <CiSearch style={{fontSize: 30}}/>
                      <input 
                          className='app_input2'
                          type='text'
                          placeholder='Search'
                          name='Search'
                          // value={}
                      />
                  </div>
              </div>
          </Col>
          <Row>
                <table style={{border: '1px solid rgb(12, 134, 103)', padding: 12}} className= 'mt-5'>
                  <thead>
                      <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Agent Id</th>
                      <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Name</th>
                      <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Phone</th>
                      <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Country</th>
                      <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>State</th>
                      <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>City</th>
                      <th style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>Zip</th>
                  </thead>
                
                      {data&&data.map((i)=>  <tbody>
                          <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>{i.agent_id}</td>
                          <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>{i.agent_name}</td>
                          <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>{i.phone}</td>
                          <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>{i.country}</td>
                          <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>{i.state}</td>
                          <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>{i.city}</td>
                          <td style={{border: '1px solid rgb(12, 134, 103)', padding: "5px 10px"}}>{i.zipcode}</td> </tbody>
                      )}
              </table>
          </Row>
        </div>
    </Card>
  )
}
