const slider = document.getElementById('runtimeSlider');
const label = document.querySelector('.filter-time-label');
const cardList = document.querySelector('.movie-card-list');

// 예시 영화 카드 데이터 (슬라이더 값별로 그룹핑)
const movieData = {
  '0-30': [
    'asset/images/home_image/filter1.png',
    'asset/images/home_image/filter2.png',
    'asset/images/home_image/filter3.png',
    'asset/images/home_image/filter4.png',
    'asset/images/home_image/filter5.png',
  ],
  '31-60': [
    'asset/images/home_image/filter6.png',
    'asset/images/home_image/filter7.png',
    'asset/images/home_image/filter8.png',
    'asset/images/home_image/filter9.png',
    'asset/images/home_image/filter10.png',
  ],
  '61-90': [
    'asset/images/home_image/filter11.png',
    'asset/images/home_image/filter12.png',
    'asset/images/home_image/filter13.png',
    'asset/images/home_image/filter14.png',
    'asset/images/home_image/filter15.png',
  ],
  '91-100': [
    'asset/images/home_image/filter16.png',
    'asset/images/home_image/filter17.png',
    'asset/images/home_image/filter18.png',
    'asset/images/home_image/filter19.png',
    'asset/images/home_image/filter20.png',
  ],
};

// 슬라이더 값 기준으로 키 반환
function getRangeKey(value) {
  if (value <= 30) return '0-30';
  if (value <= 60) return '31-60';
  if (value <= 90) return '61-90';
  return '91-100';
}

// 카드 업데이트 함수
function updateCards(value) {
  const rangeKey = getRangeKey(value);
  const movies = movieData[rangeKey];

  // 레이블 업데이트
  label.textContent = {
    '0-30': '0~30분 이내',
    '31-60': '31~60분 이내',
    '61-90': '61~90분 이내',
    '91-100': '91~100분 이내',
  }[rangeKey];

  // 카드 리스트 비우고 다시 채움
  cardList.innerHTML = '';
  movies.forEach((src) => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `<img src="${src}" alt="영화">`;
    cardList.appendChild(card);
  });
}

// 초기 렌더링
updateCards(slider.value);

// 슬라이더 이벤트 연결
slider.addEventListener('input', () => {
  updateCards(slider.value);
});

const movies = [
  {
    title: '한강에게',
    runtime: '92분',
    meta: '2018 / 로맨스 드라마 / 한국',
    rating: '4.5',
    stars: 4.5,
    description: `첫 시집을 준비하는 시인 ‘진아’. 오랜 연인 ‘길우’의 뜻밖의 사고 후 매일 비슷한 일상을 보내고 있다.
대학교에서 시 수업을 하고, 친구를 만나며 괜찮은 것 같지만 추억과 일상을 써지지 않는 시를 붙잡고 있다.
“괜찮냐고 묻지 말아 줘…” “자꾸 괜찮냐고 물어보니까. 안 괜찮은데 괜찮다고 말 해야되잖아”`,
    poster: 'asset/images/home_image/best8_1.png',
    platforms: ['netflix', 'tving'],
  },
  {
    title: '영화2',
    runtime: '89분',
    meta: '2022 / 코미디 / 한국',
    rating: '4.0',
    stars: 4.0,
    description: '웃음과 감동이 공존하는 따뜻한 가족 이야기.',
    poster: 'asset/images/home_image/best8_2.png',
    platforms: ['netflix'],
  },
  {
    title: '영화3',
    runtime: '97분',
    meta: '2021 / 스릴러 / 미국',
    rating: '3.5',
    stars: 3.5,
    description: '서스펜스와 반전이 가득한 한밤의 추격전.',
    poster: 'asset/images/home_image/best8_3.png',
    platforms: ['tving'],
  },
  {
    title: '영화3',
    runtime: '97분',
    meta: '2021 / 스릴러 / 미국',
    rating: '3.5',
    stars: 3.5,
    description: '서스펜스와 반전이 가득한 한밤의 추격전.',
    poster: 'asset/images/home_image/best8_3.png',
    platforms: ['tving'],
  },
  {
    title: '영화3',
    runtime: '97분',
    meta: '2021 / 스릴러 / 미국',
    rating: '3.5',
    stars: 3.5,
    description: '서스펜스와 반전이 가득한 한밤의 추격전.',
    poster: 'asset/images/home_image/best8_3.png',
    platforms: ['tving'],
  },
  {
    title: '영화3',
    runtime: '97분',
    meta: '2021 / 스릴러 / 미국',
    rating: '3.5',
    stars: 3.5,
    description: '서스펜스와 반전이 가득한 한밤의 추격전.',
    poster: 'asset/images/home_image/best8_3.png',
    platforms: ['tving'],
  },
  {
    title: '영화3',
    runtime: '97분',
    meta: '2021 / 스릴러 / 미국',
    rating: '3.5',
    stars: 3.5,
    description: '서스펜스와 반전이 가득한 한밤의 추격전.',
    poster: 'asset/images/home_image/best8_3.png',
    platforms: ['tving'],
  },
  {
    title: '영화3',
    runtime: '97분',
    meta: '2021 / 스릴러 / 미국',
    rating: '3.5',
    stars: 3.5,
    description: '서스펜스와 반전이 가득한 한밤의 추격전.',
    poster: 'asset/images/home_image/best8_3.png',
    platforms: ['tving'],
  },
  // ... 영화 8개 전부 추가 가능
];

const thumbnails = document.querySelectorAll('.thumb');

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    // 선택된 영화 데이터
    const movie = movies[index];

    // 대표 이미지 교체
    document.querySelector('.main-poster').src = movie.poster;

    // 텍스트 정보 교체
    document.querySelector('.main-title').textContent = movie.title;
    document.querySelector('.main-runtime').textContent = movie.runtime;
    document.querySelector('.main-meta').textContent = movie.meta;
    document.querySelector('.rating-score').textContent = movie.rating;
    document.querySelector('.main-description').textContent = movie.description;

    // 별 이미지 교체
    const ratingContainer = document.querySelector('.main-rating');
    // 별점 span 제외하고 별 이미지들 먼저 제거
    ratingContainer.querySelectorAll('.star-icon').forEach((el) => el.remove());

    const fullStars = Math.floor(movie.stars);
    const hasHalfStar = movie.stars % 1 >= 0.5;

    // 별 이미지 삽입
    for (let i = 0; i < fullStars; i++) {
      const img = document.createElement('img');
      img.src = 'asset/images/home_image/star.png';
      img.alt = '별';
      img.className = 'star-icon';
      ratingContainer.insertBefore(img, document.querySelector('.rating-score'));
    }
    if (hasHalfStar) {
      const img = document.createElement('img');
      img.src = 'asset/images/home_image/halfstar.png';
      img.alt = '별';
      img.className = 'star-icon';
      ratingContainer.insertBefore(img, document.querySelector('.rating-score'));
    }

    // 플랫폼 아이콘 교체
    const platformContainer = document.querySelector('.platform-icons');
    platformContainer.innerHTML = '';
    movie.platforms.forEach((platform) => {
      const img = document.createElement('img');
      img.src = `asset/images/home_image/logo_${platform}.png`;
      img.alt = platform;
      platformContainer.appendChild(img);
    });

    // 썸네일 하이라이트 처리
    thumbnails.forEach((t) => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});
