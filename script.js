let currentQuestion = 0;
let siteNumber = 0;
let correctAnswers = 0;

let audio_right = new Audio('audio/right.mp3');
let audio_wrong = new Audio('audio/wrong.mp3');

function init(){
    document.getElementById('last-question').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    if ((gameIsOver())) {
        showEndScreen();
    }else{    
        showCurrentQuestion();
    }
}

function gameIsOver(){
    return currentQuestion >= questions.length;
}

function showEndScreen(){
    document.getElementById('endScreen').style = '';
    document.getElementById('questions-body').style = 'display: none';
    document.getElementById('correct-answers').innerHTML = correctAnswers;
    document.getElementById('sum-of-questions').innerHTML = siteNumber;
    currentQuestion = 0;
}

function showCurrentQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('cardTitle').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer1'];
    document.getElementById('answer_2').innerHTML = question['answer2'];
    document.getElementById('answer_3').innerHTML = question['answer3'];
    document.getElementById('answer_4').innerHTML = question['answer4'];
}

function answer(answer){
    let question = questions[currentQuestion];
    let rightAnswer = question['correct'];
    let idOfRightAnswer = `${rightAnswer}`;

    if ((rightAnswerSelected(answer, rightAnswer))) {
        correctAnswer(answer);
    }else{
        wrongAnswer(answer, idOfRightAnswer);
    }
    document.getElementById('next-question-btn').disabled = false;
    progressBar();
}

function rightAnswerSelected(answer, rightAnswer){
    return answer == rightAnswer;
}

function progressBar(){
    let progress = ((currentQuestion +1) / questions.length) * 100;
    document.getElementById('progressBar').innerHTML = `${progress} %`;
    document.getElementById('progressBar').style = `width: ${progress}%`;
}

function correctAnswer(answer){
    document.getElementById(answer).parentNode.classList.add('bg-success');
    audio_right.play();
    correctAnswers++;
}

function wrongAnswer(answer, idOfRightAnswer){
    document.getElementById(answer).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    audio_wrong.play();
}

function showNextQuestion(){
    currentQuestion++;
    siteNumber++;
    resetAnswers();
    showQuestion();
    document.getElementById('next-question-btn').disabled = true;
    document.getElementById('actual-question').innerHTML = siteNumber + 1;
}

function resetAnswers(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function restart(){
    currentQuestion = 0;
    siteNumber = 0;
    correctAnswers = 0;
    let progress = 0 ;
    document.getElementById('questions-body').style = '';
    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('progressBar').innerHTML = `${progress} %`;
    document.getElementById('progressBar').style = `width: 5%`;
    document.getElementById('actual-question').innerHTML = siteNumber + 1;
    init();
}