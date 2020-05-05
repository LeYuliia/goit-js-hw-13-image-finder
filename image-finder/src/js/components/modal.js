//basiclightbox
import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

function openModal(event) {
  const eventImg = event.target.src;

  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${eventImg}">`,
  );
  if (event.target.tagName === 'IMG') {
    instance.show();
  }
}

export default openModal;
