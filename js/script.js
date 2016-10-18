$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".clickit").click(function() {
    $("#cheetah-showing").slideToggle();
    $("#cheetah-hidden").slideToggle();
  });
});
