const playButton = document.querySelector('.play-btn');
const rulesButton = document.querySelector('.rules-btn');
const computerGuess = document.querySelector('.computer-guess');
const userGuess = document.querySelector('#user-guess');
const score = document.querySelector('.score');
const checkButton = document.querySelector('.check-btn');
const resetButton = document.querySelector('.reset-btn');
const quitButton = document.querySelector('.quit-btn');
const message = document.querySelector('.message');
const gameSection = document.querySelector('.game-section');
const rulesSection = document.querySelector('.rules');
const quitRulesBtn = document.querySelector('.quit-rules');
let noOfTries = 0;
let [userScore, userGames] = [0, 0];

playButton.addEventListener('click', () => {
    gameSection.style.display = 'block';
    rulesSection.style.display = 'none';
})

const generateNum = () => {
    return Math.floor(Math.random() * 100) + 1;
}
let computerNum = generateNum();

checkButton.addEventListener('click', () => {
    if (userGuess.value != '' && userGuess.value < 101 && userGuess.value >= 1) {
        computerGuess.innerHTML = '...';
        noOfTries++;
        
            if (noOfTries <= 2 && parseInt(userGuess.value) != computerNum) {
                message.innerHTML = 'Wrong! Try again';
                // console.log(userGuess.value, computerNum, noOfTries);
                userGuess.value = '';
            }
            else if (noOfTries >= 3 && parseInt(userGuess.value) != computerNum) {
                // console.log('failed');
                message.innerHTML = 'Sorry! Failed the attempt';
                noOfTries = 0;
                userGames++;
                // console.log(userGuess.value, computerNum, noOfTries);
                computerGuess.innerHTML = computerNum;
                userGuess.value = '';
                computerNum = generateNum();
            }
            else if (parseInt(userGuess.value) == computerNum) {
                // console.log('there');
                message.innerHTML = 'Correct. 1 added to your scoreboard. Play again';
                computerGuess.innerHTML = computerNum;
                noOfTries = 0;
                userGuess.value = '';
                userScore++;
                userGames++;
                computerNum = generateNum();
            }
        }
        else if (userGuess.value >= 101 || userGuess.value <= 0) {
            alert('Pick a number between 1 and 100');
            userGuess.value = '';
        }

        score.innerHTML = `${userScore}/${userGames}`
    }
)

resetButton.addEventListener('click', () => {
    [noOfTries, userScore, userGames] = [0, 0, 0];
    message.innerHTML = '';
    userGuess.value = '';
    computerGuess.innerHTML = '...';
    score.innerHTML = `${userScore}/${userGames}`
})

quitButton.addEventListener('click', () => {
    gameSection.style.display = 'none';
})

quitRulesBtn.addEventListener('click', () => {
    rulesSection.style.display = 'none';
})

rulesButton.addEventListener('click', () => {
    rulesSection.style.display = 'block';
    gameSection.style.display = 'none';
})