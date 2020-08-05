//QUESTIONS database
questions_bank = [
  "question 1: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",

  "question 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",

  "question 3: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?"
]

//SELECTORS
let shuffle = document.querySelector(".shuffle_btn");
let questions = document.querySelector(".question_section");

//Event Listeners
shuffle.addEventListener("click", () => {
  let random_num = Math.floor(Math.random() *3);

  let question = questions_bank[random_num];

  questions.textContent = question;
})
