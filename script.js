// "use strict";

// let hasDriverslicense = false;
// const passTest = true;

// if (passTest) hasDriverslicense = true;
// if (hasDriverslicense) console.log("i can drive");

// function logger() {
//   console.log("My name is Jonas");
// }

// // calling / running /invoking function
// logger();
// logger();
// logger();

// function add(a, b) {
//   console.log(a + b);
//   // return a + b;
// }

// add(2, 3);

// // function fruitProcessor(apples, orange) {
// //   console.log(apples, orange);
// //   const juice = `Juice with ${apples} apples and ${orange} oranges`;
// //   return juice;
// // }
// // // or this way
// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);
// // or this way
// // fruitProcessor(5, 0);
// // console.log(fruitProcessor(5, 0));

// // const appleOrangeJuice = fruitProcessor(2, 4);
// // console.log(appleOrangeJuice);

// function FruitProcessor(apples, orange) {
//   console.log(apples, orange);
// }

// // function declaration
// function calAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calAge1(1991);
// console.log(age1);

// // Another method Function expression
// // const calAge2 = function calAge1(birthYear) {
// //   return 2037 - birthYear;
// // // };
// // // const age2 = calAge2(1991);
// // // console.log(age1, age2);

// // // const calAge2 = function calAge1(birthYear) {
// // //   return 2037 - birthYear;
// // // };

// // // Arrow function how to use arrow function

// // const calcAge3 = (birthYear) => 2037 - birthYear;
// // const age3 = calcAge3(1991);
// // console.log(age3);

// // const yoursUntilRetirement = (birthYear, firstname) => {
// //   const age = 2037 - birthYear;
// //   const retirement = 65 - age;
// //   // return retirement;
// //   return `${firstname} retire in ${retirement} years`;
// // };
// // console.log(yoursUntilRetirement(1991, "janas"));
// // console.log(yoursUntilRetirement(1980, "bob"));

// // const yoursUntilRetirements = (birthYears, firstname) => {
// //   const age = 2025 - birthYears;
// //   const retirements = 25 - age;
// //   return `${retirements} years old in ${firstname} `;
// // };
// // console.log(yoursUntilRetirements(1990, "Abdulsamod"));

// // // const calcRetirement = (birthYears) => 2037 - birthYears;
// // const age4 = calcRetirement(2001);
// // console.log(age4);

// // console.log();

// // Assignment 1 About function ;

// function describeCountry(country, population, capitalCity) {
//   const stateMent = `${country} has ${population} people and its capital city of ${capitalCity}`;
//   return stateMent;
// }
// // const country = "finland";
// // const population = "6million";
// // const capitalCity = "helsinki";
// // describeCountry(country, population, capitalCity);
// // const describe = describeCountry(country, population, capitalCity);
// // console.log(describe);

// // Another simple way
// const appleJuices = describeCountry("finland", "6Million", "helsinki");
// const resourses = describeCountry("America", "10Million", "helsinki");
// const dept = describeCountry("south-korean", "8Million", "helsinki");
// console.log(appleJuices);
// console.log(resourses);
// console.log(dept);

// // Assignment 2 about Function declaration and expression

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const perCent = percentageOfWorld1(10);
// const average = percentageOfWorld1(101);
// const average1 = percentageOfWorld1(150);
// console.log(perCent, average, average1);

// // for the expression
// const cenCor = function cenSor2(population) {
//   return (population / 7900) * 100;
// };
// const toTal = cenCor(10);
// const total2 = cenCor(101);
// const toTal3 = cenCor(150);
// console.log(toTal, total2, toTal3);

// // Assigment3 array function

// // function percentageOfWorld3(population) {
// //   return (population / 7900) * 100;
// // }
// // const perCent1 = percentageOfWorld1(10);
// // const average2 = percentageOfWorld1(101);
// // const average3 = percentageOfWorld1(150);
// // console.log(perCent, average, average1);

// // using of array function
// const percentageOfWorld4 = (population) => (population / 7900) * 100;
// const perPortugal3 = percentageOfWorld4(10);
// const percChina3 = percentageOfWorld4(101);
// const percUSA3 = percentageOfWorld4(150);

// console.log(perPortugal3, percChina3, percUSA3);

// // FUNCTION CALLING OTHER FUNCTION
// function cutFruitPieces(friut) {
//   return friut * 4;
// }

// function fruitProcessor(apples, orange) {
//   const appleJuice = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(orange);
//   const juice = `Juice with ${appleJuice} apples and ${orangePieces} oranges`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// reviewing all the function

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const yoursUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return retirement;
//     console.log(`${firstName} retire in ${retirement} years`);
//   } else {
//     return -1;
//     console, log(`${firstName} has already retired`);
//   }
//   return retirement;
// };
// console.log(yoursUntilRetirement(1991, "Abdulsamod"));
// console.log(yoursUntilRetirement(1970, "Abdulsamod"));

