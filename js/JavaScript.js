/* basic console usage and variable "let" */

let a=10
let b=7*a
let max=57
let actual= max-13
let percentage=actual/max;
console.log(percentage)

let callbacks = [];
(function() {
  for (let i = 0; i < 5; i++) {
    callbacks.push( function() { return i; } );
  }
})();

console.log(callbacks.map( function(cb) { return cb(); } ));

let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);

function favoriteAnimal(animal) {
  console.log(animal + " is my favorite animal!")
}

favoriteAnimal('bear')

function add7(a){
  if (isNaN(a)){
    console.log("pleace enter a number")
  }else{
  let x = a + 7;
  return x;
  }
}
console.log(add7(3));

function multiply(a,b){
  if (isNaN(a)&&isNaN(b)){
    console.log("pleace enter a number")
  }else{
    let x = a * b;
    return x;
  }
}
console.log(multiply(12,5));

function capitalize(a){
  let txt = a;
  let fLetter = txt.slice(0,1);
  let txtUpper = txt.replace(fLetter,fLetter.toUpperCase());
  return txtUpper;
}
console.log(capitalize("hello"));

function lastLetter(a){
  let txt = a;
  let lastNumber = txt.length -1;
  let letter = txt.slice(lastNumber,lastNumber +1);
  return letter;
}

console.log(lastLetter("chi to ma to so ma"));

let answer = parseInt(prompt("Please enter de number you would like to FizzBuzz up to: "));
for (let i = 1; i <= answer; i++ ){
  if( i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  }else if(i%3 === 0){
    console.log("Fizz");
  }else if (i%5 === 0){
    console.log("Buzz");
  }else{
    console.log(i);
  }
}