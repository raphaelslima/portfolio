/* MENU TOGGLE */

let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  menuSection.classList.toggle("on", show);
  document.body.style.overflow = show ? "hidden" : "initial";
  show = !show;
});

/* Type Effect */

const toType = document.querySelector(".toType");

function activeType(el) {
  const arrTxt = el.innerHTML.split("");
  el.innerHTML = "";
  arrTxt.forEach((letter, i) => {
    setTimeout(() => {
      el.innerHTML += letter;
    }, 75 * i);
  });
}

activeType(toType);
