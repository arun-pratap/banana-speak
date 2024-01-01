// // console.log("Hellooooooooo! from external javascript")

// // input
// var useName = prompt("What's your name?");

// // processing
// var welcomeMessage = "Welcome! " + useName;

// // output
// alert(welcomeMessage);

// // read about history based routing  in vanilla js
// // read about reconcilation
// // creatr your own version of react redux, react router

/**
 * Topic: 
 * - Add js in html
 * - querySelector
 * - Event Listener
 * - use selectors to get value (.value)
 * - FAQ: what is API, how query selector works, What is GUI
 */

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")

// btnTranslate.addEventListener("click", function clickEventhandler() {
//     console.log("clicked");
// }) OR


function clickHandler() {
    console.log("clicked");
    console.log("input", txtInput.value)
}

btnTranslate.addEventListener("click", clickHandler);
