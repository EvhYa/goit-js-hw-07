import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const createGalleryMarkup = galleryItems
   .map(
      ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
   )
   .join("");

gallery.insertAdjacentHTML("afterbegin", createGalleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
   /* options */
   captionsData: "alt",
   captionDelay: 250,
});

// console.log(galleryItems);
