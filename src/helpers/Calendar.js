//months are 0-11

function getFirstDayNameOfMonth(monthInt, yearInt) {
  //zero based
  return new Date(yearInt, monthInt, 1).toLocaleString("en-us", {
    weekday: "long",
  });
}

function getMonthLength(monthInt, yearInt) {
  //returns the last day of the current month by asking for the 0'th day
  console.log(new Date(yearInt, monthInt + 1, 0));
  return new Date(yearInt, monthInt + 1, 0).getDate();
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

export { getFirstDayNameOfMonth, getMonthLength, getCurrMonth };
