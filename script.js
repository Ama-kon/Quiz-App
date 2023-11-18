let currentQuestion = 0;

function init(){
    document.getElementById('last-question').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];
    
    document.getElementById('cardTitle').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer1'];
    document.getElementById('answer_2').innerHTML = question['answer2'];
    document.getElementById('answer_3').innerHTML = question['answer3'];
    document.getElementById('answer_4').innerHTML = question['answer4'];
}

function answer(answer){
    let question = questions[currentQuestion];
   
    if (answer == question['correct']) {
        document.getElementById(answer).parentNode.classList.add('bg-success');
    }else{
        document.getElementById(answer).parentNode.classList.add('bg-danger');
    }
}
