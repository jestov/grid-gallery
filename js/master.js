$(".element img").click(function(){
  $('#screen').show();
  var l=$(".element").length;
  if (l > 1) {
    $("#screen").html('<div class="full bt">&#11016</div><div class="close bt">&times</div><div class="image"></div><div class="prev bt">&larr;</div><div class="nxt bt">&rarr;</div>');
  }
  else{
    $("#screen").html('<div class="full bt">&#11016</div><div class="close bt">&times</div><div class="image"></div>');
  }
  $(".image").html('<img src="'+ $(this).attr('src') +'">');
  $("body").css('overflow','hidden');


  $(".full").click(function(){
    alert("mmgm");
    var e = new Event('keypress');
      e.which = 122; // Character F11 equivalent.
      e.altKey=false;
      e.ctrlKey=false;
      e.shiftKey=false;
      e.metaKey=false;
      e.bubbles=true;
      document.dispatchEvent(e);
  });
});
$("#screen,#screen .close").click(function(){
  $("#screen").hide();
  $("body").css('overflow','auto');
});


for (var i = 0; i < l; i++) {

}
