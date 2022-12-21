const parentEl = document.getElementById("parent");
const firstchildEl = document.getElementById("firstchild");

const createEl = document.createElement("div");

const innerhtml = (createEl.innerHTML = "i am a frontend developer");

parentEl.insertBefore(createEl, firstchildEl);
console.log(parentEl);
