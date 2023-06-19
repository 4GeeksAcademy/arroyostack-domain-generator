import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Generates domains based on input
  const generateDomains = (...args) => {
    return args.reduce((a, b) => {
      return a.map(x => b.map(y => [...x, y])).flat();
    });
  };
  // Target Html element
  const domainList = generateDomains(
    ["the", "our"],
    ["great", "big"],
    ["jogger", "racoon"]
  );

  // Join each single domains
  const joinedDomains = domainList.map(domain => domain.join(""));

  // Update content of target input
  const htmlOutput = document.getElementById("domain");
  joinedDomains.forEach(item => {
    htmlOutput.innerHTML += `<li class="list-group-item list-group-item-action list-group-item-secondary">${item}.com</li>`;
  });
};

// Made with love by El-hadj
