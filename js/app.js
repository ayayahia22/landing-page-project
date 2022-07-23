// build the nav
// Define Global Variables

const sections = document.querySelectorAll("section");
const navbarMenu = document.querySelector("#navbar__list");

// // create the nav list (4 sections)
//reference
//https://classroom.udacity.com/nanodegrees/nd0011-fwd-t2/parts/cd0428/modules/bde9b8c2-f509-49cf-8fd2-094c94c42582/lessons/ls1881/concepts/a9c87d18-831b-4898-9897-47d02247ac78

function CreateNaveBar() {
  const fragment = document.createDocumentFragment();
  sections.forEach((section) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerText = section.getAttribute("data-nav");
    a.href = `#${section.getAttribute("id")}`
    a.setAttribute("class", "menu__link");
        //smoothe scrooling //https://dev.to/rohank_2502/implementing-smooth-scroll-using-javascript-28n3?fbclid=IwAR1HSqwpdwr4w2igDymzYEDqtBrCfY3F_0w9ic9OMDMMRkbfp9qKr7z87m4
    a.addEventListener("click", () => {
        section.scrollIntoView({ behavior: "smooth" });
    });
    li.appendChild(a);
    fragment.appendChild(li);
  });
  navbarMenu.appendChild(fragment);

  
}
// Listen for all clicks on the document
//https://stackoverflow.com/questions/43665548/allow-link-to-work-while-adding-active-class
//https://redstapler.co/toggle-active-button-state-javascript/
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events


document.addEventListener("click",  (e) => {
  if (e.target.classList.contains("menu__link")) {
    sections.forEach((section) => {
      section.classList.add("your-active-class");
    });
  } else sections.classList.remove("your-active-class");
  e.preventDefault();
});

// using getBoundingClientRect() method to check if an element is visible in theviewport
//https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
const box = document.querySelector('section');
const rect = box.getBoundingClientRect();
console.log(rect)

const isInViewport = rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

console.log(isInViewport);



CreateNaveBar();
