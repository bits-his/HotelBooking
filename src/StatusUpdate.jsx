import React from 'react'
import { Card, Col, Input, Label  } from 'reactstrap'
import CompositeCard from './Component/CompositeCard'

export default function StatusUpdate() {
  return (
    <div className='mt-3'>
        <center>
            <Col md= {5}>
                <Card body>
                    <CompositeCard title= 'Room 1'>
                        <div className='card_body' style={{display: "flex", flexDirection: 'row', justifyContent: "space-around"}}>
                            <Label className='labeler'>
                                <Input checked
                                    className='checkbox'
                                    type='checkbox'
                                />Occupied
                            </Label>
                            <Label className='labeler'>
                                <Input 
                                    className='checkbox'
                                    type='checkbox'
                                />Cleaned
                            </Label>
                            <Label className='labeler'>
                                <Input 
                                    className='checkbox'
                                    type='checkbox'
                                />Checkout
                            </Label>
                        </div>
                    </CompositeCard>
                    <CompositeCard title= 'Room 2'>
                        <div className='card_body' style={{display: "flex", flexDirection: 'row', justifyContent: "space-around"}}>
                            <Label className='labeler'>
                                <Input 
                                    className='checkbox'
                                    type='checkbox'
                                />Occupied
                            </Label>
                            <Label className='labeler'>
                                <Input checked
                                    className='checkbox'
                                    type='checkbox'
                                />Cleaned
                            </Label>
                            <Label className='labeler'>
                                <Input 
                                    className='checkbox'
                                    type='checkbox'
                                />Checkout
                            </Label>
                        </div>
                    </CompositeCard>
                    <CompositeCard title= 'Room 3'>
                        <div className='card_body' style={{display: "flex", flexDirection: 'row', justifyContent: "space-around"}}>
                            <Label className='labeler'>
                                <Input 
                                    className='checkbox'
                                    type='checkbox'
                                />Occupied
                            </Label>
                            <Label className='labeler'>
                                <Input 
                                    className='checkbox'
                                    type='checkbox'
                                />Cleaned
                            </Label>
                            <Label className='labeler'>
                                <Input checked
                                    className='checkbox'
                                    type='checkbox'
                                />Checkout
                            </Label>
                        </div>
                    </CompositeCard>
                    <CompositeCard title= 'Room 4'>
                        <div className='card_body' style={{display: "flex", flexDirection: 'row', justifyContent: "space-around"}}>
                            <Label className='labeler'>
                                <Input checked
                                    className='checkbox'
                                    type='checkbox'
                                />Occupied
                            </Label>
                            <Label className='labeler'>
                                <Input 
                                    className='checkbox'
                                    type='checkbox'
                                />Cleaned
                            </Label>
                            <Label className='labeler'>
                                <Input 
                                    className='checkbox'
                                    type='checkbox'
                                />Checkout
                            </Label>
                        </div>
                    </CompositeCard>
                </Card>
            </Col>
        </center>
            
    </div>
  )
}
