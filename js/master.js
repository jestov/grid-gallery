$(".element").click(function(){
  var selected=$(this);
  var prev=$(this).prev().find('img');
  var next=$(this).next().find('img');
  $('#screen').show();
  var l=$(".element").length;
  var p=$(".element").index(selected);
  if (l > 1) {
    if (p == 0){
      $("#screen").html('<div class="full bt">&#11016</div><div class="close bt">&times</div><div class="image"></div><div class="nxt bt">&rarr;</div>');
    }
    else if (p == l) {
      $("#screen").html('<div class="full bt">&#11016</div><div class="close bt">&times</div><div class="image"></div><div class="prev bt">&larr;</div>');
    }
    else{
      $("#screen").html('<div class="full bt">&#11016</div><div class="close bt">&times</div><div class="image"></div><div class="nxt bt">&rarr;</div><div class="prev bt">&larr;</div>');
    }
  }
  else{
    $("#screen").html('<div class="full bt">&#11016</div><div class="close bt">&times</div><div class="image"></div>');
  }
  $(".image").html('<img src="'+ $('img', this).attr('src') +'">');
  $("body").css('overflow','hidden');
  $("#screen .close").click(function(){
    $("#screen").hide();
    $("body").css('overflow','auto');
  });
  $(".prev").click(function(){
    selected=selected.prev();
    $(".image").html('<img src="'+ prev.attr('src') +'">');
    prev=selected.prev().find('img');
    p=$(".element").index(selected);
  });
  $(".nxt").click(function(){
    selected=selected.next();
    $(".image").html('<img src="'+ next.attr('src') +'">');
    next=selected.next().find('img');
    p=$(".element").index(selected);
  });
  $(".full").click(function(){
  });
});
