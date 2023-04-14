/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog ", "My granma ", "His turtle ", "My bird "];
  let action = ["eat ", "pissed ", "crushed ", "broked "];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let string1 = who[Math.floor(Math.random() * who.length)];
  let string2 = action[Math.floor(Math.random() * action.length)];
  let string3 = what[Math.floor(Math.random() * what.length)];
  let string4 = when[Math.floor(Math.random() * when.length)];

  let excuse = string1 + string2 + string3 + string4;
  document.getElementById("excuse").innerHTML = excuse;
  console.log("Hello Rigo from the console!");
};
