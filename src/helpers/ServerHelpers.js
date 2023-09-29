export const checkLogin = async (username, password) => {
  const foundUser = await fetch(`${process.env.REACT_APP_BASE_API_KEY}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const foundUserData = await foundUser.json();

  return foundUserData;
};

export const createUser = async (
  username,
  password,
  monthlyLimit,
  dailyLimit
) => {
  const tryCreate = await fetch(
    `${process.env.REACT_APP_BASE_API_KEY}/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, monthlyLimit, dailyLimit }),
    }
  );
  const createdUser = await tryCreate.json();
  return createdUser;
};

export const addExpense = async (username, password, expense) => {
  const updateUser = await fetch(
    `${process.env.REACT_APP_BASE_API_KEY}/addexpense`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, expense }),
    }
  );
  const updateUserData = await updateUser.json();
  return updateUserData;
};
