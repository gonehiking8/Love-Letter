$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var firstnameInput = $("input#firstname").val();

    $(".firstname").text(firstnameInput);

    $("#letter1").show();

    event.preventDefault();
  });
});
