// ----------------------------- 🎬 [1] 필터 섹션: 러닝타임 슬라이더 기능 -----------------------------

const slider = document.getElementById('runtimeSlider');
const label = document.querySelector('.filter-time-label');
const cardList = document.querySelector('.movie-card-list');

// 영화 데이터 (필요시 교체 가능)
const movieData = {
  '0-10': [
    'asset/image/home_image/filter1.png',
    'asset/image/home_image/filter2.png',
    'asset/image/home_image/filter3.png',
    'asset/image/home_image/filter4.png',
    'asset/image/home_image/filter5.png',
  ],
  '11-30': [
    'asset/image/home_image/filter6.png',
    'asset/image/home_image/filter7.png',
    'asset/image/home_image/filter8.png',
    'asset/image/home_image/filter9.png',
    'asset/image/home_image/filter10.png',
  ],
  '31-60': [
    'asset/image/home_image/filter11.png',
    'asset/image/home_image/filter12.png',
    'asset/image/home_image/filter13.png',
    'asset/image/home_image/filter14.png',
    'asset/image/home_image/filter15.png',
  ],
  '61-100': [
    'asset/image/home_image/filter16.png',
    'asset/image/home_image/filter17.png',
    'asset/image/home_image/filter18.png',
    'asset/image/home_image/filter19.png',
    'asset/image/home_image/filter20.png',
  ],
};

// 슬라이더 값에 따라 키 반환
function getRangeKey(value) {
  if (value <= 10) return '0-10';
  if (value <= 30) return '11-30';
  if (value <= 60) return '31-60';
  return '61-100';
}

// 카드 업데이트 함수
function updateCards(value) {
  const rangeKey = getRangeKey(value);
  const movies = movieData[rangeKey];

  // 레이블 텍스트 정확히 매칭
  label.textContent = {
    '0-10': '0~10분 이내',
    '11-30': '11~30분 이내',
    '31-60': '31~60분 이내',
    '61-100': '61~100분 이내',
  }[rangeKey];

  // 기존 카드 제거 후 새 카드 추가
  cardList.innerHTML = '';
  movies.forEach((src) => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `<img src="${src}" alt="영화">`;
    cardList.appendChild(card);
  });
}

// 초기 렌더링 + 슬라이더 이벤트 연결
updateCards(slider.value);
slider.addEventListener('input', () => {
  updateCards(slider.value);
});

// ----------------------------- ✅ [1] 필터 섹션 종료 -----------------------------

// ----------------------------- 🎞 [2] TOP 8 섹션: 썸네일 클릭시 대표영화 변경 -----------------------------

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
    poster: 'asset/image/home_image/best8_1.png',
    platforms: ['netflix', 'tving'],
  },
  {
    title: '영화2',
    runtime: '89분',
    meta: '2022 / 코미디 / 한국',
    rating: '4.0',
    stars: 4.0,
    description: '웃음과 감동이 공존하는 따뜻한 가족 이야기.',
    poster: 'asset/image/home_image/best8_2.png',
    platforms: ['netflix'],
  },
  {
    title: '영화3',
    runtime: '97분',
    meta: '2021 / 스릴러 / 미국',
    rating: '3.5',
    stars: 3.5,
    description: '서스펜스와 반전이 가득한 한밤의 추격전.',
    poster: 'asset/image/home_image/best8_3.png',
    platforms: ['tving'],
  },
  {
    title: '영화4',
    runtime: '105분',
    meta: '2020 / SF / 일본',
    rating: '4.2',
    stars: 4.0,
    description: '꿈과 희망을 찾아 떠나는 소년의 성장 드라마.',
    poster: 'asset/image/home_image/best8_4.png',
    platforms: ['watcha'],
  },
  {
    title: '영화5',
    runtime: '81분',
    meta: '2019 / 다큐멘터리 / 영국',
    rating: '4.7',
    stars: 4.5,
    description: '자연과 인간의 경계를 그린 아름다운 시선.',
    poster: 'asset/image/home_image/best8_5.png',
    platforms: ['tving'],
  },
  {
    title: '영화6',
    runtime: '100분',
    meta: '2017 / 스릴러 / 한국',
    rating: '3.8',
    stars: 3.5,
    description: '의문의 전화 한 통이 바꿔놓은 평범한 하루.',
    poster: 'asset/image/home_image/best8_6.png',
    platforms: ['wavve'],
  },
  {
    title: '영화7',
    runtime: '93분',
    meta: '2016 / 로맨스 / 프랑스',
    rating: '4.0',
    stars: 4.0,
    description: '우연히 마주친 두 사람의 감정 선을 따라가는 이야기.',
    poster: 'asset/image/home_image/best8_7.png',
    platforms: ['netflix'],
  },
  {
    title: '영화8',
    runtime: '110분',
    meta: '2015 / 액션 / 미국',
    rating: '3.2',
    stars: 3.0,
    description: '치열한 생존을 그린 범죄 액션 영화.',
    poster: 'asset/image/home_image/best8_8.png',
    platforms: ['tving', 'watcha'],
  },
];

const thumbnails = document.querySelectorAll('.thumb');

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    const movie = movies[index];

    // 대표 포스터, 텍스트 정보 교체
    document.querySelector('.main-poster').src = movie.poster;
    document.querySelector('.main-title').textContent = movie.title;
    document.querySelector('.main-runtime').textContent = movie.runtime;
    document.querySelector('.main-meta').textContent = movie.meta;
    document.querySelector('.rating-score').textContent = movie.rating;
    document.querySelector('.main-description').textContent = movie.description;

    // 별점 이미지 업데이트
    const ratingContainer = document.querySelector('.main-rating');
    ratingContainer.querySelectorAll('.star-icon').forEach((el) => el.remove());

    const fullStars = Math.floor(movie.stars);
    const hasHalfStar = movie.stars % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      const img = document.createElement('img');
      img.src = 'asset/image/home_image/star.png';
      img.alt = '별';
      img.className = 'star-icon';
      ratingContainer.insertBefore(
        img,
        document.querySelector('.rating-score')
      );
    }
    if (hasHalfStar) {
      const img = document.createElement('img');
      img.src = 'asset/image/home_image/halfstar.png';
      img.alt = '별';
      img.className = 'star-icon';
      ratingContainer.insertBefore(
        img,
        document.querySelector('.rating-score')
      );
    }

    // 플랫폼 아이콘 갱신
    const platformContainer = document.querySelector('.platform-icons');
    platformContainer.innerHTML = '';
    movie.platforms.forEach((platform) => {
      const img = document.createElement('img');
      img.src = `asset/image/home_image/logo_${platform}.png`;
      img.alt = platform;
      platformContainer.appendChild(img);
    });

    // 썸네일 하이라이트
    thumbnails.forEach((t) => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});

// ----------------------------- ✅ [2] TOP 8 섹션 종료 -----------------------------
