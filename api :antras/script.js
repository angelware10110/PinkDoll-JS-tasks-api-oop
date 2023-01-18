console.log("test")

const place = document.getElementById('root');
const imgContainer = document.querySelector('.imgContainer');
place.appendChild(imgContainer)
place.appendChild(document.createElement('img'));


// const myButton = document.createElement('button');
// const input = document.createElement('input');
// place.appendChild(myButton);
// place.appendChild(input);
// myButton.innerText = "miau";
// input.type = "text";
// input.className = "css-input"; 

const countryName = document.getElementById('countryName'); //pasizymiu input, kad pasiimciau vartotojo ivesta reiksme
const myButton = document.querySelector('button');//pasizymiu mygtuka, kad iskviesti funkcija

// 2. if pries kuriant html ar nera info divo su info naudot remove()
// 3.sukurti i html tag, i juos ideti data, 1version 1 salis, 2version keletas saliu data(map)
// -->

const getCountryInfo = async (event) => { // 1.gauti data getdata()

    event.preventDefault();
    console.log(countryName.value); //pasitikrinu, ar gaunu ivesta vartotojo reiksme
    const country = countryName.value;

    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        const data = await res.json(); //isidejau i json
        console.log(data);
        document.querySelector('img').src = data.file;

        
    } catch (error) {
        console.log(error);
    }

    imgContainer.innerText = countryName.value; // spauzdinu info i html
    console.log(countryName.value)

}

myButton.addEventListener('click', getCountryInfo);



