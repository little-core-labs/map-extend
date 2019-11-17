const extend = require('extend')

/**
 * Extend a `Map` instance with one or more other maps.
 * @param {?(Boolean)} [merge = false]
 * @param {Map} map
 * @param {?(Map)} ...maps
 * @return {Map}
 */
function extendMap(merge, map, ...maps) {
  if ('boolean' !== typeof merge) {
    maps.unshift(map)
    map = merge
    merge = false
  }

  const entries = Array.from(map.entries())

  for (const m of maps) {
    if (!m) { continue }
    if (Array.isArray(m)) {
      append(m)
    } else if ('function' === typeof m.entries) {
      append(m.entries())
    } else if ('object' === typeof m) {
      append(Object.entries(m))
    }
  }

  for (let [ key, value ] of entries) {

    const prev = map.get(key)
    if (value && 'object' === typeof value && merge) {
      value = extend(true, {}, prev, value)
    }

    map.set(key, value)
  }

  return map

  function append(candidates) {
    for (const entry of candidates) {
      // istanbul ignore next
      if (entry && 2 === entry.length) {
        entries.push(entry)
      }
    }
  }
}

/**
 * Module exports
 */
module.exports = extendMap
