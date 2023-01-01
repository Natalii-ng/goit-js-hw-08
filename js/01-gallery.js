// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "./node_modules/simplelightbox";
// Дополнительный импорт стилей
import "./node_modules/simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(img) {
    return img
        .map(({ preview, original, description }) => {
            return `
            <li><a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
            </a></li>`;
        })
        .join('');
};

  const Lightbox = new SimpleLightbox('.gallery__item', {
        captionsData: 'alt',
        captionDelay: 250,
    });
