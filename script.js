// const homeScreen = document.getElementById('home-screen');
// const quizScreen = document.getElementById('quiz-screen');
// const resultScreen = document.getElementById('result-screen');
// const startBtn = document.getElementById('start-btn');
// const retryBtn = document.getElementById('retry-btn');
// const nextBtn = document.getElementById('next-btn');
// const questionText = document.getElementById('question-text');
// const optionsDiv = document.getElementById('options');
// const progress = document.getElementById('quiz-progress');
// const timerDisplay = document.getElementById('timer');
// const resultMessage = document.getElementById('result-message');
// const barFill = document.getElementById('bar-fill');
// const highScoreDiv = document.getElementById('high-score');

// let currentQ = 0;
// let score = 0;
// let timer;
// let timeLeft = 30;

// startBtn.onclick = () => {
//   homeScreen.classList.remove('active');
//   quizScreen.classList.add('active');
//   currentQ = parseInt(localStorage.getItem('currentQ')) || 0;
//   score = parseInt(localStorage.getItem('score')) || 0;
//   loadQuestion();
// };

// retryBtn.onclick = () => {
//   localStorage.clear();
//   location.reload();
// };

// nextBtn.onclick = () => {
//   currentQ++;
//   if (currentQ >= questions.length) {
//     showResult();
//   } else {
//     localStorage.setItem('currentQ', currentQ);
//     loadQuestion();
//   }
// };

// function loadQuestion() {
//   const q = questions[currentQ];
//   progress.innerText = `${currentQ + 1}/${questions.length}`;
//   questionText.innerText = q.question;
//   optionsDiv.innerHTML = '';
//   q.options.forEach((opt, i) => {
//     const btn = document.createElement('button');
//     btn.innerText = opt;
//     btn.onclick = () => checkAnswer(i);
//     optionsDiv.appendChild(btn);
//   });
//   timeLeft = 30;
//   updateTimer();
// }

// function checkAnswer(selected) {
//   const correct = questions[currentQ].answer;
//   const btns = optionsDiv.querySelectorAll('button');
//   btns.forEach((btn, i) => {
//     btn.disabled = true;
//     if (i === correct) btn.classList.add('correct');
//     if (i === selected && i !== correct) btn.classList.add('incorrect');
//   });

//   if (selected === correct) {
//     score++;
//     playSound('correct');
//   } else {
//     playSound('wrong');
//   }

//   localStorage.setItem('score', score);
//   clearInterval(timer);
// }

// function updateTimer() {
//   clearInterval(timer);
//   timerDisplay.style.color = "green";
//   timerDisplay.innerText = "00:" + timeLeft;
//   timer = setInterval(() => {
//     timeLeft--;
//     timerDisplay.innerText = "00:" + (timeLeft < 10 ? '0' : '') + timeLeft;
//     if (timeLeft <= 15) timerDisplay.style.color = "orange";
//     if (timeLeft <= 5) timerDisplay.style.color = "red";
//     if (timeLeft <= 0) {
//       clearInterval(timer);
//       checkAnswer(-1); // time up
//     }
//   }, 1000);
// }

// function showResult() {
//   quizScreen.classList.remove('active');
//   resultScreen.classList.add('active');
//   const percentage = Math.round((score / questions.length) * 100);
//   barFill.style.width = percentage + "%";
//   if (percentage < 50) resultMessage.innerText = "You need to work harder!";
//   else if (percentage < 80) resultMessage.innerText = "Keep learning, you have a good score!";
//   else resultMessage.innerText = "Awesome! You're doing great!";
//   highScoreDiv.innerText = `Highest Score: ${score}/${questions.length}`;
//   localStorage.setItem('highScore', score);
// }

// function playSound(type) {
//   const audio = new Audio(`assets/sounds/${type}.mp3`);
//   audio.play();
// }

// window.onload = () => {
//   homeScreen.classList.add('active');
//   const hs = localStorage.getItem('highScore');
//   if (hs) highScoreDiv.innerText = `Highest Score: ${hs}/25`;
// };

