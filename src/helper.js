const isString = (value) => {
    return toString.call(value) === '[object String]';
}

const isArray = (value) => {
    return Array.isArray || toString.call(value) === '[object Array]';
};

module.exports = {
    isString, isArray
}