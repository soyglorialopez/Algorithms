
// Input: A sequence of n numbers A = {a1, a2..an} and value v
//Output: An index i such that v = A[i] or the special NIL if 
// v does not appear in A
function linearSearch(array, value) {
    let v = value
    for (let i = 0; i <= array.length; i++) {
        if (array[i] == v) {
            return `Your value is in the position ${i + 1}`
        } if (i === array.length) {
            return `Your value is doesn't exit in the array`
        }
    }
}