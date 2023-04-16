/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog ", "My granma ", "His turtle ", "My bird "];
  let action = ["eat ", "pissed ", "crushed ", "broked "];
  let what = ["my homework ", "the keys ", "the car "];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let string1 = who[pickrand(who)];
  let string2 = action[pickrand(action)];
  let string3 = what[pickrand(what)];
  let string4 = when[pickrand(when)];

  let excuse = string1 + string2 + string3 + string4;
  document.getElementById("excuse").innerHTML = excuse;
  console.log("Hello Rigo from the console!");
};

const pickrand = arr => {
  return Math.floor(Math.random() * arr.length);
};
