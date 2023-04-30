/**
 * Returns a curried function of the provided function, so that:
 *
 * f(a, b, c) = f(a, b)(c) = f(a)(b)(c) = f(a)(b, c)
 *
 * @param {Function} f
 * @param {..*} Initial parameters
 * @return {Function} The curried function
 */
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args)

/**
 * Encapsulates switch/case or if/else logic.
 *
 * Takes a list of [predicate, transformer] pairs.
 *
 * The returned function passes its arguments to predicates, evaluates them, and execute the matched transformer (passing the
 * same arguments). If there's no matched predicate, return undefined.
 *
 * @param pairs Pairs of [predicate, transformer]
 * @return {Function} Encapsulated function
 */
const cond = (pairs) => (...args) => {
  for (let i = 0; i < pairs.length; i++) {
    if (pairs[i][0].apply(this, args)) {
      return pairs[i][1].apply(this, args)
    }
  }

  return undefined
}

/**
 * Function that always returns True
 */
const returnTrue = () => true

const ifElse = (p, fT, fF) => cond([[p, fT], [returnTrue, fF]])

/**
 * Functional wrapper for array map function.
 *
 * @param {Function} f
 * @param {*} arr
 */
const map = curry((f, arr) => Array.isArray(arr) ? arr.map(f) : f(arr))

const filter = curry((f, arr) => Array.isArray(arr) ? arr.filter(f) : (f(arr) ? arr : undefined))

/**
 * Partial application
 * @param {Function} f
 * @param {..*} args Initial parameters
 */
const partial = (f, ...args) => f.bind(this, ...args)

/**
 * Transform a value by chaining a list of function from left to right
 *
 * @param val
 * @param {..Function} funcs
 * @return {*}
 */
const pipe = (...funcs) => function (val) { return funcs.reduce((acc, f) => f.apply(this, [acc]), val) }

const always = (val) => partial(val)

const lt = curry((b, a) => a < b)

const setProp = curry((prop, value, obj) => {
  obj[prop] = value
  return obj
})

const whileDo = (pred, fn, initial) => pred(initial) ? whileDo(pred, fn, fn(initial)) : initial

/**
 * Get property of an object.
 *
 * This is a curried function.
 *
 * @param {string} prop
 * @param {Object} obj
 * @return {*}
 */
const getProp = curry((prop, obj) => {
  return obj[prop]
})

/**
 * Encapsulate try/catch logic.
 *
 * Takes a pair of tryer and catcher functions. User must ensure tryer and catcher return the same
 * type so that chaining / composing works.
 *
 * Returns a function that can take arguments, which will be passed to both tryer and catcher.
 *
 * @param {Function} tryer
 * @param {Function} catcher
 * @return {Function} Encapsulated function
 */
const tryCatch = (tryer, catcher) => (...args) => {
  try {
    return tryer(...args)
  } catch (e) {
    return catcher(e, ...args)
  }
}

/**
 * Identity function
 * @param {*} val
 * @return {*}
 */
const identity = (val) => val

/**
 * Check if an array contains an item.
 *
 * This is a curried wrapper for Array.prototype.indexOf
 *
 * @param {Array}
 * @param {*}
 * @return {boolean}
 */
const inArray = curry((array, item) => array.indexOf(item) !== -1)

/**
 * Create an array out of an array-like object
 *
 * @param {Object} Array-like object
 * @return {Array} Array
 */
const makeArray = (arrayLike) => Array.prototype.slice.call(arrayLike)

const parseOptions = (string, def = {}) => {
  let options = {}
  try {
    options = JSON.parse(string)
  } catch (e) {
    console.warn('Invalid option JSON string.')
    console.trace()

    return def
  }

  return Object.assign({}, def, options)
}

export {
  curry,
  map,
  always,
  pipe,
  filter,
  inArray,
  makeArray,
  tryCatch,
  whileDo,
  parseOptions,
  getProp,
  setProp,
  lt,
  cond,
  partial,
  ifElse,
  identity,
  returnTrue
}
