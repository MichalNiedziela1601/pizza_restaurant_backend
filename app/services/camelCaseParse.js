'use strict';
const _ = require('lodash');
function parseObj(obj)
{
    return _.mapKeys(obj, (value, key) => _.camelCase(key));
}

function parseArrayOfObject(array)
{
    return _.map(array, val => parseObj(val));
}

module.exports = {
    parseObj, parseArrayOfObject
};
