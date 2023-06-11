---
title: Functional Programming - Abstraction
description: Abstraction is the process of defining general format for different methods in a program.
ogtitle: Abstraction
ogsubtitle: Functional Programming
tags: ["functional-programming"]
categories: ["Programming", "Functional Programming"]
date: 2021-02-20
---

# Abstraction

Abstraction is the process of defining general format for different methods in a program.

For example if we consider the following program that applies the square twice on a given number, we can create an abstraction for that function in the described manner compare to creating a method which apply the same function twice on a given number.

```
function square(n) {
  return n * n;
}

function applySquareTwice(n) {
  return square(square(n));
}

applySquareTwice(2); // 16

// Abstracted Function

function applyTwice(n, f) {
  return f(f(n));
}

applyTwice(2, square); // 16

```
