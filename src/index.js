import { debounce } from "lodash";
import fetchCountries from "./fetchCountries";

const inputEl = document.querySelector('.input');

inputEl.addEventListener('input', debounce(inputCatch, 500))

function inputCatch(e) {
  console.log(e.target.value);
  return fetchCountries(e.target.value);
}
