"use strict";
1;
function num(...n) {
  let index = 0;

  for (let i of n) {
    index += i;
  }
  return index;
}
let resultNum = num(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
let resultNum2 = num(2, 5, 11, 100, 5, 8);
console.log(resultNum);
console.log(resultNum2);



2;
function sum(...numbers) {
  let sumvalue = 0;
  for (let item of numbers) {
    sumvalue += item;
  }
  return sumvalue;
}
let resultSum = sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(resultSum);



//   3. -------------



4;
let numb = function (...m) {
  for (element of m) {
    // console.log(element);
  }
  if (element > 36) {
    console.log(element);
  }
};
numb(20, 25, 30, 35, 40);



5;
let x = function (n) {
  return n;
};
let resultN = x(20);
console.log(resultN);
let numbN =
  resultN % 2 == 0
    ? "this number is even"
    : resultN % 2 == 1
    ? " this number is odd"
    : "";
console.log(numbN);



6;
let array = ["html", "css", "python", "javascript", "bootstrap"];
array.forEach(function (item) {
  if (item.length > 4 && item.includes("av")) {
    console.log(item);
  }
});

let array1 = ["html", "css", "python", "javascript", "bootstrap"];
for (let item of array1) {
  if (item.length > 4 && item.includes("av")) {
    console.log(item);
  }
}



7;
let array2 = [2, 5, 7, 8, 9];
let reversed = array2.reverse();
console.log(reversed);



8;
let getAge = (years, birtday) => {
  return years - birtday;
};

let result = getAge(2023, 1990);
console.log(result);
let ageResult =
  result >= 18 ? "სრულწლოვანი" : result < 18 ? "არასრულწოვანი" : "";
console.log(ageResult);
