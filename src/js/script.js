  $("#btn").click(function() {
      var inputValue = $("#input").val();
      if (inputValue === "") {
          $("#error").text("Поле обязательно для заполнения");
      } else if (inputValue.length < 3) {
          $("#error").text("Поле должно содержать не менее 3-х символов");
      } else {
          $("#error").text(""); 
      }
  }); 