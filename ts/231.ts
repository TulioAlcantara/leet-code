function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & n - 1) == 0;
};

console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(3))
console.log(isPowerOfTwo(4))
console.log(isPowerOfTwo(5))
