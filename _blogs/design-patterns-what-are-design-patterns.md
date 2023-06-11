---
title: Design Patterns - What are Design Patterns ?
description: Design patterns are the code constructs irrespective of programming language, that offer solutions to the commonly occurring problems which are faced while developing a software.
ogtitle: What are Design Patterns ?
ogsubtitle: Design Patterns
tags: ["design-patterns", "software-engineering"]
categories: ["Programming", "Design Patterns"]
date: 2021-09-15
---

# What are Design Patterns ?

Design patterns are the code constructs irrespective of programming language, that offer solutions to the commonly occurring problems which are faced while developing a software.

It can also be considered as a specification or a template, for solving repeated problems, that can be implemented in multiple ways depending upon the situation.

## Why should we use Design Patterns ?

These patterns are proven solutions to an issue, which assure optimal handling of the problem on hand and speed up the development process by overcoming current issues and minimizing future problems in software design.

Such patterns are robust and can be reused, which also acts as a communication medium between two developers familiar with them. By having patterns understanding one can easily comprehend current code which implements certain patterns and quickly append required changes.

## Categories of Design Patterns

Based upon the situation where the pattern can be used they can be broadly classified into three type Creational, Structural and Behavioural. Furthermore, it can be divided into class based and object based depending upon its applicability.

---

### Creational Design Patterns

It deals with problems related to instantiation of either class or object. These patterns adhere to class and object creation to make effective use of inheritance and delegation.

_Class Based_

**Factory Method** : Create an instance of several derived classes considering the interface information.

_Object Based_

**Abstract Factory** : Creates instances from various categories of classes without describing concrete implementation.

**Builder** : Helps create the same type of object by separating its construction process from its representation.

**Prototype** : Copying or cloning fully initialized instance.

**Singleton** : For creating a class which will have only a single instance.

---

### Structural Design Patterns

These design patterns deal with the composition of classes and objects. It makes use of inheritance to compose interfaces and methods for adding new functionality.

_Class Based_

**Adapter** : Act as a connector between classes having incompatible interfaces.

_Object Based_

**Adapter** : Connector as above mentioned class based.

**Decorator** : Update object functionality dynamically.

**Composite** : Composing several objects to enhance its capability.

**Bridge** : It isolates the object interface from its implementation to promote decoupling.

**Facade** : Class that hides details of underlying subsystems and offers minimal public exposure.

**Proxy** : An object representing some other object acting as its placeholder.

**Flyweight** : An instance created for sharing information stored elsewhere.

---

### Behavioural Design Patterns

These patterns offer solutions for convenient communication across classes or objects. It is based upon how things act together.

_Class Based_

**Template** : Create a template for a sequence of steps in a method and delegate the exact step to a subclass.

**Interpreter** : Provide means to include certain language grammar within the program and process it.

_Object Based_

**Command** : Encapsulation command requests such as logging and queuing requests in the form of an object. Also providing error-handling for unhandled requests.

**Memento** : Create snapshot of object internal state for future use.

**Mediator** : Creating a mediator object for communication instead of allowing objects to communicate directly with each other.

**Iterator** : Access collection without knowing it’s details.

**Visitor** : Defines a new operation to a class without changing it.

**State** : Change object behaviour based on its state.

**Observer** : Means of broadcasting change across several objects ensuring consistency between them.

**Chain of responsibility** : Passing some request through a chain of objects to an appropriate object for handling it.

**Strategy** : Encapsulate algorithms within class isolating selection and implementation.

---

## What is an Anti-Pattern ?

Anti-Patterns are counterparts to design patterns, which describe commonly occurring solutions for a problem often having negative consequences and are highly counterproductive. Though initially appearing to be an appropriate and effective solution to a problem, it has relatively more negative consequences than positive.
