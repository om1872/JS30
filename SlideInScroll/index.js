function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

// to add a delay for such functions which runs on events like for large number of times
// reduces no. of times of such functions executions by handling wait parameter,
// boost performance



const images=document.querySelectorAll("img");

function set(e){
    images.forEach(image => {
        const currWindow=window.scrollY+window.innerHeight;
        const imgTop=image.offsetTop;
        const imgHeight=image.height;
        const imgHalf=imgTop+(imgHeight/2);
        let onScreen=imgHalf<currWindow && imgTop+imgHeight>window.scrollY;
        if(onScreen)
        image.classList.add('slide-in');
        else
        image.classList.remove('slide-in');
    });
}
window.addEventListener('scroll',debounce(set));