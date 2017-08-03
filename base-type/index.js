var isObject = require('@timelaps/is/object');
var isArrayLike = require('@timelaps/is/array-like');
module.exports = function (obj) {
    return !isObject(obj) || isArrayLike(obj) ? [] : {};
};