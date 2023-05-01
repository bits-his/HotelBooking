import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { AiFillCreditCard, AiOutlineCloseCircle } from 'react-icons/ai'
import {
  IoIosExit,
  IoMdCar,
  IoMdClock,
  IoMdWarning,
  IoIosPeople,
} from 'react-icons/io'
import {
  GiBed,
  GiEntryDoor,
  GiAirplaneDeparture,
  GiAirplaneArrival,
} from 'react-icons/gi'
import { BsHouseFill, BsTruck, BsCheck2Circle } from 'react-icons/bs'
export default function SalesDashboard() {
  return (
    <div>
      <Row>
        <Col md={6}>
          <Card className="p-3" style={{ height: '50vh' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ fontWeight: 'bold' }}>Assetsand Allotment</p>
              <p style={{ fontWeight: 'bold' }}>View Details</p>
            </div>
            <Row>
              <Col md={9}>
                <p className="m-0">Total Allotment Today</p>
              </Col>
              <Col md={3}>
                <button style={{ float: 'right' }} className="app_button mb-1">
                  212
                </button>
              </Col>
              <hr />
              <Col md={9}>
                <p className="m-0">Total Room Sold</p>
              </Col>
              <Col md={3}>
                <button style={{ float: 'right' }} className="app_button mb-1">
                  212
                </button>
              </Col>
              <hr />
              <Col md={9}>
                <p className="m-0">Available Rooms Today</p>
              </Col>
              <Col md={3}>
                <button style={{ float: 'right' }} className="app_button mb-1">
                  212
                </button>
              </Col>
              <hr />
              <Col md={9}>
                <p className="m-0">Occupancy Percentage</p>
              </Col>
              <Col md={3}>
                <button style={{ float: 'right' }} className="app_button mb-1">
                  212
                </button>
              </Col>
              <hr />
            </Row>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-3" style={{ height: '50vh' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ fontWeight: 'bold' }}>Government Affairs</p>
            </div>
            <Row>
              <Col md={6}>
                <Card className="gov_card shadow p-3 mb-3">
                  <AiFillCreditCard
                    size="2rem"
                    className="dashboard_icon mb-2"
                  />
                  <p>
                    Visa Issued: <span style={{ fontWeight: 'bold' }}>0</span>
                  </p>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="gov_card shadow p-3 mb-3">
                  <GiEntryDoor size="2rem" className="dashboard_icon mb-2" />
                  <p>
                    Entry: <span style={{ fontWeight: 'bold' }}>0</span>
                  </p>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="gov_card shadow p-3 mb-3">
                  <IoIosExit size="2rem" className="dashboard_icon mb-2" />
                  <p>
                    Exit: <span style={{ fontWeight: 'bold' }}>0</span>
                  </p>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="gov_card shadow p-3 mb-3">
                  <BsHouseFill size="2rem" className="dashboard_icon mb-2" />
                  <p>
                    In House: <span style={{ fontWeight: 'bold' }}>0</span>
                  </p>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
      <Card className="mt-3 p-3">
        <p style={{ fontWeight: 'bold' }}>Follow Up</p>
        <Row>
          <Col md={3} className="mb-3">
            <Card className="p-2 shadow gov_card">
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <h3>0</h3>
                    </Col>
                    <Col md={6}>
                      <span style={{ float: 'right' }}>
                        <IoMdClock className="dashboard_icon" size="2rem" />
                      </span>
                    </Col>
                  </Row>
                  <p
                    style={{
                      fontSize: 13,
                      color: '#0b3455',
                      fontWeight: 'bold',
                    }}
                  >
                    Pending Purchase Request
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card className="p-2 shadow gov_card">
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <h3>0</h3>
                    </Col>
                    <Col md={6}>
                      <span style={{ float: 'right' }}>
                        <IoMdWarning className="dashboard_icon" size="2rem" />
                      </span>
                    </Col>
                  </Row>
                  <p
                    style={{
                      fontSize: 13,
                      color: '#0b3455',
                      fontWeight: 'bold',
                    }}
                  >
                    Option Date Warning
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card className="p-2 shadow gov_card">
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <h3>0</h3>
                    </Col>
                    <Col md={6}>
                      <span style={{ float: 'right' }}>
                        <GiBed className="dashboard_icon" size="2rem" />
                      </span>
                    </Col>
                  </Row>
                  <p
                    style={{
                      fontSize: 13,
                      color: '#0b3455',
                      fontWeight: 'bold',
                    }}
                  >
                    Hotel Not Confirmed
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card className="p-2 shadow gov_card">
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <h3>0</h3>
                    </Col>
                    <Col md={6}>
                      <span style={{ float: 'right' }}>
                        <IoMdCar className="dashboard_icon" size="2rem" />
                      </span>
                    </Col>
                  </Row>
                  <p
                    style={{
                      fontSize: 13,
                      color: '#0b3455',
                      fontWeight: 'bold',
                    }}
                  >
                    Transport Not Confirmed
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card className="p-2 shadow gov_card">
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <h3>0</h3>
                    </Col>
                    <Col md={6}>
                      <span style={{ float: 'right' }}></span>
                    </Col>
                  </Row>
                  <p
                    style={{
                      fontSize: 13,
                      color: '#0b3455',
                      fontWeight: 'bold',
                    }}
                  >
                    Delay Count
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card className="p-2 shadow gov_card">
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <h3>0</h3>
                    </Col>
                    <Col md={6}>
                      <span style={{ float: 'right' }}>icon</span>
                    </Col>
                  </Row>
                  <p
                    style={{
                      fontSize: 13,
                      color: '#0b3455',
                      fontWeight: 'bold',
                    }}
                  >
                    Executing Pending Count
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
      <Card className="mt-3 p-3">
        <p style={{ fontWeight: 'bold' }}>Logistics</p>
        <Row>
          <Col md={3} className="mb-3">
            <Card className="p-2 shadow gov_card">
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <h3>0</h3>
                    </Col>
                    <Col md={6}>
                      <span style={{ float: 'right' }}>
                        <GiAirplaneArrival
                          className="dashboard_icon"
                          size="2rem"
                        />
                      </span>
                    </Col>
                  </Row>
                  <p
                    style={{
                      fontSize: 13,
                      color: '#0b3455',
                      fontWeight: 'bold',
                    }}
                  >
                    Arrival Count
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card className="p-2 shadow gov_card">
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <h3>0</h3>
                    </Col>
                    <Col md={6}>
                      <span style={{ float: 'right' }}>
                        <IoIosPeople className="dashboard_icon" size="2rem" />
                      </span>
                    </Col>
                  </Row>
                  <p
                    style={{
                      fontSize: 13,
                      color: '#0b3455',
                      fontWeight: 'bold',
                    }}
                  >
                    Arrival Count PAX
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card className="p-2 shadow gov_card">
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <h3>0</h3>
                    </Col>
                    <Col md={6}>
                      <span style={{ float: 'right' }}>
                        <GiAirplaneDeparture
                          className="dashboard_icon"
                          size="2rem"
                        />
                      </span>
                    </Col>
                  </Row>
                  <p
                    style={{
                      fontSize: 13,
                      color: '#0b3455',
                      fontWeight: 'bold',
                    }}
                  >
                    Departure Count
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card className="p-2 shadow gov_card">
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <h3>0</h3>
                    </Col>
                    <Col md={6}>
                      <span style={{ float: 'right' }}>
                        <IoIosPeople className="dashboard_icon" size="2rem" />
                      </span>
                    </Col>
                  </Row>
                  <p
                    style={{
                      fontSize: 13,
                      color: '#0b3455',
                      fontWeight: 'bold',
                    }}
                  >
                    Departure Count
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card className="p-2 shadow gov_card">
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <h3>0</h3>
                    </Col>
                    <Col md={6}>
                      <span style={{ float: 'right' }}>
                        <BsCheck2Circle
                          className="dashboard_icon"
                          size="2rem"
                        />
                      </span>
                    </Col>
                  </Row>
                  <p
                    style={{
                      fontSize: 13,
                      color: '#0b3455',
                      fontWeight: 'bold',
                    }}
                  >
                    Today Check in
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card className="p-2 shadow gov_card">
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <h3>0</h3>
                    </Col>
                    <Col md={6}>
                      <span style={{ float: 'right' }}>
                        <AiOutlineCloseCircle
                          className="dashboard_icon"
                          size="2rem"
                        />
                      </span>
                    </Col>
                  </Row>
                  <p
                    style={{
                      fontSize: 13,
                      color: '#0b3455',
                      fontWeight: 'bold',
                    }}
                  >
                    Today Check out
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  )
}
