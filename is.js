// source @antfu/utils


const isDef = (val) => typeof val !== "undefined";
const isBoolean = (val) => typeof val === "boolean";
const isFunction = (val) => typeof val === "function";
const isNumber = (val) => typeof val === "number";
const isString = (val) => typeof val === "string";
const isObject = (val) => toString(val) === "[object Object]";
const isUndefined = (val) => toString(val) === "[object Undefined]";
const isNull = (val) => toString(val) === "[object Null]";
const isRegExp = (val) => toString(val) === "[object RegExp]";
const isDate = (val) => toString(val) === "[object Date]";
const isWindow = (val) => typeof window !== "undefined" && toString(val) === "[object Window]";
const isBrowser = typeof window !== "undefined";
