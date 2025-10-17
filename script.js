// Gensyn Quiz - vanilla JS implementation

const questions = [
  {
    q: 'What is Gensyn primarily building?',
    options: [
      'An AI chatbot platform',
      'A verifiable compute protocol for machine learning',
      'A centralized cloud provider',
      'An NFT marketplace'
    ],
    a: 1
  },
  {
    q: 'What does the Verde system in Gensyn do?',
    options: [
      'Encrypts AI models',
      'Verifies ML work done by untrusted nodes',
      'Schedules compute jobs on AWS',
      'Stores models on-chain'
    ],
    a: 1
  },
  {
    q: 'What problem does Gensyn aim to solve?',
    options: [
      'AI model copyright disputes',
      'Centralized compute monopolies in AI training',
      'Image generation latency',
      'Quantum computing security'
    ],
    a: 1
  },
  {
    q: 'Which of the following is NOT a core Gensyn component?',
    options: [
      'Judge',
      'NoLoCo',
      'Verde',
      'TensorVault'
    ],
    a: 3
  },
  {
    q: 'What is the function of "Judge" in Gensyn?',
    options: [
      'Evaluates AI models transparently',
      'Hosts front-end apps',
      'Generates datasets',
      'Performs network routing'
    ],
    a: 0
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
    q: 'How does Gensyn ensure trust in compute results?',
    options: [
      'By using cryptographic verification of work',
      'By trusting large providers',
      'By keeping compute private',
      'By using cloud certification'
    ],
    a: 0
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
    q: 'What is the ultimate goal of Gensyn?',
    options: [
      'To make AI training open, verifiable, and permissionless',
      'To build a closed AI platform',
      'To replace blockchain technology',
      'To centralize GPU access'
    ],
    a: 0
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
    <div class="footer">Gensyn Quiz</div>
  `;

  const buttons = quizRoot.querySelectorAll('button.btn');
  buttons.forEach((btn) => btn.addEventListener('click', onAnswer));
}

function renderResult() {
  quizRoot.innerHTML = `
    <h2>Quiz Complete 🎉</h2>
    <div class="score">Your Score: ${score} / ${questions.length}</div>
    <button class="btn accent" id="restart">Restart Quiz</button>
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
  if (selectedIndex === correctIndex) {
    score += 1;
  }
  if (currentIndex + 1 < questions.length) {
    currentIndex += 1;
    renderQuestion();
  } else {
    renderResult();
  }
}

// Initialize
renderQuestion();



