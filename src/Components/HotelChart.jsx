import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import { _get } from '../Utils/Helper'
import ScheduleCalendar from './ChartSchedule'

export default function HotelChart() {
    let styles =  {border: '1px solid rgb(12, 134, 103)', padding: '5px 12px'}
    // const monthNames = ['JAN', 'Feb']
    const [results,setResults]=useState([])
    const [header, setHeader] = useState([])
    const [count, setCount] = useState([])
    const [group, setGroup] = useState([])
    const getChart =()=>{
        _get('api/getChart',(resp)=>{
            console.log(resp.results)
            let arr = []
            let _count = []
            // let _group = resp.results.group(({data}) => data)
            resp.results.forEach(i => {
                arr.push(i.date)
                _count.push(i.count_no)
            })
            setHeader(arr)
            setCount(_count)
            // setGroup(_group)
            // let data = {}
            // resp?.results?.forEach((sch) => {
            //   // console.log(monthNames[parseInt(sch.payment_month) - 1])
            //   let scheduleYear = sch.allotment_id
            //   if (Object.keys(data).includes(scheduleYear.toString())) {
            //     data[scheduleYear] = [
            //       ...data[scheduleYear],
            //       {
            //         ...sch,
            //         schedule_status: sch.count_no > 0 ? 'paid' : 'skipped',
            //         schedule_month: monthNames[parseInt(sch.allotment_id) - 1],
            //       },
            //     ]
            //   } else {
            //     data[scheduleYear] = [
            //       {
            //         ...sch,
            //         schedule_status: sch.count_no > 0 ? 'paid' : 'skipped',
            //         schedule_month: monthNames[parseInt(sch.allotment_id) - 1],
            //       },
            //     ]
            //   }
            // })


          setResults(resp.results)
        },(err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getChart()
    },[0])
let resObj = results&&results[0] || {}
// let _group = results.group(({angent}) => angent)
const repeatElement = element => counts =>
Array(counts).fill(element);

  return (
    <Card className="app_card dashboard_card shadow p-3 m-3">
        {/* {JSON.stringify(_group)} */}
        {/* {results && results.length ? <ScheduleCalendar hearders={header}  data={results}/> : ''} */}
        <Row>
            <Col
            md={12}>
            <h5 className="app_title mb-5" style={{ fontSize: 30}}>
                <center >Hotel Chart</center> 
            </h5>
            </Col>
        </Row>
        <Row>
            <table>
            <thead>
                    <tr>
                        <th style={styles}></th>
                        <th style={styles}>Day</th>
                        {header.map(i => <th style={styles}>{moment(i).format('DD')}</th>)}
                    </tr>
                </thead>

                <thead>
                    <tr>
                        <th style={styles}>Reservation ID</th>
                        <th style={styles}>Agent Name ID</th>
                        {header.map(i => <th style={styles}>{moment(i).format('dddd')}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                   
                        <td style={styles}>{resObj.allotment_id}</td>
                        <td style={styles}>{resObj.allotment_id}</td>

                        {count.map(i => <td style={styles}>
                            {i}</td>)}
                    </tr>
                </tbody>
            </table>
        </Row>
    </Card>
  )
}
