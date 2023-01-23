const main_input = document.querySelector('input');
const main_btn = document.querySelector('button');

const imgContainer = document.querySelector('.img-container');
const apiKey = `HLt57IqMaOHGScijvaMABIMdd8ZHgevDv9BhO7ZZQ9A`


async function loadPhotos() { //loadphotos
    
    const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=24`);
    const data = await res.json();
    const myDiv = document.createElement('div');
   
    data.map(item => {

        myDiv.classList.add('photos');
        imgContainer.appendChild(myDiv)
        const img = `<img src='${item.urls.small}'></img>`
        myDiv.innerHTML += img;
    });
};

async function getData(event) { //choose photo
    event.preventDefault();
    console.log(main_input.value)
    const word = main_input.value;
    const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${word}&client_id=${apiKey}&per_page=24`);
    const data = await res.json();


    const myDiv = document.createElement('div');

    if (document.querySelector('.photos') !== undefined) {
        document.querySelectorAll('.photos').forEach(item => item.remove());

    }

    console.log(data)
   if(data){data.results.map(item => {  
 
        myDiv.classList.add('photos'); 
        imgContainer.appendChild(myDiv) 
        const img = `<img src='${item.urls.small}'></img>`  
        myDiv.innerHTML += img;
    })}
};

loadPhotos();

main_btn.addEventListener('click', getData);