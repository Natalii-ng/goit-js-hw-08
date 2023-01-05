// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
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




