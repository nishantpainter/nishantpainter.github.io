---
title: Functional Programming - Side Effect
description: Side effect is any operation that is perform by a function, besides returning a value, which modifies a value outside the local scope of that function affecting current behaviour of the overall system.
ogtitle: Side Effect
ogsubtitle: Functional Programming
tags: ["functional-programming", "side-effect"]
categories: ["Programming", "Functional Programming"]
date: 17-03-2021
---

# Side Effect

Side effect is any operation that is perform by a function, besides returning a value, which modifies a value outside the local scope of that function affecting current behaviour of the overall system.

Some of the common side effect includes :

- Changing global state
- Logging / writing to screen / file
- Network requests
- Invoking functions already having side effects

```
var counter = 0;

function incrementCounter() {
  counter = counter + 1; // Side effect
}

function logTime() {
  console.log(new Date()); // Side effect
}

function fetchData() {
  return fetch('http://example.com'); // Side effect
}

```

In presence of side effects, a program behaviour depends upon the histories of changes / order of evaluation ( since its modifying a shared variable ) and requires the knowledge about existing context for understanding the program. However in the absence of which, the program is easy to debug and understand.
