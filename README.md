# OOJS: Flower garden

## Introduction

Have you ever dreamt of a garden with beautiful flowers around your house? So write it in Javascript :) A couple of classes, tests and you're done!

### Objects in JavaScript

*A little bit of theory*

In Javascript you can create objects using three different ways:
1. using the `object-literal` syntax
2. using constructor functions, `prototype` is the most native method for JS
3. using the ES6 `class` (OOP approach)


**1. Object-literal syntax**. 
When we only need one instance of an object, it is convenient to use the object-literal syntax. It is required to "literally" write the object that we want to receive, describe the properties and methods of that object. In the first picture you need to create a person with a first and last name. You also need to add a method to combine them into a full name.

```js
let person = {
 firstName: 'Kweku',
 lastName: 'White',
 fullName: function() {
   return this.firstName + ' ' + this.lastName;
 }
};
person.firstName;
// => 'Kweku'
person.fullName();
// => 'Kweku White'
```
*Figure 1*. Using object-literal syntax to represent a person as a Javascript object.

**2. Constructor functions**. If we need to create a test object with a similar behavior and values, we can write it using a constructor function. Using the `prototype` keyword allows us to propagate properties and methods to all objects created by a given constructor. In the second figure, we use the constructor to create two people with the same attributes and behavior as in 'Figure 1'. Constructor `Person()` sets up attributes that are unique to each instance: name and surname. The full name is constructed using the `Person.prototype.fullName` prototype method.
 
```js
let Person = function(firstName, lastName) {
 this.firstName = firstName;
 this.lastName = lastName;
};
Person.prototype.fullName = function() {
 return this.firstName + ' ' + this.lastName
};
let grayson = new Person('Grayson', 'Arthur');
grayson.firstName;
// => 'Grayson'
let warner = new Person('Warner', 'Constable');
warner.fullName();
// => 'Warner Constable'
```
*Figure 2*. Using a constructor to represent people as Javascript objects.

**3. ES6-class**
Starting with ES6, it became possible to declare classes, as it is done in most object-oriented programming languages. Let's look at the same example but using this new functionality.

```js
class Person{
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

let grayson = new Person('Grayson', 'Arthur');
grayson.firstName;
// => 'Grayson'
let warner = new Person('Warner', 'Constable');
warner.fullName();
// => 'Warner Constable'
```
*Figure 3*. Using `class` to represent people as Javascript objects.

### Testing with Jest
You must use Jest for testing. Rememember, the main methods used in Jest are `describe()`, `test()`, `expect()` and others.
If you want to set preferences before each test, you need to use `beforeEach ()` and / or `beforeAll ()`. When you call the `describe ()` function, pass in an anonymous function containing the actual tests. Figure 4 shows a test written in Jest.

```js
describe('a string with my name', function() {
  let myName;
  beforeEach(function() {
    myName = 'Carson Hollands';
  });
  test('is my name', function() {
    expect(myName).toEqual('Carson Hollands');
  });
});
```

*Figure 4.* Testing the value of a JavaScript string object using Jest.
   
## Releases

### Release 0: Flowers
Flower objects are simple. Each flower has two attributes: name and color. The flower instance is created using the `Flower` class, which is defined in the` src/flower.js` file. Also, besides the `Flower` class, there is a `Plant` class which should be the parent class of `Flower`. 
Write tests to demonstrate that the class creates objects with the correct names and colors. Then write the class `Flower` to pass its own tests.
*Note:* Follow the example on Figure 4 to write tests using Jest.

### Release 1: Garden
There is a `Garden` class in `garden.js`. This will be your garden. Add the necessary properties and methods to it. Be guided by tests when writing methods. All tests must pass.

---

[object literal syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

[OOP](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
