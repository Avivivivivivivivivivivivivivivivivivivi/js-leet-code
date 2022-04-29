var MinStack = function () {
  this.arr = []
  this.min = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.arr.push(val)
  this.min.push(this.min.length ? Math.min(val, this.min.at(-1)) : val)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.min.pop()
  return this.arr.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr.at(-1)
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min.at(-1)
}
