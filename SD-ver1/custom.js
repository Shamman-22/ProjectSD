$(document).ready(function() {
   
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top -100;
      
      if ( sectionOffset < scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })

  //progress bar
 /* $('.html').animate({width:'90%'},2000);
  $('.css').animate({width:'80%'},2000);
  $('.php').animate({width:'70%'},2000);
  $('.jquery').animate({width:'70%'},2000);
  $('.javascript').animate({width:'70%'},2000);
  $('.bootstrap').animate({width:'75%'},2000);
  $('.java').animate({width:'40%'},2000);

  //skill fade in
  var skillEl=$('div.fade-in'),
  skillOffset=skillEl.offset().top -50,
  documentEl=$(document);
  documentEl.on('scroll',function(){
    if (documentEl.scrollTop()>skillOffset && skillEl.hasClass('hidden')) skillEl.removeClass('hidden');
  })
 */




})

