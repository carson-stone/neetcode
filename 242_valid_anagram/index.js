/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }

  const sLetters = {}

  for (const letter of s) {
    if (letter in sLetters) {
      sLetters[letter]++
    } else {
      sLetters[letter] = 1
    }
  }

  for (const letter of t) {
    if (!(letter in sLetters)) {
      return false
    }

    if (sLetters[letter] === 0) {
      return false
    }

    sLetters[letter]--
  }

  // handle leftovers
  for (const count of Object.values(sLetters)) {
    if (count > 0) {
      return false
    }
  }

  return true
};


/* Test case
"anagram" and "nagaram"

sLetters at end of each iteration:

sLetters at start of loop: {a: 3, n: 1, g: 1, r: 1, m: 1}
1: {a: 3, n: 0, g: 1, r: 1, m: 1}
2: {a: 2, n: 0, g: 1, r: 1, m: 1}
3: {a: 2, n: 0, g: 0, r: 1, m: 1}
4: {a: 1, n: 0, g: 0, r: 1, m: 1}
5: {a: 1, n: 0, g: 0, r: 0, m: 1}
6: {a: 0, n: 0, g: 0, r: 0, m: 1}
7: {a: 0, n: 0, g: 0, r: 0, m: 0}
*/


// another solution using two objects
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }

  const sLetters = {}

  for (const letter of s) {
    if (letter in sLetters) {
      sLetters[letter]++
    } else {
      sLetters[letter] = 1
    }
  }

  const tLetters = {}

  for (const letter of t) {
    if (!(letter in sLetters)) {
      return false
    }

    if (letter in tLetters) {
      tLetters[letter]++
    } else {
      tLetters[letter] = 1
    }
  }

  for (const letter in sLetters) {
    if (tLetters[letter] !== sLetters[letter]) {
      return false
    }
  }

  return true
}
