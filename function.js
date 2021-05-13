/* Dit is deel A: zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
   console.log("Joe, ik rock de arrow functions!");
 };
 
 ikRockArrowFunctions()*/

 const ikRockArrowFunctions= () =>console.log("Joe, ik rock de arrow functions!"); 
 ikRockArrowFunctions()

 /*Dit is Deel B
 const fivePlusSeven = function () {
   return 5 + 7
 };
 
 fivePlusSeven();*/

 const fivePlusSeven = () => 5 + 7;
 
 fivePlusSeven();

 //Schrijf een arrow function, op 1 regel (dus met een impliciete return statement), die de params a en b bij-elkaar optelt. Noem de functie myFunction
 //Dit is deel C
 const myFunction= (a, b)=> a+b;

 myFunction(a,b);


 //Dit is deel D
 //Schrijf een arrow function op 1 regel, die de parameter a behoudt, en altijd a plus 5 returned. Noem de functie addFive.

 const addFive= (a)=> a+5;
 //Dit is deel E
 //Schrijf een arrow function met de naam createObject met een implicit return statement (dus op 1 regel) die een simpel object returned: {greeting: "hoi"}

const createObject= () => ({greeting: "hoi"});

createObject();