import React, { useState } from 'react'
import { Card } from 'reactstrap'
import '../AppStyles/GeneralStyle.css'
import GuestMovement from './GuestMovement'
import SalesDashboard from './SalesDashboard'

export default function Dashboard() {
  const [page, setPage] = useState(false)

  return (
    <div>
      <Card className="app_card dashboard_card shadow p-3 m-3">
        <div className="switch_div">
          <div>
            <p
              className="login_register"
              style={{
                borderBottom: '1px solid grey',
                paddingBottom: 10,
                // width: 'fit-content',
              }}
            >
              <span
                style={{
                  borderBottom: page ? null : `3px solid rgb(12, 134, 103)`,
                  marginRight: 20,
                  paddingBottom: 10,
                  cursor: 'pointer',
                }}
                onClick={() => setPage(false)}
              >
                Sales
              </span>
              <span
                style={{
                  borderBottom: page ? `3px solid rgb(12, 134, 103)` : null,
                  marginLeft: 20,
                  paddingBottom: 10,
                  cursor: 'pointer',
                }}
                onClick={() => setPage(true)}
              >
                Guest Movement
              </span>
            </p>
          </div>
        </div>
        {!page ? <SalesDashboard /> : <GuestMovement />}
      </Card>
    </div>
  )
}
