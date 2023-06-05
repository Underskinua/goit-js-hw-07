import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = preview;
  galleryImage.alt = description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
};

const galleryMarkup = galleryItems.map(createGalleryItem);
gallery.append(...galleryMarkup);

// Initialize SimpleLightbox after adding gallery items
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  animationSpeed: 250,
  overlay: true,
  overlayOpacity: 0.9,
  captionClass: 'custom-caption',
  elementsSelector: '.gallery__item',
  docClose: false,
  onOpen: () => {
    document.querySelector('.simple-lightbox').style.display = 'flex';
    document.querySelector('.simple-lightbox').style.alignItems = 'center';
    document.querySelector('.simple-lightbox').style.justifyContent = 'center';
    document.querySelector('.simple-lightbox').style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    document.querySelector('.simple-lightbox__image').style.transform = 'none';
  },
  onClose: () => {
    document.querySelector('.simple-lightbox').style.display = 'none';
  },
  });