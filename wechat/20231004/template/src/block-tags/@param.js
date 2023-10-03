// @param: 提供函数参数的名称、类型和描述

/**
 * Say hi to somebody.
 * @param somebody(only description)
 */
function sayHi(somebody) {
  console.log('Hi ' + somebody.name);
}

/**
 * Say hi to somebody.
 * @param {string} name - the name of somebody(with type and description)
 * @return {undefined}
 */
function sayHiSomeone(name) {
  console.log('Hi ' + name);
  return undefined;
}

// -----------------------------------------------------------------------

/**
 * Project class
 * @constructor
 */
function Project() {}

/**
 * 记录参数属性
 * @param {Object} employee - the employee for assignment
 * @param {string} employee.name - the name of employee
 * @param {string} employee.department - the department of employee
 */
Project.prototype.assignment = function(employee) {
  console.log(employee.name + ' works in ' + employee.department);
};

/**
 * 记录结构参数
 * @param {Object} employee - the options for assignment
 * @param {string} employee.name - the name of somebody
 * @param {string} employee.department - the department of employee
 */
Project.prototype.otherAssignment = function({ name, department }) {
  console.log(name + ' works in ' + department);
};

/**
 * 记录数组中值的属性
 * @param {Object[]} employees - the employees params
 * @param {string} employees[].name - the name of employee
 * @param {string} employees[].department - the department of employee
 */
Project.prototype.employees = function(employees) {
  console.log(employees[0].name + ' works in ' + employees[0].department);
};

// -----------------------------------------------------------------------

/** 
 * 可选参数
 * @param {string} [somebody] - somebody's name
 */
function sayHello(somebody) {
  if (!somebody) {
    somebody = 'Randal Wang';
  }
  console.log('Hello ' + (somebody || 'me'));
}

/**
 * 另一种形式的可选参数
 * @param {string=} somebody - somebody's name
 */
function sayHelloToSomeone(somebody) {
  if (!somebody) {
    somebody = 'Randal Wang';
  }
  console.log('Hello ' + (somebody || 'me'));
}

/**
 * 多种类型
 * @param {(string|string[])} somebody - somebody's name
 */
function multipleTypes(somebody) {
  if (!somebody) {
    somebody = 'Randal Wang';
  } else if (Array.isArray(somebody)) {
    somebody = somebody.join(', ');
  }
  console.log('Hello ' + (somebody || 'me'));
}

/**
 * 允许任意类型
 * @param {*} somebody - somebody's name
 */
function anyType(somebody) {
  console.log('Hello ' + JSON.stringify(somebody));
}

// -----------------------------------------------------------------------

/**
 * 回调函数
 * @param {requestCallback} cb - the callback that handles the response
 */
function callback(cb) {
  if (typeof cb === 'function') {
    cb();
  }
}

