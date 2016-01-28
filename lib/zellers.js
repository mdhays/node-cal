#!/usr/bin/env node

'use strict';

module.exports = {
  modifiedMonth: month,
  modifiedYear: year,
  findDay: day
}

function month(month) {
    if(month <= 2) {
      return month + 12;
    } else {
      return month;
    }
}

function year(year, month) {
  if(month <= 2) {
    return year - 1;
  } else {
    return year;
  }
}

function day(theYear, theMonth, theDay) {
  let q = theDay;
  let m = month(theMonth);
  let y = year(theYear);
  let k = y % 100;
  let j = Math.floor(y/100);
  let h =  (q + Math.floor((13*(m+1))/5) + k + Math.floor(k/4) + Math.floor(j/4) + (5*j)) % 7;
  return h-1;
}








