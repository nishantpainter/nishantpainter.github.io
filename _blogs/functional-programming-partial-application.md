---
title: Functional Programming - Partial Application
description: It is a process of converting a function with multiple parameters into number of functions with one or more argument already set.
ogtitle: Partial Application
ogsubtitle: Functional Programming
tags: ["functional-programming", "partial-application"]
categories: ["Programming", "Functional Programming"]
date: 2023-06-24
---

# Partial Application

It is a process of converting a function with multiple parameters into a number of functions with one or more arguments already set. The function returns a new function by applying the argument in the returned function, thereby reducing the [arity](/blogs/functional-programming-arity) in the returned function. Partial application is also useful in the scenario when its required to supply some but not all arguments to a function.

In the example below, we have a function named `greet` that takes four arguments namely `salutation`, `title`, `firstname` and `lastname`. Using partial application we create a new function `greetHello` by fixing the first argument i.e `salutation` to `Hello`, reducing it's arity to three. We can use `greetHello` as a wrapper of `greet` with `salutation` set to `Hello`.

We then created one more function `greetHelloToMrs` by partially applygin the `title` argument in `greetHello` to `Mrs`, which was created on top of `greet`, thereby reducing the arity to two.

```
const greet = (salutation, title, firstname, lastname) => {
  return `${salutation}, ${title} ${firstname} ${lastname}.`;
};

greet("Hi", "Mr.", "John", "Doe"); // Hi, Mr. John Doe.

const greetHello = greet.bind(null, "Hello");

greetHello("Mr.", "John", "Doe"); // Hello, Mr. John Doe.

const greetHelloToMrs = greetHello.bind(null, "Mrs.");

greetHelloToMrs("Maria", "Doe"); // Hello, Mrs. Maria Doe
```

Partial application is also referred to as delaying the instantiation of some of the parameters of a function. It may be useful when we need to parameter some processes for a later use.

```
// without partial application
const drink = (verb, drinkName) => `I am ${verb} ${drinkName}`;
drink("brewing", "coffee");
drink("brewing", "beer");
drink("juicing", "orange");
drink("juicing", "apple");

// partially applying argument
const makeDrink = (verb) => (drinkName) => `I am ${verb} ${drinkName}`;
const makeBrew = makeDrink("brewing");
const makeJuice = makeDrink("juicing");

makeBrew("coffee");
makeBrew("beer");
makeJuice("orange");
makeJuice("apple");
```
