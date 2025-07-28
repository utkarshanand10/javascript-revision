//  const hinge = new Object();

const hinge = {};

(hinge.id = "123abc"), (hinge.name = "butterfly"), (hinge.isLoggedIn = false);

// console.log(hinge);

const regularUser = {
  email: "user@example.com",
  fullname: {
    userfullname: {
      firstName: "John",
      lastName: "Doe",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstName); // Accessing nested object property

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 1: "a", 2: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// console.log(Object.keys(hinge));
// console.log(Object.values(hinge));

//-----------------------------------------------------------------------------

const course = {
  coursename: "js for beginners",
  price: 999,
  courseLearner: "utkarsh",
};

const { courseLearner: learner } = course;

console.log(learner);

const navbar = ({ company }) => {};
navbar((company = "Google"));
