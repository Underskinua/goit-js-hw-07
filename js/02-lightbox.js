// 02-lightbox.js
import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

// Generate gallery items markup
const galleryItemsMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}" data-caption="${description}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      <div class="sl-caption">${description}</div>
    </a>
  </li>`
)
.join('');

// Add gallery items to the list
gallery.innerHTML = galleryItemsMarkup;

// Initialize SimpleLightbox
new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'self', // Отримати підпис з елементу A-Tag
  captionType: 'data', // Отримати підпис з атрибута 'data-caption'
  captionsData: 'caption', // Використовувати значення атрибута 'data-caption' як підпис
  captionDelay: 250, // Затримка перед появою підпису (в мілісекундах)
});

