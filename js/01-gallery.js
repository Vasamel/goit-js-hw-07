import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const markUp = galleryItems.map(({ preview, original, description }) => `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');
galleryEl.innerHTML = markUp;


galleryEl.addEventListener('click', onImageClick);
const instance = basicLightbox.create(`
<img
class="gallery__image"
src=""

alt=""/>
`, {
    onShow: instance => { window.addEventListener('keydown', onEscClick); },
    onClose: instance => { window.removeEventListener('keydown', onEscClick); }
});

function onImageClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') { return; }
    instance.element().querySelector('img').src = evt.target.dataset.source;
    instance.show();
}
function onEscClick(evt) {
    if (evt.key === 'Escape') {
        instance.close();
        return;
    }
}


console.log(galleryItems);
console.log(SimpleLightbox);