// FUNCTION ON FUNCTION ASSIGNMENT

// function describePopulation2(censor) {
//   return censor / 2;
// }

// function describePopulation(country, population) {
//   const citiZen = describePopulation2(country);
//   const deTail = describePopulation2(population);
//   const line2 = `${citiZen} has ${population} million people,which is about ${deTail}% of the world. `;
//   return line2;
// }
// console.log(describePopulation("china", 1441));

// function cutFruitPieces(friut) {
//   return friut * 4;
// }

// function fruitProcessor(apples, orange) {
//   const appleJuice = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(orange);
//   const juice = `Juice with ${appleJuice} apples and ${orangePieces} oranges`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// coding challenge....

// const calcAverge = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverge(3, 4, 5));

// let scoreDolphins = calcAverge(44, 23, 71);
// let scoreKoalas = calcAverge(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolhins, avgkoalas) {
//   if (avgDolhins >= 2 * avgkoalas) {
//     console.log(`Dolphins win (${avgDolhins} vs. ${avgkoalas})`);
//   } else if (avgkoalas >= 2 * avgDolhins) {
//     console.log(`Koalas win (${avgkoalas} vs. ${avgDolhins})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// Test 2
// scoreDolphins = calcAverge(85, 54, 71);
// scoreKoalas = calcAverge(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// // Introduction to Array
// const friend1 = "micheal";
// const friend2 = "steven";
// const friend3 = "peter";

// const friends = ["Micheal", "Steven", "peter"];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends.length - 1);
// // To change inside what is inside an array
// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "mustapha", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// const years = new Array[(1991, 1984, 2008, 2020)]();

// Exercise;

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// // Basic Array Operations
// // A method called push- Added at the end of the array
// const friends = ["Micheal", "Steven", "peter"];
// const newlength = friends.push("Abdulsamod");
// console.log(friends);
// console.log(newlength);

// // unshift method addeed at the front of the array
// friends.unshift("idris");
// console.log(friends);

// // remove element pop
// const popped = friends.pop(); // last
// console.log(popped);
// friends.pop();
// console.log(friends);

// // remove the first element
// friends.shift();
// console.log(friends);

// // This shows which position the objest is
// console.log(friends.lastIndexOf("Steven"));
// console.log(friends.lastIndexOf("friduas"));

// // This will show if a statement is true or false

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// This will indicate weather its true or false

// if (friends.includes("peter")) {
//   console.log("you have a friend called peter");
// }

// // Assignment introduction to Array

// const populations = [10, 1441, 332, 83];
// console.log(populations.length === 4);
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// Basic Array Operation
// const neighbours = ["America", "canada", "Nigeria"];
// const neighbourhood = neighbours.push("Utopia");
// console.log(neighbours);

// const dissovled = neighbours.pop();
// console.log(dissovled);

// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central European country");
// }

// neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
// console.log(neighbours);

// // class work
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip([1]), calcTip([2])];
// console.log(bills, tips);

// // Introduction to object
// const jonasArray = [
//   "Abdulsamod",
//   "Mustapha",
//   2037 - 1991,
//   "Aeronautical",
//   [("Taofeek", "Usman", "Khadijat")]
// ];

// const jonas = {
//   firstName:'Abdulsamod',
//   lastName: 'Mustapha',
//   age: 2037- 1991,
//   job:'Aeronautical'
//   friends:["Taofeek", "Usman", "Khadijat"]
// }
// // The Dot vs.Bracket Notation
// const jonas = {
//   firstName: "Abdulsamod",
//   lastName: "Mustapha",
//   age: 2037 - 1991,
//   job: "Aeronautical",
//   friends: ["Taofeek", "Usman", "Khadijat"],
// };
// console.log(jonas);
// // To get something from the object
// console.log(jonas.lastName);
// // we can do the exact same thing using the bracket notation
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas.['first' + nameKey]);
// console.log(jonas.["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you want to know about jonas? choose between firstName,lastName,age,job,and friends"
// );
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "wrong request!choose between firstName,lastName,age,job,and friends"
//   );
// }

// jonas.location = "portugal";
// jonas["twitter"] = "@AbdulsamodE";
// console.log(jonas);

