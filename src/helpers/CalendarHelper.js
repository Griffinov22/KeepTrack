//NOTE THAT THEIR ARE
//months are 0-11

function getFirstDayNameOfMonth(yearInt, monthInt) {
  //zero based
  return new Date(yearInt, monthInt, 1).toLocaleString("en-us", {
    weekday: "short",
  });
}

function getMonthDays(yearInt, monthInt) {
  //returns the last day of the current month by asking for the 0'th day
  const MonthLength = new Date(yearInt, monthInt + 1, 0).getDate();
  const MonthArr = [];
  for (let i = 1; i <= MonthLength; i++) {
    MonthArr.push(i);
  }
  return MonthArr;
}

function getPreviousMonthDays(firstDayOfMonthInt, yearInt, currMonthInt) {
  //returns array of greyed out days of the previous month
  //if first day is Wednesday => [31,30,29] (sun, mon, tues)

  //max day of previous month
  let prevMonthMax = new Date(yearInt, currMonthInt, 0).getDate();
  const prevDays = [];

  //if day is wed => first day => 4 => return [31,30,29]
  for (let i = firstDayOfMonthInt - 1; i > 0; i--) {
    prevDays.push(prevMonthMax);
    prevMonthMax--;
  }
  return prevDays;
}

function getCurrMonth() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[new Date().getMonth()];
}

export {
  getFirstDayNameOfMonth,
  getMonthDays,
  getCurrMonth,
  getPreviousMonthDays,
};
