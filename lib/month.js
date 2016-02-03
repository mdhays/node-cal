"use strict";
const _ = require('lodash');
const getFirstDay  = require('./zellers').getFirstDay;
console.log('month file is running');
let week;
const blankSpaceControl = function() {
  let blankSpace = `                    \n`


  return blankSpace;

}


const currentMonth = function (month, year) {
    let date = new Date();
    let locale = "en-us";
    let dayNames =`Su Mo Tu We Th Fr Sa`

    //this is getting current month name
    month = date.toLocaleString(locale, { month: "long" });
    let monthNum = date.toLocaleString(locale, { month: "numeric" });

    //This is getting the current year
    year = date.toLocaleString(locale, { year: "numeric" });

    let getFirstDayVar = getFirstDay(year, monthNum, 1);
    var totalDays = new Date(year, monthNum, 0).getDate()

    let spaceCount = totalDays - getFirstDayVar;
    console.log('getDay', year);

    console.log(spaceCount)
    // calculate leading spaces to start #s on correct day
    let leadingSpaces = _.fill(Array(getFirstDayVar), "   ");
    console.log('now iM IT',leadingSpaces)


    let daysNum = _.range(1, totalDays + 1)
    console.log("For Matt",daysNum);
    let str = [];

    //create an array of lines to be chunked and pushed to ouput
    let monthCal = _.concat(leadingSpaces, daysNum);


    //Trying the number spacing to work
    for(var i = 0; i < monthCal.length; i++) {
      if (i <= 9) {
          let nums = ` ${monthCal[i]} `;
          str += nums;
        } else {
          let otherNums = `${monthCal[i]} `;
          str += otherNums;
        };
     };

       // insert line breaks for each week
       monthCal = _.chunk(monthCal, 7);
       monthCal.map( (line) => { line[line.length-1] = _.trimEnd(line[line.length-1]) } );
       monthCal.forEach( (week) => {
    
       week = week.join(' ');
       console.log('week',week);
       return week;
     console.log("it",str);


     });

    //This is concatinating the month info
    let finalMonth = `    ${month} ${year}\n${dayNames}\n${week}\n`;
    return finalMonth;

};


module.exports = {
  currentMonth: currentMonth,
  blankSpaceControl: blankSpaceControl
};