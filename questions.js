//QUESTIONS database
questions_bank = [
    "What is your most used curse word?",

    "What is your go-to activity on a rainy day?",

    "What is your go-to playlist vibe for a summer day?"
]

//SELECTORS
let shuffle = document.querySelector(".shuffle_btn");
let questions = document.querySelector(".question_section");

//Event Listeners
window.onload = function() {
    let random_num = Math.floor(Math.random() * 3);
    questions.textContent = questions_bank[random_num];
}

shuffle.addEventListener("click", () => {
    let random_num = Math.floor(Math.random() * 3);

    // Prevent duplicate questions
    while (questions.textContent === questions_bank[random_num])
    {
        random_num = Math.floor(Math.random() * 3);
    }

    questions.textContent = questions_bank[random_num];
})
