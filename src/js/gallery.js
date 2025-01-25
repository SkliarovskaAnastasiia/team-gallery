import { getPhotos } from './unsplesh-api';
import { refs } from './refs';
import { createMarkup } from './create-markup';
import { hideLoader, showLoader } from './loader';

const onFormSubmit = async event => {
  event.preventDefault();
  refs.galleryList.innerHTML = '';
  showLoader();

  const searchedQuery =
    event.currentTarget.elements['user-search-query'].value.trim();

  const page = 1;

  try {
    const { results, total } = await getPhotos(searchedQuery, page);

    refs.galleryList.innerHTML = createMarkup(results);
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
};

refs.form.addEventListener('submit', onFormSubmit);
