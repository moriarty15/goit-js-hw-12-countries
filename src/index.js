import './sass/main.scss';
import { debounce } from "lodash";
import fetchCountries from "./fetchCountries";
import countryEl from "./templates/country-items.hbs";
import countriesEl from "./templates/countries.hbs";
import {notice} from '@pnotify/core';


const inputEl = document.querySelector('.input');
const divEl = document.querySelector('.country');

inputEl.addEventListener('input', debounce(inputCatch, 500))

let fetchEl = '';

function inputCatch(e) {

  if (e.target.value.trim() === fetchEl) {return }
  fetchEl = e.target.value.trim();

  if (e.target.value == ' ' || e.target.value == '') return
  const fetchResolt = fetchCountries(fetchEl);
  renderHTML(fetchResolt);
}

function renderHTML(fetchResolt) {
  fetchResolt.then(country => {
    if (country.length > 10) {
     notice({
       text: "необходимо сделать запрос более специфичным."
       });
    }
    else if (country.length === 1) {
      console.log(country);
        const onceCountry = country[0];
        divEl.innerHTML = countryEl({onceCountry});
    }
    else if (country.length <= 10) {
      console.log(country);

        divEl.innerHTML = countriesEl({country})
    }
  })
}


