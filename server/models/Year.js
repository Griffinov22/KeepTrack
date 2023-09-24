const mongoose = require("mongoose");

const janObj = {};
for (let x = 1; x <= 31; x++) {
  janObj[x] = 0;
}
//make february days dynamic
const febObj = {};
const currYear = new Date().getFullYear();
const FebDays = new Date(currYear, 2, 0).getDate();
for (let x = 1; x <= FebDays; x++) {
  febObj[x] = 0;
}
const marchObj = {};
for (let x = 1; x <= 31; x++) {
  marchObj[x] = 0;
}
const aprilObj = {};
for (let x = 1; x <= 30; x++) {
  aprilObj[x] = 0;
}
const mayObj = {};
for (let x = 1; x <= 31; x++) {
  mayObj[x] = 0;
}
const junObj = {};
for (let x = 1; x <= 30; x++) {
  junObj[x] = 0;
}
const julObj = {};
for (let x = 1; x <= 31; x++) {
  julObj[x] = 0;
}
const augObj = {};
for (let x = 1; x <= 31; x++) {
  augObj[x] = 0;
}
const sepObj = {};
for (let x = 1; x <= 30; x++) {
  sepObj[x] = 0;
}
const octObj = {};
for (let x = 1; x <= 31; x++) {
  octObj[x] = 0;
}
const novObj = {};
for (let x = 1; x <= 30; x++) {
  novObj[x] = 0;
}
const decObj = {};
for (let x = 1; x <= 31; x++) {
  decObj[x] = 0;
}

const yearSchema = new mongoose.Schema({
  1: {
    type: Object,
    default: janObj,
  },
  2: {
    type: Object,
    default: febObj,
  },
  3: {
    type: Object,
    marchObj,
  },
  4: {
    type: Object,
    default: aprilObj,
  },
  5: {
    type: Object,
    default: mayObj,
  },
  6: {
    type: Object,
    default: junObj,
  },
  7: {
    type: Object,
    default: julObj,
  },
  8: {
    type: Object,
    default: augObj,
  },
  9: {
    type: Object,
    default: sepObj,
  },
  10: {
    type: Object,
    default: octObj,
  },
  11: {
    type: Object,
    default: novObj,
  },
  12: {
    type: Object,
    deafult: decObj,
  },
});

const yearObj = {
  1: janObj,
  2: febObj,
  3: marchObj,
  4: aprilObj,
  5: mayObj,
  6: junObj,
  7: julObj,
  8: augObj,
  9: sepObj,
  10: octObj,
  11: novObj,
  12: decObj,
};

module.exports = { yearSchema, yearObj };
