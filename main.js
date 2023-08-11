const lazyload = target =>
{
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting)
      {
        $(entry.target).addClass("fade-out");
        observer.disconnect();
      }
    });
  });
  io.observe(target);
}

$(function() {
  
  const targets = document.querySelectorAll(".fade");
  targets.forEach(lazyload);

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:55,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
});