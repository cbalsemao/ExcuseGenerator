/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

let randomExcuse = () => {
  let whoExcuse = Math.floor(Math.random() * who.length);
  let actionExcuse = Math.floor(Math.random() * action.length);
  let whatExcuse = Math.floor(Math.random() * what.length);
  let whenExcuse = Math.floor(Math.random() * what.length);

  let excusePhrase = `${who[whoExcuse]} ${action[actionExcuse]} ${what[whatExcuse]} ${when[whenExcuse]}`;

  return excusePhrase;
};

randomExcuse();

const buttonExcuse = document.getElementById("buttonGenExcuse");
const excuse = document.getElementById("excuse");

buttonExcuse.addEventListener("click", function() {
  excuse.innerHTML = randomExcuse();
});
