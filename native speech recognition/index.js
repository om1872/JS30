window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const button = document.querySelector('button');
const box = document.querySelector('.box');

const recognition = new SpeechRecognition();
recognition.interimResults=true;
let para = document.createElement('p');
para.innerHTML = `Speak Anything :)`;
box.appendChild(para);

recognition.addEventListener('result', (e) => {
    const list = Array.from(e.results);
    console.log(list);
    const sentence = list.map(result => result[0])
                        .map(res => res.transcript)
                        .join('');
    para.textContent=sentence;

    if(e.results[0].isFinal==true){
    para = document.createElement('p');
    box.appendChild(para);
    }
});
let isClick = false;
recognition.addEventListener('end',() => {
    if(isClick){
        recognition.start();
    }
});
button.addEventListener('click', (e) => {
    isClick = !isClick;
    if (isClick) {
        button.classList.add('click');
        recognition.start();
    } else {
        recognition.stop();
        button.classList.remove('click');
    }
})