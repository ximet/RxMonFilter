const mocha = require('mocha'); // jshint ignore:line
const expect = require('chai').expect;
const { isString } = require('../src/helper.js');
const { filter } = require('../index.js');
const { testValues } = require('./mock.js');

describe('isString', function() {
    describe("Check empty string", function() {
        it('should check empty string', function () {
            const value = "";
            expect(isString(value)).to.equal(true);
        });
    });
    describe("Check udefined value", function() {
        it('should check undefined', function () {
            const value = undefined;
            expect(isString(value)).to.equal(false);
        });
    });

    describe("Check null value", function() {
        it('should check null', function () {
            const value = null;
            expect(isString(value)).to.equal(false);
        });
    });

    describe("Check correct string", function() {
        it('should check string', function () {
            const value = 'Null pointer Exception';
            expect(isString(value)).to.equal(true);
        });
    });
});

describe('filter test', function() {
    describe("Check simple filter", function() {
        it('should check simple filter by one value', function () {
            const query = {age:0};
            const ololo = filter(testValues, query);
            console.log('OLOLO:', ololo)
            // expect().to.equal();
            
        });
    });
    describe("Check simple filter with standard", function() {
        it('should check simple filter by one value standard', function () {
            const ololo2 = testValues.filter(item => item.age === 12);

        });
    });
});
