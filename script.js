$(document).ready(function (){

  // toggle nav bar on smaller devices
  $('#toggle-btn').click(function (){
    $('.nav-links').slideToggle(3000);
  });

  // nav bar stays at the top when scrolled
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= 70) {
      $('#nav').addClass('new-nav');
    } else {
      $('#nav').removeClass('new-nav');
    }
  });

  // smooth scroll
  $('nav a').click(function(event) {
   event.preventDefault();
   let target = $(this).attr('href');
   $('html, body').animate({
     scrollTop: $(target).offset().top
   }, "slow");
  });
  
})