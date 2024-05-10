let navitems = document.querySelector(".navitems");
let menubox = document.querySelector(".menuicon");

menubox.addEventListener("click", function () {
  navitems.classList.toggle("show");
  const body = document.querySelector("body");
  if (navitems.classList.contains("show")) {
    body.style.position = "fixed";
    body.style.width = "100%";
    body.style.top = "0";
    body.style.left = "0";
  } else {
    body.style.position = "relative";
  }
});

$(".slider_1").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
  ],
});

$(".slider_2").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
  ],
});

let accordian_items = document.querySelectorAll(".accordian-box");

accordian_items.forEach((items) => {
  let paragraph = items.querySelector(".accordian-p");
  let heading = items.querySelector(".accordian-heading-svg");
  let svg = items.querySelector(".accodian-svg");
  const accordian_h = items.querySelector(".accordian-h");

  heading.style.cursor = "pointer";
  heading.addEventListener("click", () => {
    accordian_items.forEach((other) => {
      if (other !== items) {
        let paragraph = other.querySelector(".accordian-p");
        const accordian_h = other.querySelector(".accordian-h");
        let svg = other.querySelector(".accodian-svg");
        svg.style.rotate = "0deg";
        paragraph.classList.add("d-none");
        accordian_h.style.paddingBottom = "16px";
      }
    });

    if (paragraph.classList.contains("d-none")) {
      paragraph.classList.remove("d-none");
      paragraph.classList.add("d-block");
      svg.style.rotate = "180deg";
      accordian_h.style.paddingBottom = "0";
    } else {
      paragraph.classList.remove("d-block");
      paragraph.classList.add("d-none");
      svg.style.rotate = "0deg";
      accordian_h.style.paddingBottom = "16px";
    }
  });
});

AOS.init({
  duration: 1200,
  once: true,
});