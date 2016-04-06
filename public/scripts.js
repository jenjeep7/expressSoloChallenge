$(function(){
$("#click").on("click", function(){
  $.get("/balance").done(function(res){
    var balance = res;
    $("body").append("<p>" + balance + "</p>");
  });
});
});
