$(document).ready(function() {
  $("#btnrow li").click(function(){
    $(this).addClass("active");
    $("li").not(this).removeClass("active");
  });
});
