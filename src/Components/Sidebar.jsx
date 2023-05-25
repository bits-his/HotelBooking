import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdRoomPreferences,
  MdSafetyDivider,
} from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";
import { MdOutlineBedroomParent } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { RiReservedLine } from "react-icons/ri";
import Dropdowns from "./Dropdown/Dropdown";
import { FaHotel } from "react-icons/fa";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
export default function Sidebar() {
  const goto = useNavigate();
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenuF, setShowSubMenuF] = useState(false);
  const [showSubMenuA, setShowSubMenuA] = useState(false);
  const [showSubMenuO, setShowSubMenuO] = useState(false);
  const [showSubMenuS, setShowSubMenuS] = useState(false);
  const [showSubMenuT, setShowSubMenuT] = useState(false);
  const [showSubMenu1, setShowSubMenu1] = useState(false);
  const drop1 = () => {
    setShowSubMenu1((p) => !p);
  };
  const drop = () => {
    setShowSubMenu((p) => !p);
  };
  const dropF = () => {
    setShowSubMenuF((p) => !p);
  };
  const dropA = () => {
    setShowSubMenuA((p) => !p);
  };
  const dropO = () => {
    setShowSubMenuO((p) => !p);
  };
  const dropS = () => {
    setShowSubMenuS((p) => !p);
  };
  const dropt = () => {
    setShowSubMenuT((p) => !p);
  };
  return (
    <div className="sidebar_div">
      <h4 className="mt-4 text-white app_title" style={{ fontSize: "26px" }}>
        Hotel Booking
      </h4>
      <div className="link" activeclassName="active">
        <li
          onClick={() => goto("/dashboard")}
          className={`link_item ${
            location.pathname === "/dashboard" && "active_side_menu"
          }`}
        >
          <MdDashboard className="logo shadow" /> Dashboard
        </li>

        <li className="link_item" onClick={drop}>
          <span>
            <MdDashboard className="logo shadow" /> Create Reservation{" "}
            {showSubMenu ? (
              <TiArrowSortedUp size="1.4rem" />
            ) : (
              <TiArrowSortedDown size="1.4rem" />
            )}
          </span>
        </li>
        {showSubMenu ? (
          <div className="sub_menu">
            {/* <li
              onClick={() => goto('/reservation')}
              className={`link_item ${
                location.pathname === '/reservation' && 'active_side_menu'
              }`}
            >
              Reservation & Availability
            </li> */}
            <li
              onClick={() => goto("/reservation-table")}
              className={`link_item ${
                location.pathname === "/reservation-table" && "active_side_menu"
              }`}
            >
              Create Reservation
            </li>
            <li
              onClick={() => goto("/transport-table")}
              className={`link_item ${
                location.pathname === "/transport-table" &&
                "active_side_menu"
              }`}
            >
              Create Transport Reservstion
            </li>
            <li
              onClick={() => goto("/agent")}
              className={`link_item ${
                location.pathname === "/agent" && "active_side_menu"
              }`}
            >
              Create Agent/Supplier
            </li>
            {/* <li
              onClick={() => goto("/reservation-view-details")}
              className={`link_item ${
                location.pathname === "/reservation-view-details" && "active_side_menu"
              }`}
            >
              Reservation Details View 
            </li> */}
          </div>
        ) : (
          ""
        )}
        {/* <li onClick={dropF} className="link_item">
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
            <li
              onClick={() => goto("#")}
              className={`link_item ${
                location.pathname === "#" && "active_side_menu"
              }`}
            >
              Hotel Confirmation Pending
            </li>
            <li onClick={() => goto("#")} className="link_item">
              Option Date Warning
            </li>{" "}
            <li onClick={() => goto("#")} className="link_item">
              Audit Booking
            </li>
          </div>
        ) : (
          ""
        )} */}
        
        <li onClick={drop1} className="link_item">
          <span>
            <MdDashboard className="logo shadow" /> Follow Up
            {showSubMenu1 ? (
              <TiArrowSortedUp size="1.4rem" />
            ) : (
              <TiArrowSortedDown size="1.4rem" />
            )}
          </span>
        </li>
        {showSubMenu1 ? (
          <div className="sub_menu">
            <li
              onClick={() => goto("/Report-payment")}
              className={`link_item ${
                location.pathname === "/Report-payment" && "active_side_menu"
              }`}
            >
              Transport Payment Pending
            </li>
            <li
              onClick={() => goto("/hotel-comfirmation-pending")}
              className={`link_item ${
                location.pathname === "/hotel-comfirmation-pending" &&
                "active_side_menu"
              }`}
            >
              Hotel Comfirmation Pending
            </li>
            <li
              onClick={() => goto("/trans-comfirmation-pending")}
              className={`link_item ${
                location.pathname === "/trans-comfirmation-pending" &&
                "active_side_menu"
              }`}
            >
              Transport Comfirmation Pending
            </li>
            <li
              onClick={() => goto("/room-Purchase")}
              className={`link_item ${
                location.pathname === "/room-Purchase" && "active_side_menu"
              }`}
            >
              Room Purchase Payment Pending
            </li>
            <li
              onClick={() => goto("/sells-invoice-pending")}
              className={`link_item ${
                location.pathname === "/sells-invoice-pending" &&
                "active_side_menu"
              }`}
            >
              Sells Invoice Pending to Post
            </li>
            <li
              onClick={() => goto("/vat-invoice-report")}
              className={`link_item ${
                location.pathname === "/vat-invoice-report" &&
                "active_side_menu"
              }`}
            >
              Vat Invoice Report
            </li>
            <li
              onClick={() => goto("/post-purchase-invoice")}
              className={`link_item ${
                location.pathname === "/post-purchase-invoice" &&
                "active_side_menu"
              }`}
            >
              Post Purchase Incoice
            </li>
            <li
              onClick={() => goto("/option-date-warning")}
              className={`link_item ${
                location.pathname === "/option-date-warning" &&
                "active_side_menu"
              }`}
            >
              Option Date Warning
            </li>
            <li
              onClick={() => goto("/audit-booking")}
              className={`link_item ${
                location.pathname === "/audit-booking" && "active_side_menu"
              }`}
            >
              Audit Booking
            </li>
            <li
              onClick={() => goto("/agent-pay-schedule-report")}
              className={`link_item ${
                location.pathname === "/agent-pay-schedule-report" &&
                "active_side_menu"
              }`}
            >
              Agent Pay Schedule Report
            </li>
            <li
              onClick={() => goto("/supplier-pay-schedule-report")}
              className={`link_item ${
                location.pathname === "/supplier-pay-schedule-report" &&
                "active_side_menu"
              }`}
            >
              Supplier Pay Schedule Report
            </li>
            
            {/* <li
              onClick={() => goto('/reservation-details')}
              className="link_item"
              
            >
              Reservation Details
            </li> */}
          </div>
        ) : (
          ""
        )}
        <li onClick={dropA} className="link_item">
          <span>
            <MdDashboard className="logo shadow" /> Altmnt & Purchases
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
              onClick={() => goto("/allotment")}
              className={`link_item ${
                location.pathname === "/allotment" && "active_side_menu"
              }`}
            >
              Add Allotment
            </li>
            <li onClick={() => goto("#")} className="link_item">
              Pending Purchase Request
            </li>{" "}
            <li onClick={() => goto("#")} className="link_item">
              Hotel Rack
            </li>
            <li onClick={() => goto("#")} className="link_item">
              Check Reservation & Availability
            </li>{" "}
            <li onClick={() => goto("/allotment-report")} className="link_item">
              Allotment Report
            </li>{" "}
            {/* <li onClick={() => goto('/reservation')} className="link_item">
              Reservations & Availability
            </li> */}
          </div>
        ) : (
          ""
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
            <li onClick={() => goto("#")} className="link_item">
              Hotel Reservation Report
            </li>
            <li onClick={() => goto("#")} className="link_item">
              Reports By Agent
            </li>{" "}
          </div>
        ) : (
          ""
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
            <li
              onClick={() => goto("/room-type")}
              className={`link_item ${
                location.pathname === "/room-type" && "active_side_menu"
              }`}
            >
              Create Room type
            </li>
            <li
              onClick={() => goto("/view")}
              className={`link_item ${
                location.pathname === "/view" && "active_side_menu"
              }`}
            >
              Create Room View
            </li>
            <li
              onClick={() => goto("/table-meal")}
              className={`link_item ${
                location.pathname === "/table-meal" && "active_side_menu"
              }`}
            >
              Create Meal
            </li>
            <li
              onClick={() => goto("/country")}
              className={`link_item ${
                location.pathname === "/country" && "active_side_menu"
              }`}
            >
              Country
            </li>
            <li
              onClick={() => goto("/food-supplier")}
              className={`link_item ${
                location.pathname === "/food-supplier" && "active_side_menu"
              }`}
            >
              Create Food Suppler
            </li>
            <li
              onClick={() => goto("/hotel-chart")}
              className={`link_item ${
                location.pathname === "/hotel-chart" && "active_side_menu"
              }`}
            >
              Hotel Chart
            </li>
            <li
              onClick={() => goto('/location_table')}
              className={`link_item ${
                location.pathname === "/location_table" && "active_side_menu"
              }`}
            >
              Location
            </li>
            <li
              onClick={() => goto('/route_table')}
              className={`link_item ${
                location.pathname === "/route_table" && "active_side_menu"
              }`}
            >
              Route
            </li>
          </div>
        ) : (
          ""
        )}
        <li className="link_item" onClick={dropt}>
          <span>
            <MdDashboard className="logo shadow" /> Financial Report{" "}
            {showSubMenuT ? (
              <TiArrowSortedUp size="1.4rem" />
            ) : (
              <TiArrowSortedDown size="1.4rem" />
            )}
          </span>
        </li>
        {showSubMenuT ? (
          <div className="sub_menu">
            <li
              onClick={() => goto("/view-journal")}
              className={`link_item ${
                location.pathname === "/view-journal" && "active_side_menu"
              }`}
            >
              View Journal
            </li>
            <li
              onClick={() => goto("/journal-report-by-date")}
              className={`link_item ${
                location.pathname === "/journal-report-by-date" &&
                "active_side_menu"
              }`}
            >
              Journal Report by Date
            </li>
            <li
              onClick={() => goto("/Trial-balance")}
              className={`link_item ${
                location.pathname === "/Trial-balance" && "active_side_menu"
              }`}
            >
              Trial Balance
            </li>
            <li
              onClick={() => goto("/Trial-balance-with-balance")}
              className={`link_item ${
                location.pathname === "/Trial-balance-with-balance" &&
                "active_side_menu"
              }`}
            >
              Trial Balance With Balance
            </li>
            <li
              onClick={() => goto("/Trial-balance-by-master-account")}
              className={`link_item ${
                location.pathname === "/Trial-balance-by-master-account" &&
                "active_side_menu"
              }`}
            >
              Trial Balance by Master Account
            </li>
            <li
              onClick={() => goto("/balance-sheet")}
              className={`link_item ${
                location.pathname === "/balance-sheet" &&
                "active_side_menu"
              }`}
            >
              Balance Sheet
            </li>
            <li
              onClick={() => goto("/account-payable")}
              className={`link_item ${
                location.pathname === "/account-payable" &&
                "active_side_menu"
              }`}
            >
              Account Payable / supplier
            </li>
            <li
              onClick={() => goto("/account-recievable")}
              className={`link_item ${
                location.pathname === "/account-recievable" &&
                "active_side_menu"
              }`}
            >
              Account Recievable / Agent
            </li>
            <li
              onClick={() => goto("/income-statement")}
              className={`link_item ${
                location.pathname === "/income-statement" &&
                "active_side_menu"
              }`}
            >
              Income Statement
            </li>
            <li
              onClick={() => goto("/account-statement")}
              className={`link_item ${
                location.pathname === "/account-statement" &&
                "active_side_menu"
              }`}
            >
              Account Statement
            </li>
            <li
              onClick={() => goto("/account-statement-with-visa")}
              className={`link_item ${
                location.pathname === "/account-statement-with-visa" &&
                "active_side_menu"
              }`}
            >
              Account Statement with Visa
            </li>
            <li
              onClick={() => goto("/monthly-revenue-and-expense")}
              className={`link_item ${
                location.pathname === "/monthly-revenue-and-expense" &&
                "active_side_menu"
              }`}
            >
              Monthly Revenue And Expense
            </li>
            <li
              onClick={() => goto("/compare-incoming-statement")}
              className={`link_item ${
                location.pathname === "/compare-incoming-statement" &&
                "active_side_menu"
              }`}
            >
              Compare Incoming Statement
            </li>
          </div>
        ) : (
          ""
        )}
        <li
          onClick={() => goto("/hotel-registration")}
          className={`link_item ${
            location.pathname === "/hotel-registration" && "active_side_menu"
          }`}
        >
          <FaHotel className="logo shadow" />
          Create Hoetel
        </li>
        <li
          onClick={() => goto("/chart-of-accounts")}
          className={`link_item ${
            location.pathname === "/chart-of-accounts" && "active_side_menu"
          }`}
        >
          <FaHotel className="logo shadow" />
          Chart of Accounts
        </li>

        {/* <li
          onClick={() => goto('/create-transport-reservstion')}
          className="link_item"
        >
          <FaHotel className="logo shadow" />
          Transport Reservation
        </li> */}

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
  );
}
