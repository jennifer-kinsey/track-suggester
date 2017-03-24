$(document).ready(function(){

  // If the name is not blank, it will disappear. If it is blank, it will warn you to put in a name.
  $("#nameBtn").click(function() {
    var name = $(".yourName").val();
    if(name !=="") {
      $("#formGroup1").hide();
    }else{
      $("#yourNameIsBlank").append("***Enter your name, please");
    }
  });

   // click function that makes the question you just answered disappear

   //Checks to see if all the form-groups are hidden, if so, it adds a class to the submit button to make it pop

  $(".form-group").change(function(){
    var value = $(".form-control").val();
    if(value==="0"){
      alert("Select an option");
    }else{
    $(this).hide();
    }
    if ($(".form-group:hidden").length === 5){
      $("#submitButton").addClass("animate");;
    }
  });




  // submit function for taking values from quiz, turning them to variables, and then showing the result
  $("form#track-suggester").submit(function(event){
    event.preventDefault();
    $("form").hide();
    var name = $("input.yourName").val();
    $(".yourName").text(name);

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
