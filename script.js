'use strict';
//let's learn a way to select an html element in js.
/*
const message = document.querySelector('.message');
console.log(message);
console.log(message.textContent);
*/
//using document.querySelector we can select the element and suppose if we only want the text we can use .textcontent there.
/*
What is DOM?-Document object model: structured representation of HTML documents. Allows javascript to access HTML elements and styles to manipulate them.
For example we will be able to change text,to change HTML attributes and also to change CSS styles from our js.
So we can say that DOM is basically a connection point between HTML  documents and js code.
DOM!==JS (meaning that DOM is actually not a part of JS)
"If the DOM is not a part of the JS langauge, then how does this all work?"
-Well DOM and DOM methods are actually part of something called the web APIs(application programming interface)
Web APIs are basically libraries that are also written in js and that are automatically available for us to use.
*/

//Selecting and Manipulating elements
//document.querySelector('.message').textContent = 'Guess your number XD!';
//here we can write it in both ways as follows:
/*
message.textContent = 'Guess your number ASAP! xD';
document.querySelector('.score').textContent = 0;
document.querySelector('.highscore').textContent = 0;
console.log(document.querySelector('.guess').value);
//here we use .value cause we want to know the value of the input.
document.querySelector('.guess').value = 28;
//we can also manipulate the value as shown above.
//now if we log it to the console, we expect the number 28 to be shown in the console.
console.log(document.querySelector('.guess').value); //and 28 is shown.
*/

//Handling click events
/*
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
*/
//this function simply contains the code that we want to execute whenever the event happens.
//Also , note that we dont call the function, we only define the function here and then pass it to the event handler, but it is the js engine who will call this function as soon as the event happens.
//document.querySelector('.message').textContent = 'yAy! You are right :)'; ---> this was just for showing that we can change the msg at this instsnce too
/*
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'Please type a number...';
  } else {
    document.querySelector('.message').textContent =
      'yay you have entered a number';
  }
});
*/

//IMPLEMENTING THE GAME LOGIC
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 7;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.score').textContent = score;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess);
  if (!guess) {
    // document.querySelector('.message').textContent =
    //'Please type a number of your choice and begin guessing!';
    displayMessage('Enter a number of your choice!');
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'YAY CORRECT NUMBER👏! xD';
    displayMessage('Yay You won! WELL DONE👏✨');
    score = score + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent =
    //       'OOPS! Try a smaller number 🤏';
    //     score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //     document.querySelector('body').style.backgroundColor = 'black';
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game! :(';
    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('body').style.backgroundColor = 'red';
    //     document.querySelector('.number').textContent = secretNumber;
    //   }
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent =
    //       'OOPS! Try a greater number 😅';
    //     score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //     document.querySelector('body').style.backgroundColor = 'grey';
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!:(';
    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('body').style.backgroundColor = '#900D09';
    //     document.querySelector('.number').textContent = secretNumber;
    //   }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess < secretNumber
      //     ? 'OOPS! Try a greater number 😅'
      //     : 'OOPS! Try a smaller number 🤏';
      displayMessage(
        guess < secretNumber
          ? 'OOPS! Try a greater number 😅'
          : 'OOPS! Try a smaller number 🤏'
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor =
        guess < secretNumber ? 'cornflowerblue' : '#ec581e';
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!:(';
      displayMessage('You lost the game :(');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#900D09';
      document.querySelector('.number').textContent = secretNumber;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 7;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  secretNumber = 15;
  const hiddenNumber = '?';
  const hiddenMessage = 'Start Guessing ;)';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = hiddenNumber;
  displayMessage(hiddenMessage);
  document.querySelector('body').style.backgroundColor = '#1d1d1b';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '24rem';
});
