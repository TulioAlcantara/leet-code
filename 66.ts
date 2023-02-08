// function plusOne(digits: number[]): number[] {
//   let digitsInteger = 0;
//   const resultArray: number[] = []
//   for (let i = 0; i < digits.length; i++) {
//     digitsInteger += digits[i] * Math.pow(10, digits.length - 1 - i)
//   }

//   digitsInteger = digitsInteger + 1
//   let digitsIntegerCount = digitsInteger.toString().length

//   for (let i = 0; i < digitsIntegerCount; i++) {
//     resultArray.push(Math.floor(digitsInteger / Math.pow(10, digitsIntegerCount - i - 1)))
//     digitsInteger = digitsInteger % Math.pow(10, digitsIntegerCount - i - 1)
//   }

//   return resultArray
// };
// plusOne([1])
