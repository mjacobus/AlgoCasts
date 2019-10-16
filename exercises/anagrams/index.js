// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function map(string) {
  const m = {};
  for (let char of string) {
    m[char] = m[char] + 1 || 1;
  }
  return m;
}

function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
  const mapA = map(stringA);
  const mapB = map(stringB);

  if (stringA.length != stringB.length) {
    return false;
  }

  for (let key in mapA) {
    if (mapA[key] != mapB[key]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
