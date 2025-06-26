const slider = document.getElementById('runtimeSlider');
const sliderValue = document.getElementById('slider-value');
const movieContainer = document.querySelector('section.section1');

let allMovies = [];

function displayMovies(movies) {
  movieContainer.innerHTML = '';
  if (movies.length === 0) {
    movieContainer.innerHTML = '<p class="message">슬라이더를 움직여 원하는 시간대의 영화를 찾아보세요!</p>';
    return;
  }

  movies.forEach((movie) => {
    const formattedRuntime = String(movie.runningtime).padStart(2, '0');
    const movieCardHTML = `
      <div class="box">
          <a href="#">
              <div class="img-box">
                  <img class="image" src="${movie.img}" alt="${movie.title}">
                  <div class="img-txt">
                      <p>${movie.title}</p>
                      <div class="sub-txt">
                          <div class="rating">
                              <img src="./asset/images/r-time/star.png" alt="별점">
                              <span>${movie.rating}</span>
                          </div>
                          <div class="span">
                              <span>|</span>
                              <span>${formattedRuntime}분</span>
                          </div>
                      </div>
                  </div>
              </div>
          </a>
      </div>
    `;
    movieContainer.innerHTML += movieCardHTML;
  });
}

/**
 * 슬라이더 값에 따라 영화 목록을 필터링하고 화면을 업데이트하는 함수
 */
function updateMovieList() {
  const maxRuntime = parseInt(slider.value, 10);
  sliderValue.textContent = maxRuntime;

  const filteredMovies = allMovies.filter((movie) => movie.runningtime <= maxRuntime).sort((a, b) => b.runningtime - a.runningtime);

  displayMovies(filteredMovies);
}

/**
 * [핵심] JSON 파일을 불러와서 전체 앱을 초기화하는 async 함수
 */
async function initializeApp() {
  try {
    const response = await fetch('./data/r-time.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    allMovies = await response.json();

    slider.addEventListener('input', updateMovieList);

    updateMovieList();
  } catch (error) {
    console.error('Could not load movie data:', error);
    movieContainer.innerHTML = '<p style="text-align: center; width: 100%;">영화를 불러오는 데 실패했습니다. 파일을 확인해주세요.</p>';
  }
}

initializeApp();
