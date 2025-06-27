const notif = document.querySelector('.notification-msg');
const icon = document.querySelector('.notification-btn');

icon.addEventListener('click', (e) => {
  notif.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!notif.contains(e.target) && !icon.contains(e.target)) {
    notif.classList.remove('active');
  }
});
