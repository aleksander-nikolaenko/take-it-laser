import { navLinkActions } from "./nav-links.js";
import { mobileMenu } from "./mobile-menu.js";
import { modal } from "./modal.js";

const swiper = new Swiper(".slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  autoplay: {
    delay: 2000,
  },
});

navLinkActions();
mobileMenu();
modal();
