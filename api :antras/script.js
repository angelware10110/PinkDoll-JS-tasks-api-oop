console.log("test")

const place = document.getElementById('root');
const myButton = document.createElement('button');
const input = document.createElement('input');

place.appendChild(document.createElement('img'));
place.appendChild(myButton);
place.appendChild(input);

myButton.innerText = "miau";
input.type = "text";
input.className = "css-input"; 

const country_name = document.querySelector('input'); //pasizymiu input, kad pasiimciau vartotojo ivesta reiksme
const my_button = document.querySelector('button'); //pasizymiu mygtuka, kad iskviesti funkcija

const getCountry = async (event) => {
    event.preventDefault();
    console.log(country_name.value);
    const country = country_name.value;

try {
    const res = await fetch (`https://restcountries.com/v3.1/name/${country}`);
    const data = await res.json(); //isidejau i json
    console.log(data)
    document.querySelector('img').src = data.file;

} catch (error) {
    console.log(error)
    }
}

myButton.addEventListener('click', getCountry);




