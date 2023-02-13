import React from 'react'
import { Card, CardBody, CardHeader, CardText, CardTitle, Col } from 'reactstrap'

export default function CompositeCard(props) {
  return (
    <div>
        <Col md= {12}>
            <Card body style={{display: 'flex', flexDirection: 'row', padding: 30, marginBottom: 10}}>
                {props.title&&<CardText className='card_tittle'>{props.title}</CardText>}
                <CardBody>
                    {props.children}
                </CardBody>
            </Card>
        </Col>
    </div>
  )
}