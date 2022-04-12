const topDom = document.querySelector('.top');
topDom.addEventListener('click', function() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
});
