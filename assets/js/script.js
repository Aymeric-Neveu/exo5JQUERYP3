$(function() {
  $("#left1").click(function() {
    $("#carre1").animate({
      marginLeft: '-=50px',
    }, 100);
  });
});
$(function() {
  $("#up1").click(function() {
    $("#carre1").animate({
      marginTop: '-=50px',
    }, 100);
  });
});
$(function() {
  $("#down1").click(function() {
    $("#carre1").animate({
      marginTop: '+=50px',
    }, 100);
  });
});
$(function() {
  $("#right1").click(function() {
    $("#carre1").animate({
      marginLeft: '+=50px',
    }, 100);
  });
});
