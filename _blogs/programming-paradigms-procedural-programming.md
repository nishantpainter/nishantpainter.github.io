---
title: Programming Paradigms - Procedural Programming
description: It is a style of writing computer programs using procedures. Procedural Programming solves a problem by implementing and making use of various procedures.
ogtitle: Procedural Programming
ogsubtitle: Programming Paradigms
tags: ["programming-paradigms", "procedural-programming"]
categories: ["Programming", "Programming Paradigms", "Procedural Programming"]
date: 2020-08-16
---

# Procedural Programming

Procedural Programming is an [Imperative](/blogs/programming-paradigms-imperative-and-declarative-programming) style of [Programming Paradigm](/blogs/programming-paradigms-what-are-programming-paradigms). It is a style of writing computer programs using procedures. Procedural Programming solves a problem by implementing and making use of various procedures.

## What is a Procedure ?

Procedure is a sequence of computer instructions for performing a specific task. When we need to perform that same task again somewhere else then instead of writing the same instruction set again, we will call the procedure to perform the task. Procedure are also referred to as Routines, Subroutines and Functions. Procedures enable [Modularity](<https://en.wikipedia.org/wiki/Modularity_(programming)>) in a computer program. Procedure may have input arguments in order to perform given tasks. For example, the procedure to compute and print the square of given integer list can be expressed as follows :

```
procedure print_squares(list_of_integer){
    for each integer in list_of_integer {
        print integer * integer;
    }
}
```

Note : The above construct doesn’t belong to any programming language and it’s used for explanatory purpose only.

## Block and Scope

Procedure depends on block and scope for performing its functionality. A `block` is a structure that groups a set of computer instructions. In the above example, the opening parenthesis and the closing parenthesis forms a block.

```
procedure print_squares(list_of_integer){ <- Block starts ->
   ...
} <- Block ends ->
```

A `scope` associates a `value` to a `variable` in some part of the program or `block`. The `name` of the variable can be then used to refer to the value associated with it in that block. Where-else in other blocks of the same program the same name of the variable can refer to some other value or no value at all.

```
procedure print_number(){
    <- Value of variable `ten` is `10` within this block scope ->
    number ten = 10
}
procedure print_decimal_number(){
    <- Value of variable `ten` is `10.00` within this block scope ->
    number ten = 10.00
}
```

`Block` and `Scope` allow us to group the instructions required for a procedure to perform tasks and to avoid conflict of the variables.

## Difference between Procedural and [Function](/blogs/programming-paradigms-functional-programming)

Procedure or Function can be used interchangeably to specify a group of computer instructions. However, they have differences in implementation when we consider the philosophy of given a paradigm.

In procedural programming, one can change or mutate the value of the argument passed to a procedure. Functional programming on the other hand restricts the mutation of value and emphasis on returning new value with the changes required.

Procedures in programs can share variables and depend on each other. While in functional programming the value is usually not shared and the dependencies exist between functions based on the argument passed to the function and the value returned from the function. In this manner, functions have free order of execution while the procedures don’t.

Procedure can have [side-effect](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)#:~:text=In%20computer%20science%2C%20an%20operation,the%20invoker%20of%20the%20operation.>) within them while a function should not have a side-effect and must be pure.

Procedures cannot be passed as an argument (first-class-citizen) to other procedures. Functions can be passed as an argument to other functions and can be returned from a function.

## Summary

Procedural paradigm is normally used for general-purpose programming. It is usually the first paradigm practice that a new developer gets gripped onto. There are several advantages of this approach which includes, ease of implementation, modularity and simple program flow. However, there are certain limitations of procedure which one might need to consider first hand, that includes, difficulties to trace mutation of value, strict order of execution due to state sharing, data is not restricted and can be changed anywhere in the program.
