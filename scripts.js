$( document ).ready( function() {
  // Scripts go here
  $('li').click(function(event){
    $('.selected').css({
      display: 'block'
    })
  });

  $('.body').click(function(){
    $('.selected').css({
      display: 'none'
    })
  });

  $( "icon" ).click(function() {
    $( "#book" ).slideToggle( "slow", function() {
      // Animation complete.
    });
  });



});
