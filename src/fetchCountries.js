import { error } from '@pnotify/core';

function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(responce => {
      if (!responce.ok) return error({
  text: "страны с таким название нету(."})
      return responce.json();
    })
    .catch(e => error({
  text: "страны с таким название нету(."}))
  }
export default fetchCountries;


