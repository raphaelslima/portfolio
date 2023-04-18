/* MENU TOGGLE */

let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelector(".menu-toggle");
const myLink = document.querySelectorAll(".link");

menuToggle.addEventListener("click", () => {
  if (show) {
    document.body.style.overflow = "hidden";
    menuSection.classList.add("on");
    show = false;
  } else {
    document.body.style.overflow = "initial";
    menuSection.classList.remove("on");
    show = true;
  }
});

myLink.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.style.overflow = "initial";
    menuSection.classList.remove("on");
  });
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
