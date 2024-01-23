function handleScroll() {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  const body = document.body;
  if (scrollTop > 20) {
      body.classList.add("scrolled");
  } else {
      body.classList.remove("scrolled");
  }
}

// Attach the scroll event handler
window.onscroll = handleScroll;