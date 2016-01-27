#!/usr/bin/env node

'use strict';

module.exports = {
  modifiedMonth: month,
  modifiedYear: year,
  findDay: day,
  getTheMonth: getTheMonth
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

function getTheMonth(m) {
  var month;

  if(m === 0) {
    month = 'January';    
    console.log('January');
    return month;
  }
  if(m === 1) {
    month = 'February';
    console.log('February');
    return month;
  }
  if(m === 2) {
    month = 'March';
    console.log('March');
    return month;
  }
  if(m === 3) {
    month = 'April';
    console.log('April');
    return month;
  }
  if(m === 4) {
    month = 'May';
    console.log('May');
    return month;
  }
  if (m === 5) {
    month = 'June';
    console.log('June');
    return month;
  }
  if (m === 6) {
    month = 'July';
    console.log('July');
    return month;
  }
  if(m === 7) {
    month = 'August';
    console.log(month);
    return month;
  }
  if(m === 8) {
    month = 'September';
    console.log(month);
    return month;
  }
  if(m === 9) {
    month = 'October';
    console.log(month);
    return month;
  }
  if(m === 10) {
    month = 'November';
    console.log(month);
    return month;
  }
  if(m === 11) {
    month = 'December';
    console.log('December');
    return month;
  }
}

