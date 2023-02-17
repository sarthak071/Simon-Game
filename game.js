
var gameover = false;
var startGame=true;

function level(x) {
    $("#level-title").text("Level " + x);
}

$(document).keypress(function () {
    if (gameover == true || startGame == true) {
        newLevel();
    }
  
});

var index = 0;
var arr = [];
function newLevel() {
    var newKey = randomNumber();
    buttonSound(newKey);
    buttonAnnimation(newKey);
    arr.push(newKey);
    index = 0;
    level(index + 1);
    gameover = false;
    startGame=false;

}

function nextLevel(num) {
    var newKey = randomNumber();
    buttonSound(newKey);
    buttonAnnimation(newKey);
    arr.push(newKey);
    index = 0;
    level(num);
}

$(".btn").click(function (e) {

    buttonSound(e.target.id);
    buttonAnnimation(e.target.id);
    checkPattern(e.target.id);

});


function checkPattern(key) {

    if (arr[index] != key) {
        gameOver();

    }
    else {
   
        console.log(index);
        console.log(arr.length);
        index++;
        if (index == arr.length) { setTimeout(function () { nextLevel(arr.length+1) }, 900); }
    }

}

function buttonAnnimation(currentKey) {
    var activeButton = $("#" + currentKey);
    activeButton.addClass("pressed");
    setTimeout(function () { activeButton.removeClass("pressed"); }, 100);
}

function gameOver(currentKey) {
    var over = $("body");
    over.addClass("game-over");
    setTimeout(function () { over.removeClass("game-over"); }, 100);
    buttonAnnimation(currentKey);
    $("#level-title").text("Game Over, Press Any Key to Restart")
    buttonSound(currentKey);
    wrongAudio.play();
    gameover = true;
    arr.length=0;
}

function randomNumber() {
    var x = Math.floor(Math.random() * 4) + 1;

    if (x === 1) {
        return "green";
    }
    if (x === 2) {
        return "red";
    }
    if (x === 3) {
        return "yellow";
    }
    if (x === 4) {
        return "blue";
    }
}
var greenAudio = new Audio("sounds/green.mp3");
var redAudio = new Audio("sounds/red.mp3");
var blueAudio = new Audio("sounds/blue.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");
var wrongAudio = new Audio("sounds/wrong.mp3");
function buttonSound(key) {
    if (key === "green") {
        greenAudio.play();
    }
    if (key === "blue") {
        blueAudio.play();
    }
    if (key === "red") {
        redAudio.play();
    }
    if (key === "yellow") {
        yellowAudio.play();
    }
}