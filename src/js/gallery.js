import { getPhotos } from './unsplesh-api';
import { refs } from './refs';
import { createMarkup } from './create-markup';
import { hideLoader, showLoader } from './loader';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { hideBtn, showBtn } from './load-more';

let page = 1;
let searchedQuery = null;

const onFormSubmit = async event => {
  event.preventDefault();
  refs.galleryList.innerHTML = '';
  showLoader();
  hideBtn();

  searchedQuery =
    event.currentTarget.elements['user-search-query'].value.trim();

  page = 1;

  try {
    const { results, total } = await getPhotos(searchedQuery, page);

    if (results.length === 0) {
      iziToast.error({
        message: 'Bad request',
      });
      return;
    }

    iziToast.success({ message: `We find ${total} pictures` });
    refs.galleryList.innerHTML = createMarkup(results);

    if (total > 12) showBtn();
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
};

const onBtnClick = async () => {
  page += 1;
  showLoader();
  try {
    const { results, total } = await getPhotos(searchedQuery, page);

    refs.galleryList.insertAdjacentHTML('beforeend', createMarkup(results));

    const lastPage = Math.ceil(total / 12);
    if (lastPage === page) {
      hideBtn();
      iziToast.info({ message: 'Last page' });
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
};

refs.form.addEventListener('submit', onFormSubmit);

refs.loadMoreBtn.addEventListener('click', onBtnClick);
