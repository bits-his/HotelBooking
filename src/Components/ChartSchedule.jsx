import React, { useState } from "react";
import { Row, Col, Table } from "reactstrap";

function ScheduleCalendar({
  data,
  hideUnpaid = false,
  hearders = [],
  title = "Reservation ID",
}) {
  const getStatusColor = (s) => {
    switch (s) {
      case "unpaid":
        return "bg-grey";
      case "paid":
        return "bg-success";
      case "defaulted":
        return "bg-danger";
      case "uncompleted":
        return "bg-info";
      default:
        return "";
    }
  };

  const status = [
    {
      identifier: true,
      year: "",
      title: "Paid",
      bg: "bg-success",
    },
    {
      identifier: true,
      year: "",
      title: "Defaulted",
      bg: "bg-danger",
    },
    {
      identifier: true,
      year: "",
      title: "Uncompleted",
      bg: "bg-info",
      hide: hideUnpaid,
    },
    {
      identifier: true,
      year: "",
      title: "Unpaid",
      bg: "bg-grey",
      hide: hideUnpaid,
    },
  ];

  return (
    <>
      <Row className="justify-content-end">
        {status &&
          status.map((state) => {
            if (state.hide) return null;
            else
              return (
                <Col sm={2}>
                  {
                    <>
                      <div className="text-center" style={{ fontSize: 12 }}>
                        {state.identifier ? state.title : "-"}
                      </div>
                      <div className={`card p-2 ${state.bg}  h-20 text-center`}>
                        {state.year}
                      </div>
                    </>
                  }
                </Col>
              );
          })}
      </Row>

      <Row>
        <Table className="table-borderless responsive">
          <thead>
            <tr>
              <th className="text-center font-weight-bold">
                {title || "Reservation ID"}
              </th>
              {hearders &&
                hearders.map((month) => (
                  <th className="text-center font-weight-bold">{month}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data.map((it) => {
              return (
                <tr>
                  <td className=" p-0 text-center ">{it}</td>
                  {hearders.map((m) => {
                    let currentMonth = data[it].find((a) => a.date === m);
                    return (
                      <td
                        className={`p-0 rounded ${getStatusColor(
                          currentMonth?.date
                        )} border border-white-1 `}
                      ></td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </>
  );
}

export default ScheduleCalendar;
