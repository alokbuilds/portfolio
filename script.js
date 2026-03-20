// Typing Animation

const roles = [
  "Backend Developer",
  "Django Developer",
  "Problem Solver"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typeEffect() {
  current = roles[i];

  if (!isDeleting) {
    document.getElementById("typing").innerHTML = current.substring(0, j++);
  } else {
    document.getElementById("typing").innerHTML = current.substring(0, j--);
  }

  if (j === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// ACTIVE LINK ON CLICK
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// NAVBAR SHADOW ON SCROLL
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


const toggle = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggle.checked = true;
}

// Toggle event
toggle.addEventListener("change", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});