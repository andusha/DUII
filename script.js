const dropdownButtonElem = document.querySelector(".dropdown-button");
const dropdownMenuElem = document.querySelector(".dropdown-menu");

function dropdownMenuAdd(dropdownButton, dropdownMenu) {
  dropdownButton.addEventListener("mouseover", () => {
    dropdownMenu.classList.add("visible");
  });
  dropdownButton.addEventListener("mouseout", () => {
    dropdownMenu.classList.remove("visible");
    console.log(dropdownMenu, dropdownMenu.classList);
  });
}
dropdownMenuAdd(dropdownButtonElem, dropdownMenuElem);

let current = -1;

bubbleStyle(0)
function bubbleStyle(current) {
  const bubbles = document.querySelectorAll(".bubble");

  for (let i = 0; bubbles.length > i; i++){
    bubbles[i].classList.remove('bubble_active')
  }

  bubbles[current].classList.add('bubble_active')
}

function slideTo(integer) {
  const slidesList = document.querySelectorAll(".slide");
  slidesList[current].classList.toggle("invisible");
  if (slidesList.length - 1 < current + integer) current = -1;
  else if (current + integer < 0) current = 3;
  current += integer;
  slidesList[current].classList.toggle("invisible");
  bubbleStyle(current)
}
function timeoutSlide() {
  if (current >= 0) {
    const slidesList = document.querySelectorAll(".slide");
    slidesList[current].classList.toggle("invisible");
    if (slidesList.length - 1 < current + 1) current = -1;
    current += 1;
    slidesList[current].classList.toggle("invisible");
    bubbleStyle(current)
  } else current = 0
  
  setTimeout(timeoutSlide, 5000);
}

function currentSlide(integer){
  const slidesList = document.querySelectorAll(".slide");

  slidesList[current].classList.toggle("invisible");
  slidesList[integer].classList.toggle("invisible");

  current = integer

  bubbleStyle(current)
}



timeoutSlide();