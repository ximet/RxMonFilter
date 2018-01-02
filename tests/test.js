const mocha = require('mocha'); // jshint ignore:line
const expect = require('chai').expect;
const { isString } = require('../src/helper.js');

describe("Check string", function() {
    it('should check value is string', function () {
        const value = "";
        expect(isString(value)).to.equal(true);
    });
});