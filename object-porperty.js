// const students = [
//     {id: 10, name: "Imran Hasan"},
//     {id: 20, name: "Mahmudul"},
//     {id: 10, name: "Sajeeb"},
//     {id: 10, name: "Reyad"}
// ]
// const name = [];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const output = element.name;
//     name.push(output);
    
// }
// console.log(name);



const students = [
    {id: 10, name: "Imran Hasan"},
    {id: 20, name: "Mahmudul"},
    {id: 40, name: "Sajeeb"},
    {id: 30, name: "Reyad"}
]

const names = students.map(students => students.name);
const ids = students.map(i => i.id);
const bigger = students.filter(x => x.id > 20);
const biggerOne = students.find(x => x.id > 20);
const biggerP = students.filter(x => x.name.length > 6);


// console.log(names);
// console.log(ids);
// console.log(bigger);
// console.log(biggerOne);
console.log(biggerP);