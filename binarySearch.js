/**
 * Search for an element in an ordered list
 * @param {*[]} list
 * @param {*} item
 */
function binarySearch(list, item) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const middle = Math.floor((low + high) / 2)
    const guess = list[middle]

    if (guess === item) return middle

    if (guess > item) {
      high = middle - 1
    } else {
      low = middle + 1
    }
  }

  return null
}
