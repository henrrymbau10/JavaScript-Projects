console.log("hola");
const quiz = document.querySelector(".quiz");
const todoList = document.querySelector(".todoList");
const calculator = document.querySelector(".calculator");
const body = document.querySelector("body");

console.log();

quiz.onmouseover = () => {
  body.classList.add("quiz-bg");
};
quiz.onmouseout = () => {
  body.classList.remove("quiz-bg");
};

todoList.onmouseover = () => {
  body.classList.add("todoList-bg");
};
todoList.onmouseout = () => {
  body.classList.remove("todoList-bg");
};

calculator.onmouseover = () => {
  body.classList.add("calculator-bg");
};
calculator.onmouseout = () => {
  body.classList.remove("calculator-bg");
};
