#!/usr/bin/env node
'use strict';
var _ = require('lodash');



const outputDays31 = _.range([1], 32);
// console.log(outputDays31);

const outputDays28 = _.range([1], 29);
// console.log(outputDays28);

const outputDays30 = _.range([1], 31);
// console.log(outputDays30);

const months = {
  one: ["January", outputDays31],
  two: ["February", outputDays28],
  3: ["March", outputDays31],
  4: ["April", outputDays30],
  5: ["May", outputDays31],
  6: ["June", outputDays30],
  7: ["July", outputDays31],
  8: ["August", outputDays31],
  9: ["September", outputDays30],
  10: ["October", outputDays31],
  11: ["November", outputDays30],
  12: ["December", outputDays31]
};


module.exports = {
  months: months
};