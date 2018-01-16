$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    userInput = [($("#movie").val()),($("#entertainer").val())]
    $("#output").text(userInput);
    console.log(userInput);
  });
});
