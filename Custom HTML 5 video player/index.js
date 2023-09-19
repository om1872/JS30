const video=document.querySelector("video");
const progress=document.querySelector(".progress");
const progressBar=document.querySelector(".progress_filled");
const play=document.querySelector(".toggle");
const skipButtons=document.querySelectorAll("[data-skip]");
const ranges=document.querySelectorAll(".slider");
const currentTime=document.querySelector(".currentTime");
const endTime=document.querySelector(".endTime");
const full=document.querySelector(".full");
const player=document.querySelector(".player");

function toggle()
{
    if(video.paused){
        video.play();
        play.innerHTML='| |' ;
    }
    else{
        play.innerHTML='▶' ;
        video.pause();
    }
}

function toHoursAndMinutes(totalSec) {
    const sec=Math.floor(totalSec %60);
    const totalmin=totalSec/60;
    const min=Math.floor(totalmin%60);
    const hrs=Math.floor(totalmin/60);
    if(hrs===0)
    return min+':'+sec;
    else
    return hrs+':'+min+':'+sec;
}

function calWidth(currentTime,endTime){
    const width=(100*currentTime/endTime);
    return `${width}%`;
}
function videoPlaying(){
    currentTime.innerHTML=toHoursAndMinutes(video.currentTime);
    if(video.currentTime===video.duration)
    {
        play.innerHTML='▶' ;
    }
    progressBar.style.flexBasis=calWidth(video.currentTime,video.duration);

}

function updateRange()
{
    video[this.name]=this.value;
}

function scrub(e)
{
    const m=(e.offsetX/this.offsetWidth)*(video.duration);
    video.currentTime=m;
}

function fullToggle(e)
{
    if(document.fullscreenElement)
        exitFullscreen();
    else
    player.requestFullscreen();
}




play.addEventListener('click',toggle);
video.addEventListener('click',toggle);
video.addEventListener('timeupdate',videoPlaying);
video.onloadedmetadata=function(){
    endTime.innerHTML=toHoursAndMinutes(video.duration);
};

const len=skipButtons.length;
for(let i=0;i<len;i++)
{
    let btn=skipButtons[i];
    skipButtons[i].addEventListener('click',function() {  
    if(this.dataset['skip']==='-10')
    video.currentTime-=10;
    else if(this.dataset['skip']==='10')
    video.currentTime+=10;
    });
}
ranges.forEach(range => range.addEventListener('click',updateRange));
ranges.forEach(range => range.addEventListener('mousemove',updateRange));

let clickflag=false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',()=> {clickflag && scrub});
progress.addEventListener('mousedown',()=> clickflag=true);
progress.addEventListener('mouseup',() => clickflag=false);

full.addEventListener('click',fullToggle);
