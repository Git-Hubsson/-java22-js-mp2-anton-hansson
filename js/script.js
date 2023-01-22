const h1Elements = document.querySelectorAll('h1');
let username = h1Elements[0];
const images = document.querySelectorAll('img');
let userPoints = 0;
let computerPoints = 0;
const score = document.querySelectorAll('h2');
const allDivs = document.querySelectorAll('div');
let round = 0;
let name;
const weapons = ['rock', 'scissor', 'paper'];

document.querySelector('button').addEventListener('click', event => {
    event.preventDefault();
    name = document.querySelector('input').value;
    if (name !== 'Username' && name !== '') {
        username.innerText = name;
        document.querySelector('form').classList.add('invisible');
        h1Elements[1].innerText = 'Now choose your weapon';
        for (let i = 0; i < weapons.length; i++) {
            images[i].addEventListener('click', event => {
                fight(weapons[i]);
            })
        }
        allDivs[2].classList.remove('invisible');
        allDivs[6].classList.remove('invisible');
    }
})

function fight(userWeapon) {
    round++;
    h1Elements[3].innerText = `Round ${round}`;
    h1Elements[3].classList.remove('invisible');
    console.log(h1Elements[3]);
    let computerWeapon = weapons[Math.floor(Math.random() * 3)];

    if (userWeapon === 'rock' && computerWeapon === 'scissor') {
        userWins(userWeapon, computerWeapon);
    } else if (userWeapon === 'rock' && computerWeapon === 'paper') {
        computerWins(userWeapon, computerWeapon);
    } else if (userWeapon === 'rock' && computerWeapon === 'rock') {
        tie(userWeapon, computerWeapon);
    }

    if (userWeapon === 'scissor' && computerWeapon === 'paper') {
        userWins(userWeapon, computerWeapon);
    } else if (userWeapon === 'scissor' && computerWeapon === 'rock') {
        computerWins(userWeapon, computerWeapon);
    } else if (userWeapon === 'scissor' && computerWeapon === 'scissor') {
        tie(userWeapon, computerWeapon);
    }
    
    if (userWeapon === 'paper' && computerWeapon === 'rock') {
        userWins(userWeapon, computerWeapon);
    } else if (userWeapon === 'paper' && computerWeapon === 'scissor') {
        computerWins(userWeapon, computerWeapon);
    } else if (userWeapon === 'paper' && computerWeapon === 'paper') {
        tie(userWeapon, computerWeapon);
    }

    score[0].innerText = `Score: ${userPoints}`;
    score[1].innerText = `Score: ${computerPoints}`;

    if (userPoints === 3) {
        h1Elements[1].innerText = `${name} won the game! To play again, just pick a weapon`;
        newRound()
    }
    if (computerPoints === 3) {
        h1Elements[1].innerText = 'The computer won the game! To play again, just pick a weapon';
        newRound()
    }
}

function newRound() {
    round = 0;
    userPoints = 0;
    computerPoints = 0;
}

function userWins(userWeapon, computerWeapon) {
    userPoints++;
    h1Elements[1].innerText = `${name} wins!`
    allDivs[4].innerHTML = `<img class="fight-img" src="images/${userWeapon}.png" alt="userWeapon"> <h3>VS</h3> <img class="fight-img" src="images/${computerWeapon}.png" alt="computerWeapon">`;
}

function computerWins(userWeapon, computerWeapon) {
    computerPoints++;
    h1Elements[1].innerText = 'Computer wins!'
    allDivs[4].innerHTML = `<img class="fight-img" src="images/${userWeapon}.png" alt="userWeapon"> <h3>VS</h3> <img class="fight-img" src="images/${computerWeapon}.png" alt="computerWeapon">`;
}

function tie(userWeapon, computerWeapon) {
    h1Elements[1].innerText = "It's a tie";
    allDivs[4].innerHTML = `<img class="fight-img" src="images/${userWeapon}.png" alt="userWeapon"> <h3>VS</h3> <img class="fight-img" src="images/${computerWeapon}.png" alt="computerWeapon">`;
}