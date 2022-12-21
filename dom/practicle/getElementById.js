const createE1 = document.createElement("div");
console.log(createE1);

const text = (createE1.innerHTML = "I Love React js");
console.log(text);

const typeScript = document.getElementById("master");
console.log(typeScript);

typeScript.appendChild(createE1);

console.log(typeScript);
