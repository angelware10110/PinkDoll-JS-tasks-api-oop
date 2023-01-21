const main_input = document.querySelector('input');
const main_btn = document.querySelector('button');

const imgContainer = document.querySelector('.img-container');
const apiKey = `sbcYgo2GTlRHz9etpt9i3BgvVAeE61U6XrK8xnuiqwg`


async function loadingPhotos() {
    
    const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=24`);
    const data = await res.json();


    const newDiv = document.createElement('div');
   
    data.map(item => {

        newDiv.classList.add('deletible');
        imgContainer.appendChild(newDiv)

        const img = `<img src='${item.urls.small}'></img>`
        
        newDiv.innerHTML += img;
    });
};





async function getData(e) {
    e.preventDefault();
    console.log(main_input.value)
    const word = main_input.value;
    const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${word}&client_id=${apiKey}&per_page=24`);
    const data = await res.json();


    const newDiv = document.createElement('div');

    if (document.querySelector('.deletible') !== undefined) {
      
        document.querySelectorAll('.deletible').forEach(item => item.remove());

    }


    console.log(data)
   if(data){data.results.map(item => {

        newDiv.classList.add('deletible');
        imgContainer.appendChild(newDiv)

        const img = `<img src='${item.urls.small}'></img>`
        
        newDiv.innerHTML += img;
    })}
};

loadingPhotos();

main_btn.addEventListener('click', getData);