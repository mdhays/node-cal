'use strict';
const { expect } = require('chai');
const cp = require('child_process');


describe('cal', () => {

  xit('should deal with the current mode', () => {
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

  it('outputs january to the console', () => {
    const mod = zellers.getTheMonth(0);
    
    expect(mod).to.equal('January');
  });
  it('outputs february to the console', () => {
    const mod = zellers.getTheMonth(1);
    
    expect(mod).to.equal('February');
  });
  it('outputs march to the console', () => {
    const mod = zellers.getTheMonth(2);
    
    expect(mod).to.equal('March');
  });
  it('outputs april to the console', () => {
    const mod = zellers.getTheMonth(3);
    
    expect(mod).to.equal('April');
  });
  it('outputs may to the console', () => {
    const mod = zellers.getTheMonth(4);
    
    expect(mod).to.equal('May');
  });
  it('outputs june to the console', () => {
    const mod = zellers.getTheMonth(5);
    
    expect(mod).to.equal('June');
  });
    it('outputs july to the console', () => {
    const mod = zellers.getTheMonth(6);
    
    expect(mod).to.equal('July');
  });
  it('outputs august to the console', () => {
    const mod = zellers.getTheMonth(7);
    
    expect(mod).to.equal('August');
  });
  it('outputs september to the console', () => {
    const mod = zellers.getTheMonth(8);
    
    expect(mod).to.equal('September');
  });
  it('outputs october to the console', () => {
    const mod = zellers.getTheMonth(9);
    
    expect(mod).to.equal('October');
  });
  it('outputs november to the console', () => {
    const mod = zellers.getTheMonth(10);
    
    expect(mod).to.equal('November');
  });
  it('outputs january to the console', () => {
    const mod = zellers.getTheMonth(11);
    
    expect(mod).to.equal('December');
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
