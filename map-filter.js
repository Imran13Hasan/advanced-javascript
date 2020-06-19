// // Square numbers by simple for-loop method...

// const numbers = [3, 4, 5, 6, 7, 8, 9, 10, 11];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);




// Square numbers using map..., map can be applied upon arrays...
// const numbers = [3, 4, 5, 6, 7, 8];

// function square (element){     //Alternative function...
//     return element * element;
// }

// const result = numbers.map(function(element, index, array){     //Map can bear 3 parameters like element, index, array...
//     // console.log(element);
//     return element * element;
// })

// const square = element => element * element;    //Alternative function...

// const square = numbers.map(x => x * x);      //Alternative function...

// console.log(square);






// //Get different type of numbers using FILTER...
// const numbers = [3, 4, 5, 6, 7, 8];
// const oddNum = numbers.filter(x => x%2);
// console.log(oddNum);


// const num = [3, 4, 5, 6, 7, 8];
// const bigger = numbers.filter(x => x>5);
// console.log(bigger);




// //For-each method...
// const numbers = [5, 4, 2, 3, 8];
// // numbers.forEach(element => console.log(element));
// numbers.forEach(function(element){
//     console.log(element);
// })

// Expected result:
//                 5
//                 4
//                 2
//                 3
//                 8





// //Reduce...
// const arr = ['a', 'b', 'c'];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;   //The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
// console.log(arr.reduce(reducer));


// const num = [1, 2, 03, 04, 05, 06]
// const reduceNum = (accumulator, currentValue) => accumulator + currentValue;
// console.log(num.reduce(reduceNum));

// const numMore = [1, 2, 03, 04, 05, 06]
// const reduceNumMore = (accumulator, currentValue) => accumulator + currentValue;
// console.log(num.reduce(reduceNumMore, 20));




//Find...
const digits = [40, 20, 10, 50].find(x => x > 25);        //Get small or bigger next one digit...
console.log(digits);

const digit = [10, 20, 30, 40, 50]
const num = digit.find(digit => digit > 25);
console.log(num);