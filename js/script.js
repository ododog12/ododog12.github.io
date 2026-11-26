// 기존에 정상 작동하는 화면 진입 효과. 기능 추가 시 유지한다.
document.documentElement.classList.add('has-js');
const revealSections = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealSections.forEach((section) => observer.observe(section));
} else {
  revealSections.forEach((section) => section.classList.add('is-visible'));
}

const heroRate = document.querySelector('.hero-big-number');
const heroRateValue = heroRate.firstChild;
const targetHeroRate = 4.2;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  heroRateValue.textContent = targetHeroRate.toFixed(1);
} else {
  const animationDuration = 1200;
  const animationStart = performance.now();
  heroRateValue.textContent = '0.0';

  function countHeroRate(timestamp) {
    const progress = Math.min((timestamp - animationStart) / animationDuration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    heroRateValue.textContent = (targetHeroRate * easedProgress).toFixed(1);

    if (progress < 1) {
      requestAnimationFrame(countHeroRate);
    }
  }

  requestAnimationFrame(countHeroRate);
}

const yearData = {
  a: {
    label: 'YEAR A',
    rate: '4.2',
    title: '연도 A의 실업률 변화',
    description: '연도 A를 선택한 초기 화면입니다. 학습용 수치를 기반으로 그래프와 설명이 표시됩니다.',
    image: 'images/year-a.svg',
    alt: '가상 데이터 연도 A 실업률 추이 그래프',
    chartStatus: '연도 A 그래프가 표시 중입니다.',
  },
  b: {
    label: 'YEAR B',
    rate: '3.6',
    title: '연도 B의 실업률 변화',
    description: '연도 B를 선택한 화면입니다.',
    image: 'images/year-b.svg',
    alt: '가상 데이터 연도 B 실업률 추이 그래프',
    chartStatus: '연도 B 그래프가 표시 중입니다.',
  },
};

const yearButtons = {
  a: document.querySelector('.year-button-a'),
  b: document.querySelector('.year-button-b'),
};
const yearLabel = document.querySelector('.year-label');
const yearRate = document.querySelector('.year-rate');
const metricTitle = document.querySelector('.metric-title');
const yearDescription = document.querySelector('.year-description');
const yearChart = document.querySelector('.year-chart');
const chartFooterLabel = document.querySelector('.chart-footer > span:first-child');
const chartStatus = document.querySelector('.chart-status');

function selectYear(year) {
  const data = yearData[year];

  yearButtons.a.classList.toggle('active', year === 'a');
  yearButtons.a.setAttribute('aria-pressed', String(year === 'a'));
  yearButtons.b.classList.toggle('active', year === 'b');
  yearButtons.b.setAttribute('aria-pressed', String(year === 'b'));

  yearLabel.textContent = data.label;
  yearRate.firstChild.textContent = data.rate;
  metricTitle.textContent = data.title;
  yearDescription.textContent = data.description;
  yearChart.src = data.image;
  yearChart.alt = data.alt;
  chartFooterLabel.textContent = `연도 ${year.toUpperCase()}`;
  chartStatus.textContent = data.chartStatus;
}

yearButtons.a.addEventListener('click', () => selectYear('a'));
yearButtons.b.addEventListener('click', () => selectYear('b'));
