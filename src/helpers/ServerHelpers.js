export const checkLogin = async (username, password) => {
  const foundUser = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const foundUserData = await foundUser.json();

  return foundUserData;
};
