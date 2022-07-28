// wow lib
new WOW().init();

// Data Goal
const nums = document.querySelectorAll(".column .num");
const section = document.querySelector(".section-five");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
      count;
    }
  }, 3000 / goal);
}