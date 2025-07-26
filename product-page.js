[...document.body.querySelectorAll('*')].forEach(el => {
  if (el.offsetWidth > document.documentElement.clientWidth) {
    console.log('Overflowing element:', el);
  }
});