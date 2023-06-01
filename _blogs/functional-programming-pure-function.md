---
title: Functional Programming - Pure Function
ogtitle: Pure Function
ogsubtitle: Functional Programming
date: 27-02-2021
---

# Pure Function

Function is a relation that maps input value to output. Provided with certain value of input, it returns the output considering the mapping.

For example a function that doubles the value will map the input to it's double value

```1 -> 2```

```2 -> 4```

```3 -> 6```

Pure function are those relationship mappings which produces same output everytime when provided with the given same input.

For example the above function to double the value will always return the same output for a given input value. Input value 1 will always return 2 and like wise for all the other input it will have a fixed output value. 

```
Pure function because it will always return same output for a given input

function square(x){
    return x * x;
}
```

Moreover, such functions do not produce or execute any side effect. A side effect is an action that changes any state of the system. For example consoling the value to the output, generating random value, fetching remote data etc. 

```
Impure function since it will return different value on each call.

function getRandom(){
    return Math.random();
}
```

Moreover, it is not dependent on any external factors for example, the current state of the system. All the required value are passed as the arguments to the function instead of refering them directly.

```
Impure function because it cosume name from scope outside this function

function printName(){
    console.log(this.name); 
}
```

Also, it should not mutate the mutate the arguments provided to it. For example it must not change the value of any property in the object passed to it as an argument.

```
Impure because it mutates the tax property of product argument

function calculateTax(product){
    product.tax = product.price * 0.1;
}
```

Another common notion for identifying an impure function is those function are called without there return value being used.

```
Pure because it's returing a value which will be consumed by the calling side

function double(x){
    return x * 2;
}
```

To summarise, a pure function follow the below mentioned characteristics :

* Produce same output for given same input value everytime
* Have no side effects
* Do not mutate the arguments
* Should not depend upon external state
* Should return a value which is consumed thenafter
