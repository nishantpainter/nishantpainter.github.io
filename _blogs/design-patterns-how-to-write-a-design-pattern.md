---
title: Design Patterns - How to write a design pattern
ogtitle: How to write a design pattern
ogsubtitle: Design Patterns
date: 21-09-2021
---

## How to write a Design Pattern

A [pattern](/blogs/design-patterns-what-are-design-patterns) is a proven solution to a commonly occurring problem in software design. Writing a design pattern is a critical task and demands considering various vital aspects such as the _natural process of pattern formation_,
_elements of a pattern_ and _general guidelines_.

Prior to writing a design pattern, an individual should get familiar with existing patterns descriptions and grasp their underlying features. The structure and semantic of available patterns should be carefully understood, on the basis of its interaction and context, thereby deriving the principles that aid in assembling patterns for different arrangements. Thereafter, one can decide upon creating a new pattern or improving an existing pattern.

In writing a design pattern, it is essential to consider that it is a _design_ which is being abstracted from a specific solution and found to be applicable to a number of other solutions. Given a solution, a creator must extract the design beneath and record it in general terms which has wider applicability.

It should also be noted while writing a pattern that a body of code that simply follows good principles and design practices must not be considered as a pattern. A pattern, apart from involving aforementioned characteristics, must also involve _interaction_ and _set of defined rules_.

## Natural process of pattern formation

The process of creating new patterns, most of the time, is associated with _discovery_ rather than creation. As discussed, designs approximated by having a wider range of applicability instead of specific implementation are noted in general terms thereby forming a pattern. An author who registers design in this manner is often called a _pattern discoverer_ or _describer_. Rarely does an author devise a completely new solution for a given problem, codify it in general terms and get credited as an _author_ or _creator_ of the new pattern.

Moreover, implementation and design appear before identifying it as a pattern. They are accepted as a proven solution to a problem before getting recorded in general description and considered as a pattern. Hence, as a natural process the creator should keenly observe solutions available in the wild, estimate their wider use and qualify them as a pattern.

## Elements of a pattern

It is of critical importance to understand the fundamental elements of a pattern before writing a new or improving an existing one. These factors include _problem_, _solution_, _context_ and _examples_.

### Problem Statement

Patterns should provide answers for common problems or repeated problems occurring in designing software. A problem statement should clearly and unambiguously define the issue a pattern is trying to solve.

### Solution Statement

This statement explains how a given problem is solved using a pattern. It is a set of steps and assumptions that provide solutions to underlying issues. This must be a tried and tested solution, instead of speculations, and should be reliable.

### Context

Context or scope is a description that defines the area within which a pattern is successful in solving the issue. It sometimes also defines the area where the pattern is not useful.

### Example

Patterns must provide examples of its design and implementation. The example should cover broad usage and properly describe the good design principle of the pattern.

## General guidelines

Writing a design pattern should capture all the essential elements of the pattern along with providing the end user with sufficient information about using the pattern. Certain guidelines which can be helpful in writing pattern is as follows :

- _User-centric_ : Pattern should not alter or force change in the behaviour of the user adapting it. It must cover what user already perceives and understands.

- _Experience agnostic_ : Pattern should be transparent and favourable to users of any experience level.

- _Practicality_ : Patterns should produce result by describing proven solution instead of providing speculating solution.

- _Best practice and principles_ : Design must be decided based on the principles derived from incorporating best practices.

- _Strong examples_ : A pattern must showcase a broad range of examples to support various use-cases. It should describe good practices and principles while showing pattern usage.

- _Discovery over creativity_ : Identify the wider application of existing solutions in the wild instead of creating new pattern.

- _Originality is not the key_ : It’s fine to not be the original discoverer of a pattern, even though a pattern has minor overlapping with existing pattern it can be accepted based upon its broad usage.

- _Patterns can be derived_ : Various patterns can be combined to create a new pattern. The configuration of mixing must be carefully decided by the creator.

## Conclusion

Writing a pattern is balancing between creating a design which is general as well as specific. The pattern should be general enough to cover a wide range of applications along with being specific in ensuring that all it’s design principles are enclosed within its implementation.
