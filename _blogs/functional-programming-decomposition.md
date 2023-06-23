---
title: Functional Programming - Decomposition
description: Decomposition is the process of breaking complex tasks into smaller simple tasks.
ogtitle: Decomposition
ogsubtitle: Functional Programming
tags: ["functional-programming", "decomposition"]
categories: ["Programming", "Functional Programming"]
date: 2023-06-23
---

# Decomposition

Decomposition is the process of breaking complex task into smaller simpler tasks. It makes it easier to understand, manage and extend the software over a period of time. These smaller steps will be then combined and deliver a complete solution.

In example below we are stimulating asynchronous request call to fetch data and breaking the response handler into smaller tasks with distinguished purpose. 

We implemented a `transformation` and `filtering` handler to process the response instead of one single handler to do all the work.

```
const stimulatePromise = (value = [], timeout = 1500) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(value);
    }, timeout);
  });
};

const filterResponse = (response) => response.filter((i) => true);

const transformResponse = (response) => response.map((i) => i);

const fetchData = () => stimulatePromise();

fetchData().then(filterResponse).then(transformResponse);
```
