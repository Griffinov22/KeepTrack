const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const { yearSchema, yearObj } = require("./models/Year");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect(`${process.env.MONGOOSE_CONNECTION}`, {});

//date elements
const date = new Date();
const currYear = date.getFullYear();
const currMonth = date.getMonth();
const currDay = date.getDate();

app.post("/login", async ({ body }, res) => {
  const foundUser = await UserModel.findOne({
    username: body.username,
    password: body.password,
  });
  if (foundUser) {
    const currYear = new Date().getFullYear();

    //check if user has this years data property
    if (!Object.hasOwn(foundUser.data, `${currYear}`)) {
      await UserModel.updateOne(
        { _id: foundUser._id },
        { $set: { [`data.${currYear}`]: yearObj } },
        { strict: false }
      );
      await foundUser.save();
    }

    res.json({ username: foundUser.username, password: foundUser.password });
  } else {
    res.json({ error: "could not find profile with that username / password" });
  }
});

app.post("/signup", async ({ body }, res) => {
  if (body.username && body.password && body.monthlyLimit && body.dailyLimit) {
    const newUser = await UserModel.create({
      username: body.username,
      password: body.password,
      monthlyLimit: body.monthlyLimit,
      dailyLimit: body.dailyLimit,
    });

    res.json({
      success: true,
      username: newUser.username,
      password: newUsername.password,
    });
  } else {
    res.json({ error: "Did not receive username and password" });
  }
});

app.post("/getuser", async ({ body }, res) => {
  if (body.username && body.password) {
    const foundUser = await UserModel.findOne({
      username: body.username,
      password: body.password,
    });
    if (foundUser) {
      res.json(foundUser);
    } else {
      res.json({ error: "could not profile data" });
    }
  } else {
    res.json({ error: "username or password was not given" });
  }
});

app.post("/addExpense", async ({ body }, res) => {
  const foundUser = await UserModel.findOne({
    username: body.username,
    password: body.password,
  });
  if (foundUser) {
    const updatedUser = await UserModel.findOneAndUpdate(
      { username: body.username, password: body.password },
      {
        $set: {
          [`data.${currYear}.${currMonth + 1}.${currDay}`]: body.expense,
        },
      },
      { new: true }
    );
    await foundUser.save();
    res.json({ success: true, user: updatedUser });
  } else {
    res.json({ error: "user not found" });
  }
});

app.post("/setLimits", async ({ body }, res) => {
  const foundUser = await UserModel.findOne({
    username: body.username,
    password: body.password,
  });
  if (foundUser) {
    const updatedUser = await UserModel.findOneAndUpdate(
      { username: body.username, password: body.password },
      {
        $set: {
          dailyLimit: body.dailyLimit,
          monthlyLimit: body.monthlyLimit,
        },
      },
      { new: true }
    );
    await foundUser.save();
    res.json({ success: true, user: updatedUser });
  } else {
    res.json({ error: "user not found" });
  }
});

app.listen(process.env.PORT || 3001);
