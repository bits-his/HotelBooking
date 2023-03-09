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
                    className="app_button p-4"
                    style={{ width: 200}}
                    onClick={() => goto('/new-agent')}
                    >
                    Add Agent
                </button>
            </Col>
        </Row>
        <Col md={12}>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 100}}>
                {JSON.stringify(data)}
                <label style={{fontSize: 20, display: 'flex', marginRight: 20, width: '100%'}} >Search
                <div className='search'>
                    <input 
                        className='app_input2'
                        type='text'
                        placeholder='Search'
                        name='Search'
                        // value={}
                    />
                    <CiSearch style={{fontSize: 30}}/>
                </div>
                </label>
            </div>
        </Col>
        <Row>
            <table style={{border: '1px solid #ccc', padding: 12}} className= 'mt-5'>
                <thead>
                    <th style={{border: '1px solid #ccc'}}>Action</th>
                    <th style={{border: '1px solid #ccc'}}>Agent Id</th>
                    <th style={{border: '1px solid #ccc'}}>Name</th>
                    <th style={{border: '1px solid #ccc'}}>Phone</th>
                    <th style={{border: '1px solid #ccc'}}>Country</th>
                    <th style={{border: '1px solid #ccc'}}>State</th>
                    <th style={{border: '1px solid #ccc'}}>City</th>
                    <th style={{border: '1px solid #ccc'}}>Zip</th>
                </thead>
              
                    {data&&data.map((i)=>  <tbody>
                      <td style={{border: '1px solid #ccc'}}><center><button onClick={() => goto(`/new-agent/${i.agent_id}`)} className='app_button '>edit</button></center></td>
                         <td style={{border: '1px solid #ccc'}}>{i.agent_id}</td>
                         <td style={{border: '1px solid #ccc'}}>{i.arabic_name}</td>
                         <td style={{border: '1px solid #ccc'}}>{i.phone}</td>
                         <td style={{border: '1px solid #ccc'}}>{i.country}</td>
                         <td style={{border: '1px solid #ccc'}}>{i.state}</td>
                         <td style={{border: '1px solid #ccc'}}>{i.city}</td>
                         <td style={{border: '1px solid #ccc'}}>{i.zipcode}</td> </tbody>
                    )}
                   
               
            </table>
        </Row>

    </Card>
  )
}
