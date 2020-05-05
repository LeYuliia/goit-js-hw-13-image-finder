import apiService from '../apiService.js';
import refs from '../refs.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/BrightTheme.css';
import { notice } from '@pnotify/core/dist/PNotify.js';

export default () => {
  apiService.fetchImage().then(articles => {
    if (articles.length < 12) {
      refs.loadMoreBtn.disabled = true;
      refs.loadMoreBtn.classList.add('disabled');
    }
    if (refs.loadMoreBtn.disabled === true) {
      notice({
        title: 'Good job!',
        text: 'You have viewed all pages :)',
        delay: 2000,
      });
    }
  });
};
