/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array containing 5 properties, the last three of which may not contain a value
***/
const quotes = [
  { quote: "No man is free who is not master of himself.", source: 'Epictetus', citation: '', year:'~ 93AD', link:'https://www.goodreads.com/quotes/331162-god-has-entrusted-me-with-myself-no-man-is-free'},
  { quote: "No man is more unhappy than he who never faces adversity. For he is not permitted to prove himself.", source: 'Seneca', citation: '', year:'~ 50 AD', link:''},
  { quote: "Practice even what seems impossible", source: 'Marcus Aurelius', citation: 'The Meditations', year:'~ 170AD', link:'https://dailystoic.com/practice-what-needs-practice/'},
  { quote: "When you arise in the morning think of what a privilege it is to  be alive, to think, to enjoy, to love...", source: 'Marcus Aurelius', citation: 'The Meditations', year:'~ 170AD', link:''},
  { quote: "What is to give light must endure burning.", source: 'Victor Frankl', citation: "Man's Search for Meaning", year:'~ 1975', link:'https://www.goodreads.com/quotes/50275-what-is-to-give-light-must-endure-burning'},
  { quote: "What progress have I made? I have begun to be a friend to myself.", source: 'Hecato of Rhodes', citation: "", year:'', link:''}
]

/***
 * `getRandomQuote` function returns a quote from the quotes array at random
***/
function getRandomQuote(){
  let random = Math.floor( Math.random() * 4) + 1;
  return quotes[random];
}


/***
 * `printQuote` function prints a random quote by modifying the exisiting HTML
***/
function printQuote(){
  let randomQuote = getRandomQuote();
  let newQuote = `<p class="quote">${randomQuote.quote}</p>
                  <p class="source">${randomQuote.source}  
  `;
  if(randomQuote.citation.length){
    newQuote+=`<span class="citation"> ${randomQuote.citation}</span>`;
  }
  if(randomQuote.year.length){
    newQuote+=`<span class="year"> ${randomQuote.year} </span>`;
  }
  //added link property for extra credit
  if(randomQuote.link.length){
    newQuote+=`<span><a class="link" href="${randomQuote.link}">Link</a></span>`;
  }
  newQuote+=`</p>`;
  document.getElementById('quote-box').innerHTML = newQuote; 
}


/***
 * `updateBackground` function and following event listener change the backtground to a random color when user clicks for a new quote
 * the math inside the random color string literal is a snippet from Alaa Mohammad but I had to add +1 because it was returning shorter strings sometimes:
 * https://stackoverflow.com/a/30725970
***/
function updateBackground(){
  let randomColor = `#${(Math.floor(Math.random()*16777215)+1).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
}
document.getElementById('load-quote').addEventListener("click", updateBackground, false);


/***
 * `printQuote` function prints a random quote on random background color every 10 seconds
***/
function timing(){
  setInterval(() => {
    printQuote();
    updateBackground();
  }, 10000);
}
//learned about window listeners on https://www.javascripttutorial.net/javascript-dom/javascript-onload/
window.addEventListener('load', (event) => {
  timing();
});

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);