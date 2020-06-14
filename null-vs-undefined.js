                    /*Undefined is NEGATIVE or FALSY*/
let pakhi;
console.log(pakhi);              // It shows undefined because of not defined it's value...

function add(num1, num2){
    console.log(num1 + num2);
                                //It shows there undefined due to not define return...
}
const result = add(10, 20);
const total = add(15, 30);
console.log(result);

function add(num1, num2){
    console.log(num1, num2);
                                // It also shows undefined due to not defined num2...
}
const result = add (20);

const person = {name: "Hasan", phone: 5645645};
console.log(person.gf);         //Here it shows undefined due to not exist gf property in the person object...

const fun = undefined;
console.log(fun);               //Here it basically shows undefined...

let ages = [10, 20, 30];
console.log(ages[11]);           //Here it shows undefined because of the 11th number of element on this array does not exist...   



