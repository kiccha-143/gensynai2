// Gensyn Quiz - vanilla JS implementation

const questions = [
  {
    q: 'What is the purpose of Judge in Gensyn?',
    options: [
      'To generate training data for SAPO',
      'To provide cryptographically verifiable AI evaluation',
      'To manage Minecraft gameplay data',
      'To deploy models to GPUs automatically'
    ],
    a: 1
  },
  {
    q: 'What does SAPO do in Gensyn?',
    options: [
      'Plays Minecraft',
      'Helps AI models learn faster by sharing experiences',
      'Judges AI performance',
      'Creates graphics'
    ],
    a: 1
  },
  {
    q: 'Which Gensyn feature tracks user contributions and progress?',
    options: [
      'SAPO',
      'Verde',
      'Leaderboard',
      'BlockAssist only'
    ],
    a: 2
  },
  {
    q: 'What is Verde in Gensyn?',
    options: [
      'A Minecraft AI',
      'A system that ensures AI evaluation can be checked and trusted',
      'A type of model training',
      'A leaderboard system'
    ],
    a: 1
  },
  {
    q: 'What makes BlockAssist learn?',
    options: [
      'Watching YouTube videos',
      'Observing the human players actions in Minecraft',
      'Random guesses',
      'Pre-programmed instructions only'
    ],
    a: 1
  },
  {
    q: 'What is unique about Gensyn’s training architecture (NoLoCo)?',
    options: [
      'Trains models without all-reduce operations',
      'Runs only on GPUs',
      'Uses blockchain for training data',
      'Requires offline syncing'
    ],
    a: 0
  },
  {
    q: 'What kind of network is Gensyn creating?',
    options: [
      'A centralized supercomputer',
      'A decentralized compute coordination layer',
      'A model marketplace',
      'A token staking protocol'
    ],
    a: 1
  },
  {
    q: 'What is common between SAPO, Judge, and BlockAssist?',
    options: [
      'They are used for video editing',
      'They replace humans completely',
      'They only run on one computer',
      'They are all AI tools that support collaboration and learning'
    ],
    a: 3
  },
  {
    q: 'What type of resources can participants contribute to Gensyn?',
    options: [
      'Compute power and hardware',
      'Music and videos',
      'NFTs',
      'Advertising space'
    ],
    a: 0
  },
  {
    q: 'Why is SAPO better than isolated model training?',
    options: [
      'Models compete and slow each other down',
      'Models can learn from each other’s experiences, improving faster',
      'It needs more GPUs',
      'It only works for images'
    ],
    a: 1
  }
];

let currentIndex = 0;
let score = 0;

const quizRoot = document.getElementById('quiz');

function renderQuestion() {
  const current = questions[currentIndex];
  const total = questions.length;

  quizRoot.innerHTML = `
    <h2>Question ${currentIndex + 1} of ${total}</h2>
    <p class="question">${current.q}</p>
    <div class="options">
      ${current.options
        .map((opt, idx) => `<button class="btn" data-index="${idx}">${opt}</button>`) 
        .join('')}
    </div>
  `;

  const buttons = quizRoot.querySelectorAll('button.btn');
  buttons.forEach((btn) => btn.addEventListener('click', onAnswer));
}

function renderResult() {
  quizRoot.innerHTML = `
    <h2>Quiz Complete 🎉</h2>
    <div class="score">Your Score: ${score} / ${questions.length}</div>
    <button class="btn accent" id="restart">Restart Quiz</button>
    <div class="credits">Created by Dilip kumar · <a href="https://x.com/KICCHA143c" target="_blank" rel="noopener">@KICCHA143C</a></div>
  `;

  const restartBtn = document.getElementById('restart');
  restartBtn.addEventListener('click', () => {
    currentIndex = 0;
    score = 0;
    renderQuestion();
  });
}

function onAnswer(e) {
  const selectedIndex = Number(e.currentTarget.getAttribute('data-index'));
  const correctIndex = questions[currentIndex].a;
  const buttons = quizRoot.querySelectorAll('button.btn');

  // Disable further clicks
  buttons.forEach((b) => b.disabled = true);

  // Apply feedback classes
  buttons.forEach((b) => {
    const idx = Number(b.getAttribute('data-index'));
    if (idx === correctIndex) {
      b.classList.add('correct');
    }
    if (idx === selectedIndex && idx !== correctIndex) {
      b.classList.add('incorrect');
    }
  });

  if (selectedIndex === correctIndex) score += 1;

  // Proceed after short delay to show feedback
  setTimeout(() => {
    if (currentIndex + 1 < questions.length) {
      currentIndex += 1;
      renderQuestion();
    } else {
      renderResult();
    }
  }, 800);
}

// Initialize
renderQuestion();




