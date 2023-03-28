/* PALINDROMA */
const givenStr = 'abbacchio';

palindrome(givenStr);

function palindrome(string){

  string = string.replace(/\s/g, '');

  const reverseArr = string.split('').reverse();

  const reverseStr = reverseArr.toString().replace(/,/g, '');

  let palindromeTest;

  if (string === reverseStr){
    palindromeTest = true;
  } else {
    palindromeTest = false;
  }

  console.log(string, reverseArr, reverseStr, palindromeTest);
}

/* PARI O DISPARI */

const userChoice = false; //true pari false dispari
const userNumber = 4;
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
  let result;
  if(!(num % 2)){
    result = true;
  } else {
    result = false;
  }
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