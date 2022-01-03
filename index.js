// Toggle and Navigation //

  const toggle = document.querySelector('.toggle')

  const navigation = document.querySelector('.navigation')

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})

  // Slider //

  let sliderWrap = document.querySelector('.slider-wrap');
  let slider = document.querySelector('.slider');
  let clonesWidth;
  let sliderWidth;
  let clones= [];
  let disableScroll = false;
  let scrollPos;

  let items = [...document.querySelectorAll('.slider-item')]
  let images = [...document.querySelectorAll('.img-div')]

  images.forEach ((image, idx) => {
    image.style.backgroundImage = `url(https://assets.codepen.io/7067207/IMG-0055.JPG)`
})

   items.forEach(item => {
    let clone = item.cloneNode(true);
      clone.classList.add('clone');
      slider.appendChild(clone);
      clones.push(clone);
})

  function getClonesWidth(){
    let width = 0;
    clones.forEach(clone => {
      width += clone.offsetWidth;
})
    return width;
}

  function getScrollPos(){
     return window.scrollY;
}

   function scrollUpdate(){
     if(window.innerWidth < 0){
     sliderWrap.style.overflow = 'hidden';
    scrollPos = getScrollPos();
    if(clonesWidth + scrollPos >= sliderWidth){
     window.scrollTo({top: 1});
     }else if(scrollPos <= 0){
     window.scrollTo({top: sliderWidth - clonesWidth - 1})
 }

    slider.style.transform = `translateX(${-window.scrollY}px)`

    requestAnimationFrame(scrollUpdate)
   }else{sliderWrap.style.overflow = 'scroll';
     
 }
}

  function onLoad(){
  calculateDimensions()
   document.body.style.height = `${sliderWidth}px`
   window.scrollTo({top: 1});
  scrollUpdate();
}

 function calculateDimensions(){
  sliderWidth = slider.getBoundingClientRect().width;
  clonesWidth = getClonesWidth();
}

onLoad();
