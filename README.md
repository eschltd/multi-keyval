# multi-keyval

[![build status][1]][2] [![dependency status][3]][4] [![coverage report][9]][10] [![stability index][15]][16]

[![npm stats][13]][14]

[![browser support][5]][6]

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

  [1]: https://secure.travis-ci.org/Matt-Esch/string-template.png
  [2]: https://travis-ci.org/Matt-Esch/string-template
  [3]: https://david-dm.org/Matt-Esch/string-template.png
  [4]: https://david-dm.org/Matt-Esch/string-template
  [5]: https://ci.testling.com/Matt-Esch/string-template.png
  [6]: https://ci.testling.com/Matt-Esch/string-template
  [9]: https://coveralls.io/repos/Matt-Esch/string-template/badge.png
  [10]: https://coveralls.io/r/Matt-Esch/string-template
  [13]: https://nodei.co/npm/string-template.png?downloads=true&stars=true
  [14]: https://nodei.co/npm/string-template
  [15]: http://hughsk.github.io/stability-badges/dist/unstable.svg
  [16]: http://github.com/hughsk/stability-badges

  [7]: https://badge.fury.io/js/string-template.png
  [8]: https://badge.fury.io/js/string-template
  [11]: https://gemnasium.com/Matt-Esch/string-template.png
  [12]: https://gemnasium.com/Matt-Esch/string-template
