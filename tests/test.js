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
