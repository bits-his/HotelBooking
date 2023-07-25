import React from "react";
import { useRoutes } from "react-router-dom";
import Agent from "../Components/Agent";
import Allotment from "../Components/Allotment";
import Allotmentstep from "../Components/Allotmentstep";
// import Allotment from '../Components/Allotment'
import BankDetails from "../Components/BankDetails";
import Country from "../Components/Country";
import CreaateAllotment from "../Components/CreaateAllotment";
import CreacteNewRoom from "../Components/CreacteNewRoom";
import CreacteRoomType from "../Components/CreacteRoomType";
import CreacteView from "../Components/CreacteView";
import CreacteCountry from "../Components/CreateCountry";
import CreacteMeal from "../Components/CreateMeal";
import CreateNewCustomer from "../Components/CreateNewCustomer";
import CreateNewHotel from "../Components/CreateNewHotel";
import CreateReservationDetail from "../Components/CreateReservationDetail";
import CustomerReg from "../Components/CustomerReg";
import Customers from "../Components/Customers";
import Dashboard from "../Components/Dashboard";
import HotelReg from "../Components/HotelReg";
import ViewReservationInvoice from "../Components/Invoices/ViewReservationInvoice";
import ViewCashReceipt from "../Components/Invoices/ViewReservationInvoice";
import Landing from "../Components/Landing";
import ManageRooms from "../Components/ManageRooms";
import Master from "../Components/Master";
import Meal from "../Components/Meal";
import NewAgent from "../Components/NewAgent";
import NewCustomer from "../Components/NewCustomer";
import Reservation from "../Components/Reservation";
import Reserve from "../Components/Reserve";
import RoomReg from "../Components/RoomReg";
import RoomType from "../Components/RoomType";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import View from "../Components/Views";
import AppIndex from "./AppIndex";
import VatInvoiceReport from "../Components/Report/VatInvoiceReport";
import PostPurchaseInvoice from "../Components/Report/PostPurchaseInvoice";
import OptionDateWarning from "../Components/Report/OptionDateWarning";
import AuditBooking from "../Components/Report/AuditBooking";
import AgenPayReport from "../Components/Report/AgenPayReport";
import SupplierPayReport from "../Components/Report/SupplierPayReport";
import TransportReservation from "../Components/CreateTransportReservstion";
import CreateTransportReservstion from "../Components/CreateTransportReservstion";
import ReservationViewDetails from "../Components/ReservationViewDetails";
import ReservationTable from "../Components/Table/ReservationTable";
import AllotmentReport from "../Components/AllotmentReport";
import ViewCancelLetter from "../Components/Invoices/ViewCancelLetter";
import TransportPAyment from "../Components/Report/TransportPAyment";
import TranComfirmPending from "../Components/Report/TranComfirmPending";
import RoomPurchasePaymentPending from "../Components/Report/RoomPurchasePaymentPending";
import SalesInvoice from "../Components/Report/SalesInvoice";
import HotelChart from "../Components/HotelChart";
import FoodSupply from "../Components/FoodSupply";
import FoodSupplyForm from "../Components/FoodSupplyForm";
import ChartofAcc from "../Components/ChartofAcc";
import ReservationTableS from "../Components/ReservationTable";
import ViewJournal from "../Components/ViewJournal";
import JournalReportByDate from "../Components/JournalReportByDate";
import TrialBalance from "../Components/TrialBalance";
import TrialBalWithBal from "../Components/TrialBalWithBal";
import TrialBalbyMasterAcc from "../Components/TrialBalbyMasterAcc";
import BalanceSheet from "../Components/BalanceSheet";
import AccPayalble_Suplier from "../Components/AccPayalble_Suplier";
import AccRecievable_Agent from "../Components/AccRecievable_Agent";
import IncomingStatement from "../Components/IncomingStatement";
import AccStatement from "../Components/AccStatement";
import AccSttWithVisa from "../Components/AccSttWithVisa";
import MonthlyRevenueandExpence from "../Components/MonthlyRevenueandExpence";
import CompareIncomeStt from "../Components/CompareIncomeStt";
import TransportTable from "../Components/Table/TransportTable";
import TransportationTable from "../Components/Table/TransportationTable";
import Location from "../Components/Location";
import LocationTable from "../Components/LocationTable";
import RouteTable from "../Components/RouteTable";
import Routers from "../Components/Routers";
import HotelComfirmation from "../Components/Report/HotelComfirmation";
import RoomPurchasePaymentComfirmationPending from "../Components/Report/RoomPurchasePaymentComfirmationPending";
import TransportTablee from "../Components/TransportTablee";
import Transport from "../Components/Transport";

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <Landing />,
      children: [{ index: true }],
    },
    {
      path: "sign-up",
      element: <SignUp />,
    },
    {
      path: "sign-in",
      element: <SignIn />,
    },
    {
      element: <AppIndex />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/customer-registration",
          element: <CustomerReg />,
        },
        {
          path: "/hotel-registration",
          element: <HotelReg />,
        },
        {
          path: "/create-hotel",
          element: <CreateNewHotel />,
        },
        {
          path: "/creact-new-room",
          element: <RoomReg />,
        },
        {
          path: "/room-registration",
          element: <CreacteNewRoom />,
        },
        {
          path: "/manage-rooms",
          element: <ManageRooms />,
        },
        {
          path: "/customers",
          element: <Customers />,
        },
        {
          path: "/agent",
          element: <Agent />,
        },
        {
          path: "/new-agent/:agent_id",
          element: <Master />,
        },

        {
          path: "/new-agent",
          element: <Master />,
        },
        {
          path: "bank-details",
          element: <BankDetails />,
        },
        {
          path: "create-allotment",
          element: <Allotmentstep />,
        },
        {
          path: "allotment-report",
          element: <AllotmentReport />,
        },
        {
          path: "allotment",
          element: <Allotment />,
        },
        {
          path: "/reservation",
          element: <Reservation />,
        },
        {
          path: "/reservation-details",
          element: <CreateReservationDetail />,
        },
        {
          path: "/reservation-table",
          element: <ReservationTableS />,
        },
        {
          path: "/new-reservation-details",
          element: <CreateReservationDetail />,
        },
        {
          path: "/room-type",
          element: <RoomType />,
        },
        {
          path: "/creact-room-type",
          element: <CreacteRoomType />,
        },
        {
          path: "/view",
          element: <View />,
        },
        {
          path: "create-view",
          element: <CreacteView />,
        },
        {
          path: "/table-meal",
          element: <Meal />,
        },
        {
          path: "/create-meal",
          element: <CreacteMeal />,
        },
        {
          path: "/create-meal/:id",
          element: <CreacteMeal />,
        },
        {
          path: "/country",
          element: <Country />,
        },
        {
          path: "create-country",
          element: <CreacteCountry />,
        },
        {
          path: "costomer",
          element: <NewCustomer />,
        },
        {
          path: "create-new-costomer",
          element: <CreateNewCustomer />,
        },
        {
          path: "/reservation-invoice",
          element: <ViewReservationInvoice />,
        },
        {
          path: "/Report-payment",
          element: <TransportPAyment />,
        },
        {
          path: "/hotel-comfirmation-pending",
          element: <HotelComfirmation />,
        },
        {
          path: "/trans-comfirmation-pending",
          element: <TranComfirmPending />,
        },
        {
          path: "/vat-invoice-report",
          element: <VatInvoiceReport />,
        },
        {
          path: "/room-Purchase",
          element: <RoomPurchasePaymentPending />,
        },
        {
          path: "/sells-invoice-pending",
          element: <SalesInvoice />,
        },
        // {
        //   path: '/cancel-letter',
        //   element: <ViewCancelLetter />,
        // },
        // {
        //   path: '/allotment-report',
        //   element: <AllotmentReport />,
        // },
        {
          path: "/transport-reservation",
          element: <TransportReservation />,
        },
        {
          path: "/create-transport-reservstion",
          element: <CreateTransportReservstion />,
        },
        {
          path: "/post-purchase-invoice",
          element: <PostPurchaseInvoice />,
        },
        {
          path: "/option-date-warning",
          element: <OptionDateWarning />,
        },
        {
          path: "/audit-booking",
          element: <AuditBooking />,
        },
        {
          path: "/agent-pay-schedule-report",
          element: <AgenPayReport />,
        },
        {
          path: "/supplier-pay-schedule-report",
          element: <SupplierPayReport />,
        },
        {
          path: "/transport-reservation",
          element: <TransportReservation />,
        },
        {
          path: "/reservation-view-details",
          element: <ReservationViewDetails />,
        },

        { path: "/cancel-letter", element: <ViewCancelLetter /> },
        {
          path: "/reservation_table",
          element: <ReservationTable />,
        },
        {
          path: "/hotel-chart",
          element: <HotelChart />,
        },
        {
          path: "/food-supplier",
          element: <FoodSupply />,
        },
        {
          path: "/creat-food-supply",
          element: <FoodSupplyForm />,
        },
        {
          path: "/chart-of-accounts",
          element: <ChartofAcc />,
        },
        {
          path: "/view-journal",
          element: <ViewJournal />,
        },
        {
          path: "/journal-report-by-date",
          element: <JournalReportByDate />,
        },
        {
          path: "/Trial-balance",
          element: <TrialBalance />,
        },
        {
          path: "/Trial-balance-with-balance",
          element: <TrialBalWithBal />,
        },
        {
          path: "/Trial-balance-by-master-account",
          element: <TrialBalbyMasterAcc />,
        },
        {
          path: "/balance-sheet",
          element: <BalanceSheet />,
        },
        {
          path: "/account-payable",
          element: <AccPayalble_Suplier />,
        },
        {
          path: "/account-recievable",
          element: <AccRecievable_Agent />,
        },
        {
          path: "/income-statement",
          element: <IncomingStatement />,
        },
        {
          path: "/account-statement",
          element: <AccStatement />,
        },
        {
          path: "/account-statement-with-visa",
          element: <AccSttWithVisa />,
        },
        {
          path: "/monthly-revenue-and-expense",
          element: <MonthlyRevenueandExpence />,
        },
        {
          path: "/compare-incoming-statement",
          element: <CompareIncomeStt />,
        },
        {
          path: "/transport-table",
          element: <TransportTable />,
        },
        {
          path: "/create-transport-reservation",
          element: <TransportationTable />,
        },
        {
          path: "/location_table",
          element: <LocationTable />,
        },
        {
          path: "/location",
          element: <Location />,
        },
        {
          path: "/transport-tablee",
          element: <TransportTablee />,
        },
        {
          path: "/transport",
          element: <Transport />,
        },
        {
          path: "/route_table",
          element: <RouteTable />,
        },
        {
          path: "/route",
          element: <Routers />,
        },
        {
          path: "/room-comfirmation-payment-pending",
          element: <RoomPurchasePaymentComfirmationPending />,
        }
      ],
    },
  ]);
  return element;
}
export default AppNavigation;
