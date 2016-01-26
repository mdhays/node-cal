'use strict';
const { expect } = require('chai');
const cp = require('child_process');


describe('cal', () => {

  it('should deal with the current mode', () => {
    const goal = cp.execSync('cal').toString();
    const output = cp.execSync('./cal.js').toString();

    expect(output).to.equal(goal);
    });
});

describe("zeller's congruence", () => {
  var zellars = {};
    zellars.modifiedMonth = function(year, month) {
        if(month < 2) {
          return month + 12;
        }
    };

    it('returns 13 for January', () => {
      const mod = zellars.modifiedMonth(2012, 1);


      expect(mod).to.equal(13)
    });
      // 2012, 2 === 14
      // 2012, 3 === 3
});
    // .modifiedYear
    // 2000, 1 === 1999
    // 2012, 2 === 2011
    // 2013, 3 === 2013

    // .calculate
    // 2014, 3, 2 === 1
    // 2012, 1, 1 === 1
    // 2012, 1, 12 === 5
    // 1799, 2, 1 === 6
    // 2000, 11, 1 === 4
