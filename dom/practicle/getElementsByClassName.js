const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let master = document.getElementsByClassName("master2");
  master[1].innerHTML = "I am Vipul";
});
