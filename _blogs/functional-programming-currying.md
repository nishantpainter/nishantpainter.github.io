---
title: Functional Programming - Currying
description: Currying is an approach to divide a function with n number of arguments into n number of functions with one argument.
ogtitle: Currying
ogsubtitle: Functional Programming
tags: ["functional-programming", "currying"]
categories: ["Programming", "Functional Programming"]
date: 2021-03-04
---

# Currying

Currying is an approach to divide a function with n number of arguments into n number of functions with one argument.

For example, a function to add three numbers `function add(a,b,c)` can be changed to 3 functions with one argument `a`, `b`, and `c`.

```
function add(a, b, c) {
  return a + b + c;
}

add(1, 2, 3); // 6

function curryingAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

curryingAdd(1)(2)(3); // 6
```
