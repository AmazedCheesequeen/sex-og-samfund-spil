//Variabler

//Start skærm og elementer
let start = document.querySelector("#start");
let startButton = document.querySelector("#start_button");

//Intro skærm og elementer
let introduction = document.querySelector("#introduction");
let introButton = document.querySelector("#intro_button");

// Game elementer
let currentImage;


//Knapper i spillet
let anmeldButton = document.querySelector("#anmeld_button");
let delButton = document.querySelector("#del_button")

//Tid og point
let point = 0;
let time = 30;

let pointLabel = docuement.querySelector("#scoreboard")
let gameTime;

//Level complete skærm og elementer
let levelCompleteScreen = document.querySelector("#level_complete");

//Game over skærm og elementer
let gameOverScreen = document.querySelector("#game_over");


//Lyde
let backgroundMusic = document.querySelector("#background_music");
let levelCompleteSound = document.querySelector("#level_complete_sound");
let gameOverSound = document.querySelector("#game_over_sound");
let anmeldSound = document.querySelector("#click_anmeld_sound");
let delSound = document.querySelector("#click_del_sound");



//Vis start skærm når siden er loaded

window.addEventListener("load", startScreen);

function startScreen () {

    //Vis startskærm og knap

    start.style.display="block";

    startButton.style.display="block";

    //Giv knap en pulse animation

    startButton.classList.add("pulse");

    //Når man klikker på knap sendes man videre til intro skærm

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

    //Fjerner animation og eventlistener, hvis det ikke er første gang funktionen er i brug

    if(currentImage != null){

        currentImage.classList.remove("scroll_out");
        currentImage.removeEventListener("animationend",chooseGoodOrBad);
    }

    // Laver if sætning, hvor der er 50% chance for nude eller dyrebillede

    if(Math.random () >0.5) {

        //Tilfældigt hvilket dyr vises og samme dyr får en animation på

        let randomAnimal = Math.floor(Math.random()*Math.floor(11))+1;

        document.querySelector("#ani_"+randomAnimal).style.display="block";
        document.querySelector("#ani_"+randomAnimal).classList.add("scroll_in");

        //Lader variablen være det viste billede

        currentImage = document.querySelector("#ani_"+randomAnimal);

    }

    else {

        //Viser tilfældig nude og samme nude får en animation på

        let randomNude = Math.floor(Math.random()*Math.floor(12))+1;

        document.querySelector("#skin_"+randomNude).style.display="block";
        document.querySelector("#skin_"+randomNude).classList.add("scroll_in");

        //Lader variablen være det viste billede

        currentImage = document.querySelector("#skin_"+randomNude);

    }

}

function intro () {

    //Vis ikke startskærm og knap

    start.style.display="none";
    startButton.style.display="none";

    //Fjern anímationer og eventlistener
    start.classList.remove("fade_out");
    startButton.removeEventListener("animationend", intro);


    //Vis intro og knap

    introduction.display="block";
    introButton.display="block";

    //Start pulse animation på knap

    introButton.classList.add("pulse");


    //Når man klikker på knap sendes man videre til spil skærm

    introButton.addEventListener("click", hideIntro);

}

function hideIntro () {

    //Fjern animation og eventlistener

    introtButton.classList.remove("pulse");
    introButton.removeEventListener("click",hideIntro);

    //Start fade ud animation

    introduction.classList.add("fade_out");

    //Når skærmen er faded ud vis introduktion

    introButton.addEventListener("animationend", startGame);
}

function startGame () {

     //Vis ikke intro skærm og knap

    introduction.style.display="none";
    introButton.style.display="none";

    //Fjern anímationer og eventlistener
    intro.classList.remove("fade_out");
    introButton.removeEventListener("animationend", startGame);

    //Nulstil tid og point
    point = 0;
    time = 30;

    pointLabel.innerHTML = ""+ point +" point";
    time.innerHTML = ""+ time +" sek tilbage";

    //Sæt tiden til at gå ned 1 sek af gangen
    gameTime =  setInterval(timer,1000);

    //Vis anmeld og del knapper

    anmeldButton.display="block":
    delButton.display="block";

    //Add eventlistener

    anmeldButton.addEventListener("click", clickAnmeld);
    delButton.addEventListener("click" , clickDel);


}

function clickDel () {

    //Fjern eventlistener og animation
    delButton.removeEventListener("click" , clickDel);

    currentImage.classList.remove("scroll_in");

    //Afspil lyd
    delSound.load();
    delSound.play();

    //Tilføj forsvind animation til billede
    currentImage.classList.add("scroll_out");

    if(currentImage.id.includes("skin")){

        gameOver ();
    }

    else {
        point++
        pointLabel.innerHTML = ""+ point +" point";

        currentImage.addEventListener("animationend",chooseGoodOrBad);
    }




}

function clickAnmeld () {

    //Fjern eventlistener og animation
    delButton.removeEventListener("click" , clickAnmeld);

    currentImage.classList.remove("scroll_in");

    //Afspil lyd
    AnmeldSound.load();
    AnmeldSound.play();

    //Tilføj forsvind animation til billede
    currentImage.classList.add("scroll_out");


    if(currentImage.id.includes("skin")){

        point++
        pointLabel.innerHTML = ""+ point +"/11 point";

        currentImage.addEventListener("animationend",chooseGoodOrBad);
    }

    else {
        point--
        pointLabel.innerHTML = ""+ point +"/11 point";

        currentImage.addEventListener("animationend",chooseGoodOrBad);
    }


}

function timer () {

    // Lad tiden gå ned 1 swk af gangen

    time --;

    // Stop spillet hvis tiden er under 0

    if (time < 0) {

        if() {
            levelComplete()
        }

        else{
            gameOver();
        }
    }

    //Hvis tiden er over 0 bliv ved med at tælle ned

    else{

        time.innerHTML = ""+ time +" sek tilbage";

    }
}

function gameOver(){}

function levelComplete () {}

function highScore () {}

function tryAgain () {}

function goToMenu () {}




