import React from 'react'
import { Card, CardBody, CardText, Col } from 'reactstrap'

export default function CompositeCard(props) {
  return (
    <div>
        <Col md= {12}>
            <Card body style={{}}>
                {props.title&&<CardText className='card_tittle'>{props.title}</CardText>}
                <CardBody>
                    {props.children}
                </CardBody>
            </Card>
        </Col>
    </div>
  )
}