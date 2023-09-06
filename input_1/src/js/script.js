$("#btn").click(function() {

 input = $("#input").val();
  if (input === "") {
  $("#error").text("Поле обязательно для заполнения");
} 
else if (input.length < 3) {
  $("#error").text("Поле должно содержать не менее 3-х символов");
} 
else {
  $("#error").text(""); 
}
}); 
