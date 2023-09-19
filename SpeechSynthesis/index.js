const options=document.querySelector('select');
const text=document.querySelector('.text');
const controls = document.querySelectorAll('[type="range"], [name="text"]');
const buttons=document.querySelectorAll('button');
const speech=new SpeechSynthesisUtterance(text.textContent);
let voices=[];

function populateOptions(){
    voices=speechSynthesis.getVoices();
    options.innerHTML=voices.map(voice => {
        const name=voice.name;
        const lang=voice.lang;
        return `<option value="${name}">${name} (${lang})</option>`
    }).join('');
}
function assignVoice(){
    speech.voice=voices.find(voice=> voice.name===this.value);
    // toggle();
}
 
function toggle(start = true){
    speechSynthesis.cancel();
    if(start){
        speechSynthesis.speak(speech);
    }
}

function setOption(){
    speech[this.name]=this.value;
    console.log(speech);
}
function btn(){
    if(this.name==="speak")
    toggle();
    else
    toggle(false);
}

speechSynthesis.addEventListener('voiceschanged',populateOptions);
options.addEventListener('change',assignVoice);
controls.forEach(control => control.addEventListener('change',setOption));
buttons.forEach(button => button.addEventListener('click',btn));