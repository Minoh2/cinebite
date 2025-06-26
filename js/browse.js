document.querySelectorAll('.slide-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const track = button.closest('.movie-slider').querySelector('.movie-track');
    const card = track.querySelector('.movie-card');
    const cardWidth = card.offsetWidth + 75; // 카드 간 간격 포함
    const isPrev = button.classList.contains('prev');
    const direction = isPrev ? -1 : 1;

    track.scrollBy({
      left: cardWidth * direction,
      behavior: 'smooth',
    });
  });
});
