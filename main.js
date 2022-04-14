// 'use strict';

// brings in the assert module for unit testing
// const assert = require('assert');
// brings in the readline module to access the command line
// const readline = require('readline');
// use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


const pigLatin = () => {
  let word = document.getElementById("user-input").value
  console.log(word)
  word = word.toLowerCase().trim()
  let aIdx = word.indexOf("a");
  let eIdx = word.indexOf("e");
  let iIdx = word.indexOf("i");
  let oIdx = word.indexOf("o");
  let uIdx = word.indexOf("u");
  let len = word.length;
  let answer = -1;
 
  // if (aIdx == -1) {
  //     // do nothing
  // } 
    if (aIdx != -1 && answer == -1) {
      answer = aIdx
  }
   if (aIdx != -1 && answer >= aIdx ) {
      answer = aIdx
  }
 
  // if (eIdx == -1) {
  //     // do nothing
  // } 
    if (eIdx != -1 && answer == -1) {
      answer = eIdx
  }
   if (aIdx != -1 && answer >= eIdx ) {
      answer = eIdx
  }
  
  // if (iIdx == -1) {
  //     // do nothing
  // } 
    if (iIdx != -1 && answer == -1) {
      answer = iIdx
  }
  if (iIdx != -1 && answer >= iIdx ) {
      answer = iIdx
  }

  // if (oIdx == -1) {
  //     // do nothing
  // } 
    if (oIdx != -1 && answer == -1) {
      answer = oIdx
  }
   if (oIdx != -1 && answer >= oIdx ) {
      answer = oIdx
  }

  // if (uIdx == -1) {
  //     // do nothing
  // } 
   if (uIdx != -1 && answer == -1) {
      answer = uIdx
  }
   if (uIdx != -1 && answer >= uIdx ) {
      answer = uIdx
  }
  // (IF) is Aidx -1? if answer is yes, do nothing.
  // (else if) if A  is not -1 and the answer is -1, then Aidx is better than answer.
  // replace answer with aIdx.
  // (else if) if aIdx is not -1, and answer is bigger than aIdx, then aIdx is also better.
  // replace answer with aIdx.
  console.log(answer)
  if (answer === 0) {
    let newWord = word + "yay"
    console.log(newWord)
    document.getElementById("pigLatinOutput").innerHTML = newWord;
  }
     if (answer != 0) {
    let otherWord = word.slice(answer, word.length) + word.slice(0, answer) + "ay" 
    console.log(otherWord)
    document.getElementById("pigLatinOutput").innerHTML = otherWord
    }


}     

// let word = "meat"
// let newNum = pigLatin(word)
// console.log('the position of the first vowel is,' ,newNum)

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
// const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }

// Unit Tests
// to use them run the command: npm test main.js
// // to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
