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
    
  }



