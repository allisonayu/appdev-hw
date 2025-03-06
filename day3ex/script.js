function game(userChoice) {
    let randomNum = Math.floor(Math.random() * 3)
    let botChoice = ''
    console.log(botChoice);

    if (randomNum === 0) {
        botChoice = 'rock';
    } else if (randomNum == 1) {
        botChoice = 'paper'
    } else {
        botChoice = 'scissors'
    }

    if (botChoice === 'rock') {
        if (userChoice === 'rock') {

        } else if (userchoice === 'paper') {
            win('paper', 'rock', true)
        } else {
            win('scissors', 'rock', false)
        }
    } else if (botChoice === 'paper') {
        if (userChoice === 'rock') {
            win('rock', 'paper', false)
        } else if (userchoice === 'paper') {
            
        } else {
            win('paper', 'rock', true)
        }
    } else { // scissors from bot
        if (userChoice === 'rock') {
            win('rock', 'scissors', true)
        } else if (userchoice === 'paper') {
            win('paper', 'scissors', false)
        } else {
            
        }
    }
}

function win(userchoice, botchoice, won) {
    let body = document.body
    let h2 = document.createElement('h2')
    if (won) {
        let result = `You chose: ${userchoice}, bot chose: ${botchoice}. You win`
    } else {
        let result = `You chose: ${userchoice}, bot chose: ${botchoice}. You lose`
    }

    h2.innerText = result
    body.appendChild(h2)
}



let rockButton = document.getElementById('rock-button')
rockButton.addEventListener('click', ()=>game('rock'))

let paperButton = document.getElementById('paper-button')
paperButton.addEventListener('click', ()=>game('paper'))

let scissorsButton = document.getElementById('scissors-button')
scissorsButton.addEventListener('click', ()=>game('scissors'))
