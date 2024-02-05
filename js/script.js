//----------------burgermenu---------------
const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
});
//sikrer at menuknap forsvinder
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
  })
);
const save = document.querySelector(".save");
const heart = document.querySelector(".heart");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenvises");
  save.addEventListener("click", clickSave);
}

function clickSave() {
  console.log("clickSave");
  heart.classList.toggle("activeheart");
}
