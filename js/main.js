$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    center: true,
    loop: true,
    items: 1,
    margin: 30,
    stagePadding: 0,
    nav: true,
    navText: [
      '<span class="ion-ios-arrow-back">',
      '<span class="ion-ios-arrow-forward">',
    ],
  });
});

// new WOW().init();
wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();

// Scroll into view smoothly
document.querySelector(".navbar-nav").addEventListener("click", function (e) {
  e.preventDefault();

  // matching stratgy
  if (e.target.classList.contains("nav-link")) {
    // console.log('link');

    const id = e.target.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const nav = document.querySelector(".navbar");

const landing = document.querySelector(".landing");
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(landing);
