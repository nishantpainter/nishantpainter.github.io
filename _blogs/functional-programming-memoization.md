---
title: Functional Programming - Memoization
description: Memoization is a technique used to store the result of the expensive function call in a cache and return them when the same input is used again rather than a fresh computation.
ogtitle: Memoization
ogsubtitle: Functional Programming
tags: ["functional-programming", "memoization"]
categories: ["Programming", "Functional Programming"]
date: 2023-06-25
---

# Memoization

It is a technique of storing results and returning them instead of computing them afresh each time. Function calls can be expensive and its computation can be time consuming. In order to speed up the process, memoization is used to store the result of the expensive function call in a cache and return them when the same input is used again rather than a fresh computation. 

Memoization speeds up program execution and optimizes computation, thereby improving CPU performance. It is also sometimes referred to as _tabling_.

For example, A _Fibonacci Sequence_ is a series of numbers starting from zero, followed by one, and progressing on the rule that the next number in the series is the summation of preceding two numbers.

`[0,1,1,2,3,5,8,13,21,...]`

Below mentioned is a simple program to get the _nth element_ of the fibonacci series starting from the zeroth index.

```
const fibonacci = (n) => {
  return n === 0 ? 0 : n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
};

fibonacci(3) // 1
fibonacci(4) // 2
fibonacci(5) // 3
fibonacci(6) // 5
```

It will often be the case when the value of _n_ will be repeated, and each time a computation will be performed to get the _nth element_. This can be time consuming if the value of _n_ is a higher number.

The computation speed in such cases can be easily speed up using memoization. The program works by computing fibonacci of intermediate values and their summation to get the nth index. Using memoization the result of input can be cached and returned instantly when provided with the same input again.

A pure memoization function can be implemented as below :

```
const memoize = (f) => {
  f.cache = f.cache || {};

  return (...args) => {
    const key = 'key_' + args.join('');

    if (!f.cache[key]) {
      f.cache[key] = f(...args);
    }

    return f.cache[key];
  };
};
```

Using this function, fibonacci program can be memoized as mentioned below :

```
const memoizedFibonacci = memoize(fibonacci);

memoizedFibonacci(5); // Computation
memoizedFibonacci(5); // Cache HIT
```

Consider computing the _5th element_ in the fibonacci series. It will compute and store caches for indexes, _[0,1,2,3,4]_. Next time when we try to compute the _6th element_ in fibonacci series, instead of fresh computation, the previous nth element for indices _[0,1,2,3,4]_ will be returned instantly and improves performance and reduces time.

```
memoizedFibonacci(5);

fibonacci(4); // Computation
fibonacci(3); // Computation
fibonacci(2); // Computation
fibonacci(1); // Computation
fibonacci(0); // Computation

memoizedFibonacci(6);

fibonacci(5); // Computation
fibonacci(4); // Cache HIT
fibonacci(3); // Cache HIT
fibonacci(2); // Cache HIT
fibonacci(1); // Cache HIT
fibonacci(0); // Cache HIT
```

To summarize, *Memoization* is an optimization technique to speed up program execution by caching results of expensive computation and returning cached results when the function is called when already known inputs.