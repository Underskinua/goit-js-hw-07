
import { galleryItems } from './js/gallery-items.js';
const basicLightbox = window.basicLightbox;
const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems
  .map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
      </a>
    </li>
  `)
  .join('');

gallery.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();

  const { target } = event;

  if (target.classList.contains('gallery__image')) {
    const source = target.dataset.source;
    const description = target.alt;

    console.log('Opening modal with source:', source);
    console.log('Description:', description);

    basicLightbox.create(`
      <img src="${source}" alt="${description}">
    `).show();
  }
}