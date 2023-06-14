/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const myList = document.getElementById("domain");
  const combinations = (...args) => {
    return args.reduce((a, b) => {
      return a.map(x => b.map(y => [...x, y])).flat();
    });
  };

  const output = combinations(
    ["the", "our"],
    ["great", "big"],
    ["jogger", "racoon"]
  ).map(item => item.join(""));

  output.forEach(item => {
    myList.innerHTML += `<li class="list-group-item list-group-item-action list-group-item-secondary">${item}.com</li>`;
  });
  console.log(myList);
};
