const { isString, isArray } = require('./helper.js');

const filter = (array, query) => {
    if (!isArray(array)) {
        throw new TypeError('Invalid array');
    }
    if (!query) {
		throw new TypeError('Invalid query');
	}
    const correctQuery = isString(query) ? JSON.parse(query) : query;

    console.log(query);
    return null; // TODO need create realization
}

module.exports = filter;