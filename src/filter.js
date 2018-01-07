const { isString, isArray, isPrimitive, LOGICS, COMPARATORS } = require('./helper.js');
const Rx = require('rxjs/Rx');

function logicalOperation(item, query, operator, property) {	
	const result = Object.keys(query)[LOGICS[operator]]((operator) => getPredicate(query[operator], operator, property)(item));
	console.log('operator:', operator);
	
	return operator === '$nor' || operator === '$not' ? !result : result;
}

function implicitCompare(item, query, property) {
	let res = true;
	if (isPrimitive(query)) {
		res = COMPARATORS.$eq(item[property], query);
	} else 	if (Array.isArray(query)) {
		res = COMPARATORS.$in(item[property], query);
	} else {
		res = getPredicate(query, '$and', property)(item);
	}
	return res;
}


const getPredicate = (query, operator, property) => {
    const correctOperator = operator || '$and';
    
	return (item) => {
		if (correctOperator in LOGICS) {
			return logicalOperation(item, query, correctOperator, property);
		}
		return implicitCompare(item, query, correctOperator);
	};
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
    const filtering = source.filter(getPredicate(query)); //TODO add predicate
    const newList = [];

    filtering
        .subscribe(data => {
            newList.push(data);
        });

    return newList;
}

module.exports = filter;