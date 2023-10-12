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

export const getUser = async (username, password) => {
  const tryFetch = await fetch(
    `${process.env.REACT_APP_BASE_API_KEY}/getuser`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }
  );
  const fetchedUser = await tryFetch.json();
  return fetchedUser;
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

export const setUserLimits = async (
  username,
  password,
  dailyLimit,
  monthlyLimit
) => {
  const updatedUser = await fetch(
    `${process.env.REACT_APP_BASE_API_KEY}/setLimits`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, dailyLimit, monthlyLimit }),
    }
  );
  const updatedUserLimits = await updatedUser.json();
  return updatedUserLimits;
};
