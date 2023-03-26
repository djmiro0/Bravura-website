const toggleButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const header = document.querySelector("header");
const main = document.querySelector("main");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("menu");
  if (menu.style.display === "none") {
    menu.style.display = "block";
    header.style.height = "200px";
    toggleButton.style.display = "none";
    menu.style.margin = "100px";
  } else {
    menu.style.display = "none";
    header.style.height = "100px";
  }
});

main.addEventListener("click", function () {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    header.style.height = "100px";
    toggleButton.style.display = "block";
  }
});
