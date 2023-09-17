import React from "react";
import "../css/App.css";
import {
  getCurrMonth,
  getFirstDayNameOfMonth,
  getMonthDays,
  getPreviousMonthDays,
} from "../helpers/CalendarHelper";

const Calendar = () => {
  const todaysDate = new Date();
  const currMonth = getCurrMonth();
  const daysInMonth = getMonthDays(
    todaysDate.getFullYear(),
    todaysDate.getMonth()
  );
  const prevDays = getPreviousMonthDays(
    todaysDate.getDay(),
    todaysDate.getFullYear(),
    todaysDate.getMonth()
  ).reverse();
  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <h3 className="month">{currMonth}</h3>
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
        {prevDays.map((day) => (
          <div className={"day-container grey"} key={day}>
            <time className="day">{day}</time>
            <p className="day-money">0</p>
          </div>
        ))}
        {daysInMonth.map((day) => (
          <div
            className={
              "day-container " +
              (todaysDate.getDate() === day
                ? "curr-color"
                : todaysDate.getDate() < day
                ? "grey-bg"
                : "")
            }
            key={day}
          >
            <time className="day">{day}</time>
            <p className="day-money">0</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
