function scroll() {
  window.scrollBy({
    top: document.documentElement.clientHeight - 80,
    behavior: 'smooth',
  });
}

export default scroll;
