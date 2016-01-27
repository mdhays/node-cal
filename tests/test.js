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
  const zellers = require('../lib/zellers.js')

  it('returns 13 for January', () => {
      const mod = zellers.modifiedMonth(1);

      expect(mod).to.equal(13)
  });

  it('returns 14 for february', () => {
    const mod = zellers.modifiedMonth(2);

    expect(mod).to.equal(14);
  });

  it('returns 3 for march', () => {
    const mod = zellers.modifiedMonth(3);

    expect(mod).to.equal(3);

    // 2012, 2 === 14 √
    // 2012, 3 === 3 √

  });

  it('returns 1999 for january, 2000', () => {
    const mod = zellers.modifiedYear(2000, 1);

    expect(mod).to.equal(1999);
  });

  it('returns 2011 for february, 2012', () => {
    const mod = zellers.modifiedYear(2012, 2);

    expect(mod).to.equal(2011);
  });

  it('returns 2013 for march, 2013', () => {
    const mod = zellers.modifiedYear(2013, 3);

    expect(mod).to.equal(2013);
  });

  it('returns the day of the week', () => {

    expect(zellers.findDay(2000, 3, 1)).to.equal(3);
    expect(zellers.findDay(2100, 3, 1)).to.equal(1);
    expect(zellers.findDay(2200, 3, 2)).to.equal(0);
    expect(zellers.findDay(2300, 3, 1)).to.equal(4);
  });

  it('outputs the month to the console', () => {
    const mod = zellers.getTheMonth(1);
    expect(mod).to.equal('January');
  });
});


    // .modifiedYear
    // 2000, 1 === 1999
    // 2012, 2 === 2011
    // 2013, 3 === 2013

    // .calculate
    // 2000, 3, 1 === 3
    // 2100, 3, 1 === 1
    // 2200, 3, 2 === 0
    // 2300, 3, 1 === 4


    // App shouldn't work prior to 1753 or past 9999.
