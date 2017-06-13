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
  $('#GO').unbind();
  $('#ITTS').unbind();
  $( "icon" ).click(function() {
    $( "#book" ).slideToggle( "slow" );
  });

  $(document).bind("mouseup touchend", function(e) {
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
  if(!is_touch_device()){
  allicons = $('.icon-container')
  for (var i = allicons.length - 1; i >= 0; i--) {
    bounceicon(allicons[i].id,bounceHeight)
  }
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
  $('.big-img').attr("src","./images_web/front"+iconID+".png");
  $('#popup-online-link').attr("href","book.php?book="+iconID);
  $('#popup-download-link').attr("href","./books/"+iconID+".pdf");

  if (iconID=='STOP') {
      $('#popup-online-link').attr("href","https://youtu.be/qq_qS6EjE4I");
  }
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


function isdoublepage(){
  return($("body").innerWidth()>400);
}
function nextpage(book){
  if(isdoublepage() && pagenumber!=1){
  pagenumber+=2;
  }else{
    pagenumber+=1;
  }
  pagenumber=setpagenumber(book,pagenumber);
}

function previouspage(book){
if(isdoublepage()){
  pagenumber-=2;
  }else{
    pagenumber-=1;
  }
  pagenumber=setpagenumber(book,pagenumber);
}

function setpagenumber(book,pagenumber){  
  console.log(pagenumber)

   if(pagenumber<=1){
    pagenumber=1;
    $('#leftpageimage').attr('src',"./books/"+book+"/"+pagenumber+".jpg");
    $('.rightpage').css('visibility',"hidden");
      console.log(pagenumber)
    }
  else if (pagenumber>=howmanypages-1){
    pagenumber=howmanypages-1;
  } else{
     $('#leftpageimage').attr('src',"./books/"+book+"/"+pagenumber+".jpg");
     if(isdoublepage() ){
        $('#rightpageimage').attr('src',"./books/"+book+"/"+(pagenumber+1)+".jpg");
        $('.rightpage').css('visibility',"visible")
     };
  }

if(pagenumber>=howmanypages-1){
  $('.flipbutton.right').css('visibility',"hidden");
  console.log('upper limit')

}else if(pagenumber<=1){
  $('.flipbutton.left').css('visibility',"hidden");
  console.log('lower limit')
}else{
    $('.flipbutton.right').css('visibility',"visible");
    $('.flipbutton.left').css('visibility',"visible");

}



return(pagenumber)
}


function is_touch_device() {
  return 'ontouchstart' in window        // works on most browsers 
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};
