const inputs=document.querySelectorAll('input');
let  lastChecked=-1;
let isShift=0;

function clickevent(e){
    let inBetween=false;
    if(e.shiftKey===true && this.checked===true)
    {
        inputs.forEach(input => {
             if(input===this || input==lastChecked)
             {
                inBetween = !inBetween;
             }
             if(inBetween)
             {
                input.checked=true;
             }
        });
    }
    lastChecked=this;
};
inputs.forEach(input => {
    input.addEventListener('click',clickevent);
});