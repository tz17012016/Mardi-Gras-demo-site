var $el, $ps, $up, totalHeight;
$(".jiku_text .btn").on("click", function() {
  totalHeight = 0
  $el = $(this);
  $p  = $el.parent();
  $up = $p.parent();
  $ps = $up.find("p:not('.read-more')");
  $ps.each(function() {
    totalHeight += $(this).outerHeight();
  });
  console.log(totalHeight);
  $up
    .css({
    "height": $up.outerHeight(),
    "max-height": 9999
  })
    .animate({
    "height": totalHeight + 200
  });
  $p.fadeOut();
  return false;
});