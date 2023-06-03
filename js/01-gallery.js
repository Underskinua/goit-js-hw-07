import { galleryItems } from './js/gallery-items.js';
// Change code below this line

console.log(galleryItems);

// const gallery = document.querySelector('.gallery');

// gallery.addEventListener('click', openModal);

// function openModal(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }

//   const source = event.target.dataset.source;

//   const instance = basicLightbox.create(`
//     <img src="${source}" alt="Image">
//   `);

//   instance.show();
// }
const galleryList = document.querySelector('.gallery');

const createGalleryItem = (item) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = item.original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.dataset.source = item.original;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
};

const galleryMarkup = galleryItems.map(createGalleryItem);
galleryList.append(...galleryMarkup);