let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// use only array methods to get this output ( you can't use numbers) 
// your code

allArrs = allArrs.concat(arr1,arr2).sort().join("").toLowerCase().slice(-3);

console.log(allArrs); // fxy