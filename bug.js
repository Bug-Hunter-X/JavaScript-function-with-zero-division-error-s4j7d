function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // This line is wrong. It will cause unexpected behavior when both a and b are zero
  }
  return a / b;
}

console.log(foo(1, 2)); // 0.5
console.log(foo(0, 0)); // Error: It should handle 0/0 case correctly
console.log(foo(4, 2)); // 2