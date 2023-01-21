console.log('test');
//1. place where I place the photo
const place = document.getElementById('root');
const myButton = document.createElement('button');
place.appendChild(myButton);
myButton.innerText = "Gauk kavos"

//1. susikurti img elementa

//2. img prideti i div html (ant narsykles inspect matosi)
place.appendChild(document.createElement('img'));


async function getData() {
    const res = await fetch("https://coffee.alexflipnote.dev/random.json")
    const data = await res.json();
    console.log(data);
    //3. src atributui priskirti reiksme kuria gaunami is api
    document.querySelector('img').src = data.file;
}

//4.kas karta paspaudus mygtuka kaisciasi esmama nuotrauka
myButton.addEventListener('click', getData);

console.log("test js veikia toliau")