// UPDATED JAVASCRIPT CODE
// const startScreenEl = document.getElementById("start-screen");
// const quizScreenEl = document.getElementById("quiz-screen");
// const resultScreenEl = document.getElementById("result-screen");
// const questionEl = document.getElementById("question");
// const optionsEl = document.getElementById("options");
// const timerEl = document.getElementById("timer");
// const progressEl = document.getElementById("progress");
// const nextBtn = document.getElementById("next");
// const barEl = document.getElementById("bar");
// const quoteEl = document.getElementById("quote");
// const highScoreEl = document.getElementById("high-score");

// let index = 0, score = 0, timer, timeLeft;

// function startQuiz() {
//   index = 0;
//   score = 0;
//   startScreenEl.style.display = 'none';
//   quizScreenEl.style.display = 'block';
//   loadQuestion();
// }

// function loadQuestion() {
//   clearInterval(timer);
//   const q = questions[index];
//   timeLeft = q.time;
//   questionEl.textContent = q.q;
//   progressEl.textContent = `Question ${index + 1} of ${questions.length}`;
//   optionsEl.innerHTML = '';
//   nextBtn.style.display = 'none';

//   q.options.forEach((opt, i) => {
//     let li = document.createElement('li');
//     li.textContent = opt;
//     li.onclick = () => checkAnswer(i);
//     optionsEl.appendChild(li);
//   });

//   updateTimerColor();
//   timerEl.textContent = `Time left: ${timeLeft}s`;
//   timer = setInterval(() => {
//     timeLeft--;
//     updateTimerColor();
//     timerEl.textContent = `Time left: ${timeLeft}s`;
//     if (timeLeft <= 0) {
//       clearInterval(timer);
//       revealAnswer(-1);
//     }
//   }, 1000);
// }

// function updateTimerColor() {
//   if (timeLeft <= 5) timerEl.style.color = 'red';
//   else if (timeLeft <= 15) timerEl.style.color = 'orange';
//   else timerEl.style.color = 'green';
// }

// function checkAnswer(selected) {
//   clearInterval(timer);
//   revealAnswer(selected);
// }

// function revealAnswer(selected) {
//   const correct = questions[index].answer;
//   [...optionsEl.children].forEach((li, i) => {
//     li.classList.remove('correct', 'wrong');
//     if (i === correct) li.classList.add('correct');
//     if (i === selected && i !== correct) li.classList.add('wrong');
//     li.onclick = null;
//   });
//   if (selected === correct) score++;
//   nextBtn.style.display = 'inline-block';
// }

// nextBtn.onclick = () => {
//   index++;
//   if (index >= questions.length) {
//     finishQuiz();
//   } else {
//     loadQuestion();
//   }
// };

// function finishQuiz() {
//   quizScreenEl.style.display = 'none';
//   resultScreenEl.style.display = 'block';
//   const percent = Math.round((score / questions.length) * 100);
//   barEl.style.width = percent + '%';
//   barEl.textContent = percent + '%';
//   if (percent < 50) quoteEl.textContent = "You need to work hard.";
//   else if (percent < 70) quoteEl.textContent = "Keep learning, you have a good score!";
//   else if (percent < 90) quoteEl.textContent = "Great job! You're getting better.";
//   else quoteEl.textContent = "Awesome! You're doing great!";
//   const highScore = localStorage.getItem("highestScore") || 0;
//   if (score > highScore) localStorage.setItem("highestScore", score);
// }

// function retry() {
//   resultScreenEl.style.display = 'none';
//   quizScreenEl.style.display = 'block';
//   index = 0;
//   score = 0;
//   loadQuestion();
// }

// function startScreen() {
//   resultScreenEl.style.display = 'none';
//   startScreenEl.style.display = 'block';
//   highScoreEl.textContent = `Highest Score: ${localStorage.getItem("highestScore") || 0}/${questions.length}`;
// }

// function shareScore() {
//   const percent = Math.round((score / questions.length) * 100);
//   alert(`I scored ${percent}% in the quiz! Can you beat me?`);
// }

// if (highScoreEl) {
//   const highScore = localStorage.getItem("highestScore");
//   if (highScore) {
//     highScoreEl.innerText = `Highest Score: ${highScore}/25`;
//   }
// }


// NEW JAVASCRIPT CODE


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

