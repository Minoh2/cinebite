const tl = gsap.timeline();

tl.to('.about-hero__projector-beam', { opacity: 1, duration: 0.5 })
  .to('.about-hero__heading', { opacity: 1, y: 0, duration: 0.5 })
  .to('.about-logo', { opacity: 1, y: 0, duration: 0.5 })
  .to('.about-hero__subtext', { opacity: 1, y: 0, duration: 0.5 });

const posters = [
  {
    img: './asset/images/about/posters/image1.png',
    time: '10분',
    desc: '오스카 수상 단편 영화',
  },
  {
    img: './asset/images/about/posters/image2.png',
    time: '20분',
    desc: '유튜브에서 볼 수 있는 영화',
  },
  {
    img: './asset/images/about/posters/image3.png',
    time: '30분',
    desc: '밥 먹으면서 보기 좋은 영화',
  },
  {
    img: './asset/images/about/posters/image4.png',
    time: '40분',
    desc: '혼자 조용히 보고 싶은 영화',
  },
  {
    img: './asset/images/about/posters/image5.png',
    time: '50분',
    desc: '숨겨진 보석 같은 영화',
  },
  {
    img: './asset/images/about/posters/image6.png',
    time: '60분',
    desc: '대사 한 줄로 기억에 남는 영화',
  },
  {
    img: './asset/images/about/posters/image7.png',
    time: '70분',
    desc: '친구랑 같이 보면 웃긴 영화',
  },
  {
    img: './asset/images/about/posters/image8.png',
    time: '80분',
    desc: '시간 가는 줄 모르게 빠져드는 영화',
  },
  {
    img: './asset/images/about/posters/image9.png',
    time: '90분',
    desc: '단단한 서사 구조의 드라마',
  },
];

let index = 0;
const posterImg = document.querySelector('.about-intro__img-box img');
const posterText = document.querySelector('.about-intro__duration span');
const posterDesc = document.querySelector('.about-intro__description');

function changePoster() {
  posterImg.style.opacity = 0;
  posterText.style.opacity = 0;
  posterDesc.style.opacity = 0;

  posterImg.style.transform = 'translateY(-50px)';
  posterText.style.transform = 'translateY(-50px)';
  posterDesc.style.transform = 'translateY(-50px)';

  setTimeout(() => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * posters.length);
    } while (randomIndex === index); // 이전 index랑 같으면 다시 뽑음

    index = randomIndex;
    const current = posters[index];

    posterImg.src = current.img;
    posterText.textContent = current.time;
    posterDesc.textContent = current.desc;

    posterImg.style.opacity = 1;
    posterText.style.opacity = 1;
    posterDesc.style.opacity = 1;

    posterImg.style.transform = 'translateY(0)';
    posterText.style.transform = 'translateY(0)';
    posterDesc.style.transform = 'translateY(0)';
  }, 500);
}

changePoster();
setInterval(changePoster, 3000);

document.addEventListener('DOMContentLoaded', () => {
  const calendarData = [
    { day: 'Wednesday', date: 11, tasks: ['프로젝트 시작'] },
    { day: 'Thursday', date: 12, tasks: ['데스크 리서치'] },
    { day: 'Friday', date: 13, tasks: [] },
    { day: 'Saturday', date: 14, tasks: ['유저 리서치 및 와이어 프레임'] },
    { day: 'Sunday', date: 15, tasks: [] },
    { day: 'Monday', date: 16, tasks: ['프로젝트 시작'] },
    { day: 'Tuesday', date: 17, tasks: ['프로젝트 시작'] },
    { day: 'Wednesday', date: 18, tasks: ['프로젝트 시작'] },
    { day: 'Thursday', date: 19, tasks: ['프로젝트 시작'] },
    { day: 'Friday', date: 20, tasks: ['프로젝트 시작'] },
    { day: 'Saturday', date: 21, tasks: ['프로젝트 시작'] },
    { day: 'Sunday', date: 22, tasks: ['프로젝트 시작'] },
    { day: 'Monday', date: 23, tasks: ['프로젝트 시작'] },
    { day: 'Tuesday', date: 24, tasks: ['프로젝트 시작'] },
    { day: 'Wednesday', date: 25, tasks: ['프로젝트 시작'] },
    { day: 'Thursday', date: 26, tasks: ['프로젝트 시작'] },
  ];

  const calendarContainer = document.querySelector('#about-calendar');

  calendarData.forEach((dayData) => {
    const dayCell = document.createElement('div');
    dayCell.classList.add('day-cell');

    const tasksHtml = dayData.tasks.map((task) => `<div class="task">${task}</div>`).join('');

    const dayNameHtml = dayData.day ? dayData.day : '';

    dayCell.innerHTML = `
            <span class="day-name">${dayNameHtml}</span>
            <div class="day-number">${dayData.date}</div>
            <div class="tasks">
                ${tasksHtml}
            </div>
        `;

    calendarContainer.appendChild(dayCell);
  });
});
