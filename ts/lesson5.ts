import { pipe, from, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `_` below will be `undefined`
let arr: number[] = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]

const nums = from(arr); // Create an Observable from array

// lesson 5.1 ============================================

const squareValues = map((val: number) => val * val);
const squareNums = squareValues(nums);

// lesson 5.2 ============================================

// Create a function that accept an Observable
// 1. Independent pipe() function
const squareOddVals = pipe(
  filter((n: number) => n % 2 !== 0),
  map((n: number) => n * n)
);
const squareOdd0 = squareOddVals(nums);

// 2. pipe() function is also a method of Observable
const squareOdd = nums.pipe(
  filter((n: number) => n % 2 !== 0),
  map((n: number) => n * n)
);
// Create an Observable that will run filter and map functions

export { squareNums, squareOdd };
