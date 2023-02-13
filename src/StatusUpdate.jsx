import React from 'react'
import { Card, Col } from 'reactstrap'
import CompositeCard from './Component/CompositeCard'

export default function StatusUpdate() {
  return (
    <div className='mt-3'>
        <center>
            <Col md= {5}>
                <Card body>
                    <CompositeCard title= 'Room 1'>
                        <div className='card_body'>
                            <button className='card_button'> Occupied </button>
                            <button className='card_button1'> Cleaned </button>
                            <button className='card_button2'> Checkout </button>
                        </div>
                    </CompositeCard>
                    <CompositeCard title= 'Room 2'>
                        <div className='card_body'>
                            <button className='card_button'> Occupied </button>
                            <button className='card_button1'> Cleaned </button>
                            <button className='card_button2'> Checkout </button>
                        </div>
                    </CompositeCard>
                    <CompositeCard title= 'Room 3'>
                        <div className='card_body'>
                            <button className='card_button'> Occupied </button>
                            <button className='card_button1'> Cleaned </button>
                            <button className='card_button2'> Checkout </button>
                        </div>
                    </CompositeCard>
                    <CompositeCard title= 'Room 4'>
                        <div className='card_body'>
                            <button className='card_button'> Occupied </button>
                            <button className='card_button1'> Cleaned </button>
                            <button className='card_button2'> Checkout </button>
                        </div>
                    </CompositeCard>
                </Card>
            </Col>
        </center>
            
    </div>
  )
}
