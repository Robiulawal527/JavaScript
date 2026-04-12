const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', function () {
    // To close other open questions
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    
    question.classList.toggle('show-text');
  });
});
