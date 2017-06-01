// everything thats executed upon load is in this function
// that way we can execute the code after all scripts are downloaded.

function init(){
  $('li').click(function(event){
    // activate the popup and pass it the id of the icon that was clicked.
    // Will only open popup if not already active.
    if(popUpIsActive()){ return; };
    console.log('popup wasnt active. opening popup')
    activatePopUp(this.id);
  });

  $( "icon" ).click(function() {
    $( "#book" ).slideToggle( "slow" );
  });

  $(document).bind("mouseup touchup", function(e) {
    var popup = $(".selected");
    // if the click didnt target the popup AND if the popup is active then hide the popup!
    if (!popup.is(e.target) && popup.has(e.target).length == 0 && popUpIsActive()) {
      console.log("hiding popup")
      hidePopUp();
      e.stopPropagation(); // this should prevent any other events the click might have triggered such as opening a new popup straight away
     }
   });

   initBouncing(5);
}

function initBouncing(bounceHeight){
  allicons = $('.icon-container')
  for (var i = allicons.length - 1; i >= 0; i--) {
    bounceicon(allicons[i].id,bounceHeight)
  }
}

function bounceicon(iconID,bounceHeight){
  $("#" + iconID).on('mouseenter mouseleave',function( e ) {
    var el = $(this).children();
    if(!el.data("bnc")) el.effect("bounce", {
      direction:'up',
      distance:bounceHeight,
      times:1,
      easing: 'easeOutQuint'
    }, 400);
    el.data("bnc", e.type=="mouseenter" ? true : false );
  });
}

function activatePopUp(iconID){
  // change popup image and links based on icon id:
  $('.big-img').attr("src","images_web/"+iconID+"icon.gif");
  $('#popup-online-link').attr("href",iconID+".html");
  $('#popup-download-link').attr("href",iconID+".pdf");
  // make popup visible:
  $('.selected').addClass("popupON")
  $('.selected').removeClass("popupOFF")
  $('.clickdump').addClass('active')

}

function hidePopUp(iconID){
  // change popup image and links based on icon id:
    $('.selected').addClass("popupOFF")
    $('.selected').removeClass("popupON")
    $('.clickdump').removeClass('active')
}

function popUpIsActive(){
  // returns true if the popup is active, false if not
  var active = $(".selected").hasClass("popupON");
  return(active);
}
