---
title: Functional Programming - First Class Function
ogtitle: First Class Function
ogsubtitle: Functional Programming
date: 06-03-2021
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
