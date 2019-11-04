'use strict'

// // Você pode usar:
// var head = arr[0];
// var tail = arr.slice(1);
//
// // Ou no ES6:
// const [head, ...tail] = arr;


const arrayInternal = [1, 2, 3, 4, 5]
console.log(arrayInternal);

const [head, ...tail] = arrayInternal

console.log(head)


console.log(tail)
