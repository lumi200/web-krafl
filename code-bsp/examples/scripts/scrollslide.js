function goToSlide(index) {
  var container = document.getElementById('container');
  container.scrollTo({
    left: index * container.offsetWidth,
    behavior: 'smooth'
  });
  logScrollWidth(container);
}

function logScrollWidth(container) {
  var scrollWidth = container.scrollWidth;
  console.log('Scroll Width:', scrollWidth);
}