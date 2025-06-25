// 🎬 [1] 필터 섹션: 슬라이더 값에 따라 영화 카드 변경

const slider = document.getElementById('runtimeSlider');
const label = document.querySelector('.filter-time-label');
const cardList = document.querySelector('.movie-card-list');

// 시간대별 영화 이미지 데이터
const movieData = {
  '0-10': [
    'asset/images/home_image/time_img/time10-1.png',
    'asset/images/home_image/time_img/time10-2.png',
    'asset/images/home_image/time_img/time10-3.png',
    'asset/images/home_image/time_img/time10-4.png',
    'asset/images/home_image/time_img/time10-5.png',
  ],
  '11-30': [
    'asset/images/home_image/time_img/time10-30-1.png',
    'asset/images/home_image/time_img/time10-30-2.png',
    'asset/images/home_image/time_img/time10-30-3.png',
    'asset/images/home_image/time_img/time10-30-4.png',
    'asset/images/home_image/time_img/time10-30-5.png',
  ],
  '31-60': [
    'asset/images/home_image/time_img/time31-60-1.png',
    'asset/images/home_image/time_img/time31-60-2.png',
    'asset/images/home_image/time_img/time31-60-3.png',
    'asset/images/home_image/time_img/time31-60-4.png',
    'asset/images/home_image/time_img/time31-60-5.png',
  ],
  '61-100': [
    'asset/images/home_image/time_img/time61-100-1.png',
    'asset/images/home_image/time_img/time61-100-2.png',
    'asset/images/home_image/time_img/time61-100-3.png',
    'asset/images/home_image/time_img/time61-100-4.png',
    'asset/images/home_image/time_img/time61-100-5.png',
  ],
};

// 슬라이더 값 → 키 추출 함수
function getTimeRangeKey(value) {
  if (value <= 10) return '0-10';
  if (value <= 30) return '11-30';
  if (value <= 60) return '31-60';
  return '61-100';
}

// 영화 카드 업데이트 함수
function updateMovieCards(value) {
  const rangeKey = getTimeRangeKey(value);
  const posters = movieData[rangeKey];

  // 레이블 텍스트 변경
  label.textContent = {
    '0-10': '0~10분 이내',
    '11-30': '11~30분 이내',
    '31-60': '31~60분 이내',
    '61-100': '61~100분 이내',
  }[rangeKey];

  // 카드 영역 초기화
  cardList.innerHTML = '';
  posters.forEach((src) => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `<img src="${src}" alt="영화 포스터">`;
    cardList.appendChild(card);
  });
}

// 초기 렌더링
updateMovieCards(slider.value);

// 슬라이더 움직일 때마다 갱신
slider.addEventListener('input', () => {
  updateMovieCards(slider.value);
});

// 필터섹션 끝

// top8 섹션시작

