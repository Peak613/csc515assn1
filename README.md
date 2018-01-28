# Homework 1 - CSC 515 - Advanced Internet Programming #
**Due Date: 2/5/2018**

## Objective ##
Create a JavaScript library called MathFun. Your project should be self contained and use webpack
for local development. You can output the results in any way you like for local development:
add elements to the DOM, log to the console, etc.

Feel free to reference the
[webpack demo we did in class](https://github.com/MissouriState-CSC515-Spring2018/webpack-starter-template)
to get started.

## Specifications ##
* The library should only add one symbol to the Global Namespace called `MathFun`

### Implement the following methods: ###

```JavaScript
MathFun.fibonacci = function(index) {};
```
This function returns the fibonacci sequence number at the provided index.
Index may be a string or number. If a number is provided, it should be rounded to the nearest integer.
If a string is provided, it should be parsed as an integer. You must also handle invalid input.

```js
MathFun.ibonacciUsage: = function() {};
```
This function returns the number of times that `MathFun.fibonacci` has been called.

```js
MathFun.fibonacciUsage = function() {};
```
This function returns the number of times that MathFun.fibonacci has been called. 

**Example Usage:**
```js
MathFun.fibonacciUsage(); // returns 0
MathFun.fibonacci(6); // returns 8  
MathFun.fibonacci(0); // returns 0  
MathFun.fibonacciUsage(); // returns 2
```

## How To Submit The Assignment
 1. Clone the repository locally.
 2. Create a feature branch to work on your code.
 3. Commit and push often while you develop.
 4. When ready to submit, create a pull request on GitHub targeting the master branch .

If you have questions during this process, create the pull request early and ask the questions there.
Email me a link to the pull request.
