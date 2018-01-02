const isString = (value) => {
    return toString.call(value) === '[object String]';
}

module.exports = {
    isString
}