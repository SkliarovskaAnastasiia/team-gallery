export const createMarkup = array =>
  array
    .map(
      el => `<li class='gallery__item'>
    <img src='${el.urls.small}' alt='${el.alt_description}' class='gallery-img' />
  </li>`
    )
    .join('');
