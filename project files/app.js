//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    question.classList.toggle("show-text");
  });
});

// traversing the dom

// const qBtns = document.querySelectorAll(".question-btn");

// qBtns.forEach(function (btn) {
//   btn.addEventListener("click", (e) => {
//     const parentclass = e.currentTarget.parentElement.parentElement;
//     parentclass.classList.toggle("show-text");
//   });
// });
