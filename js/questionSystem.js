var score = 0
var questionIdx = 0;
var loadedQuestion = loadQuestion();

function loadQuestion() {
    let dataUrl = new URLSearchParams(window.location.search);
    var idx = parseInt(dataUrl.get("question"));
    return questionList[idx-1];
}

/*function questionSystem(idx) {
    var question = loadQuestion(idx);
    var totalQuestion = question.length;
    for (var i = 0; i < totalQuestion; i++) { //psedo code
        document.getElementById("questionItem").innerHTML = question[i].question;
        document.getElementById("questionOptionA").innerHTML = question[i].option.optionA;
        if (player.answer === question[i].answer) {
            player.score += 100;
        }
    }
    return player.score;


}*/

function showQuestion() {
    //change color back
    //document.querySelectorAll("button").classList.remove("clickProhibted");
    //document.querySelector("button").classList.remove("correctAns", "wrongAns");
    var buttonList = document.querySelectorAll("button");
    for (var i = 0; i < buttonList.length; i++) {
        buttonList[i].removeAttribute("class")
    }

    //initialize
    var currQuestion = loadedQuestion[questionIdx];
    document.querySelector("#questionItem").innerHTML = currQuestion.question;
    document.querySelector("#optionA").innerHTML = currQuestion.option.optionA;
    document.querySelector("#optionB").innerHTML = currQuestion.option.optionB;
    document.querySelector("#optionC").innerHTML = currQuestion.option.optionC;
    document.querySelector("#optionD").innerHTML = currQuestion.option.optionD;
}

function questionAns(answer) {
    var correctAns = loadedQuestion[questionIdx].answer;
    switch(correctAns) {
        case 1:
            document.querySelector("#optionA").classList.add("correctAns");
            break;
        case 2:
            document.querySelector("#optionB").classList.add("correctAns");
            break;
        case 3:
            document.querySelector("#optionC").classList.add("correctAns");
            break;
        case 4:
            document.querySelector("#optionD").classList.add("correctAns");
            break;
    }

    if (correctAns == answer) {
        score += 100;
        document.querySelector("#score").innerHTML = score;
    } else {
        switch(answer) {
            case 1:
                document.querySelector("#optionA").classList.add("wrongAns");
                break;
            case 2:
                document.querySelector("#optionB").classList.add("wrongAns");
                break;
            case 3:
                document.querySelector("#optionC").classList.add("wrongAns");
                break;
            case 4:
                document.querySelector("#optionD").classList.add("wrongAns");
                break;
        }
    }
    questionIdx++;
    
    var theButton = document.querySelectorAll("button");
    for (var i = 0; i < theButton.length; i++) {
        theButton[i].classList.add("disable");
    }

    setTimeout(function() {
        //document.querySelectorAll("button").classList.remove("disable");
        var theButton = document.querySelectorAll("button.disable");
        for (var i = 0; i < theButton.length; i++) {
            theButton[i].classList.remove("disable");
        }

        if (questionIdx < loadedQuestion.length) {
            showQuestion();
        } else {
            result();
        }
    }, 500);
}

function result() {
    var totalScore = "Total score: " + score + "/" + (loadedQuestion.length*100);
    var content = `<p id="thescore">${totalScore}</p> <br> <button onclick ="window.location.href='index.html'">Back to the campus.</button>`;
    document.querySelector("#thecontent").innerHTML = content;
}