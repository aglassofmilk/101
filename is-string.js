/**
 * @module 101/is-string
 *
 */

/**
 * Functional version of val typeof 'string'
 * @function module:101/is-string
 * @param {*} val - value checked to be a string
 * @return {boolean} Whether the value is an string or not
 */
module.exports = function (val) {
  return typeof val === 'string';
};