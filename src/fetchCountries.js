import countryEl from "./templates/country-items.hbs";
import countriesEl from "./templates/countries.hbs";
import {notice} from '@pnotify/core';

const divEl = document.querySelector('.country');

function fetchCountries(searchQuery) {
    fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
  .then(r => r.json())
  .then(country => {
    if (country.length > 10) {
     const myNotice = notice({
  text: "необходимо сделать запрос более специфичным."
});
    }
    else if (country.length === 1) {
        const onceCountry = country[0];
        divEl.innerHTML = countryEl({onceCountry});
    }
    else if (country.length <= 10) {
      console.log(country);
        divEl.innerHTML = countriesEl({country})
    }
    
  })
}
export default fetchCountries;
