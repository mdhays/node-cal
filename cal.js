#!/usr/bin/env node --harmony_destructuring
'use strict';

const zellers = require('./lib/zellers.js');
const month = require('./lib/month.js');

// Returns the month (in this case, january).
console.log(month.months.one[0]);

// Takes the days in the array and returns a string.
let days = month.months.one[1].toString();

let calDays = days.replace(/,/g, " ");


console.log(calDays);