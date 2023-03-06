const interviewQuestions = [
    {Question: "Explain event delegation", status: true}, 
    {Question: "What's the difference between a variable that is: null, undefined or undeclared?", status: true}, 
    {Question: "What are the differences between ES6 class and ES5 function constructors?", status: false},
    {Question: "Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?", status: true}, 
    {Question: "Explain 'hoisting'", status: true}, 
    {Question: "What is the difference between while and do-while loops in JavaScript?", status: false},
    {Question: "What is the difference between == and ===?", status: true}, 
    {Question: "What are the differences between variables created using let, var or const?", status: true}, 
    {Question: "How can you share code between files?", status: false}
];

interviewQuestions.forEach(interviewQuestion => { console.log(interviewQuestion) }); 

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

interviewQuestions.forEach(interviewQuestion => { document.getElementById('cards').insertAdjacentHTML('afterend', 
`
    <div class="columns is-desktop is-centered">
    <div class="column is-8">
    <div class="card">
    <div class="card-content">
        <div class="content">${interviewQuestion.Question}</div>
        <div class="icon-text">${showStatus(interviewQuestion)}</div>
    </div>
    </div>
    </div>
    </div>
`);
})