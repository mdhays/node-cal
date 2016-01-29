#!/usr/bin/env node --harmony_destructuring
'use strict';

const zellers = require('./lib/zellers.js');
const month = require('./lib/month.js');



// Takes the days in the array and returns a string.
let days = month.months.one[1].toString();
console.log('this is the days of the week', days);
// Assign the returned string from days and removes the commas globally.
let calDays = days.replace(/,/g, " ");

// Gets the days of the week array and returns a string.
let weekDays = month.weekdays.toString();

// Removes the commas from the days of the week.
let calWeekDays = weekDays.replace(/,/g, " ");




// Returns the month (in this case, january).
console.log(month.months.one[0]);

console.log(calWeekDays);

console.log(month.monthDays);