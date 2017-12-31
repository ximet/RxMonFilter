const isString = (value) => {
    return toString.call(value) === '[object String]';
}

const filter = (query) => {
    if (!query) {
		throw new TypeError('Invalid query');
	}
    const correctQuery = isString(query) ? JSON.parse(query) : query;

    console.log(query);
    return null; // TODO need create realization
}

module.exports = filter;