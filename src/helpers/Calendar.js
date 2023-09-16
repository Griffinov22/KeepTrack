//months are 0-11

function getFirstDayNameOfMonth(monthInt, yearInt) {
  //zero based
  return new Date(yearInt, monthInt, 1).toLocaleString("en-us", {
    weekday: "short",
  });
}

function getMonthLength(monthInt, yearInt) {
  //returns the last day of the current month by asking for the 0'th day
  return new Date(yearInt, monthInt + 1, 0).getDate();
}

function getPreviousMonthDays(firstDayOfMonthInt, currMonthInt, yearInt) {
  //returns array of greyed out days of the previous month
  //if first day is Wednesday => [31,30,29] (sun, mon, tues)

  //max day of previous month
  let prevMonthMax = new Date(yearInt, currMonthInt, 0).getDate();
  const prevDays = [];

  //if day is wed => first day => 4 => return [31,30,29]
  for (let i = firstDayOfMonthInt; i > 0; i--) {
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
  getMonthLength,
  getCurrMonth,
  getPreviousMonthDays,
};
