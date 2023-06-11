---
title: Programming Paradigms - Object Oriented Programming
description: Object Oriented Programming (OOP) is a Programming Paradigm which is based on the concept of objects. Objects are entities that contain Data and Methods.
ogtitle: Object Oriented Programming
ogsubtitle: Programming Paradigms
tags: ["programming-paradigms", "oops", "object-oriented-programming"]
categories:
  ["Programming", "Programming Paradigms", "Object Oriented Programming"]
date: 2020-10-22
---

# Object Oriented Programming

## Introduction

Object Oriented Programming (OOP) is a [Programming Paradigm](/blogs/programming-paradigms-what-are-programming-paradigms) which is based on the concept of objects. Objects are entities that contain Data and Methods. Data refers to the values, variables or state that are used within the program and Method are the [Procedures](/blogs/programming-paradigms-procedural-programming) or [Functions](/blogs/programming-paradigms-functional-programming) which manipulate that data.

In OOP, a computer program implements logic by making use of these objects that interact with each other. For this purpose multiple objects of similar or distinct structure are created within the program. Implementing similar objects again and again can consume time and creates redundancy in code. Class provides a solution to this problem. It acts as a blueprint or foundation for defining the structure of an object. Class is thereby used to first design and then to create similar multiple objects. Therefore, an object is called an instance of class.

Some languages solve the aforementioned problem by using prototypes. A prototype is an object, whenever we want to create a similar object, to an already existing object, we simply link the new object with the previously defined object as their prototype. The data and methods from the prototype are then transferred to all the objects having it as their prototype. The programming languages implementing OOP are sometimes classified as class-based and prototype-based languages.

## Message Passing

In OOP, objects interact or communicate with each other to accomplish various tasks. Such interaction will enable an object to invoke methods of another object, which in-turn will execute the invoked method and return it’s result to the object invoking it. In OOP, message passing is executed by specifying the name of the object followed by the name of the and information to be sent. In OOP, message passing is an essential part of program execution.

## Why OOP?

Prior to OOP, there was [Procedural Programming](/blogs/programming-paradigms-procedural-programming). Procedure performs a specific task and manipulates data of the system. One can invoke a procedure, instead of writing the logic again, whenever he / she wants to perform that task. It provides reusability, but with increasingly complex programs it becomes hard to manage and trace the change in the system made by a certain procedure.

OOP provides maintainability and control by binding state and methods within a single object. The change from a method is delegated within the data of the same object and can be traced easily. Moreover, classification into the form of objects enforces modularity. As the data and methods are dependent only upon itself within an object, any existing object is easily replaceable with a new object having similar structure with enhanced capability. Other benefits include security, by imposing restrictions on other objects to change data of an object directly by using access control on object data and methods. OOP is therefore required to overcome these limitations and to organise the program for better control, reusability and maintainability.

## Fundamentals of OOP

OOP practises the following principles :

### Abstraction

It is the ability of displaying essential information required to communicate with an object, discarding other low-level or irrelevant information required to perform a desired task. For example, a class for Ticket Booking. Using abstraction only the methods such as _show booking_, _create booking_, _update booking_ and _cancel booking_ are displayed for interaction and other details can be hidden away from the user. Interfaces and Abstract class are used in OOP to achieve abstraction.

### Encapsulation

In OOP, encapsulation refers to binding data and methods, which manipulate that data, within the same object. Since data is restricted, allowing only methods within the object to access it, it imposes a strict security on outside interference and avoids misuses. The same is applicable for the access of object methods. Encapsulation is therefore also referred to as _Data Hiding_.

### Inheritance

It is a mechanism that allows one class to inherit data and methods of another class. It promotes reusability by inheriting features from already existing classes and changing them wherever required to perform different or augment functionality. The class inheriting is called as Child or Sub class and the the class from which it is inherited is called as Parent or Super class.

### Polymorphism

In OOP, polymorphism is a strategy that allows methods to behave differently based upon their definition. The method by same name behaves differently when called upon in Child class compared to Parent class depending upon its definition.

Moreover, in a single Class there can be different definitions of the same method name taking different arguments providing different results. For example a class can have a method _add_, with a definition taking two arguments, another definition taking three arguments and so on.

From the perspective of calling code, polymorphism can also be viewed upon as a type of abstraction that hides which definition of method is being executed by the system.
