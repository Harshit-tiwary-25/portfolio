/* ========== Typing Animation ========== */
var typed = new Typed(".typing", {
  strings: ["", "Web Desingner", "Web Devloper", "Graphic Desinger"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

/* ========== Setup ========== */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  allSection = document.querySelectorAll(".section");

const sectionArray = Array.from(allSection);
let currentSectionIndex = 0;

/* ========== Initial Load ========== */
window.addEventListener("load", () => {
  const initialSection = sectionArray[0];
  initialSection.classList.add("active", "instant");
  setActiveNavLink(initialSection.id);
  setTimeout(() => {
    initialSection.classList.remove("instant");
  }, 50);
});

/* ========== Sidebar Highlight Helper ========== */
function setActiveNavLink(sectionId) {
  document.querySelectorAll(".nav a").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").split("#")[1] === sectionId) {
      link.classList.add("active");
    }
  });
}

/* ========== Nav Click with Fade + Slide ========== */
navList.forEach(li => {
  const a = li.querySelector("a");
  a.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").split("#")[1];
    const targetIndex = sectionArray.findIndex(section => section.id === targetId);
    const targetSection = sectionArray[targetIndex];
    const currentSection = sectionArray[currentSectionIndex];

    if (!targetSection || targetSection === currentSection) return;

    targetSection.scrollIntoView({ behavior: "smooth" });

    sectionArray.forEach(section => section.classList.remove("nav-animated"));

    currentSection.classList.remove("active");
    targetSection.classList.add("nav-animated");

    setTimeout(() => {
      targetSection.classList.add("active");
      currentSectionIndex = targetIndex;
    }, 10);

    setActiveNavLink(targetId);
  });
});

/* ========== "Hire Me" Button Click (same logic) ========== */
document.querySelectorAll(".hire-me").forEach(button => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute("href").split("#")[1];
    const targetIndex = sectionArray.findIndex(sec => sec.id === sectionId);
    const targetSection = sectionArray[targetIndex];
    const currentSection = sectionArray[currentSectionIndex];

    if (!targetSection || targetSection === currentSection) return;

    targetSection.scrollIntoView({ behavior: "smooth" });

    sectionArray.forEach(section => section.classList.remove("nav-animated"));
    currentSection.classList.remove("active");
    targetSection.classList.add("nav-animated");

    setTimeout(() => {
      targetSection.classList.add("active");
      currentSectionIndex = targetIndex;
    }, 10);

    setActiveNavLink(sectionId);
  });
});

/* ========== Scroll Highlight Only (No Animation) ========== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const section = entry.target;
    if (entry.isIntersecting) {
      const id = section.getAttribute("id");
      setActiveNavLink(id);

      const idx = sectionArray.findIndex(sec => sec.id === id);
      if (idx !== -1) currentSectionIndex = idx;

      // No animation on scroll — remove fade/slide class
      section.classList.remove("nav-animated");

      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}, { threshold: 0.4 });

sectionArray.forEach(section => observer.observe(section));
  

/* ========== Sidebar Toggle for ≤ 1199px ========== */
const toggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

toggler.addEventListener("click", () => {
  aside.classList.toggle("open");
});

/* Optional: Close sidebar when a nav link is clicked (mobile only) */
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 1199) {
      aside.classList.remove("open");
    }
  });
});
