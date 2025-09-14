// Q1. Right-Angled Triangle Star Pattern
const printRightAngleTri = (row) => {
  for (let i = 1; i <= row; i++) {
    let output = "*".repeat(i);
    console.log(output);
  }
};
// printRightAngleTri(5);

// Q2. Inverted Triangle Pattern
const printInvertedTri = (row) => {
  for (let i = row; i >= 1; i--) {
    console.log("*".repeat(i));
  }
};
// printInvertedTri(5);

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

//!Q1. Right-Angled Triangle Star Pattern
const printRightAngleTriangle = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let pattern = "*".repeat(i);
    console.log(pattern);
  }
};
// printRightAngleTriangle(8);

//!Q2. Inverted RightTriangle Pattern
const printInvertedRightTriangle = (rows) => {
  for (let i = rows; i > 0; i--) {
    let pattern = "*".repeat(i);
    console.log(pattern);
  }
};
// printInvertedTri(6);

//!Q3.Pyramid
const pyramid = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let pattern = "*".repeat(i * 2 - 1);
    let space = " ".repeat(rows - i);
    console.log(space + pattern);
  }
};
// pyramid(5);

//!Q4 Inverted Pyramid
const invertedPyramid = (rows) => {
  for (let i = rows; i > 0; i--) {
    let pattern = "*".repeat(2 * i - 1);
    let space = " ".repeat(rows - i);
    console.log(space + pattern);
  }
};
// invertedPyramid(5);

//!Q5. Diamond Pattern
const diamond = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let stars = "*".repeat(2 * i - 1);
    let spaces = " ".repeat(rows - i);
    console.log(spaces + stars);
  }
  for (let i = rows - 1; i > 0; i--) {
    let stars = "*".repeat(2 * i - 1);
    let space = " ".repeat(rows - i);
    console.log(space + stars);
  }
};
// diamond(4);

//!Q5. Number Pyramid

//!Q6. Square border
