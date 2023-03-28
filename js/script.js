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