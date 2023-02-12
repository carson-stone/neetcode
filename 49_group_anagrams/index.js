/*
  Brute force solution
  O(n^2)

  {
    anagramX: [wordA, wordB],
    anagramY: [wordC]
  }
*/


function isAnagram(str, target) {
  if (str.length !== target.length) {
    return false
  }

  const strLetters = {}

  for (const letter of str) {
    if (letter in strLetters) {
      strLetters[letter]++
    } else {
      strLetters[letter] = 1
    }
  }

  for (const letter of target) {
    if (!(letter in strLetters)) {
      return false
    }

    if (strLetters[letter] === 0) {
      return false
    }

    strLetters[letter]--
  }

  // handle leftovers
  for (const count of Object.values(strLetters)) {
    if (count > 0) {
      return false
    }
  }

  return true
}


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const anagrams = {}

  for (const str of strs) {
    let addedToAnagrams = false

    for (const word in anagrams) {
      if (isAnagram(str, word)) {
        anagrams[word].push(str)

        addedToAnagrams = true
      }
    }

    if (!addedToAnagrams) {
      anagrams[str] = [ str, ]
    }
  }

  return Object.values(anagrams)
}




/*
  Faster solution using a hashed value for each anagram set
  O(n*m)
*/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const anagrams = {}

  for (const str of strs) {
    const letterFrequency = new Array(26).fill(0)

    for (const letter of str) {
      const placeInAlphabet = letter.charCodeAt(0) - "a".charCodeAt(0)
      ++letterFrequency[placeInAlphabet]
    }

    const strHash = letterFrequency.join(",")

    if (!anagrams[strHash]) {
      anagrams[strHash] = [ str, ]
    } else {
      anagrams[strHash].push(str)
    }
  }

  return Object.values(anagrams)
}




/*
  Slightly slower alternate solution using a sort
  O(n * (m * log(m)))
*/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const anagrams = {}

  for (const word of strs) {
    const anagramSetKey = word
      .split("")
      .sort()
      .join("")

    if (anagrams[anagramSetKey]) {
      anagrams[anagramSetKey].push(word)
    } else {
      anagrams[anagramSetKey] = [ word, ]
    }
  }

  return Object.values(anagrams)
}
