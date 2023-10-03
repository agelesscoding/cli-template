// @access: 指定成员的访问级别（package、private、public、protected）

/** @constructor */
function Animal() {
  /** @access private */
  const name = 'Randal';

  /** @access protected */
  this._name = 'Randal Wang';

  /** @access package */
  this.age = 30;

  /** @access public */
  this.address = 'HD';
}

// same as...

/** @constructor */
function OtherAnimal() {
  /** @private */
  const name = 'Randal';

  /** @protected */
  this._name = 'Randal Wangl';

  /** @package */
  this.age = 30;

  /** @public */
  this.address = 'HD';
}

