import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery');

const markUp = galleryItems
    .map(({ preview, original, description }) =>
        `
<li>
 <a class="gallery__item" href="${original}">
  <img class="galley__image" src="${preview}" alt="${description}" />
 </a>
</li> 
`)
.join('');

galleryEl.innerHTML = markUp;
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});


console.log(galleryItems);
