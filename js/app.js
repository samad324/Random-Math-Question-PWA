var finalAnswer = undefined;

function generate(){
    var btn = document.getElementById('btnStart');
    var question = document.getElementById('question').style.display = 'block';
    var answer = document.getElementById('answer').style.display = 'block';
    var operators = ['+','-','*','/'];
    var number1 = Math.floor(Math.random()*10);
    var number2 = Math.floor(Math.random()*10);
    var number3 = Math.floor(Math.random()*10);
    var number4 = Math.floor(Math.random()*10);
    var operator1 = Math.floor(Math.random()*operators.length);
    var operator2 = Math.floor(Math.random()*operators.length);
    var operator3 = Math.floor(Math.random()*operators.length);
    var finalQuestion = number1 + operators[operator1] + number2 + operators[operator2] + number3 + operators[operator3] + number4;
    document.getElementById('question').innerHTML =  finalQuestion;
    finalAnswer = eval(number1 + operators[operator1] + number2 + operators[operator2] + number3 + operators[operator3] + number4);
    var checkAnswer = document.getElementById('checkAnswer').style.display = 'block';
    document.getElementById('correctAnswer').style.display = 'none';
    console.log(finalAnswer);
}

function check(){
    var correctAnswer = document.getElementById('correctAnswer').style.display = 'block';
    var answer = document.getElementById('answer').value;
    var ans = document.getElementById('correctAnswer');
    if(answer == finalAnswer){
        ans.className = "text-center h2 text-white my-4 p-3 mb-2 bg-success border border-dark rounded"
        ans.innerHTML = "Correct Answer";
    }
    else{
        ans.className = "text-center h2 text-white my-4 p-3 mb-2 bg-danger border border-white rounded"
        document.getElementById('correctAnswer').innerHTML = "Wrong Answer! Correct Answer Is : " + finalAnswer  
    }
    //question = document.getElementById('question').style.display = 'none';
    //answer = document.getElementById('answer').style.display = 'none';
    //document.getElementById('checkAnswer').style.display = 'none';
    //document.getElementById('btnStart').style.display = 'block';
   
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
}