import refs from './refs.js';
import cardsTmpl from '../templat/cardsTmpl.hbs';

function imageMarkup(data) {
  const markup = cardsTmpl(data);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default imageMarkup;
