---
title: Programming Paradigms - Functional Programming
date: 20-07-2020
---

# Functional Programming

Functional Programming is a [Declarative](/blogs/programming-paradigms-imperative-and-declarative-programming) style of [Programming Paradigm](/blogs/programming-paradigms-what-are-programming-paradigms) for writing computer programs.

## But, What are Functions ?

Functions in general, applies computation on given input and returns the output. It relates input to an output.

```
f(x) = x + 2;

f(1) = 1 + 2 = 3;
f(2) = 2 + 2 = 4;
```

Above mentioned is a simple function that adds 2 to the input value and returns output. It relates value `[1,2] => [3,4]`. Similarly, a function in computer programming is a block of instruction that performs computation on given input and returns the output.

> Functional Programming is such a style of writing computer programs using these tiny functions that works together and perform required computation.

## Functions in Functional Programming

The philosophy of functional programming is to maintain certain characteristics while writing functions in a computer program. These characteristics are the fundamental nature of functional programming that describe what shall be the behaviour of a function. These are as follows :

### Declarative

A function must be declarative, it simply tells what to compute, without specifying how to compute it.

`f(x) = x * 4; 👍`

Declarative function that tells to multiply input by 4;

`f(x) = { y = x + x; z = x + x; return y + z;} 👎`

Non-Declarative function that specify how to multiply input by 4;

### Pure

A function must give the same output for a given input value, at any period of time. It is not dependent upon anything outside the function definition.

`f(x) = It's never too late; 👍`

Pure function that will always return It's never too late

`f(x) = If today's Friday or Saturday then It's never too late else It's late. 👎`

Impure function that consider day for returning value. The value is not predictable. It can change. So a function that performs anything which is unpredictable is not a pure function. The condition or the execution is dynamic or unfixed in an impure function.

### Immutable (Must not change the input provided)

A function must not change the value that is provided as input. Instead it must return a complete new value wherever changes are required; by cloning the input value then making required changes and returning the value.

For example consider the function whose input is a list of numbers and it replaces the first element ( at position 0 ) in the list with value 1 .

`f([x]) = { x[0] = 1; return x;} 👎`

This function is mutating the input value, by directly changing the value at position 0 and returning the value.

`f([x]) = { y = new [x]; y[0] = 1; return y;} 👍`

This function is not changing the input value, it instead creates a new list y , does the required changes or replaces the first element with 1 and returns the output.

### First-Class

A function can be passed as an input to a function or can be returned as an output from a function. Such functions that take or return a function are also called a _Higher-order Functions_.

`g(x) = x + 2;`

`f(x, g) = g(x) + 2;`

Here `f(x, g)` is a higher order function that takes `g(x)` as an input. `g(x)` is a function that adds 2 to the input and returns the value. `f(x, g)` will first apply `g(x)` to the input and then add 2 to it’s value and return. For example `f(2) = ( 2 + 2 ) + 2 = 6`;

### Recursion

A function calling itself is called a recursion. Recursive calls are made until some condition is reached that terminates this cycle.

`g(x) = if x === 0 then return 0 else return x + g(x-1);`

The above function will call itself until it reaches the value 0

`g(5) = 5 + g(4) = 5 + 4 + g(3) =....= 5 + 4 + 3 + 2 + 1 + 0 = 15;`

## Why do we need Functional Programming ?

Functional programming resembles mathematics for solving problems. The functions are defined clearly and precise that describe its purpose by itself without mentioning any context. And since it’s not dependent on anything outside the function, the context is not required. This helps us get a quick overview about how the system is working and increases **_readability_**.

Also, there are no changes to the input of a function, so it won’t introduce any unwanted state changes in the system. So there is a **_low risk of introducing_** error while making changes or extending systems.

The functions are precise and can be composed in different ways to solve a problem that increases the **_Modularity and Composability_** of the system.
