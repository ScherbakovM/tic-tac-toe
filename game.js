const audio = new Audio("./click.mp3");
const win = new Audio("./win.mp3");
const wrong = new Audio("./wrong.mp3");
const music = new Audio("./notification.mp3")

const modal = document.getElementById("modal")
const startBtn = document.getElementById("start")
const game = document.getElementById("games");
const fieldOne = document.getElementById("one");
const fieldTwo = document.getElementById("two");
const fieldThree = document.getElementById("three");
const fieldFour = document.getElementById("four");
const fieldFive = document.getElementById("five");
const fieldSix = document.getElementById("six");
const fieldSeven = document.getElementById("seven");
const fieldEight = document.getElementById("eight");
const fieldNine = document.getElementById("nine");
const customAlert = document.getElementById("alert");
const xCount = document.getElementById("x-count");
const yCount = document.getElementById("y-count");
const player = document.getElementById("player");
const children = game.childNodes;
const isMobile = innerWidth < 400 ? true : false;


function addClick() {
    document.addEventListener('click', gameClick);
}

function removeClick() {

    document.removeEventListener('click', gameClick);
}

function addTouch() {
    document.addEventListener('touchend', gameClick);
}

function removeTouch() {

    document.removeEventListener('touchend', gameClick);

}


window.addEventListener('DOMContentLoaded', addClick);
modal.addEventListener('mouseover', () => modal.classList.remove('notActive'));
modal.addEventListener('mouseout', () => modal.classList.add('notActive'));


player.innerText = "X";

var step;
var numberOfSteps = 0;


const clickStart = () => {
    modal.classList.add("close");
    music.play();
}

function delAlert() {
    customAlert.classList.remove("open");
}

function clearWinning(elemOne, elemTwo, elemThree) {
    elemOne.classList.remove("winning");
    elemTwo.classList.remove("winning");
    elemThree.classList.remove("winning");
}

function winning(elemOne, elemTwo, elemThree) {
    removeTouch();
    removeClick();
    win.play();
    elemOne.classList.add("winning");
    elemTwo.classList.add("winning");
    elemThree.classList.add("winning");
    numberOfSteps = 0;
    setTimeout(clearWinning, 1500, elemOne, elemTwo, elemThree)
    setTimeout(addClick, 3000);
}

function notWinner() {
    win.play();
    xCount.innerHTML = parseInt(xCount.innerHTML) + 1;
    yCount.innerHTML = parseInt(yCount.innerHTML) + 1;
    numberOfSteps = 0;
}


function openAlert(textFromAlert) {

    customAlert.innerText = textFromAlert;
    customAlert.classList.add("open");
    setTimeout(delAlert, 3000);
    setTimeout(clearAll, 3000);
    if (textFromAlert === "Победили: X") xCount.innerHTML = parseInt(xCount.innerHTML) + 1;
    else if (textFromAlert === "Победили: O") yCount.innerHTML = parseInt(yCount.innerHTML) + 1;
    else if (textFromAlert === "Ничья") {
        notWinner();
    }

}

function whoseStep() {

    if (step === undefined) {
        step = 'Cross';
        player.classList.add("O")
        player.innerText = "0"
    }
    else if (step === 'Cross') {
        step = 'Zero';
        player.classList.remove("O")
        player.innerText = "X"
    }
    else if (step === 'Zero') {
        step = 'Cross';
        player.classList.add("O")
        player.innerText = "0"
    }
    return step;
}


function clearAll() {
    fieldOne.innerText = ""
    fieldTwo.innerText = "";
    fieldThree.innerText = "";
    fieldFour.innerText = "";
    fieldFive.innerText = "";
    fieldSix.innerText = "";
    fieldSeven.innerText = "";
    fieldEight.innerText = "";
    fieldNine.innerText = "";
}

startBtn.addEventListener('click', clickStart)

const gameClick = (e) => {

    if (e.target.className === "table") {
        if (e.target.innerText != 'X' && e.target.innerText != 'O') {
            music.play();
            draw(e);

        }
        else {
            wrong.play();
        }
    }

}

