import { error } from '@pnotify/core';

function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(responce => {
      if (!responce.ok) return error({
  text: "I'm an error message."})
      return responce.json();
    })
    .catch(e => error({
  text: "I'm an error message."}))
  }
export default fetchCountries;


