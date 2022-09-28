const turnToggle = (element, togleName) => element.classList.toggle(togleName);
const burgerMenu = document.querySelector(".burger");
const links = document.querySelector("nav ul");
burgerMenu.addEventListener("click", () => {
  [burgerMenu, links].forEach((value) => {
    turnToggle(value, "show");
  });
});
