---
title: Functional Programming - Higher Order Function
description: Function that accepts function as their argument or return any function as a result are called as higher order function.
ogtitle: Higher Order Function
ogsubtitle: Functional Programming
tags: ["functional-programming", "higher-order-function"]
categories: ["Programming", "Functional Programming"]
date: 2021-03-08
---

# Higher Order Function

Function that accepts function as their argument or return any function as a result are called as higher order function. Such functions are useful for applying wrapper logic over existing functions.

```
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

function square(x){
    return x * x;
}

function squareRoot(x){
    return Math.sqrt(x)
}

const identity = compose(squareRoot, square);

identity(7) // 7

```

Here compose function accept functions are it's argument and return a function as a result.
