// MENU MOBILE
function menuShow() {
  const menuMobile = document.querySelector(".mobile-menu");
  const icon = document.querySelector(".icon");

  menuMobile.classList.toggle("open");
  icon.src = menuMobile.classList.contains("open")
    ? "assets/img/close_white_36dp.svg"
    : "assets/img/menu_white_36dp.svg";
}

// QUANDO O DOM ESTIVER PRONTO
$(document).ready(function () {
  // BOTÃO DE MENU MOBILE (caso tenha outro botão com id #mobile_btn)
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $(this).find("i").toggleClass("fa-x");
  });

  // SCROLL ATIVO NAS SEÇÕES
  const sections = $("section");
  const navItems = $(".nav-item");

  $(window).on("scroll", function () {
    const header = $("header");
    const scrollPosition = $(window).scrollTop() - header.outerHeight();
    let activeSectionIndex = 0;

    // Sombra no header
    if (scrollPosition <= 0) {
      header.css("box-shadow", "none");
    } else {
      header.css("box-shadow", "5px 1px 5px rgba(0, 0, 0, 0.1)");
    }

    // Ativar link da seção visível
    sections.each(function (i) {
      const sectionTop = $(this).offset().top - 96;
      const sectionBottom = sectionTop + $(this).outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false;
      }
    });

    navItems.removeClass("active");
    $(navItems[activeSectionIndex]).addClass("active");
  });

  // ANIMAÇÕES COM SCROLLREVEAL
  ScrollReveal().reveal("#cta", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });

  ScrollReveal().reveal(".dish", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });

  ScrollReveal().reveal("#testimonial_chef", {
    origin: "left",
    duration: 1000,
    distance: "20%",
  });

  ScrollReveal().reveal(".feedback", {
    origin: "right",
    duration: 1000,
    distance: "20%",
  });

  // SWIPER: Carrossel de serviços
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  });
  // SWIPER: Carrossel de serviços
  const servSwiper = new Swiper(".serv-swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".serv-next",
      prevEl: ".serv-prev",
    },
    pagination: {
      el: ".serv-pagination",
      clickable: true,
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  });

  // SWIPER: Carrossel de obras
  const obrasSwiper = new Swiper(".obras-swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".obras-next",
      prevEl: ".obras-prev",
    },
    pagination: {
      el: ".obras-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
});
