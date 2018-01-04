const mocha = require('mocha'); // jshint ignore:line
const expect = require('chai').expect;
const { isString } = require('../src/helper.js');
const { filter } = require('../index.js');

var testValues = [
	{"id":1,"name":"one","age":17}
	,{"id":2,"name":"two","age":18}
	,{"id":3,"name":"three","age":16}
	,{"id":4,"name":"do","age":20}
	,{"id":5,"name":"rl","age":32}
	,{"id":6,"name":"sk","age":52}
	,{"id":7,"name":"dt","age":12}
    ,{"id":7,"name":"vf","age":12}
    ,{"id":7,"name":"vf","age":12}
    ,{"id":7,"name":"vf1","age":12}
    ,{"id":7,"name":"vf2","age":12}
    ,{"id":7,"name":"vf3","age":12}
    ,{"id":7,"name":"vf4","age":12}
    ,{"id":7,"name":"vf5","age":12}
    ,{"id":7,"name":"tg","age":13}
    ,{"id":7,"name":"tg1","age":32}
    ,{"id":1,"name":"tg2","age":11}
    ,{"id":2,"name":"tg3","age":15}
    ,{"id":3,"name":"tg4","age":15}
    ,{"id":4,"name":"tg5","age":15}
    ,{"id":17,"name":"tg75","age":122}
    ,{"id":27,"name":"tg0","age":10}
    ,{"id":37,"name":"tg","age":99}
    ,{"id":47,"name":"tg","age":12}
    ,{"id":57,"name":"tg","age":12}
];

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
            const query = {age:12};
            const ololo = filter(testValues, query);
            console.log('OLOLO:', ololo)
                
            // expect().to.equal();
            
        });
    });
});
