import React from "react";
import "../css/App.css";
import {
  getMonthLength,
  getFirstDayNameOfMonth,
  getCurrMonth,
} from "../helpers/Calendar";

const Dashboard = () => {
  const currMonth = getCurrMonth();

  return (
    <div className="dashboard-wrapper">
      <div className="flex-row-ends dash-header no-wrap">
        <p className="grey">Today I've spent:</p>
        <p className="bold-6">9/9/2023</p>
      </div>
      <div className="money-wrapper">
        <h2 id="curr-money">8</h2>
      </div>

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
        <div className="week-container">
          <time className="day">1</time>
          <time className="day">2</time>
          <time className="day">3</time>
          <time className="day">4</time>
          <time className="day">5</time>
          <time className="day">6</time>
          <time className="day">7</time>
          <time className="day">8</time>
          <time className="day">9</time>
          <time className="day">10</time>
          <time className="day">11</time>
          <time className="day">12</time>
          <time className="day">13</time>
          <time className="day">14</time>
          <time className="day">15</time>
          <time className="day">16</time>
          <time className="day">17</time>
          <time className="day">18</time>
          <time className="day">19</time>
          <time className="day">20</time>
          <time className="day">21</time>
          <time className="day">22</time>
          <time className="day">23</time>
          <time className="day">24</time>
          <time className="day">25</time>
          <time className="day">26</time>
          <time className="day">27</time>
          <time className="day">28</time>
          <time className="day">20</time>
          <time className="day">30</time>
          <time className="day">31</time>
          <time className="day grey">1</time>
          <time className="day grey">2</time>
          <time className="day grey">3</time>
          <time className="day grey">4</time>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
