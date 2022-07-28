// build the nav
// Define Global Variables

const sections = document.querySelectorAll("section");
const navbarMenu = document.querySelector("#navbar__list");
// // create the nav list (4 sections)
//reference
//https://classroom.udacity.com/nanodegrees/nd0011-fwd-t2/parts/cd0428/modules/bde9b8c2-f509-49cf-8fd2-094c94c42582/lessons/ls1881/concepts/a9c87d18-831b-4898-9897-47d02247ac78

function CreateNaveBar() {
  let fragment = document.createDocumentFragment();
  let count = 0;
  sections.forEach((section) => {
    count++;
    var li = document.createElement("li");
    li.setAttribute("id", "menu__link" + count);
    let a = document.createElement("a");
    a.innerText = section.getAttribute("data-nav");
    a.href = `#${section.getAttribute("id")}`;
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

// using getBoundingClientRect() method to check if an element is visible in theviewport
//https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
function checkPosition() {
  sections.forEach((sec) => {
    if (!isInViewport(sec)) {
      sec.classList.add("your-active-class");
      activeLi(sec);
    } else {
      sec.classList.remove("your-active-class");
    }
  });
}

function isInViewport(sec) {
  let rect = sec.getBoundingClientRect();
  let h = document.documentElement.clientHeight;
  console.log("sec: " + sec.id + " - h: " + h);
  let top = rect.top > 0 && rect.top < h;
  return top;
}

function activeLi(sec) {
  let li = "";
  li = document.getElementById("menu__link" + sec.id.replace("section", ""));
  if (li) li.classList.add("active-li");

  var elem = "";
  for (let i = 1; i < 5; i++) {
    elem = document.getElementById("menu__link" + i);
    if (elem.id != li.id) {
      elem.classList.remove("active-li");
    }
  }
}
// Listen for all clicks on the document
//https://stackoverflow.com/questions/43665548/allow-link-to-work-while-adding-active-class
//https://redstapler.co/toggle-active-button-state-javascript/
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

function clickSection(e) {
  var id = "";
  if (e.target.classList.contains("menu__link")) {
    id = e.srcElement.hash.replace("#", "");
    sections.forEach((section) => {
      if (section.id == id) {
        section.classList.add("your-active-class");
      } else {
        section.classList.remove("your-active-class");
      }
    });
  }
  e.preventDefault();
}
document.addEventListener("click", (e) => {
  setTimeout(function () {
    clickSection(e);
  }, 500);
});

//----------------------------------------------------
window.addEventListener("scroll", checkPosition);

CreateNaveBar();
