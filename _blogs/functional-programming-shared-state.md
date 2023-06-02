---
title: Functional Programming - Shared State
description: It refers to any variable, including both primitive and reference type, that exists in global scope or scope which is shared across different functions. 
ogtitle: Shared State
ogsubtitle: Functional Programming
tags: ["functional-programming", "shared-state"]
categories: ["Programming", "Functional Programming"]
date: 14-03-2021
---

# Shared State

It refers to any variable, including both primitive and reference type, that exists in global scope or scope which is shared across different functions. In procedural and object oriented programming the value of the variable is often changed by the function accessing it. On the other end, functional programming avoid the use of shared state and changing its value. It promotes returning a new data derived from old data along with applying required changes.

With shared state, in order to understand behaviour of a particular function one has to trace the entire changes applied on the variable prior to calling that function. Moreover, functions which utilizes shared state are often dependent upon a fix sequence of operation or function calls for reaching certain input value which is then used within the function itself for performing its calculation. This restrict the functions to be invoked in a definite manner to reach certain output, any change in this order will break the sole purpose of the function.

```
const value = 1;

function double(){
    return value * 2;
}

function square(){
    return value * value;
}

```

```
double();
square();
console.log(value);  // 4
```

```
square();
double();
console.log(value) // 2
```

The output depends upon the order in which the functions are called. Moreover, the output of function are not the same on each call.

These functions can restrict the use of shared state to achieve order independence and improve readability.

```
function double(value){
    return value * 2;
}

function square(value){
    return value * value;
}
```

Avoiding shared state will now enable the function to have consistent output for given input, thereby making them more predictable and easy to debug.
