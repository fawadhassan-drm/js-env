// let arr = [1, 2, 3, 4, 5]
// // console.log(arr);
// // console.log(arr[2]);
// // console.log(arr.pop());
// // console.log(arr.shift());
// // console.log(arr.push(6));

// // arr.push(7)
// // console.log(arr);

// arr.push(31)
// console.log(arr);
// console.log(arr.includes(32));

// const arr1 = [1, 2, 3, 4, 5, 6]
// console.log(arr1.slice(1, 4))
// console.log(arr1);

// const arr2 = [1, 2, 3, 4, 5, 6]
// console.log(arr2.splice(1, 4))
// console.log(arr2);

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9]

// arr1.push(arr2)
// console.log(arr1);

// console.log(arr1[4]);
// console.log(arr1[5]);
// console.log(arr1[5][2]);

// const arr = [...arr1, ...arr2]
// console.log(arr);

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));


const f_arr = [1, 2, 3, [4, 5], 6, [7, 8, [9, 0]]]

const final_array = f_arr.flat(Infinity)
console.log(final_array);