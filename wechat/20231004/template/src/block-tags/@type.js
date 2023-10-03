// @type: 用于指定符号可能包含的值的类型，或者函数返回的值的类型

/** @type {(string|Array)} */
let foo;

/** @type {string} */
let name = 'Randal';

/** @type {number} */
const bar = 1;

/** @type {number} @const */
const FOO = 1;

/**
 * @typedef {'Randal' | 'Olive' | 'Jack'} PersonName
 */

/**
 * @type {PersonName}
 */
const personName = 'Randal';

