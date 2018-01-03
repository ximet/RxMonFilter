const { isString, isArray } = require('./helper.js');
const Rx = require('rxjs/Rx');

const filter = (array, query) => {
    if (!isArray(array)) {
        throw new TypeError('Invalid array');
    }
    if (!query) {
		throw new TypeError('Invalid query');
	}
    const correctQuery = isString(query) ? JSON.parse(query) : query;
    const source = Rx.Observable.from(array);
    const filtering = source.filter(item => item.age === 12); //TODO add predicate
    const subscriber = filtering.subscribe(item => item);
    const subscription = filtering.subscribe(item => { //TODO add return value
        console.log(item)
    });
}

module.exports = filter;