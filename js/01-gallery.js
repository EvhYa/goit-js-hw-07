import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const createGalleryMarkup = galleryItems
   .map(
      ({ preview, original, description }) => `<li class="gallery__item"><a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
      </a></li>`
   )
   .join("");

gallery.insertAdjacentHTML("afterbegin", createGalleryMarkup);

gallery.addEventListener("click", onClick);

function onClick(evt) {
   evt.preventDefault();
   if (evt.target.classList.contains("gallery__image")) {
      const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`);
      instance.show();
      window.addEventListener("keyup", onKeyup);
      function onKeyup(evt) {
         if (evt.code === "Escape" && instance.visible()) {
            console.log(evt.code);
            instance.close();
         }
      }
   }
}

// event.key === "Escape";
// console.log(galleryItems);
// console.log(createGalleryMarkup);
