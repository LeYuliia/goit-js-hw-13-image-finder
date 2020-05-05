import './styles.css';
import apiService from './js/apiService.js';
import refs from './js/refs.js';
import imageMarkup from './js/imageMarkup.js';
import lastPage from './js/components/lastPage.js';
import openModal from './js/components/modal';
import scroll from './js/components/scroll';

refs.form.addEventListener('submit', event => {
  // для предупреждения перезагрузки страницы:
  event.preventDefault();
  // Очистка поля формы после каждого запроса:
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  form.reset();
  // Очистка html списка при новом запросе:
  refs.gallery.innerHTML = '';
  // Сброс на 1ю страницу:
  apiService.resetPage();
  // Запрос и разметка
  apiService.fetchImage().then(imageMarkup);
  //проверка на количество оставшегося контента:
  lastPage();
  // Снимаем класс hidden с кнопки
  refs.loadMoreBtn.classList.remove('is-hidden', 'disabled');
  refs.loadMoreBtn.disabled = false;
});
refs.loadMoreBtn.addEventListener('click', () => {
  apiService.incrementPage();
  apiService.fetchImage().then(imageMarkup).then(scroll);
  lastPage();
});
refs.gallery.addEventListener('click', openModal);