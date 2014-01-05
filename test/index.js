var test = require("tape")
var inject = require("../index")

test("multiKeyval is a function", function (assert) {
    assert.equal(typeof inject, "function")
    assert.end()
})

test("non-conflicting values are inserted", function (assert) {
    var obj = { "a": 123 }
    var expected = { "a": 123, "b": 456 }

    inject(obj, "b", 456)

    assert.deepEqual(obj, expected)
    assert.end()
})

test("conflicting values resolve to an array", function (assert) {
    var obj = { "a": 123 }
    var expectedValue = [123, 456]
    expectedValue._conflicting = inject._conflicting

    var expected = { "a": expectedValue }

    inject(obj, "a", 456)

    assert.deepEqual(obj, expected)
    assert.end()
})

test("conflicting array values resolve to nested arrays", function (assert) {
    var obj = { "a": [123, 456] }
    var expectedValue = [
        [123, 456],
        ["abc", "def"]
    ]
    expectedValue._conflicting = inject._conflicting

    var expected = { "a": expectedValue }

    inject(obj, "a", ["abc", "def"])

    assert.deepEqual(obj, expected)
    assert.end()
})

test("further conflicts append to the array", function (assert) {
    var obj = { "a": [123, 456] }
    var expectedValue = [
        [123, 456],
        ["abc", "def"],
        null
    ]
    expectedValue._conflicting = inject._conflicting

    var expected = { "a": expectedValue }

    inject(obj, "a", ["abc", "def"])
    inject(obj, "a", null)

    assert.deepEqual(obj, expected)
    assert.end()
})
