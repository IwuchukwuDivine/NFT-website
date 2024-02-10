let scrollContainer = document.querySelectorAll('.storm-collection');
let icons = document.querySelector('.icon');
let menuBtn = document.querySelector('.hamburger');
let closeBtn = document.querySelector('.close-btn');
let navBar = document.querySelector('nav');


scrollContainer.forEach((container) => {
  container.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    container.scrollLeft += evt.deltaY;
    container.style.scrollBehaviour = "smooth";
  });
});

menuBtn.addEventListener('click', () => {
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  navBar.classList.add('active');
})

closeBtn.addEventListener('click', () => {
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
  navBar.classList.remove('active');
})