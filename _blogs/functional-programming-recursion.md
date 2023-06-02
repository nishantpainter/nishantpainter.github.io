---
title: Functional Programming - Recursion
description: It is an approach to solve a given problem by iteratively calling the solution on the smaller instances for the same problem until it's reaches a termination condition.
ogtitle: Recursion
ogsubtitle: Functional Programming
tags: ["functional-programming", "recursion"]
categories: ["Programming", "Functional Programming"]
date: 05-03-2021
---

# Recursion

It is an approach to solve a given problem by iteratively calling the solution on the smaller instances for the same problem until it's reaches a termination condition.

For example, the factorial of a given number can be computed by calling the factorial of a given number by multiplying the number with the factorial of number one less than it. This should be continued until we reach a base condition, in this case 1.

```
fact(5);
5 * fact(4);
5 * fact(4) * fact(3);
5 * fact(4) * fact(3) * fact(2);
5 * fact(4) * fact(3) * fact(2) * fact(1);
5 * fact(4) * fact(3) * fact(2) * 1;
5 * fact(4) * fact(3) * 2;
5 * fact(4) * 6;
5 * 24
120
```

Program to calcuate the factorial of a given number

```
function fact(n) {
  if (n === 1) {
    return 1;
  }

  return n * fact(n - 1);
}
```

Program to print number in reverse starting from n

```
function printReverse(n){
    if(n===1){
        console.log(1);
    }
    console.log(n);
    printReverse(n-1);
}
```

The important part of recursion includes a termination condition, reaching to the termination condition and recursive calls.
