---
title: Functional Programming - Composition
date: 26-02-2021
---

# Composition

Composition is the process of combining two or more functions to get a new function or result required.

For example, we can compose a function to get double of a square of a given number. In order to do this we can create a new function by composing the result of a square function and double function.

```
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

function square(x) {
  return x * x;
}

function double(x) {
  return 2 * x;
}

const doubleOfSquareOf = compose(
  double,
  square
);

doubleOfSquareOf(2) // 8 
doubleOfSquareOf(3) // 18
```