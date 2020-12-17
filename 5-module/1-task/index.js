function hideSelf() {
  // ваш код...
  let button = document.querySelector('.hide-self-button');
  button.addEventListener('click', function (event){
  button.hidden = !button.hidden;
  });
}

