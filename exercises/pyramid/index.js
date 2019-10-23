// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let maxLength = n + 1;
  for (let i = 0; i < n; i++) {
    let wall = "#".repeat(i * 2 + 1);
    let offset = " ".repeat(n - 1 - i);
    console.log(`${offset}${wall}${offset}`);
  }
}

module.exports = pyramid;
