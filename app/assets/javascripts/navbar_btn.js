$( document ).ready(function() {
  // btn logo
  $(".js-navbar-btn-logo").click(function(event) {
    console.log("click on js-navbar-btn-logo");
    $('html, body').animate({
      scrollTop: $(".js-head_of_landingpage").offset().top
       - 100}, 1000);
  });

  // btn contact
  $(".navbar_btn_contact").click(function(event) {
    console.log("click on navbar_btn_contact");
    $('html, body').animate({
      scrollTop: $(".js-contact").offset().top-50
      }, 1000);
  });

  // btn nos vans
  $(".navbar_btn_nos_vans").click(function(event) {
    console.log("click on navbar_nos_vans");
    $('html, body').animate({
      scrollTop: $(".js-nos_vans").offset().top-50
      }, 1000);
  });


  // btn accueil
  $(".navbar_btn_accueil").click(function(event) {
    console.log("click on navbar_btn_accueil");
    $('html, body').animate({
      scrollTop: $(".js-head_of_landingpage").offset().top-50
      }, 1000);
  });
});
