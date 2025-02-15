function foo(a, b) {
  if (a === 0 && b === 0) {
    return NaN; // Handle the case where both a and b are zero by returning NaN
  } else if (b === 0) {
    return Infinity; //Handle the case where b is zero and a is not
  }
  return a / b;
}

console.log(foo(1, 2)); // 0.5
console.log(foo(0, 0)); // NaN
console.log(foo(4, 2)); // 2
console.log(foo(4, 0)); // Infinity