//create function that takes object of daily spending amounts
//1. finds total amount spent up to this point
//2. subtracts monthly allowance by the total amount spent in the month
//3. returns that number divided by the remaining days in the month to find
//money they can spend per day without going over their daily limit

const currDate = new Date();
const currDay = new Date().getDate();
const currYear = new Date().getFullYear();
const currMonth = new Date().getMonth();

export const findMonthlyExpenditure = (monthlyData, monthlyAllowance) => {
  const monthlySum = Object.values(monthlyData).reduce(
    (curr, acc) => (curr += acc)
  );
  const leftOverBalance = monthlyAllowance - monthlySum;
  const daysLeftInMonth =
    new Date(currYear, currMonth + 1, 0).getDate() - currDay;

  const dailyAverageLeft = Math.floor(leftOverBalance / daysLeftInMonth);

  return dailyAverageLeft;
};
