//Variabler

let start = document.querySelector("#start");
let startButton = document.querySelector("#start_button");

let introduction = document.querySelector("#introduction");
let introStartButton = document.querySelector("#intro_start_button");

let animal_1 = document.querySelector("#ani_1");
let animal_2 = document.querySelector("#ani_2");
let animal_3 = document.querySelector("#ani_3");
let animal_4 = document.querySelector("#ani_4");
let animal_5 = document.querySelector("#ani_5");
let animal_6 = document.querySelector("#ani_6");
let animal_7 = document.querySelector("#ani_7");
let animal_8 = document.querySelector("#ani_8");
let animal_9 = document.querySelector("#ani_9");
let animal_10 = document.querySelector("#ani_10");
let animal_11 = document.querySelector("#ani_11");

let nude_1 = document.querySelector("#skin_1");
let nude_2 = document.querySelector("#skin_2");
let nude_3 = document.querySelector("#skin_3");
let nude_4 = document.querySelector("#skin_4");
let nude_5 = document.querySelector("#skin_5");
let nude_6 = document.querySelector("#skin_6");
let nude_7 = document.querySelector("#skin_7");
let nude_8 = document.querySelector("#skin_8");
let nude_9 = document.querySelector("#skin_9");
let nude_10 = document.querySelector("#skin_10");
let nude_11= document.querySelector("#skin_11");
let nude_12 = document.querySelector("#skin_12");

let anmeldButton = document.querySelector("#anmeld_button");
let delButton = document.querySelector("#del_button")

let point = 0;
let time = 30;
let life = 1;

let pointLabel = docuement.querySelector("#scoreboard")


let levelCompleteScreen = document.querySelector("#level_complete");


let gameOverScreen = document.querySelector("#game_over");


let backgroundMusic = document.querySelector("#background_music");


//Vis start skærm når siden er loaded

window.addEventListener("load", startScreen);

function startScreen () {

    //Vis startskærm og knap

    start.style.display="block";

    startButton.style.display="block";

    //Giv knap en pulse animation

    startButton.classList.add("pulse");

    //Når man klikker på knap sendes man videre til næste funktion

    startButton.addEventListener("click", hideStart);

}

function hideStart () {

    //Fjern animation og eventlistener

    startButton.classList.remove("pulse");
    startButton.removeEventListener("click",hideStart);

    //Start fade ud animation

    start.classList.add("fade_out");

    //Load og start musik

    backgroundMusic.load ();
    backgroundMusic.play ();

    //Kør chooseGoodOrBad funktion

    chooseGoodOrBad ();

    //Når skærmen er faded ud vis introduktion

    startButton.addEventListener("animationend", intro);
}

function chooseGoodOrBad () {

    if(Math.random >0.5) {

    }

    else {


    }

}

function intro () {

    //Fjern anímationer og eventlistener
    start.classList.remove("fade_out");
    startButton.removeEventListener("animationend", intro);


    life = 1;
    point = 0;
    time = 30;

    pointLabel.innerHTML = ""+ point +" point"
    scoreboard.innerHTML = ""+ time +" sek tilbage";

}

