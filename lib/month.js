#!/usr/bin/env node
'use strict';
var _ = require('lodash');

// const titleSpaces = Math.round((20 - title.length)/2);

const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

let monthDays = [' 1',' 2',' 3',' 4',' 5',' 6',' 7',' 8',' 9', 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];


monthDays = monthDays.join(" ")

console.log('monthDays', monthDays);




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
  weekdays: weekdays,
  monthDays: monthDays
};