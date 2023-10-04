//create function that takes object of daily spending amounts
//1. finds total amount spent up to this point
//2. subtracts monthly allowance by the total amount spent in the month
//3. returns that number divided by the remaining days in the month to find
//money they can spend per day without going over their daily limit

const currDate = new Date();
const currDay = currDate.getDate();
const currYear = currDate.getFullYear();
const currMonth = currDate.getMonth();

export const dailyAverageLeft = (monthlyData, monthlyLimit) => {
  const monthlySum = Object.values(monthlyData).reduce(
    (curr, acc) => (curr += acc)
  );
  const leftOverBalance = monthlyLimit - monthlySum;
  //the +1 on the end counts for the current day
  const daysLeftInMonth =
    new Date(currYear, currMonth + 1, 0).getDate() - currDay + 1;

  const dailyAverageLeft = Math.floor(leftOverBalance / daysLeftInMonth);

  return dailyAverageLeft;
};

export const moneyLeftInCurrMonth = (monthlyData, monthlyLimit) => {
  const monthlySum = Object.values(monthlyData).reduce(
    (curr, acc) => (curr += acc)
  );
  return Math.floor(monthlyLimit - monthlySum);
};

export const moneyLeftInCurrDay = (currSpent, dailyLimit) => {
  return Math.floor(dailyLimit - currSpent);
};

//function returns an array that has the word in the first position and the boolean value as the second position. If user hasn't spent over their monthly Limit, // ['on', true]. The wording completes the phrase '(on/off) track'
export const onTrackArray = (monthlyData, monthlyLimit) => {
  const hasNotOverSpent = moneyLeftInCurrMonth(monthlyData, monthlyLimit) >= 0;

  return hasNotOverSpent ? ["on", true] : ["off", false];
};
