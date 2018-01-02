const mocha = require('mocha'); // jshint ignore:line
const expect = require('chai').expect;
const { isString } = require('../src/helper.js');

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
