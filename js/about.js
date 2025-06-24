gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.about-hero',
    start: 'top top',
    end: '+=150%',
    scrub: false, //true: 스크롤 시 이벤트 발생
    pin: true,
    markers: true,
  },
});

tl.to('.about-hero__projector-beam', { opacity: 1, duration: 0.5 })
  .to('.about-hero__heading', { opacity: 1, y: 0, duration: 0.5 })
  .to('.about-logo', { opacity: 1, y: 0, duration: 0.5 })
  .to('.about-hero__subtext', { opacity: 1, y: 0, duration: 0.5 });

const posters = [
  {
    img: './asset/images/about/example_poster1.png',
    text: '90분',
  },
  {
    img: './asset/images/about/example_poster2.png',
    text: '60분',
  },
  {
    img: './asset/images/about/example_poster3.png',
    text: '30분',
  },
];

let index = 0;
const posterImg = document.querySelector('.about-intro__img-box img');
const posterText = document.querySelector('.about-intro__duration span');

function changePoster() {
  posterImg.style.opacity = 0;
  posterImg.style.transform = 'translateY(-50px)';
  posterText.style.opacity = 0;
  posterText.style.transform = 'translateY(-50px)';

  setTimeout(() => {
    index = (index + 1) % posters.length;
    posterImg.src = posters[index].img;
    posterText.textContent = posters[index].text;

    posterImg.style.opacity = 1;
    posterImg.style.transform = 'translateY(50px)';
    posterText.style.opacity = 1;
    posterText.style.transform = 'translateY(50px)';
  }, 500); // 0.5초 후에 내용 변경
}

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
