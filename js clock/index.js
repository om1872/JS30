const secondHand=document.querySelector(".second");
const minuteHand=document.querySelector(".minute");
const hourHand=document.querySelector(".hour");
const hand=document.querySelector(".hand");
function setDate()
{
  const now=new Date();
  const seconds=now.getSeconds();
  const secondDegrees= ((seconds/60)*360) + 90;
  const hour=now.getHours();
  const hourDegrees= ((hour/12)*360) + 90;
  const min=now.getMinutes();
  const minDegrees= ((min/60)*360) + 90
  if(minDegrees===90||secondDegrees===90||hourDegrees===90)
  {
    hand.style.transition=`all 0s`;
  }
  else
  {
    hand.style.transition=`all 0.07s cubic-bezier(0.02, 3.38, 0.58, 1)`;
  }
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  console.log(seconds);
}
setInterval(setDate,1000);
