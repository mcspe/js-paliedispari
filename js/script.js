/* PALINDROMA */
const givenStr = 'abba';

palindrome(givenStr);

function palindrome(string){

  string = string.replace(/\s/g, '');

  const reverseArr = string.split('').reverse();

  const reverseStr = reverseArr.toString().replace(/,/g, '');

  const palindromeTest = (string === reverseStr) ? true : false;

  console.log(string, reverseArr, reverseStr, palindromeTest);
}

/* PARI O DISPARI */

const userChoice = false; //true pari false dispari
const userNumber = 1;
const computerNumber = randomChoice();
const sum = sumResult(userNumber, computerNumber);
let message;

switch (true) {
  case (userChoice && oddOrEven(sum)):
    message = 'Hai vinto!';
    break;
  case (!(userChoice) && oddOrEven(sum)):
    message = 'Hai perso';
    break;
  case (userChoice && !(oddOrEven(sum))):
    message = 'Hai perso';
    break;
  case (!(userChoice) && !(oddOrEven(sum))):
    message = 'Hai vinto!';
    break;
}

console.log(userNumber, computerNumber, sum, message);


function oddOrEven(num){
  const result = (!(num % 2)) ? true : false;
  return result;
}

function sumResult(num1, num2){
  const result = num1 + num2;
  return result;
}

function randomChoice(){
  const randomNum = Math.ceil(Math.random() * 5);
  return randomNum;
}