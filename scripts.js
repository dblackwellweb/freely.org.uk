// everything thats executed upon load is in this function
// that way we can execute the code after all scripts are downloaded.

function init(){


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




$(document).mouseup(function (e) {
     var popup = $("#popup");
     if (!$('#open').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
         popup.hide(500);
     }
 });


}



