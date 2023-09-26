import React, { useState } from "react";
import "../css/App.css";
import {
  getCurrMonth,
  getFirstDayOfMonth,
  getMonthDays,
  getPreviousMonthDays,
} from "../helpers/CalendarHelper";

const Calendar = ({
  currMonthData,
  prevMonthData,
  nextMonthData,
  dayLimit,
}) => {
  const currDate = new Date();
  const currDay = currDate.getDate();
  const currMonthString = getCurrMonth();
  const daysInMonth = getMonthDays(currDate.getFullYear(), currDate.getMonth());

  const prevDays = getPreviousMonthDays(
    getFirstDayOfMonth(currDate.getFullYear(), currDate.getMonth()),
    currDate.getFullYear(),
    currDate.getMonth()
  ).reverse();

  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <h3 className="month">{currMonthString}</h3>
      </div>
      <div className="calendar-weeks">
        <h4 className="weeks-header">Sun</h4>
        <h4 className="weeks-header">Mon</h4>
        <h4 className="weeks-header">Tue</h4>
        <h4 className="weeks-header">Wed</h4>
        <h4 className="weeks-header">Thu</h4>
        <h4 className="weeks-header">Fri</h4>
        <h4 className="weeks-header">Sat</h4>
      </div>
      <div className="month-container">
        {/* previous month days */}
        {prevDays.map((day) => {
          return (
            <div className={"day-container grey"} key={day}>
              <time className="day">{day}</time>
              <p className="day-money">{prevMonthData[day]}</p>
            </div>
          );
        })}
        {/* curr month days */}
        {daysInMonth.map((dayData) => (
          // background of day
          <div
            className={"day-container " + (currDay < dayData ? "grey-bg" : "")}
            key={dayData}
          >
            {/* day in month */}
            <time className="day">{dayData}</time>
            {/* money */}
            <p
              className={
                "day-money " + (currDay === dayData ? "curr-color" : "")
              }
            >
              {currMonthData[dayData]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
