/*
 * 12주차 게임제작반 공통 실습 시작 파일
 *
 * 구현됨: 신호 버튼 클릭 횟수 증가, 진행 표시(최대 3), 초기화,
 * 3회 도달 시 다음 단계 안내 변경 및 A/B 선택 활성화.
 *
 * Copilot Agent 실습에서 작업할 부모: .game-container
 * 클릭 대상: .click-target (.action-button과 함께 사용)
 * 변경 대상: .next-stage, .stage-message, .choice-button, .choice-result
 */

const gameContainer = document.querySelector('.game-container');
const actionButton = gameContainer.querySelector('.click-target');
const resetButton = gameContainer.querySelector('.reset-button');
const clickCountEl = gameContainer.querySelector('.click-count');
const gameStateEl = gameContainer.querySelector('.game-state');
const lastActionEl = gameContainer.querySelector('.last-action');
const progressFill = gameContainer.querySelector('.progress-fill');
const progressText = gameContainer.querySelector('.progress-text');
const gameMessage = gameContainer.querySelector('.game-message');
const nextStage = gameContainer.querySelector('.next-stage');
const choiceButtons = gameContainer.querySelectorAll('.choice-button');
const choiceAButton = gameContainer.querySelector('.choice-a');
const choiceBButton = gameContainer.querySelector('.choice-b');
const choiceResult = gameContainer.querySelector('.choice-result');
const outcomeTitle = gameContainer.querySelector('#outcome-title');
const initialOutcomeTitle = outcomeTitle.innerHTML;

let clickCount = 0;
let stageOpened = false;

function updateClickDisplay() {
  clickCountEl.textContent = String(clickCount);
  progressFill.style.width = `${Math.min(clickCount, 3) / 3 * 100}%`;
  progressText.textContent = `${Math.min(clickCount, 3)} / 3`;
  gameStateEl.textContent = clickCount > 0 ? 'ACTIVE' : 'READY';
}

actionButton.addEventListener('click', () => {
  clickCount += 1;
  updateClickDisplay();
  lastActionEl.textContent = `${clickCount}번째 신호를 보냈습니다.`;

  if (clickCount === 3 && !stageOpened) {
    gameMessage.textContent = '다음 단계가 열렸습니다';
    outcomeTitle.textContent = '조건이 충족되었습니다';
    stageOpened = true;
    nextStage.classList.add('is-open');
    choiceButtons.forEach((button) => {
      button.disabled = false;
    });
  } else if (clickCount > 3) {
    gameMessage.textContent = '이미 다음 단계가 열렸습니다';
    window.alert(clickCount === 6 ? '그만 누르세요' : '이미 다음 단계가 열렸습니다');
  }
});

choiceAButton.addEventListener('click', () => {
  window.location.href = 'choice-a.html';
});

choiceBButton.addEventListener('click', () => {
  window.location.href = 'choice-b.html';
});

resetButton.addEventListener('click', () => {
  clickCount = 0;
  stageOpened = false;
  updateClickDisplay();
  lastActionEl.textContent = '횟수가 초기화되었습니다.';
  gameMessage.textContent = '조건을 만족하면 이 영역의 안내가 변경되도록 하는 것이 Copilot Agent 실습 과제입니다.';
  outcomeTitle.innerHTML = initialOutcomeTitle;
  nextStage.classList.remove('is-open');
  choiceButtons.forEach((button) => {
    button.disabled = true;
  });
  choiceResult.textContent = '선택 기능은 아직 비활성화되어 있습니다.';
});

updateClickDisplay();
