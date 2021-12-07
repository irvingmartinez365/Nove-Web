const container = document.getElementById('container')
const template = document.getElementById('historie-element').content;
const requestJSON = 'http://127.0.0.1:5500/js/list.json';
const request = new XMLHttpRequest();

request.open('GET', requestJSON);
request.responseType = 'json';
request.send();

request.addEventListener('load', () => {
    let data = request.response;
    
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < data.length; i ++) {
        let txt = data[i]["descripcion"];
        let finalTxt = '';
        const maxLong = 100;
        if (txt.length > maxLong) {
            finalTxt = txt.substring(0,maxLong) + " ...";

        } else {
            finalTxt = txt;
        }
        template.querySelector('.historie__img').setAttribute('src',data[i]["img"]);

        template.querySelector('.historie__content__title').textContent = data[i]["nombre"];
        
        template.querySelector('.historie__content__txt').textContent = finalTxt;
        

        template.querySelector('.historie__content__txt time').textContent = data[i]["publicacion"];

        const clone = template.cloneNode(true);

        fragment.appendChild(clone)
        
    }

    container.appendChild(fragment);
    
})



/*Manera chafa*/ 
/* 
let nombre = "shingeky no kiojin";
let img = "https://vignette3.wikia.nocookie.net/shingekinokyojin/images/d/db/Volume_1_Cover.png/revision/latest?cb=20130725232055";
let des = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas fugiat omnis repellat dolorum, corrupti dolor magni quisquam architecto assumenda.";

let date = "20/9/2013";

const element1 = `
<div class="historie container--flex">
    <img class="historie__img" src="${img}" alt="">
    <div class="historie__content"> 
        <h3 class="historie__content__title">${nombre}</h3>
        <p class="historie__content__txt">${des}</p>
        <p class="historie__content__txt"><b>Publicado: </b><time>${date}</time></p>
    </div>
</div>`
const element2 = `
<div class="historie container--flex">
    <img class="historie__img" src="${img}" alt="">
    <div class="historie__content"> 
        <h3 class="historie__content__title">${nombre}</h3>
        <p class="historie__content__txt">${des}</p>
        <p class="historie__content__txt"><b>Publicado: </b><time>${date}</time></p>
    </div>
</div>`
container.innerHTML += element1;
container.innerHTML += element2; */



