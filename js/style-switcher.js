/* ============================================toggle style switcher==============================*/
document.addEventListener("DOMContentLoaded", function () {
  const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
  const styleSwitcher = document.querySelector(".style-switcher");

  // Safety check
  if (!styleSwitcherToggler || !styleSwitcher) return;

  // Toggle the style switcher on icon click
  styleSwitcherToggler.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
  });

  // Close the style switcher on scroll
  window.addEventListener("scroll", () => {
    if (styleSwitcher.classList.contains("open")) {
      styleSwitcher.classList.remove("open");
    }
  });
});

/* ============================================theme colors==============================*/
const alternateStyle = document.querySelectorAll('link[rel="stylesheet"][title]');

function setActiveStyle(color) {
  localStorage.setItem("color", color);
  changeColor();
}

function changeColor() {
  alternateStyle.forEach((style) => {
    if (localStorage.getItem("color") === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// Apply saved theme on load
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("color")) {
    changeColor();
  }
});
/* ============================================dark colors==============================*/
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

    // Save mode to localStorage
    if(document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Apply saved mode on load
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});


























