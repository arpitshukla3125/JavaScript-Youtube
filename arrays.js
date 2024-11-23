// const myArr = [0, 1, 2, 3, 4]

// const myHeros = ['batman', 'spiderman', 'ujjawal', 'arpit']

// const myArr2 = new Array(1,2,3,4,5,6)

// // console.log(myArr[2]);

// // console.log(myHeros[3]);

// // console.log(myArr2[2]);


// // Array Methods:

// // myArr.push(7)
// // myArr.pop(0)

// //myArr.unshift(8)
// //console.log(myArr);

// const newArray = myArr.join()
// // console.log(myArr);
// // console.log(typeof newArray);


// //slice and splice:


// console.log("A", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);

// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("c ", myArr);
// console.log(myn2);


const marvel_heros =["thor", "ironman", "spiderman"]
const dc_heros = ["superamn", "flash", "batman"]

// marvel_heros.push(dc_heros)
//console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); 

const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array); 

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1,score2,score3));
console.log(Array.isArray("Arpit"));
console.log(Array.from("Arpit"));
console.log(Array.from({name: "Arpit"}));