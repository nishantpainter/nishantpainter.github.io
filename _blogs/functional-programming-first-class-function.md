---
title: Functional Programming - First Class Function
description: Functions which behaves and can be used like any other variable in the program are called as first class functions.
ogtitle: First Class Function
ogsubtitle: Functional Programming
tags: ["functional-programming", "first-class-function"]
categories: ["Programming", "Functional Programming"]
date: 2021-03-06
---

# First Class Function

Functions which behaves and can be used like any other variable in the program are called as first class functions. For example a function can be an argument to some function call like any other variable passed as any agrument.

Here function square is passed as an argument to the transform function.

```
function square(x) {
  return x * x;
}

function transform(x, postTransform) {
  const y = x + 1;
  return postTransform(y);
}

transform(1, square); // 4
```
