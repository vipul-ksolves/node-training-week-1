const firstchildE4 = document.getElementById("firstchild");
const parentE1 = document.getElementById("parent");

const createE2 = document.createElement("div");
const innerHTML = (createE2.innerHTML = "i am a Django developer");

parentE1.replaceChild(createE2, innerHTML);

console.log(parentE1);
