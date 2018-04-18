$(document).on('click','.element',function(){
  var selected=$(this);
  var prev=$(this).prev().find('img');
  var next=$(this).next().find('img');
  $('#screen').show();
  var l=$(".element").length-1;
  var p=$(".element").index(selected);
  function buttons(){
    if (l > 1) {
      if (p == 0){
        return '<div class="full bt">&#11016</div><div class="close bt">&times</div><div class="nxt bt">&rarr;</div>';
      }
      else if (p == l) {
        return '<div class="full bt">&#11016</div><div class="close bt">&times</div><div class="prev bt">&larr;</div>';
      }
      else{
        return '<div class="full bt">&#11016</div><div class="close bt">&times</div><div class="nxt bt">&rarr;</div><div class="prev bt">&larr;</div>';
      }
    }
    else{
      return '<div class="full bt">&#11016</div><div class="close bt">&times</div>';
    }
  }
  buttons();
  var content=buttons();
  $("#screen").html('<div class="image"></div>' + content);
  $(".image").html('<img src="'+ $('img', this).attr('src') +'">');
  $("body").css('overflow','hidden');
  $(document).on('click','.close',function(){
    $("#screen").hide();
    $("body").css('overflow','auto');
  });
  $(document).on('click','.prev',function(){
    selected=selected.prev();
    prev=selected.find('img');
    var previmg='<img src="'+ prev.attr('src') +'">';
    $(".image").html(previmg);
    p=$(".element").index(selected);
    buttons();
    content=buttons();
    $("#screen").html('<div class="image">'+ previmg + '</div>' + content);
  });
  $(document).on('click','.nxt',function(){
    selected=selected.next();
    next=selected.find('img');
    var nxtimg='<img src="'+ next.attr('src') +'">';
    $(".image").html(nxtimg);
    p=$(".element").index(selected);
    buttons();
    content=buttons();
    $("#screen").html('<div class="image">'+ nxtimg + '</div>' + content);
  });
  $(document).on('click','.full',function(){
  });
});
