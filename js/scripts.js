$(document).ready(function(){
  $("form#track-suggester").submit(function(event){
    event.preventDefault();
    $("form").hide();
    var number1 = parseInt($("#question1").val());
    var number2 = parseInt($("#question2").val());
    var number3 = parseInt($("#question3").val());
    var number4 = parseInt($("#question4").val());
    var number5 = parseInt($("#question5").val());

    var total = number1 + number2 + number3 + number4 + number5;

    if(total >= 5 && total <= 6) {
      $("#ruby").show();
    }else if(total >= 7 && total <= 9) {
      $("#php").show();
    }else if(total >= 10 && total <= 11) {
      $("#java").show();
    }else if(total >= 12 && total <= 13){
      $("#css").show();
    } else {
      $("#c-sharp").show();
    }
    $("#refresh").show();
  });

  $('#reload').click(function() {
    location.reload();
  });

});
