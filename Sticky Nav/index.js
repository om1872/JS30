const nav=document.querySelector('nav');
const dd=nav.offsetTop;

function fix(){
    
    if(window.scrollY>=dd){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    }else{
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}
window.addEventListener('scroll',fix);