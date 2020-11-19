// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const counters = {};

  str.split("").forEach((char) => {
    counters[char] = counters[char] || 0;
    counters[char] += 1;
  });

  let max = 0;
  let winner = null;

  Object.entries(counters).forEach(([char, value]) => {
    if (value > max) {
      max = value;
      winner = char;
    }
  });

  return winner;
}

module.exports = maxChar;
