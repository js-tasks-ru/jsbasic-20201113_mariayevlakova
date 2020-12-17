function initCarousel() {
  // ваш код...
  let leftButton = document.querySelector('.carousel__arrow_left');
  let rightButton = document.querySelector('.carousel__arrow_right');
  let carouselInner = document.querySelector('.carousel__inner');
  let position = 0;
  let carouselWidth = document.querySelector('.carousel__inner').offsetWidth;

  leftButton.style.display = 'none';

  rightButton.addEventListener('click', () => {
    position -= carouselWidth;
    carouselInner.style.transform = `translateX(${position}px)`;
    
    if(position == -carouselWidth*3) {
      rightButton.style.display = 'none';
    };
  });
  leftButton.addEventListener('click', () => {
    position += carouselWidth;
    carouselInner.style.transform = `translateX(${position}px)`;
    if (position == 0) {
      leftButton.style.display = 'none';
    }
  });
  

}
