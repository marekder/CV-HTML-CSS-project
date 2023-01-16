import "./sass/main.scss";
import AOS from "aos";

AOS.init();

let options = {
  strings: ["Front-end Developer", "Back-end Developer"],
  typeSpeed: 100,
  backSpeed: 30,
  loop: true,
  startDelay: 500,
};

let typed = new Typed(".typed", options);

const themeSwitcher = document.querySelector(".change-theme");
const body = document.body;
const storedTheme = localStorage.getItem("theme");

if (storedTheme) {
  body.className = storedTheme;
}

themeSwitcher.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
});
//
