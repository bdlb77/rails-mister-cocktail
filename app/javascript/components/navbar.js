function initUpdateNavbarOnScroll() {
  var mywindow = $(window);
  var mypos = mywindow.scrollTop();
  var up = false;
  var newscroll;

  mywindow.scroll(function() {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
      $('.navbar-wagon').stop().fade();
      up = !up;
      console.log(up);
    } else if(newscroll < mypos && up) {
      $('.navbar-wagon').stop().fadeIn();
      up = !up;
    }
    mypos = newscroll;
  });
}
export { initUpdateNavbarOnScroll };




