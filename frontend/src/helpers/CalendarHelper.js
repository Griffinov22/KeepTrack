//NOTE THAT THEIR ARE
//months are 0-11

function getFirstDayOfMonth(yearInt, monthInt) {
  //returns day of week in 0-based index
  //adding one to make it return 1-7
  return new Date(yearInt, monthInt, 1).getDay() + 1;
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

  //firstDayOfMonthInt is a an int 1-7 representing the day of the week OF THIS MONTH

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

function getNextMonthDays(prevMonthDaysLength, currMonthLength) {
  //the calendar has 35 spaces
  const nextMonthNum = 35 - (prevMonthDaysLength + currMonthLength);
  const nextMonthArr = [];
  for (let i = 1; i <= nextMonthNum; i++) {
    nextMonthArr.push(i);
  }
  return nextMonthArr;
}

function getCurrMonth() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[new Date().getMonth()];
}

export { getFirstDayOfMonth, getMonthDays, getCurrMonth, getPreviousMonthDays, getNextMonthDays };
