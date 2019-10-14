// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   const chars = str.split("");
//   const length = str.length;
//   const reversed = []
//
//   for (var i = length - 1; i >= 0 ; i--) {
//     reversed.push(chars[i])
//   }
//
//   return reversed.join("");
// }

function reverse(str) {
  debugger
  return str
    .split("")
    .reverse()
    .join("");
}

reverse("haa");
module.exports = reverse;
