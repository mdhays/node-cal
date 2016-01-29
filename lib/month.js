#!/usr/bin/env node
'use strict';
var _ = require('lodash');

// const titleSpaces = Math.round((20 - title.length)/2);

const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const outputDays31 = _.range([1], 32);
// console.log(outputDays31);

const outputDays28 = _.range([1], 29);
// console.log(outputDays28);

const outputDays30 = _.range([1], 31);
// console.log(outputDays30);

// Months and an array of the number of days are in the object.
const months = {
  one: ["January", outputDays31],
  two: ["February", outputDays28],
  three: ["March", outputDays31],
  four: ["April", outputDays30],
  five: ["May", outputDays31],
  six: ["June", outputDays30],
  seven: ["July", outputDays31],
  eight: ["August", outputDays31],
  nine: ["September", outputDays30],
  ten: ["October", outputDays31],
  eleven: ["November", outputDays30],
  twelve: ["December", outputDays31]
};

module.exports = {
  months: months,
  weekdays: weekdays
};