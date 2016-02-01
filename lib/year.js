#!/usr/bin/env node

// Creates a new date object prototype.
let currently = new Date();
// Returns the full year.
let currentYear = currently.getFullYear();

// console.log(currently.getFullYear());


module.exports = {
  currentYear: currentYear
};