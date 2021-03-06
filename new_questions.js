//VARIABLES
let new_data;

//FUNCTIONS
async function getNewQ() {
    let response = await fetch("data/newboo_2.json");
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
    let new_questions = await getNewQ();
    new_data = new_questions[2].data;

    //DEFAULT question
    let random_num = await genRand(new_data.length);
    let random_query = new_data[random_num];

    while (random_query.xxxsauce === "1") {
        random_num = genRand(new_data.length);
        random_query = new_data[random_num];
    }

    questions.textContent = new_data[random_num].question;
});

shuffle.addEventListener("click", async () => {
    let random_num = await genRand(new_data.length);
    let random_query = new_data[random_num];
    let xxxChecked = slider.checked;

    while (questions.textContent === random_query.question || Boolean(parseInt(random_query.xxxsauce)) !== xxxChecked) {
        random_num = await genRand(new_data.length);
        random_query = new_data[random_num];
    }

    questions.textContent = random_query.question;
})
