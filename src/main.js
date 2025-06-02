import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const searchText = form.elements['search-text'].value.trim();

  if (!searchText) {
    iziToast.warning({ message: 'Please enter a search query!' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(searchText);
    const images = data.hits;

    if (images.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      createGallery(images);
    }
  } catch (error) {
    iziToast.error({ message: 'Something went wrong. Try again later.' });
  } finally {
    hideLoader();
    form.reset();
  }
});
