// He usado JQuery y la libreria Slick para generar el slider responsive para varios dispositivos

$("#slider").slick({
  slidesToShow: 3, // número de slides a mostrar
  slidesToScroll: 1, // número de slides a desplazar
  autoplay: true, // activar autoplay
  autoplaySpeed: 3000, // velocidad del autoplay
  dots: false, // mostrar dots
  arrows: true, // mostrar flechas
  prevArrow: '<button type="button" class="slick-button"> < </button>', // personalizar flecha previa
  nextArrow: '<button type="button" class="slick-button"> > </button>', // personalizar flecha siguiente
  responsive: [
    // Breakpoints y estilos responsive
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
});
