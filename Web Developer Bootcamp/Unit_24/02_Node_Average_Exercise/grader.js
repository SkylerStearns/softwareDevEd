// ================================================================================
//SET UP
// ================================================================================
const scores1 = [90, 98, 89, 100, 100, 86, 94];
const scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

// ================================================================================
// DESCRIPTION
// This program will take an array of numbers, and return the average
// ================================================================================
function average(scores) {
  let total = 0;

  scores.forEach((score) => {
    total += score;
  })

  return Math.round(total / scores.length);
}

// ================================================================================
// IMPLEMENTATION
// ================================================================================
console.log(average(scores1));
// Should return 94

console.log(average(scores2));
// Should return 68
