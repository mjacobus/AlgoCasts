// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  const x = { value: 0, min: 0, max: n - 1 };
  const y = { value: 0, min: 0, max: n - 1 };

  const max = n * n;
  let count = 1;
  let direction = "right";

  while (true) {
    if (count > max) {
      break;
    }

    result[y.value][x.value] = count++;

    if (direction == "right") {
      if (x.value < x.max) {
        x.value++;
      } else {
        direction = "down";
        y.min++;
        y.value++;
      }

      continue;
    }

    if (direction == "down") {
      if (y.value < y.max) {
        y.value++;
      } else {
        direction = "left";
        x.value--;
        x.max--;
      }

      continue;
    }

    if (direction == "left") {
      if (x.value > x.min) {
        x.value--;
      } else {
        direction = "up";
        y.max--;
        y.value--;
      }

      continue;
    }

    if (direction == "up") {
      if (y.value > y.min) {
        y.value--;
      } else {
        direction = "right";
        x.min++;
        x.value++;
      }

      continue;
    }
  }

  return result;
}

module.exports = matrix;
