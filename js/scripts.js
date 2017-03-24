$(document).ready(function(){
  $("form#track-suggester").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#question1").val());
    var number2 = parseInt($("#question2").val());
    var number3 = parseInt($("#question3").val());
    var number4 = parseInt($("#question4").val());
    var number5 = parseInt($("#question5").val());

    var total = number1 + number2 + number3 + number4 + number5;

    if(total >= 5 && total <= 6) {
      $("#trackType").text("Ruby/Rails");
    }else if(total >= 7 && total <= 9) {
      $("#trackType").text("PHP/Drupal");
    }else if(total >= 10 && total <= 11) {
      $("#trackType").text("Java/Android");
    }else if(total >= 12 && total <= 13){
      $("#trackType").text("CSS/Design");
    } else {
      $("#trackType").text("C#/.NET");
    }
    $("#result").show();
    $("form").hide();
  });

  $('#reload').click(function() {
    location.reload();
  });

});
