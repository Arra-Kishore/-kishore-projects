const squares=document.querySelectorAll('.square')
const mole=document.querySelector('.mole')
const timeLeft=document.querySelector('#time-left')
const score=document.querySelector('#score')

let result=0
let hitPosition
let currentTime=60
let timerId=null

    function randomSquare() {
        squares.forEach(square => {
          square.classList.remove('mole')//removes the mole if it exists on any of the square 
        })

    let randomSquare =squares[Math.floor(Math.random()*9)]  //randomPosition will hold a random element from the squares array.
   randomSquare.classList.add('mole')
  hitPosition= randomSquare.id  
}
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
     if(square.id == hitPosition) {
     result++
     score.textContent = result
     hitPosition=null
     }
    })
})


function moveMole(){
    
    timerId=setInterval(randomSquare,700)//setInterval is a built-in JavaScript function that is used to repeatedly execute a specified function or code block at a specified time interval
  
}


moveMole()
function countDown(){
currentTime--
timeLeft.textContent = currentTime

if(currentTime == 0){
    clearInterval(timerId)
    clearInterval(countDownTimerId)
    alert('Game over!your final score is  ' +result)
}
}
let countDownTimerId=setInterval(countDown,1000)