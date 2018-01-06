const isString = (value) => {
    return toString.call(value) === '[object String]';
}

const isArray = (value) => {
    return Array.isArray || toString.call(value) === '[object Array]';
};

const isPrimitive = (value) => {
    return value === null || /^(string|number|boolean)$/.test(typeof value);
}

const COMPARATORS = {
		$gt: (a, b) => a > b,
        $gte: (a, b) => a >= b,
        $lt: (a, b) => a < b,
		$lte: (a, b) => a <= b,
		$eq: (a, b) => a === b,
	    $ne: (a, b) => a !== b,
		$in: (a, b) => !!~b.indexOf(a),
		$nin: (a, b) => !COMPARATORS.$in(a, b)
}

const LOGICS = {
    $or: 'some',
    $nor: 'every',
    $and: 'every',
    $not: 'some'
}

module.exports = {
    isString, isArray, isPrimitive, COMPARATORS, LOGICS
}