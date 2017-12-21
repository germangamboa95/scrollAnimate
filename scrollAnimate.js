function scrollAnimate(elementId, animationName){
  let isVisible = function(element) {
    let rect = element.getBoundingClientRect();
    let elementTop = rect.top; 
    let elementBottom =rect.bottom; 
    let onScreen = (elementTop < window.innerHeight);
    return onScreen;
  }
  let el = document.getElementById(elementId);
  window.onscroll = function(){
    if(isVisible(el)){
      el.classList.add("animated", animationName);
  
    }
  }
}