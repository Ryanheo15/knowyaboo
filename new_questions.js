//VARIABLES
let long_term_data;
//FUNCTIONS
let getLongtermQ = async function(){
  let response = await fetch("data/newboo.json");
  let questions = await response.json();
  return questions;
}
//SELECTORS
let shuffle = document.querySelector(".shuffle_btn");
let questions = document.querySelector(".question_section");

//EVENT LISTENERS
$(document).ready(async () => {
  let long_term = await getLongtermQ();
  long_term_data = long_term[2].data;

  //DEFAULT question
  let random_num = await Math.floor(Math.random() * long_term_data.length);

  let question = long_term_data[random_num].question;

  questions.textContent = question;
});

shuffle.addEventListener("click", async () => {
  let random_num = await Math.floor(Math.random() * long_term_data.length);

  let question = long_term_data[random_num].question;

  questions.textContent = question;

})
