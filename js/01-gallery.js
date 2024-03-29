import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const gallery = document.querySelector('.gallery')

const galleryList = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}).join('');

gallery.innerHTML = galleryList;
gallery.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`)
  instance.show()
  document.addEventListener('keydown', onEscape)
function onEscape(event) {
 if (event.code === 'Escape') {
   instance.close()
   document.removeEventListener('keydown', onEscape)
   console.log(event)
 }
}
}