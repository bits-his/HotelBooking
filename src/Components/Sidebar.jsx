import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdDashboard, MdRoomPreferences, MdSafetyDivider } from 'react-icons/md'
import { BiUserPlus } from 'react-icons/bi'
import { MdOutlineBedroomParent } from 'react-icons/md'
import { ImUsers } from 'react-icons/im'
import { RiReservedLine } from 'react-icons/ri'
import Dropdowns from './Dropdown/Dropdown'
import { FaHotel } from 'react-icons/fa'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
export default function Sidebar() {
  const goto = useNavigate()
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [showSubMenuF, setShowSubMenuF] = useState(false)
  const [showSubMenuA, setShowSubMenuA] = useState(false)
  const [showSubMenuO, setShowSubMenuO] = useState(false)
  const [showSubMenuS, setShowSubMenuS] = useState(false)

  const drop = () => {
    setShowSubMenu((p) => !p)
  }
  const dropF = () => {
    setShowSubMenuF((p) => !p)
  }
  const dropA = () => {
    setShowSubMenuA((p) => !p)
  }
  const dropO = () => {
    setShowSubMenuO((p) => !p)
  }
  const dropS = () => {
    setShowSubMenuS((p) => !p)
  }
  return (
    <div className="sidebar_div">
      <h4 className="mt-4 text-white app_title" style={{ fontSize: '26px' }}>
        Hotel Booking
      </h4>
      <div className="link" activeclassName="active">
        <li
          onClick={() => goto('/dashboard')}
          className={`link_item ${
            location.pathname === '/dashboard' && 'active_side_menu'
          }`}
        >
          <MdDashboard className="logo shadow" /> Dashboard
        </li>

        <li className="link_item" onClick={drop}>
          <span>
            <MdDashboard className="logo shadow" /> Create Reservation{' '}
            {showSubMenu ? (
              <TiArrowSortedUp size="1.4rem" />
            ) : (
              <TiArrowSortedDown size="1.4rem" />
            )}
          </span>
        </li>
        {showSubMenu ? (
          <div className="sub_menu">
            <li
              onClick={() => goto('/reservation')}
              className={`link_item ${
                location.pathname === '/reservation' && 'active_side_menu'
              }`}
            >
              Reservation & Availability
            </li>
            <li
              onClick={() => goto('/reservation-details')}
              className={`link_item ${
                location.pathname === '/reservation-details' &&
                'active_side_menu'
              }`}
            >
              Create Reservation
            </li>
            <li
              onClick={() => goto('/agent')}
              className={`link_item ${
                location.pathname === '/agent' && 'active_side_menu'
              }`}
            >
              Create Agent/Supplier
            </li>
          </div>
        ) : (
          ''
        )}
        <li onClick={dropF} className="link_item">
          <span>
            <MdDashboard className="logo shadow" /> Follow Up
            {showSubMenuF ? (
              <TiArrowSortedUp size="1.4rem" />
            ) : (
              <TiArrowSortedDown size="1.4rem" />
            )}
          </span>
        </li>
        {showSubMenuF ? (
          <div className="sub_menu">
            <li onClick={() => goto('#')} className="link_item">
              Hotel Confirmation Pending
            </li>
            <li onClick={() => goto('#')} className="link_item">
              Option Date Warning
            </li>{' '}
            <li onClick={() => goto('#')} className="link_item">
              Audit Booking
            </li>
          </div>
        ) : (
          ''
        )}
        <li onClick={dropA} className="link_item">
          <span>
            <MdDashboard className="logo shadow" /> Allotmnt & Purchases
            {showSubMenuA ? (
              <TiArrowSortedUp size="1.4rem" />
            ) : (
              <TiArrowSortedDown size="1.4rem" />
            )}
          </span>
        </li>
        {showSubMenuA ? (
          <div className="sub_menu">
            <li
              onClick={() => goto('/allotment')}
              className={`link_item ${
                location.pathname === '/allotment' && 'active_side_menu'
              }`}
            >
              Add Allotment
            </li>
            <li onClick={() => goto('#')} className="link_item">
              Pending Purchase Request
            </li>{' '}
            <li onClick={() => goto('#')} className="link_item">
              Hotel Rack
            </li>
            <li onClick={() => goto('#')} className="link_item">
              Check Reservation & Availability
            </li>{' '}
            {/* <li onClick={() => goto('/reservation')} className="link_item">
              Reservations & Availability
            </li> */}
          </div>
        ) : (
          ''
        )}
        <li onClick={dropO} className="link_item">
          <span>
            <MdDashboard className="logo shadow" /> Operations Reports
            {showSubMenuO ? (
              <TiArrowSortedUp size="1.4rem" />
            ) : (
              <TiArrowSortedDown size="1.4rem" />
            )}
          </span>
        </li>
        {showSubMenuO ? (
          <div className="sub_menu">
            <li onClick={() => goto('#')} className="link_item">
              Hotel Reservation Report
            </li>
            <li onClick={() => goto('#')} className="link_item">
              Reports By Agent
            </li>{' '}
          </div>
        ) : (
          ''
        )}

        <li onClick={dropS} className="link_item">
          <span>
            <MdDashboard className="logo shadow" /> Basic Data
            {showSubMenuS ? (
              <TiArrowSortedUp size="1.4rem" />
            ) : (
              <TiArrowSortedDown size="1.4rem" />
            )}
          </span>
        </li>
        {showSubMenuS ? (
          <div className="sub_menu">
            <li onClick={() => goto('/room-type')} className="link_item">
              Create Room type
            </li>
            <li onClick={() => goto('/view')} className="link_item">
              Create Room View
            </li>
            <li onClick={() => goto('/table-meal')} className="link_item">
              Create Meal
            </li>
            <li onClick={() => goto('/country')} className="link_item">
              Country
            </li>
            <li onClick={() => goto('/hotel-chart')} className="link_item">
              Hotel Chart
            </li>
            {/* <li
              onClick={() => goto('/reservation-details')}
              className="link_item"
              
            >
              Reservation Details
            </li> */}
          </div>
        ) : (
          ''
        )}
        <li onClick={() => goto('/hotel-registration')} className="link_item">
          <FaHotel className="logo shadow" />
          Create Hoetel
        </li>

        {/* <li onClick={() => goto('/dashboard')} className="link_item">
          <MdDashboard className="logo shadow" /> Dashboard
          </li>
          <li onClick={() => goto('/agent')} className="link_item">
          <ImUsers className="logo shadow" />
          Agent/Supplier Registration Form
          </li>
        <li onClick={() => goto('/hotel-registration')} className="link_item">
          <FaHotel className="logo shadow" />
          Hotel Registration Form 
        </li>
        <li onClick={() => goto('/room-registration')} className="link_item">
          <MdOutlineBedroomParent className="logo shadow" />
          Rooms Registration Form
        </li>
        <Dropdowns title="SetUp Forms">
          <li
            onClick={() => goto('/room-type')}
            className="link_item"
            style={{ marginLeft: 45, width: '87%' }}
          >
            Create Room type
          </li>
          <li
            onClick={() => goto('/view')}
            className="link_item"
            style={{ marginLeft: 45, width: '87%' }}
          >
            Create Room View
          </li>
          <li
            onClick={() => goto('/table-meal')}
            className="link_item"
            style={{ marginLeft: 45, width: '87%' }}
          >
            Create Meal
          </li>
          <li
            onClick={() => goto('/country')}
            className="link_item"
            style={{ marginLeft: 45, width: '87%' }}
          >
            Country
          </li>
          <li
            onClick={() => goto('/reservation-details')}
            className="link_item"
            style={{ marginLeft: 45, width: '87%' }}
          >
            Reservation Details
          </li>
        </Dropdowns>
        <li onClick={() => goto('/costomer')} className="link_item">
          <BiUserPlus className="logo shadow" />
          Client Registration Form
        </li> */}
        {/* <li onClick={()=>goto('/customers')} className= 'link_item'><ImUsers className='logo shadow'/> Customers</li> */}
        {/* <li onClick={()=>goto('/manage-rooms')} className= 'link_item'><MdRoomPreferences className='logo shadow'/>Manage Rooms</li> */}
        {/* <li onClick={() => goto('/allotment')} className="link_item">
          <MdSafetyDivider className="logo shadow" />
          Allotment
        </li>
        <li onClick={() => goto('/reservation')} className="link_item">
          <RiReservedLine className="logo shadow" />
          Reservation
        </li> */}
      </div>
    </div>
  )
}
