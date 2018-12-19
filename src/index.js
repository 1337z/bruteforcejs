'use strict'
module.exports = function(characters, callback, maxLength = -1) {
  let i = 1
  if (typeof characters == 'string') characters = characters.split('') //If input: typeof string => split into array
  // Sort characters
  characters.sort()
  characters = characters.filter(function(value, index, arr) {
    if (index < 1) {
      return true
    } else {
      return value != arr[index - 1]
    }
  })
  characters = [''].concat(characters) // Cleanup
  function getBruteforceString(idx) {
    let charBasedString = ''
    let mod
    while (idx > 0) {
      mod = idx % characters.length
      charBasedString = characters[mod] + charBasedString
      idx = (idx - mod) / characters.length
    }
    return charBasedString
  }
  while (i > 0) {
    let result = callback(getBruteforceString(i))
    if (result) break
    if (maxLength >= 1 && getBruteforceString(i).length > maxLength) break
    i++
  }
}
