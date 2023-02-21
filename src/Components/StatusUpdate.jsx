import React from 'react'
import {  Input, Label } from 'reactstrap'
import CompositeCard from '../CustomComponents/CompositeCard'
export default function StatusUpdate() {
  return (
    <div className="p-3">
      <center>
        <CompositeCard title="Room 1">
          <div
            className=""
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <Label className="labeler">
              <Input checked className="checkbox" type="checkbox" />
              Occupied
            </Label>
            <Label className="labeler">
              <Input className="checkbox" type="checkbox" />
              Cleaned
            </Label>
            <Label className="labeler">
              <Input className="checkbox" type="checkbox" />
              Checkout
            </Label>
          </div>
        </CompositeCard>
      </center>
    </div>
  )
}
