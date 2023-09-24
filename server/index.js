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

app.post("/login", async ({ body }, res) => {
  const foundUser = await UserModel.findOne({
    username: body.username,
    password: body.password,
  });
  if (foundUser) {
    const currYear = new Date().getFullYear();

    //check if user has this years data property
    if (Object.hasOwn(foundUser.data, `${currYear}`)) {
      await UserModel.updateOne(
        { _id: foundUser._id },
        { $set: { [`data.${currYear}`]: yearObj } },
        { strict: false }
      );
      await foundUser.save();
    }

    res.json(foundUser);
  } else {
    res.json({ error: "could not find profile with that username / password" });
  }
});

app.post("/signup", async ({ body }, res) => {
  const currYear = new Date().getFullYear();

  if (body.username && body.password && body.monthlyLimit && body.dailyLimit) {
    const newUser = await UserModel.create({
      username: body.username,
      password: body.password,
      monthlyLimit: body.monthlyLimit,
      dailyLimit: body.dailyLimit,
    });

    res.json({ success: true, user: newUser });
  } else {
    res.json({ error: "Did not receive username and password" });
  }
});

app.listen(3001, () => {
  console.log("listening on port http://localhost:3001");
});
