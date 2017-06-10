$(document).ready(function() {
  $("#btnrow a").click(function(){
    $(this).addClass("active");
    $("a").not(this).removeClass("active");
  });
});
