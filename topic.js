//! Q1: Write code that demonstrates a ReferenceError, TypeError, and RangeError.
// Syntax Error
try {
  // console.log("Vikas)
} catch (error) {
  console.log(error);
}
// Refrence Error
try {
  //   console.log(car);
  let car = "Be 6e";
} catch (error) {
  console.log(error);
}
// Type Error
try {
  let sum = 10;
  //   sum();
} catch (error) {
  console.log(error);
}
// Rnage Error
try {
  // let arr = new Array(-10);
  // console.log(arr);
} catch (error) {
  console.log(error);
}

//! Q2.: Write a code snippet to demonstrate global scope vs local scope.
let globalVar = "Global";
{
  let localVar = "Local";
  // console.log(localVar, globalVar);
}
// console.log(globalVar, localVar);

//! Q3.: Demonstrate how ?? provides default values
let user = null;
let defaultVal = "Guest";
// console.log("Welcome", user ?? defaultVal);

//! Q4.mannually triger custom error
const customError = (a, b) => {
  let result;
  try {
    if (b === 0) throw new Error("can not divide a number with 0");
    result = `${a}/${b} = ${a / b}`;
  } catch (error) {
    return error.message;
  }
  return result;
};
// console.log(customError(10, 5));

//! Q5. Throw Error if input is not number
const enterValidInput = (input) => {
  try {
    if (typeof input != "number") throw new Error("Enter a valid number");
    return `Input ${input} is valid`;
  } catch (error) {
    return error.message;
  }
};
// console.log(enterValidInput("89"));

//! Q6. Handle JSON parsing errors safely
const handleJsonParseError = (jsonStr) => {
  try {
    return JSON.parse(jsonStr);
  } catch (error) {
    return error.message;
  }
};
// console.log(handleJsonParseError('{ "name": "Vikas", "age": 23 }'));

//! Q7. Use finally to execute cleanup logic
const runFinally = () => {
  try {
    return "Try Code: This block executes if no error occurs";
  } catch (error) {
    error.message;
  } finally {
    console.log("Finally Code: This Block executes regardless of an error");
  }
};
// console.log(runFinally());

//! Q8. Validate user input inside a function using try-catch.
const validateUserInput = (age) => {
  try {
    if (age < 18) throw new Error("Your age must be 18 or above");
    return "You are allowed to vote";
  } catch (error) {
    return error.message;
  } finally {
    console.log("Do Vote for your future");
  }
};
// console.log(validateUserInput(17));
// console.log(validateUserInput(19));

//! Q9. Create deep copy of object.
const bike = {
  brand: "Honda",
  bikeName: "CB 350rs",
  price: 250000,
  owener: {
    name: "Bhavishya Mewara",
    age: 23,
  },
};
const createDeepCopyOfObj = (obj) => JSON.parse(JSON.stringify(obj));
// console.log(createDeepCopyOfObj(bike));

//! Q10. Create shallow copy of object.
let car = {
  brand: "Mahindra",
  carName: "BE 6e",
  price: 2100000,
  owener: {
    name: "Vikas Mewara",
    age: 23,
  },
};
const createShallowCopyOfObj = (obj) => Object.assign({}, obj);
// console.log(createShallowCopyOfObj(car));

const createShallowCopyOfObject = (obj) => {
  return { ...obj };
};
// console.log(createShallowCopyOfObject(car));

//! Q11. Check if two objects are equal (shallow comparison)
const ifObjectsAreEqual = (obj1, obj2) => {
  let obj1Key = Object.keys(obj1);
  let obj2Key = Object.keys(obj2);

  if (obj1Key.length != obj2Key.length) return false;
  for (let key of obj1Key) {
    if (obj1[key] != obj2[key]) return false;
  }
  return true;
};
const person1 = { userName: "Vikas", userAge: 24 };
const person2 = { userName: "Vikas", userAge: 24 };
// console.log(ifObjectsAreEqual(person1, person2));

//! Q12. Merge two objects
const mergeTwoObjs = (obj1, obj2) => {
  return { ...obj1, obj2 };
};
