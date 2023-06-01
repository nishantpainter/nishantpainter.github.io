---
title: Functional Programming - Tail Call Optimization
ogtitle: Tail Call Optimization
ogsubtitle: Functional Programming
date: 07-03-2021
---

# Tail Call Optimization

It is a technique for preventing adding extra entries on call stack or stack frame by calling a sub routine or recursive call to same function at the end of function execution.

For example, in the following factorial computation, instead of returning the arithmetic operation it call be replaced with functional call for optimization.

```
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  // Creates extra entry on call stack for each calls
  return n * factorial(n - 1);
}
```

```
function tailOptimizedFactorial(n, tail = 1) {
  if (n === 1) {
    return tail;
  }
  
  return tailOptimizedFactorial(n - 1, n * tail);
}
```