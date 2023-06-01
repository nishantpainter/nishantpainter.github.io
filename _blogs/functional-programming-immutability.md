---
title: Functional Programming - Immutability
ogtitle: Immutability
ogsubtitle: Functional Programming
date: 13-03-2021
---

# Immutability

It refers to an approach where an object, or any other reference in the system, value or state is not changed once it is created. Such an object is called as an `immutable object`. On the contrary, a `mutable object` is an object whose value can be modified. 

It is required to impose a strict control on the data and prevent it from unwanted modification. Moreover, it also makes the code more predictable and easy to debug. 

For example in JavaScript, an object can be made immutable by an inbuilt `Object.freeze` method.

```
var obj = { foo: "bar" };

Object.freeze(obj); // Making the object restricted to change.

obj.foo = 'foobar'; // Cannot be changed because the object is immutable
```