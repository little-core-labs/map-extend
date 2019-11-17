const test = require('tape')

const extend = require('./')

test('extend(map, ...maps) - simple', (t) => {
  const map = new Map()
  const maps = [
    new Map(Object.entries({ hello: 'world' })),
    new Map(Object.entries({ goodbye: 'moon' })),
    null, // ignored input
    undefined, // ignored input
    NaN, // ignored input
    function() {}, // ignored input
    Object.entries({ goodbye: 'sun' })
  ]

  extend(map, ...maps)

  t.equal('world', map.get('hello'))
  t.equal('sun', map.get('goodbye'))

  t.end()
})

test('extend(map, ...maps) - merge', (t) => {
  const map = new Map()
  const maps = [
    { b: { value: 'unchanged' } },
    Object.entries({ a: { nested: 'value', sibling: 'unchanged' } }),
    Object.entries({ a: { nested: 'changed' } }),
  ]

  extend(true, map, ...maps)
  t.equal('unchanged', map.get('b').value)
  t.equal('unchanged', map.get('a').sibling)
  t.equal('changed', map.get('a').nested)

  t.end()
})
