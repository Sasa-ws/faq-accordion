const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answerId = question.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);
    const icon = question.querySelector(".faq-icon");
    const isExpanded = question.getAttribute("aria-expanded") === "true";

    question.setAttribute("aria-expanded", String(!isExpanded));
    answer.hidden = isExpanded;
    icon.textContent = isExpanded ? "+" : "−";
  });
});
