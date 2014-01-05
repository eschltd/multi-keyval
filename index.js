var token = "99ebbc98-3cb9-4778-8d2e-1608201f406e"

module.exports = inject
inject._conflicting = token

function inject(obj, key, value) {
    if (obj.hasOwnProperty(key)) {
        if (obj[key]._conflicting === token) {
            obj[key].push(value)
        } else {
            obj[key] = resolveConflict(obj[key], value)
        }
    } else {
        obj[key] = value
    }
}

function resolveConflict(a, b) {
    var arr = [a, b]
    arr._conflicting = token
    return arr
}
