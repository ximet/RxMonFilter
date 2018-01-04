const { isString, isArray } = require('./helper.js');
const Rx = require('rxjs/Rx');

function immutablePush(arr, newEntry){
    return [ ...arr, newEntry ]      
}

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
    const newList = [];
    filtering
        .subscribe(data => {
            newList.push(data);
        });
    return newList;
}

module.exports = filter;