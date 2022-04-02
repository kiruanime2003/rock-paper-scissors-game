const computerChoice = document.getElementById("comp-choice");
const userChoice = document.getElementById("user-choice");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("comp-score");
const userbuttonChoices = document.querySelectorAll("img");
let choice, a, b, c=0, d=0;

/*calling function*/
displayUserChoice();

function displayUserChoice()
{
    userbuttonChoices.forEach(userbuttonChoice => userbuttonChoice.addEventListener("click", (e) => 
    {
        choice = e.target.id;
        userChoice.innerHTML = choice;
        displayComputerChoice();
        displayResult();
        calculateScore();
        displayScore();
    }));
};

function displayComputerChoice()
{
    const computerNumber = Math.floor(Math.random() * 3);
    
    if(computerNumber === 1)
    {
        a = "rock";
    }

    else if(computerNumber === 2)
    {
        a = "paper";
    }

    else
    {
        a = "scissors";
    }

    computerChoice.innerHTML = a;
}

function displayResult()
{
    if(choice === a)
    {
        result = 'd';
    }

    else if(choice === "rock" && a === "paper")
    {
        result = 'l';
    }

    else if(choice === "rock" && a === "scissors")
    {
        result = 'w';
    }

    else if(choice === "paper" && a === "scissors")
    {
        result = 'l';
    }

    else if(choice === "scissors" && a === "paper")
    {
        result = 'w';
    }

    else if(choice === "scissors" && a === "rock")
    {
        result = 'l';
    }

    else
    {
        result = 'w';
    }
}

function calculateScore()
{
    if(result === 'w')
    {
        c++;
    }

    else if(result === 'l')
    {
        d++;
    }

    else
    {
        d+=0;
        c+=0;
    }
}

function displayScore()
{
    userScore.innerHTML = c;
    computerScore.innerHTML = d;
}
