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

const getCountryInfo = async (event) => { // 1.gauti data getdata()

    event.preventDefault();
    console.log(countryName.value); //pasitikrinu, ar gaunu ivesta vartotojo reiksme
    const country = countryName.value;

    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        if (!res.ok) { //vykdau tik jei grazino data
            throw new Error(`HTTP error! status: ${res.status}`);

        } 
        else {        
        let data = await res.json(); //isidejau i json
        // data = data[0]; //beautify , imu is json
        console.log(data)
        
            // if (data.value.length > 1) {
            //     const doubledCountries = data.map(country => {
            //     })}

        imgContainer.innerText = data.name.common; // spauzdinu info i html
        document.querySelector('img').src = data.flags.svg;}
        
    } catch (error) {
        console.log(error);
        imgContainer.innerText = "Country not found";
        document.querySelector('img').src = ""; //istrinu value

    }
}

function checkLength() {
    let textbox = document.getElementById("countryName");
    if (textbox.value.length <= 3) {
        alert("Must be at least 3 characters");
    }}
checkLength()


myButton.addEventListener('click', getCountryInfo);


//pasizymiu input, kad pasiimciau vartotojo ivesta reiksme
const country_name = document.getElementById('country_name');

//pasizymiu mygtuka, kad iskviesti funkcija
const my_button = document.querySelector('button');

const getCountryInfo = async (event) => {
    event.preventDefault();
    //pasitikrinu, ar gaunu ivesta vartotojo reiksme
    console.log(country_name.value);
    if (country_name.value == '' || country_name.value.length < 3) {
        console.log(country_name.value);
        alert('Lauka butinas uzpildyti ir turi buti ilgesnis nei 3 simboliai');
    } else {
        const country = country_name.value;

        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
            const data = await res.json();
            console.log(data);
            //jei response 404, pranesk useriui, kad salis nerasta
            if (data.status === 404) {
                //trinu senus duomenis 
                const countries = document.querySelectorAll('.one_country_info');
                //console.log(countries);
                for (let i = 0; i < countries.length; i++) {
                    console.log(countries[i])
                    countries[i].remove();
                }
                const one_country_info = document.createElement('div');
                one_country_info.className = 'one_country_info card row d-flex justify-content-center mt-4';
                one_country_info.textContent = `Country ${data.message}`;
                document.querySelector('.container').appendChild(one_country_info);
                return;
            }
            //tikrinti, ar salies info jau yra, pasalinti sena informacija   
            if (document.querySelector('.one_country_info') != undefined) {
                const countries = document.querySelectorAll('.one_country_info');
                //console.log(countries);
                for (let i = 0; i < countries.length; i++) {
                    console.log(countries[i])
                    countries[i].remove();
                }
            }

            //jei gauciau response daugiau ne viena sali
            data.map(one_country => {
                const one_country_info = document.createElement('div');
                one_country_info.className = 'one_country_info card row d-flex justify-content-center mt-4';
                one_country_info.innerHTML = `
            <img src="${one_country.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${one_country.name.common}</h5>
                <p class="card-text">Population: ${one_country.capital[0]
                    }</p>
                <p class="card-text">Population: ${one_country.population}</p>
         
       
        </div>
        `
                document.querySelector('.container').appendChild(one_country_info);
            })
        } catch (error) {
            console.log(error);
        }
    }
}

my_button.addEventListener('click', getCountryInfo);