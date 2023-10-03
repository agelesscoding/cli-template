// @abstract: 用于由继承该成员的对象实现/重写的成员

/**
 * 父类
 * @constructor
 */
function ParentClass() {}

/**
 * 检查状态
 * @abstract
 * @return {boolean} `true` 表示 `loading` 状态，`false` 表示非 `loading` 状态
 */
ParentClass.prototype.isLoading = function() {
  throw new Error('must be implemented by subclass!');
}

// ------------------------------------------------------------------------

/** 
 * 表示「猫咪」的类
 * @constructor
 */
function Cat() {}

/** 
 * 猫咪是否在叫
 * @abstract
 * @return {boolean} 永远都返回 `false`
 */
Cat.prototype.isBarking = function() {
  return false;
}

