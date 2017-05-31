// everything thats executed upon load is in this function
// that way we can execute the code after all scripts are downloaded.

function init(){



  // Scripts go here
  $('li').click(function(event){
    // activate the popup and pass it the id of the icon that was clicked.
    // the activatePopUp function uses the id to produce the image, pdf and html urls dynamically.
    
    if(!popUpIsActive()){ // only open popup if not already active
      activatePopUp(this.id);
    } 
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



$(document).mouseup(function (e) {
     var popup = $(".selected");
     if (!popup.is(e.target) && popup.has(e.target).length == 0 // if the click didnt target the popup..
      && popUpIsActive() // AND if the popup is active
      ) {
     hidePopUp(); // then hide the popup!
    e.stopPropagation() // this should prevent any other events the click might have triggered such as opening a new popup straight away
}

console.log()
 });


function initBouncing(bounceHeight){
allicons = $('.icon-container')
for (var i = allicons.length - 1; i >= 0; i--) {
  bounceicon(allicons[i].id,bounceHeight)
}
}


function bounceicon(iconID,bounceHeight){
$("#" + iconID).on('mouseenter mouseleave',function( e ) {
  var el = $(this).children();
  if(!el.data("bnc")) el.effect("bounce", { direction:'up', distance:bounceHeight, times:1 });
  el.data("bnc", e.type=="mouseenter" ? true : false );
});
}


function activatePopUp(iconID){
  // change popup image and links based on icon id:
  $('.big-img').attr("src","images_web/"+iconID+"icon.gif");
  $('#popup-online-link').attr("href",iconID+".html");
  $('#popup-download-link').attr("href",iconID+".pdf");
  // make popup visible:
  $('.selected').css({
      display: 'block'
    })
}
function hidePopUp(iconID){
  // change popup image and links based on icon id:
  $('.selected').css({
      display: 'none'
    })
}

function popUpIsActive(){
  // returns true if the popup is active, false if not
  var active = $(".selected").css("display")!='none';
  return(active);
}

initBouncing(5);
}


