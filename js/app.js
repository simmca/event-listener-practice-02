function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
}

let problems = [];

let problemsCompleted = 0;
let score = 0;


function createProblemData(){
    for (let i = 0; i < 10; i++) {
        let leftNum = getRandomNumber(10);
        let rightNum = getRandomNumber(10);
    
        let correctAnswer = leftNum * rightNum;
        let wrongAnswer1 = getRandomNumber(82);
        let wrongAnswer2 = getRandomNumber(82);
        let wrongAnswer3 = getRandomNumber(82);

        if(wrongAnswer1 === correctAnswer){
            wrongAnswer1 = getRandomNumber(82)
        }

        if(wrongAnswer2 === correctAnswer){
            wrongAnswer2 = getRandomNumber(82)
        }

        if(wrongAnswer3 === correctAnswer){
            wrongAnswer3 = getRandomNumber(82)
        }
        const answers = [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3];
    
        problems.push(
            {
                leftNumber: leftNum,
                rightNumber: rightNum,
                correctAnswer: correctAnswer,
                answers: shuffleArray(answers)
            }
        )
    }
}

function displayNewProblem(){
    const listItems = document.querySelectorAll("li");
    const expression = document.querySelector(".expression");
    expression.innerText = problems[problemsCompleted].leftNumber + " * " + problems[problemsCompleted].rightNumber;
    let i = 0;  
    listItems.forEach(listItem => {
        listItem.innerText = problems[problemsCompleted].answers[i];
        i++;
    })
}

document.addEventListener("DOMContentLoaded", ()=> {
    createProblemData();
    displayNewProblem();
    
    const currentScore = document.querySelector(".currentScore");
    const currentProblem = document.querySelector(".currentProblem");


    const listItems = document.querySelectorAll("li");
    listItems.forEach(listItem => {
       
        listItem.addEventListener("click", (e)=> {
           if(e.target.innerText == problems[problemsCompleted].correctAnswer){
                score++;
                currentScore.innerText = score;
           }

           if(problemsCompleted < 9){
            problemsCompleted++;
           } else {
               const elementsWithShowHide = document.querySelectorAll(".show-hide");
               elementsWithShowHide.forEach(element => {
                   element.classList.add("hidden");
               })
           }
           currentProblem.innerText = problemsCompleted + 1;
           displayNewProblem();
        })
    })

    const btnStartOver = document.getElementById("btnStartOver");
    btnStartOver.addEventListener("click", ()=> {
        location.reload();
    })


})
