# multi-keyval

<!--
    [![build status][1]][2]
    [![NPM version][3]][4]
    [![Coverage Status][5]][6]
    [![gemnasium Dependency Status][7]][8]
    [![Davis Dependency status][9]][10]
-->

<!-- [![browser support][11]][12] -->

Resolve key conflicts with an array of values

## Example

```js
var inject = require("multi-keyval")

var obj = {}

inject(obj, "a", 1)
// obj -> { "a": 1 }

inject(obj, "a", 2)
// obj -> { "a": [1, 2] }


// And it works with array values

inject(obj, "b", ["A", "B"])
// obj -> { "a": [1, 2], "b": ["A", "B"] }

inject(obj, "b", ["C", "D"])
// obj -> { "a": [1, 2], "b": [["A", "B"], ["C", "D"]]}
```

## Installation

`npm install multi-keyval`

## Contributors

 - Matt-Esch

## MIT Licenced

  [1]: https://secure.travis-ci.org/eschltd/multi-keyval.png
  [2]: https://travis-ci.org/eschltd/multi-keyval
  [3]: https://badge.fury.io/js/multi-keyval.png
  [4]: https://badge.fury.io/js/multi-keyval
  [5]: https://coveralls.io/repos/eschltd/multi-keyval/badge.png
  [6]: https://coveralls.io/r/eschltd/multi-keyval
  [7]: https://gemnasium.com/eschltd/multi-keyval.png
  [8]: https://gemnasium.com/eschltd/multi-keyval
  [9]: https://david-dm.org/eschltd/multi-keyval.png
  [10]: https://david-dm.org/eschltd/multi-keyval
  [11]: https://ci.testling.com/eschltd/multi-keyval.png
  [12]: https://ci.testling.com/eschltd/multi-keyval