// small Challenge
// jonas has 3 friends, and his best friend is called Micheal
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// object Method
// // Note we can hold all type of data type in one object
// const jonas = {
//   firstName: "Abdulsamod",
//   lastName: "Mustapha",
//   birthYear: 1991,
//   job: "Aeronautical",
//   friends: ["Taofeek", "Usman", "Khadijat"],
//   hasDriversLicense: true,
//   // uses an expression if you use a decleration it wont work
//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // calcAge: function () {
//   //   console.log(this)
//   //   return 2037 - this.birthYear;

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} -year old ${
//       jonas.job
//     },and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
//   },
// };
// console.log(jonas.getSummary());
// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas.calcAge(1991));
// Another way to call it
// console.log(jonas["calcAge"](1991));

// challenge
// jonas is a 46-years old teacher and he has a/no drivers license

// coding challenge

// const massMark = 78;
// const massJohn = 92;
// const heightMark = 1.69;
// const  heightJohn = 1.88;

// const markBMI = massMark / heightMark ** 2;
// const JohnBMI = massJohn / heightJohn ** 2;
// console.log(markBMI, JohnBMI);

// const calBmi = {
//   fullName: "Mark Miller",
//   fullName2: "John Smith",
//   massMark: 78,
//   massJohn: 92,
//   heightMark: 1.69,
//   heightJohn: 1.95,

//   proPerties: function () {
//     this.reduces = this.massMark / this.heightMark ** 2;
//     return this.reduces;
//   },

//   proPerties2: function () {
//     this.reduces2 = this.massJohn / this.heightJohn ** 2;
//     return this.reduces2;
//   },
// };
// const bmiMark = calBmi.proPerties();
// const bmiJohn = calBmi.proPerties2();

// if (bmiMark > bmiJohn) {
//   console.log(
//     `${calBmi.fullName}'s BMI (${bmiMark.toFixed(1)}) is higher than ${
//       calBmi.fullName2
//     }'s (${bmiJohn.toFixed(1)})`
//   );
// } else {
//   console.log(
//     `${calBmi.fullName2}'s BMI (${bmiJohn.toFixed(1)}) is higher than ${
//       calBmi.fullName
//     }'s (${bmiMark.toFixed(1)})`
//   );
// }

// Next challenge ITERAION: THE FOR LOOP
// for loop  keep running while the condition is true

// for (let i = 1; i <= 5; i++) {
//   console.log(" i want to become a frontend developer");
//   i;
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// const friendName = ["Samod", "Aisha", "David", "Zainab"];

// for (let i = 0; i < friendName.length; i++) {
//   console.log("Hello", friendName[i] + "!");
// }

// Another features looping Arrays,Breaking and continuing

// const numbers = [2, 5, 8, 10, 13, 15, 20];

// for (let a = 0; a < numbers.length; a++) {
//   if (numbers[a] % 2 !== 0) {
//     continue; // skip odd numbers
//   }

//   if (numbers[a] > 15) {
//     break; // stop the loop if number is greater than 15
//   }

//   console.log("Even number:", numbers[a]);
// }

//   const numbers = [2, 5, 8, 10, 13, 15, 20];

// for (let i = 0; i < numbers.length; i++) {
// 1. If number is odd → skip (use continue)

// 2. If number is greater than 15 → stop loop (use break)

// 3. Otherwise → print "Even number: ___"
// }

// const jonasArray = [
//   "Abdulsamod",
//   "Mustapha",
//   2037 - 1991,
//   "Aeronautical",
//   [("Taofeek", "5sman", "Khadijat")],
// ];
// const types = [];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// console.log(jonasArray[2]);
// console.log(jonasArray[3]);
// console.log(jonasArray[4]);
// // jonasArray[5] does not exist

// for (let i = 0; i < jonasArray.length; i++) {
//   // reading from jonas array
//   console.log(jonasArray[i], typeof jonasArray[i]);

//   // fiiling type array
//   types[i] = typeof jonasArray[i];
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log("---Only Strings---");
// for (let i = 0; i < years.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue;

//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// // Looping backwards and loops in loops
// const jonasArray = [
//   "Abdulsamod",
//   "Mustapha",
//   2037 - 1991,
//   "Aeronautical",
//   [("Taofeek", "Usman", "Khadijat")],
//   ,
// ];
// // 0,1,,,,4
// // 4,3,,,0

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(i, jonasArray[i]);
// }
// // creating a loop inside a loop
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----starting exercie ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`lifting weight repetition ${rep}`);
//   }
// }

// // THE WHILE LOOP

// // for (let rep = 1; rep <= 10; rep++) {
// //   console.log(`Lifting weights repetition ${rep}`);
// // }

// // let rep = 1;
// // while (rep <= 10) {
// //   console.log(`WHILE: lifting weight repetition `);
// // }
// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("loop is about to end...");
// }

// // coding Challenge;
// // coding challenge 50
// // i dont understand the assignment looping
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const tiPs = [];
// const toTals = [];

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// for (let i = 0 < bills.length; i++) {
//   const tiPs = calcTip(bills(i));
//   tiPs.push(tiPs);
//   toTals.push(tiPs + bills(i));
// }
// console.log()
// const tips = [calcTip(bills[0]), calcTip([1]), calcTip([2])];
// console.log(bills, tips,toTals);

// const calcAverage = function(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++){
//     sum  += arr[i];
//   }
//   return sum / arr.length;
