const input = document.querySelector('#myInput');

const button = document.querySelector('#btn-two');
button.addEventListener('click', function() {
  
  if (input.value === "") {
   block.innerHTML = "Поле обязательно для заполнения";
}
  else if (input.value.length < 3) {
   block.innerHTML = "Поле должно содержать не менее 3-х символов";
} 
  else {
   block.innerHTML = "";
}
});


const inputTree = document.querySelector('#inp');
const buttonTree = document.querySelector('#btn-tree');

buttonTree.addEventListener('click', function() {

  if (input == "" || isNaN(input)) {
    result.innerHTML = "Введите число";
} 
  else {
    result.innerHTML = "Квадрат числа: " + (input * input);
}
});