const movies = [
  {
    title: '한강에게',
    runtime: '92분',
    meta: '2018 / 로맨스 드라마 / 한국',
    rating: 4.5,
    description: `첫 시집을 준비하는 시인 ‘진아’. 오랜 연인 ‘길우’의 뜻밖의 사고 후 매일 비슷한 일상을 보내고 있다. 괜찮은 것 같지만 추억과 일상을 써지지 않는 시를 붙잡고 있다.
“괜찮냐고 묻지 말아 줘…” “자꾸 괜찮냐고 물어보니까. 안 괜찮은데 괜찮다고 말 해야되잖아”`,
    poster: 'asset/images/home_image/best8_1.png',
  },
  {
    title: '굴뚝마을의 푸펠',
    runtime: '100분',
    meta: '2020 / 애니메이션 / 일본',
    rating: 4.0,
    description: `새까만 연기로 뒤덮인 굴뚝마을에서 하늘을 올려다보지 말 것 이라는 규칙 아래 살아온 소년 루비치. 어느 날, 쓰레기로 만들어진 인형 같은 존재 푸펠과 친구가 되어 함께 진실을 찾기 위한 모험을 떠납니다.`,
    poster: 'asset/images/home_image/best8_2.png',
  },
  {
    title: '500일의 썸머',
    runtime: '95분',
    meta: '2009 / 로맨스 / 미국',
    rating: 5,
    description: `음침한 그리팅 카드 작가 톰은 유쾌함과 감정의 롤러코스터를 선사하는 썸머와의 500일간의 관계를 회상하며 진실한 사랑을 찾기 시작한다.`,
    poster: 'asset/images/home_image/best8_3.png',
  },
  {
    title: '팜스프링스',
    runtime: '90분',
    meta: '2020 / 로맨틱코미디 / 미국',
    rating: 3.5,
    description: `결혼식 하객으로 참석한 나일스와 사라는 뜻하지 않게 같은 하루를 끝없이 반복하게 된다. 시간 루프에 갇힌 이 둘은 현실을 벗어나기 위해 협력하며 점차 서로에게 끌리게 된다.`,
    poster: 'asset/images/home_image/best8_4.png',
  },
  {
    title: '쁘디마망',
    runtime: '72분',
    meta: '2021 / 판타지 / 프랑스',
    rating: 4.0,
    description: `8살 소녀 넬리는 외할머니가 세상을 떠난 후, 엄마의 어린 시절 집을 정리하러 떠난다. 숲속에서 동갑내기 친구를 만나며 시작되는 이 신비로운 우정은 엄마와 딸 사이의 따뜻하고도 섬세한 시간을 그린다.`,
    poster: 'asset/images/home_image/best8_5.png',
  },
  {
    title: '내가 사랑했던 모든 남자들에게',
    runtime: '99분',
    meta: '2021 / 로맨스 / 미국',
    rating: 3.5,
    description: `평범한 고등학생 라라는 사랑 고백 편지를 몰래 써두지만, 어느 날 그 편지들이 전부 상대에게 전달되면서 그녀의 삶이 뒤바뀐다. 가짜 연애에서 진짜 사랑으로 번져가는 감정의 변화를 담은 풋풋한 로맨스`,
    poster: 'asset/images/home_image/best8_6.png',
  },
  {
    title: '나의 문어 선생님',
    runtime: '97분',
    meta: '2020 / 다큐멘터리 / 남아프리카',
    rating: 4.0,
    description: `남아프리카 바다 숲 속에서 한 다이버가 문어와 교감하며 1년간 우정을 쌓아가는 과정을 그린 감동 실화 다큐멘터리. 자연과 인간의 연결, 생명의 경이로움을 섬세하게 담아낸 작품`,
    poster: 'asset/images/home_image/best8_7.png',
  },
  {
    title: '혼자 사는 사람들',
    runtime: '91분',
    meta: '2021 / 드라마 / 한국',
    rating: 3.5,
    description: `집에서도 회사에서도 혼자가 편한 진아. 하지만 회사의 강제 OT, 옆집 남자의 갑작스러운 죽음, 신입사원 ‘수진’과의 엮임으로 인해 그녀의 철저히 혼자였던 삶에 균열이 생기기 시작한다. ‘혼자’의 삶은 정말 자유롭기만 한 걸까?`,
    poster: 'asset/images/home_image/best8_8.png',
  },
];

// DOM 요소
const thumbnails = document.querySelectorAll('.thumb');
const mainPoster = document.querySelector('.main-poster');
const mainTitle = document.querySelector('.main-title');
const mainRuntime = document.querySelector('.main-runtime');
const mainMeta = document.querySelector('.main-meta');
const mainDescription = document.querySelector('.main-description');
const mainRating = document.querySelector('.main-rating');
const ratingScore = document.querySelector('.rating-score');

// 클릭 이벤트 연결
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    const movie = movies[index];

    // 대표 이미지 및 텍스트 업데이트
    mainPoster.src = movie.poster;
    mainTitle.textContent = movie.title;
    mainRuntime.textContent = movie.runtime;
    mainMeta.textContent = movie.meta;
    mainDescription.textContent = movie.description;
    ratingScore.textContent = movie.rating;

    // 별 아이콘 초기화
    mainRating.querySelectorAll('.star-icon').forEach((el) => el.remove());

    // 별점 이미지 다시 그리기
    const fullStars = Math.floor(movie.rating);
    const hasHalf = movie.rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      const star = document.createElement('img');
      star.src = 'asset/images/home_image/star.png';
      star.alt = '별';
      star.className = 'star-icon';
      mainRating.insertBefore(star, ratingScore);
    }

    if (hasHalf) {
      const halfStar = document.createElement('img');
      halfStar.src = 'asset/images/home_image/halfstar.png';
      halfStar.alt = '반 별';
      halfStar.className = 'star-icon';
      mainRating.insertBefore(halfStar, ratingScore);
    }

    // 썸네일 active 효과
    thumbnails.forEach((t) => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});
