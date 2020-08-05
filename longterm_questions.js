//VARIABLES
let longterm_data;

//FUNCTIONS
async function getLongtermQ() {
    let response = await fetch("data/longterm.json");
    return await response.json();
}

async function genRand(data_length) {
    return Math.floor(Math.random() * data_length);
}

//SELECTORS
let shuffle = document.querySelector(".shuffle_btn");
let questions = document.querySelector(".question_section");
let slider = document.querySelector("#xxxsauce");

//EVENT LISTENERS
$(document).ready(async () => {
    let longterm_questions = await getLongtermQ();
    longterm_data = longterm_questions[2].data;

    //DEFAULT question
    let random_num = await genRand(longterm_data.length);
    let random_query = longterm_data[random_num];

    while (random_query.xxxsauce === "1") {
        random_num = genRand(longterm_data.length);
        random_query = longterm_data[random_num];
    }

    questions.textContent = longterm_data[random_num].question;
});

shuffle.addEventListener("click", async () => {
    let random_num = await genRand(longterm_data.length);
    let random_query = longterm_data[random_num];
    let xxxChecked = slider.checked;

    while (questions.textContent === random_query.question || Boolean(parseInt(random_query.xxxsauce)) !== xxxChecked) {
        random_num = await genRand(longterm_data.length);
        random_query = longterm_data[random_num];
    }

    questions.textContent = random_query.question;
})
