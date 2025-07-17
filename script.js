const home = document.getElementById('home-screen'),
      quiz = document.getElementById('quiz-screen'),
      result = document.getElementById('result-screen'),
      startBtn = document.getElementById('start-btn'),
      retryBtn = document.getElementById('retry-btn'),
      nextBtn = document.getElementById('next-btn'),
      progressEl = document.getElementById('quiz-progress'),
      questionEl = document.getElementById('question-text'),
      optionsEl = document.getElementById('options'),
      timerEl = document.getElementById('timer'),
      barFill = document.getElementById('bar-fill'),
      resultMsg = document.getElementById('result-message'),
      soundToggle = document.getElementById('sound-toggle'),
      highScoreDiv = document.getElementById('high-score'),
      shareBtn = document.getElementById('share-btn');

let currentQ = 0, score = 0, timeLeft = 30, timer;

const correctSound = new Audio('assets/sounds/correct.mp3');
const wrongSound = new Audio('assets/sounds/wrong.mp3');

let soundOn = true; 
let bgMusic = new Audio('assets/sounds/background.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.075;


startBtn.onclick = () => {
  home.classList.remove('active');
  quiz.classList.add('active');
  loadSavedState();
  loadQuestion();

  soundOn = true;
  soundToggle.src = 'assets/icons/sound-on.svg';
  bgMusic.play().catch(() => {});
};

retryBtn.onclick = () => {
  localStorage.removeItem('currentQ');
  localStorage.removeItem('score');
  location.reload();
};

nextBtn.onclick = () => {
  currentQ++;
  saveState();
  if (currentQ >= questions.length) showResult();
  else loadQuestion();
};

shareBtn.onclick = () => {
  const pct = Math.round((score / questions.length) * 100);
  const text = `🎉 I scored ${pct}% in the JavaScript Quiz! Can you beat me? 🧠🔥`;

  if (navigator.share) {
    navigator.share({
      title: 'Quiz Score',
      text: text,
      url: window.location.href
    }).catch(err => console.log('Share failed:', err));
  } else {
    alert("Sharing not supported on this browser. You can manually copy and paste your score.");
  }
};

soundToggle.onclick = () => {
  soundOn = !soundOn;

  soundToggle.src = soundOn ? 'assets/icons/sound-on.svg' : 'assets/icons/sound-off.svg';

  if (soundOn) {
    bgMusic.play().catch(() => {});
  } else {
    bgMusic.pause();
  }
};

function loadQuestion() {
  clearInterval(timer);
  const q = questions[currentQ];
  progressEl.innerText = `${currentQ+1}/${questions.length}`;
  questionEl.innerText = q.question;
  optionsEl.innerHTML = '';
  
  q.options.forEach((o, i) => {
    const btn = document.createElement('button');
    btn.innerText = o;
    btn.onclick = () => checkAnswer(i);
    optionsEl.appendChild(btn);
  });
  timeLeft = 30;
  updateTimer();
}


function updateTimer() {
  updateTimerStyle();
  timerEl.innerText = `00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}`;

  timer = setInterval(() => {
    timeLeft--;
    timerEl.innerText = `00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}`;
    updateTimerStyle();

    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswer(-1, true); // treat as no answer

      setTimeout(() => {
        currentQ++;
        if (currentQ < questions.length) {
          loadQuestion();
        } else {
          showResult();
        }
      }, 1000); // delay to show feedback before next question
    }
  }, 1000);
}

function updateTimerStyle() {
  if (timeLeft <= 5) {
    document.body.style.backgroundColor =' rgba(219, 173, 173, 1)';
    timerEl.style.backgroundColor = 'rgba(252, 62, 62, 1)';                 
  } else if (timeLeft <= 15) {
    document.body.style.backgroundColor ='rgba(212, 214, 159, 0.55)';
    timerEl.style.backgroundColor ='rgba(203, 143, 3, 1)';                 
  } else {
    document.body.style.backgroundColor = 'rgba(204, 226, 194, 1)'; 
    timerEl.style.backgroundColor = 'green';               
  }
}

function checkAnswer(sel, fromTimeout = false) {
  clearInterval(timer);
  const correct = questions[currentQ].answer;
  const btns = optionsEl.querySelectorAll('button');

  btns.forEach((b, i) => {
    b.disabled = true;
    if (!fromTimeout) {
      if (i === correct) b.classList.add('correct');
      if (i === sel && sel !== correct) b.classList.add('incorrect');
    }
  });
 if (!fromTimeout) {
    if (sel === correct) {
      score++;
      if (soundOn) playSound('correct');
    } else if (soundOn) {
      playSound('wrong');
    }
  }

  if (fromTimeout) {
  const msg = document.getElementById('timeout-message');
  msg.classList.remove('hidden');

  setTimeout(() => {
    msg.classList.add('hidden');
    currentQ++;
    if (currentQ < questions.length) loadQuestion();
    else showResult();
  }, 1000);

  return;
}
  saveState();
}

function showResult() {
  quiz.classList.remove('active');
  result.classList.add('active');

  const pct = Math.round((score/questions.length)*100);
  barFill.style.width = '0%'; // reset before animating

  setTimeout(() => {
    barFill.style.width = pct + '%';
  }, 100);

  resultMsg.innerText = pct < 50 ? 'Need to work harder!' : 
                        pct < 80 ? 'Keep learning, good job!' : 
                        "Awesome! You're doing great!";

   document.querySelector('.correct-qsns').innerText = `${score}/${questions.length}`;

   localStorage.setItem('hasCompleted', 'true');
}

function playSound(type) {
  if (type === 'correct') {
    correctSound.currentTime = 0;
    correctSound.play();
  } else if (type === 'wrong') {
    wrongSound.currentTime = 0;
    wrongSound.play();
  }
}

function saveState() {
  localStorage.setItem('currentQ', currentQ);
  localStorage.setItem('score', score);

  const prevHigh = parseInt(localStorage.getItem('highScore')) || 0;
  if (score > prevHigh) {
    localStorage.setItem('highScore', score);
  }
}

function loadSavedState() {
  const savedQ = parseInt(localStorage.getItem('currentQ'));
  const savedScore = parseInt(localStorage.getItem('score'));

  // Check for valid values
  if (!isNaN(savedQ) && savedQ < questions.length)  currentQ = savedQ;
   else  currentQ = 0;
  
  if (!isNaN(savedScore))  score = savedScore;
   else score = 0;

  // highScoreDiv.innerText = hs ? `Highest Score: ${hs}/${questions.length}` : '';
}
function showHighScoreOnHome() {
  const hs = localStorage.getItem('highScore');
  if (hs !== null && !isNaN(parseInt(hs))) {
    highScoreDiv.innerText = `🎯 High Score: ${hs}/${questions.length}`;
    highScoreDiv.style.display = 'block';
  } else {
    highScoreDiv.style.display = 'none';
  }
}

window.onload = () => {
  home.classList.add('active');
  showHighScoreOnHome(); 
};

