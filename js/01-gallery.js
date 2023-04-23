import {galleryItems} from "./gallery-items.js";
// Change code below this line
let instance = "";

const list = document.querySelector(".gallery");
const listItem = galleryItems.map((item) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
         <img
         class="gallery__image"
         data-source="${item.original}"
         src="${item.preview}" 
         alt="${item.description}"
         />
      </a>
    </li>`;
  }).join("");
list.insertAdjacentHTML("beforeend", listItem);

list.addEventListener("click", openImg);

function openImg(event) {
  if (event.target.nodeName !== "IMG") {
    return;
   };
  event.preventDefault();
   
  window.addEventListener("keydown", closeImg);

  instance = basicLightbox.create(`
   <img src="${event.target.dataset.source}">
   `);

  instance.show();
};

function closeImg(event) {
  if (event.code === "Escape") {
     instance.close();

     window.removeEventListener("keydown", closeImg); 
   };
};
