function toggleText() {
  // ваш код...
  let toggleTextBtn = document.querySelector('.toggle-text-button');
  toggleTextBtn.addEventListener( 'click', function (event) {
    document.getElementById('text').hidden = !document.getElementById('text').hidden;
  });
}
