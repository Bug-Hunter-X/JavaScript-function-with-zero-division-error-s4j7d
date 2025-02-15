# JavaScript Zero Division Error

This repository demonstrates a common error in JavaScript: division by zero. The `foo` function attempts to divide `a` by `b`, but it doesn't handle the case where both `a` and `b` are zero.

## Bug
The `bug.js` file contains the function with the error. Running this code will result in an error when `foo(0,0)` is called.

## Solution
The `bugSolution.js` file demonstrates a corrected version of the function, which handles the zero division case by returning an appropriate value (e.g. NaN or Infinity) or throwing an exception.  This prevents the program from crashing. 

## How to Reproduce
1. Clone this repository.
2. Run `bug.js` using Node.js or your preferred JavaScript runtime.
3. Observe the error when calling `foo(0,0)`
4. Run `bugSolution.js` to see the corrected behavior.