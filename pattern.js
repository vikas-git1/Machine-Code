// Q1. Right-Angled Triangle Star Pattern
const printRightAngleTri = (row) => {
  for (let i = 1; i <= row; i++) {
    let output = "*".repeat(i);
    console.log(output);
  }
};
// printRightAngleTri(5);

// Q2. Inverted Triangle Pattern
const printInvertedTriangle = (row) => {
  for (let i = row; i >= 1; i--) {
    console.log("*".repeat(i));
  }
};
// printInvertedTriangle(5);

// Q3. Pyramid Pattern
const printPyramid = (n) => {
  for (let i = 1; i <= n; i++) {
    let space = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(space + stars);
  }
};
// printPyramid(5);

// Q4. Diamond Pattern
const printDiamond = (n) => {
  for (let i = 1; i <= n; i++) {
    let space = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(space + stars);
  }
  for (let i = n - 1; i >= 1; i--) {
    let space = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(space + stars);
  }
};

// printDiamond(3);

// Q5. Number Pyramid
const printNumberPyramid = (n) => {
  for (let i = 1; i <= n; i++) {
    let space = " ".repeat(n - i);
    let inc = "";
    for (let j = 1; j <= i; j++) inc += j;
    let dec = "";
    for (let k = i - 1; k >= 1; k--) dec += k;
    console.log(space + inc + dec);
  }
};
// printNumberPyramid(5);
