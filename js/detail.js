const header = document.querySelector('header');
const hero = document.querySelector('.hero');

if (hero) {
  window.addEventListener('scroll', () => {
    const heroBottom = hero.offsetTop + hero.offsetHeight;

    if (window.scrollY < heroBottom) {
      header.classList.add('blur');
    } else {
      header.classList.remove('blur');
    }
  });
} else {
  header.classList.remove('blur');
}
