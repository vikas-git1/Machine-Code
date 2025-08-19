//! Javascript Topic specific coding questions.
//! Debounce, Throttle, Event delegation.
// Q1: Write code that demonstrates a ReferenceError, TypeError, and RangeError.
// a) Refrence Error
try {
  console.log(a);
} catch (error) {
  // console.log("Refrence Error -", error.message);
}
// b) TypeError
try {
  let a = 10;
  console.log(a());
} catch (error) {
  // console.log("Type Error -", error.message);
}
// c) RangeError
try {
  let arr = new Array(-10);
  console.log(arr);
} catch (error) {
  // console.log("Range Error", error.message);
}

//!============================================================================================================
// Q2.: Write a code snippet to demonstrate global scope vs local scope.
let globalVar = "I am Global";
{
  let localVar = "I am Local";
  // console.log(globalVar, localVar);
}
// console.log(globalVar, localVar);

//!============================================================================================================

// Q3.: Demonstrate how ?? provides default values
let user = null;
// console.log(user ?? "Guest");

//!============================================================================================================

// Q4.mannually triger custom error
const throwError = (a, b) => {
  let result;
  try {
    if (b === 0) throw new Error("Can not devide number with 0");
    result = `${a}/${b} = ${a / b}`;
  } catch (error) {
    result = ("Error", error.message);
  }
  return result;
};
// console.log(throwError(10, 0));
// console.log(throwError(10, 2));

// Q5. Throw Error if input is not number
const throwCustomError = (input) => {
  try {
    if (typeof input != "number")
      throw new Error(`Input ${input} must be Number`);
    return `Input type is Valid`;
  } catch (error) {
    return error.message;
  }
};
// console.log(throwCustomError(10));
// console.log(throwCustomError("10"));

// Q6. Handle JSON parsing errors safely
const handleJsonParseError = (jsonStr) => {
  try {
    if (!JSON.parse(jsonStr)) throw new Error("Enter Valid JSON string");
    return JSON.parse(jsonStr);
  } catch (error) {
    return error.message;
  }
};

// console.log(handleJsonParseError('{"name": "Vikas"}'));
// console.log(handleJsonParseError('{"name": Vikas}'));

// Q7. Use finally to execute cleanup logic
const demoFinally = () => {
  try {
    console.log("Here we execute riskiy code");
    throw new Error("Manually triggering the custom error with error message");
    console.log("Here we execute riskiy code2");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log(
      "This Block always executes regradless of whether an error occured or not "
    );
  }
};
// demoFinally();

// Q8. Validate user input inside a function using try-catch.
const validAge = (age) => {
  try {
    if (typeof age != "number")
      throw new Error("Enter valid input, type of input should be number");
    if (age < 18) throw new Error("User Age must be atleast 18");
    console.log("User is Eligible");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("This code always executes");
  }
};
// validAge("10");
// validAge(17);
// validAge(60);

//!============================================================================================================

// Q10. Create shallow copy of object.
const shallowCopy = (obj) => {
  return { ...obj };
};
let obj = { a: 1, b: 2, c: { x: "10", y: "20" } };
// console.log(shallowCopy(obj));

// Q11. Create Deep copy of object.
const deepCopy = (obj) => {
  let objStr = JSON.stringify(obj);
  return JSON.parse(objStr);
};
// console.log(deepCopy(obj));

// Q12. Check if two objects are equal (shallow comparison)
const areObjEqual = (obj1, obj2) => {
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);

  if (key1.length != key2.length) return false;
  for (let key of key1) {
    if (obj1[key] != obj2[key]) {
      return false;
    }
  }
  return true;
};
let obj1 = { a: 100, name: "Vikas" };
let obj2 = { a: 100, name: "Vikas" };
// console.log(areObjEqual(obj1, obj2));

// Q13. Merge two objects
const mergeTwoObjs = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
// console.log(mergeTwoObjs(obj1, obj2));

// Q14. Loop through object properties
const loopOverObj = (obj) => {
  for (let key in obj) {
    console.log(`The value of key ${key} is ${obj.value}`);
  }
};
const obj14 = { name: "Alice", age: 25, city: "NY" };
// loopOverObj(obj14);

// Q15. Delete a property from an object
delete obj14.age;
// console.log(obj14);

// Q16. Object destructuring
const obj16 = { brand: "Tata", modal: 2025, name: "Sierra", price: 1700000 };
const { brand, modal, name, price } = obj16;
// console.log(brand);

// Q17.Convert object to array
// console.log(Object.keys(obj16));
// console.log(Object.values(obj16));
// console.log(Object.entries(obj16));

//!============================================================================================================

// Q18.Basic closure example
