const cities=[];


fetch('in.json')
.then( res => res.json())
.then(result => cities.push(...result));


function findMatches(wordToMatch,cities){
    return cities.filter(place =>{
        const regex=new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.admin_name.match(regex);
    });
}

function displayMatches(){
    const match=findMatches(this.value,cities);
    const html= match.map(place => {
        let num=0;
        return `
            <li>
            <span class="name">${place.city},${place.admin_name}</span>
            <span class="populatino">${place.population}</span>
            </li>
        `;
    }).join('');
    // let re=/this.value/gi;
    let re=new RegExp(this.value,'gi');
    let result=html.replace(re,`<span style="background: #ffc600">${this.value}</span>`);
    suggestion.innerHTML=result;


}

const search=document.querySelector("#input");
const suggestion=document.querySelector("#suggestion");
search.addEventListener('keyup',displayMatches);
