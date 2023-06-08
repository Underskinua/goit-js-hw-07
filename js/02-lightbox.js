// 02-lightbox.js
import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

// Generate gallery items markup
const galleryItemsMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
         <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
           <div class="sl-caption" style="opacity: 0; transition-delay: 250ms; color: white;">${description}</div>
           </a>
       </li>`
  )
  .join('');

// Add gallery items to the list
gallery.innerHTML = galleryItemsMarkup;

// Initialize SimpleLightbox
new SimpleLightbox('.gallery a', {
  /* options */
});


