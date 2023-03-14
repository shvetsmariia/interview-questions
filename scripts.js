// Creating an array with objects - each object contains an interview question and its status (true or false)
const interviewQuestions = [
    {question: "Explain event delegation", status: true}, 
    {question: "What's the difference between a variable that is: null, undefined or undeclared?", status: true}, 
    {question: "What are the differences between ES6 class and ES5 function constructors?", status: false},
    {question: "Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?", status: true}, 
    {question: "Explain 'hoisting'", status: true}, 
    {question: "What is the difference between while and do-while loops in JavaScript?", status: false},
    {question: "What is the difference between == and ===?", status: true}, 
    {question: "What are the differences between variables created using let, var or const?", status: true}, 
    {question: "How can you share code between files?", status: false}
];

// Iterating all of the questions above into console
interviewQuestions.forEach(interviewQuestion => { console.log(interviewQuestion) }); 

// Creating a function to determine either the status of the question if true or false - in either case assigning an appropriate status icon & description 
function showStatus(interviewQuestion) {
    if (interviewQuestion.status == true) {
        return `
        <span class="icon has-text-success">
        <ion-icon name="checkmark-circle-outline"></ion-icon>
        </span>
        <span>Understood</span>`; 
    } else 
    {
        return `
        <span class="icon has-text-danger">
            <ion-icon name="close-circle-outline"></ion-icon>
        </span>
        <span>Didn't understand</span>`; 
    }
}

// Creating a function that will iterate all questions listed above into a specified HTML format including the question & its status 
const iterateAllQuestions = function(interviewQuestion, i) {
    document.getElementById('cards').insertAdjacentHTML('beforeend', 
        `
        <div class="columns is-desktop is-centered">
        <div class="column is-8">
        <div class="card">
        <div class="card-content">
            <div class="content">${i+1}. ${interviewQuestion.question}</div>
            <div class="icon-text">${showStatus(interviewQuestion)}</div>
        </div>
        </div>
        </div>
        </div>
        `
    );
}

// Creating a function to iterate the questions and display them into UI 
function renderIterateAllQuestions() {
    document.getElementById('cards').innerHTML='';
    interviewQuestions.forEach(iterateAllQuestions); 
}
renderIterateAllQuestions(); 

// Creating a function that will hide questions that I understood and only show the ones that didnot 
function renderHideQuestionsThatUnderstood() {
    const arrayQuestionsDidnotUnderstand = interviewQuestions.filter(interviewQuestion => interviewQuestion.status == false); 
    document.getElementById('cards').innerHTML=''; 
    arrayQuestionsDidnotUnderstand.forEach(iterateAllQuestions); 
}

// Creating a function that will add a new question into an array
function submitNewQuestion() {
    const newQuestion = document.getElementById('inputQuestion').value; 
    interviewQuestions.push({'question': newQuestion, status: false});
    document.getElementById('cards').innerHTML=''; 
    interviewQuestions.forEach(iterateAllQuestions); 
}