function draw(e) {

    const step = whoseStep()
    if (step === 'Cross') {
        e.target.innerText = 'X';
        numberOfSteps++;
    }
    else if (step === 'Zero') {
        e.target.innerText = 'O';
        numberOfSteps++;
    }
    checkField();

    if (numberOfSteps == 9) {
        openAlert('Ничья')
    }

}


function checkField() {
    if (fieldOne.innerText === "X" && fieldTwo.innerText === "X" && fieldThree.innerText === "X") {
        openAlert("Победили: X");
        winning(fieldOne, fieldTwo, fieldThree);
    }
    else if (fieldFour.innerText === "X" && fieldFive.innerText === "X" && fieldSix.innerText === "X") {
        openAlert("Победили: X");
        winning(fieldFour, fieldFive, fieldSix);
    }
    else if (fieldSeven.innerText === "X" && fieldEight.innerText === "X" && fieldNine.innerText === "X") {
        openAlert("Победили: X");
        winning(fieldSeven, fieldEight, fieldNine);
    }

    else if (fieldOne.innerText === "X" && fieldFour.innerText === "X" && fieldSeven.innerText === "X") {
        openAlert("Победили: X");
        winning(fieldOne, fieldFour, fieldSeven);
    }

    else if (fieldTwo.innerText === "X" && fieldFive.innerText === "X" && fieldEight.innerText === "X") {
        openAlert("Победили: X");
        winning(fieldTwo, fieldFive, fieldEight);
    }
    else if (fieldThree.innerText === "X" && fieldSix.innerText === "X" && fieldNine.innerText === "X") {
        openAlert("Победили: X");
        winning(fieldThree, fieldSix, fieldNine);
    }

    else if (fieldOne.innerText === "X" && fieldFive.innerText === "X" && fieldNine.innerText === "X") {
        openAlert("Победили: X");
        winning(fieldOne, fieldFive, fieldNine);
    }
    else if (fieldThree.innerText === "X" && fieldFive.innerText === "X" && fieldSeven.innerText === "X") {
        openAlert("Победили: X");
        winning(fieldThree, fieldFive, fieldSeven);
    }

    if (fieldOne.innerText === "O" && fieldTwo.innerText === "O" && fieldThree.innerText === "O") {
        openAlert("Победили: O");
        winning(fieldOne, fieldTwo, fieldThree);
    }
    else if (fieldFour.innerText === "O" && fieldFive.innerText === "O" && fieldSix.innerText === "O") {
        openAlert("Победили: O");
        winning(fieldFour, fieldFive, fieldSix);
    }
    else if (fieldSeven.innerText === "O" && fieldEight.innerText === "O" && fieldNine.innerText === "O") {
        openAlert("Победили: O");
        winning(fieldSeven, fieldEight, fieldNine);
    }

    else if (fieldOne.innerText === "O" && fieldFour.innerText === "O" && fieldSeven.innerText === "O") {
        openAlert("Победили: O");
        winning(fieldOne, fieldFour, fieldSeven);
    }
    else if (fieldTwo.innerText === "O" && fieldFive.innerText === "O" && fieldEight.innerText === "O") {
        openAlert("Победили: O");
        winning(fieldTwo, fieldFive, fieldEight);
    }
    else if (fieldThree.innerText === "O" && fieldSix.innerText === "O" && fieldNine.innerText === "O") {
        openAlert("Победили: O");
        winning(fieldThree, fieldSix, fieldNine);
    }

    else if (fieldOne.innerText === "O" && fieldFive.innerText === "O" && fieldNine.innerText === "O") {
        openAlert("Победили: O");
        winning(fieldOne, fieldFive, fieldNine);
    }
    else if (fieldThree.innerText === "O" && fieldFive.innerText === "O" && fieldSeven.innerText === "O") {
        openAlert("Победили: O");
        winning(fieldThree, fieldFive, fieldSeven);
    }

}









