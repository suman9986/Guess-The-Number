
let ContainerL = document.querySelector(".container");
let buttonPlayAgain = document.querySelector(".btn-again")
let buttonCheck = document.querySelector(".btn-check")
let messageL = document.querySelector(".message")
let hideNumEl = document.querySelector(".hide-num") 
let inputNumEl = document.querySelector(".input-num")
let highScoreEl = document.querySelector(".high-score") 
let scoreEl = document.querySelector(".score")
let attemptEl = document.querySelector(".attempt")
let coorectSound  =  document.getElementById("correct")
let wrongSound = document.getElementById("wrong")

// to generate the random number
let a = Math.trunc(Math.random() * 100)+1;

let highScore = 0;
let score = 100;
let attempt = 0
console.log(a)

// Event to check the hide num
buttonCheck.addEventListener('click',() => {
    const guess = Number(inputNumEl.value)

    if(guess){
      attempt++
      attemptEl.textContent = attempt
      score--
      scoreEl.textContent = score
     if(guess !== a){
       if(score > 1){
        
        messageL.textContent = guess > a ? "Too High" : "Too Low"
        wrongSound.play();
      
       }
       else{
        messageL.textContent = ("you Lose the game")
        scoreEl.textContent = 0;
        buttonCheck.disabled = true;
       }
     }
     else{
       hideNumEl.textContent = a
       messageL.textContent = ("Congratualtion you Enter the lucky number")
       coorectSound.play();
       if (score > highScore) {
        highScore = score;
        highScoreEl.textContent = highScore;
    }
    buttonCheck.disabled = true;
     }
    }
    else{
        messageL.textContent = ("Please Enter a number between 0 to 100")
    }
}) 
   buttonPlayAgain.addEventListener("click", () => {
  score = 100;
  a = Math.trunc(Math.random() * 100) + 1;
  attempt = 0
  console.log("New Random Number:", a); // Debug
  hideNumEl.textContent = "?";
  messageL.textContent = "Start the guessing......";
  inputNumEl.value = "";
  scoreEl.textContent = score;
  attemptEl.textContent = attempt;
  buttonCheck.disabled = false;
});
