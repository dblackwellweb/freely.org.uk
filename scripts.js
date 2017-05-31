// everything thats executed upon load is in this function
// that way we can execute the code after all scripts are downloaded.

function init(){



  // Scripts go here
  $('li').click(function(event){
    // activate the popup and pass it the id of the icon that was clicked.
    // the activatePopUp function uses the id to produce the image, pdf and html urls dynamically.
    activatePopUp(this.id);
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
      && $(popup).css("display")!='none' // AND if the popup visibility was not set to 'none'
      ) {
     hidePopUp(); // then hide the popup!
     }
  
console.log()
 });


}




function iconClicked(iconID){

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


