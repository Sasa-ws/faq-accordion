const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answerId = question.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);
    const isExpanded = question.getAttribute("aria-expanded") === "true";

    questions.forEach((otherQuestion) => {
      const otherAnswerId = otherQuestion.getAttribute("aria-controls");
      const otherAnswer = document.getElementById(otherAnswerId);

      otherQuestion.setAttribute("aria-expanded", "false");
      otherAnswer.hidden = true;
    });

    if (!isExpanded) {
      question.setAttribute("aria-expanded", "true");
      answer.hidden = false;
    }
  });
});
