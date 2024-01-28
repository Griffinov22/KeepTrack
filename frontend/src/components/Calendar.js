import React, { useState } from "react";
import "../css/App.css";
import { getCurrMonth, getFirstDayOfMonth, getMonthDays, getPreviousMonthDays, getNextMonthDays } from "../helpers/CalendarHelper";

const Calendar = ({ currSpent, currMonthData, prevMonthData, nextMonthData, dailyLimit }) => {
  const currDate = new Date();
  const currDay = currDate.getDate();
  const currMonthString = getCurrMonth();
  const daysInMonth = getMonthDays(currDate.getFullYear(), currDate.getMonth());

  const prevDays = getPreviousMonthDays(
    getFirstDayOfMonth(currDate.getFullYear(), currDate.getMonth()),
    currDate.getFullYear(),
    currDate.getMonth()
  ).reverse();

  const nextMonthDays = getNextMonthDays(prevDays.length, daysInMonth.length);

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
            <div className={"day-container grey-bg"} key={day}>
              <time className="day">{day}</time>
              <p className="day-money">{prevMonthData[day] || 0}</p>
            </div>
          );
        })}
        {/* curr month days */}
        {daysInMonth.map((day) => (
          // background of day // applies colorful background if day has occured or it is the day
          <div
            className={
              "day-container " +
              (currDay >= day && (currMonthData[day] <= dailyLimit ? "success-bg" : currMonthData[day] >= dailyLimit ? "fail-bg" : "")) +
              (currDay < day ? " light-grey-bg" : "")
            }
            key={day}
          >
            {/* day in month */}
            <time className="day">{day}</time>
            {/* money */}
            <p className={"day-money " + (currDay === day ? "curr-color" : "")}>{day === currDay ? currSpent : currMonthData[day]}</p>
          </div>
        ))}
        {/* next month days */}
        {nextMonthDays.map((day) => (
          <div className={"day-container grey-bg"} key={day}>
            {/* day in next month */}
            <time className="day">{day}</time>
            {/* money */}
            <p className={"day-money "}>0</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
