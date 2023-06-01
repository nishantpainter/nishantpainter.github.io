---
title: Programming Paradigms - Imperative and Declarative Programming
ogtitle: Imperative and Declarative Programming
ogsubtitle: Programming Paradigms
date: 10-07-2020
---

# Imperative and Declarative Programming

A program is a set of instructions that instruct the computer to perform a certain task. And [Programming Paradigm](/blogs/programming-paradigms-what-are-programming-paradigms) are the styles of writing a computer program. Paradigms can be broadly classified into Imperative and Declarative programming based on how and what the computer is instructed to do.

## How and What ?

Yes. An imperative program tells the computer about **how** to perform certain tasks. While a declarative program tells the computer about **what** to do and not really caring about how the computer does it.

Let’s imagine you are into shopping. You want to buy a T-Shirt. In your head you will have conditions and logic getting popped. Someone will go ahead like this :

> Let me check my wardrobe, if I have a red colour T-Shirt then I probably buy a blue colour T-Shirt. Here you are considering your current wardrobe for making a decision about how a new T-Shirt should be. **This is called an imperative approach**.

Another person thought might be somewhat different will go ahead like this :

No matter what my wardrobe or anything else around me is currently, I will go out and will only buy a White colour T-Shirt. Here you are not considering any other thing before making a decision about **what** a new T-Shirt should be. **This is called a declarative approach.**

## That’s right ! But in terms of computer instruction ?

An imperative program is a program that instructs a computer in a specific manner about how to get through a certain computation, providing it a step by step instruction about _how_ to compute and get to the desired result.

```
Step 1: Hey computer how are you ?
Step 2: I want you to display an image on screen.
Step 3: Check if any other image is displayed already or not.
Step 4: If not then please check if someone else is also trying to display some image on screen or not ?
Step 5: If someone else is trying then let him / her first display it on screen.
Step 6: If they are done with it, display my image.
Step 7: Thank you very much Computer.
```

This is how an imperative program instructs the computer to perform a task of displaying an image on screen. It takes into account various scenarios before displaying the image on screen and also provides detailed execution instruction to the computer.

A declarative program simply tells the computer what is expected.

```
Step 1: Hey computer how are you ?
Step 2: I want you to display an image on screen.
Step 3: Please update me once done. Thank you.
```

This declarative program simply instructs the computer to display the image and update when done, without getting into detail about the execution.

## Summary

Imperative style programs consider the existing state of computer and also change the instruction order based upon it (control flow). It is relative. On the other hand declarative style programs simply describe the logic without describing control flow. It is absolute.
