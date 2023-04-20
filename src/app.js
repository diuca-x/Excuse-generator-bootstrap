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

  let excuse =
    who[pickRand(who)] +
    action[pickRand(action)] +
    what[pickRand(what)] +
    when[pickRand(when)];

  document.getElementById("excuse").innerHTML = excuse;
};

const pickRand = arr => {
  return Math.floor(Math.random() * arr.length);
};
