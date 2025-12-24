window.onload = function () {
  // Image Animation
  const imgAnimate = document.querySelector(".image-field");
  const gameAnimate = document.querySelector(".image-container");
  const cardAnimate = document.querySelector(".vr-content");
  const testimonialsAnimate = document.querySelector(".content-box");
  const companyAnimate = document.querySelector(".company-content");
  imgAnimate.classList.add("imgAnimate");
  gameAnimate.classList.add("imgAnimate");
  cardAnimate.classList.add("imgAnimate");
  testimonialsAnimate.classList.add("imgAnimate");
  companyAnimate.classList.add("imgAnimate");
  // Text Animation
  const contentAnimate = document.querySelector(".landing-content");
  const gamecontentAnimate = document.querySelector(".game-content");
  contentAnimate.classList.add("textAnimate");
  gamecontentAnimate.classList.add("textAnimate");

  // Loader Animation 
  $(".loader").fadeOut(800);
  $("body").css("overflow-y","auto");
};

$(document).ready(function () {
  // scroll Top Button
  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop();
    if (scroll >= 300) {
      $(".header").addClass("scroll-active");
      $(".scr-top").fadeIn();
    } else {
      $(".header").removeClass("scroll-active");
      $(".scr-top").fadeOut();
    }
  });
  // click Button to scroll top
  $(".scr-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 200);
  });
  // Menu Effect
  $(document).on("click", ".toggle", function () {
    $(".r-side").toggleClass("back");
  });
  //nav bar links
  $(".links li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".r-side").removeClass("back");
  });
});
