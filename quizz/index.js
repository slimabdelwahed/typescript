const quizData = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "berlin"],
      answer: 2
    },
    {
      question: "Who wrote Romeo and Juliet?",
      options: ["Shakespeare", "Dickens", "Twain", "Bronte"],
      answer: 1
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      answer: 0
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsContainer = document.getElementById('options-container');
  const nextButton = document.getElementById('next-btn');
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsContainer.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.innerText = option;
      button.classList.add('option');
      button.setAttribute('onclick', `checkAnswer(${index})`);
      optionsContainer.appendChild(button);
    });
  }
  
  function checkAnswer(answerIndex) {
    const currentQuizData = quizData[currentQuestion];
    if (answerIndex === currentQuizData.answer) {
      score++;
    }
    document.querySelectorAll('.option').forEach(button => {
      button.disabled = true;
    });
    nextButton.style.display = 'block';
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
      nextButton.style.display = 'none';
      document.querySelectorAll('.option').forEach(button => {
        button.disabled = false;
      });
    } else {
      alert(`Quiz completed!\nYour score: ${score}/${quizData.length}`);
    }
  }
  
  loadQuestion();