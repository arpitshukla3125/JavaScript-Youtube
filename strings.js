const name = "Arpit"
const cgpa = 7.3

//console.log(`hello i am ${name} and my cgpa is ${cgpa}`);

const gameName = new String("gta-sanandreas")

//console.log(gameName.__proto__);

//console.log(gameName.length);

//console.log(gameName.toUpperCase());

//console.log(gameName.charAt(2));

//console.log(gameName.indexOf('t'));

const newString = gameName.substring(1, 5)
//console.log(newString);

const anotherString = gameName.slice(-1, 4)
//console.log(anotherString);


const newOnestring = '      Arpit           '
// console.log(newOnestring);
// console.log(newOnestring.trim());

const url = "https://arpitshukla-01/arpit%31shuklaa//"
console.log(url.replace('%31', '--'));
console.log(url.includes('arpit'));
console.log(url.includes('jaiii'));