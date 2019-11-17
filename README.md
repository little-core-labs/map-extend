map-extend
==========

> Extend a [Map][map] instance with one or more others.

<a name="installation"></a>
## Installation

```sh
$ npm install map-extend
```

<a name="status"></a>
## Status

> **Stable**

> [![Actions Status](https://github.com/little-core-labs/map-extend/workflows/Node%20CI/badge.svg)](https://github.com/little-core-labs/map-extend/actions)

<a name="usage"></a>
## Usage

```js
const extend = require('map-extend')

// shallow merge
extend(map, ...maps) // merge map entries in `maps` into `map`

// merge entry values in `maps` before merging into `map`
extend(true, map, ...maps)
```

<a name="api"></a>
## API

<a name="api-extend"></a>
### `extend([merge = false], map, ...maps)`

Extend a `Map` instance with one or more other maps where `merge` is a
boolean (default: `false`) used to indicate if the entry values for each
candidate found in `maps` should be [merged][extend] before extending `map`.
If `true` the [`extend()`][extend] module function is used with `deep`
set to `true` on the entry values in the order in which they are given.

```js
// copy entries from `maps` into `map`
extend(map, ...maps)

// copy and merge entry values in `maps` into `map`
extend(true, map, ...maps)
```

<a name="license"></a>
## License

MIT


[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[extend]: https://github.com/justmoon/node-extend
