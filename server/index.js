const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect(`${process.env.MONGOOSE_CONNECTION}`, {});

app.get("/getUsers", async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

app.post("/login", async ({ body }, res) => {
  const foundUser = await UserModel.findOne({
    username: body.username,
    password: body.password,
  });
  if (foundUser) {
    res.json(foundUser);
  } else {
    res.json({ error: "could not find profile with that username / password" });
  }
});

app.listen(3001, () => {
  console.log("listening on port http://localhost:3001");
});
