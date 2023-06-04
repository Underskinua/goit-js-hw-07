import * as basicLightbox from 'basiclightbox';
import { galleryItems } from './js/gallery-items.js';

const gallery = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
    </a>
  </li>
`;

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
gallery.innerHTML = galleryMarkup;

gallery.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const source = event.target.dataset.source;
    const description = event.target.alt;

    const instance = basicLightbox.create(`
      <img src="${source}" alt="${description}">
    `);

    instance.show();
  }
}
