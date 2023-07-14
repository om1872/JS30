const panels=document.querySelectorAll(".panel");

function grow()
{
  this.classList.toggle('grow');
}
function openActive(e)
{
  if(e.propertyName.includes('flex'))
  {
    this.classList.toggle('open-active');
  }
}

panels.forEach( panel => panel.addEventListener('click',grow));

panels.forEach( panel => panel.addEventListener('transitionend',openActive));
