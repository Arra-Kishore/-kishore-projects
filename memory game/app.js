const cardArray=[
   {
    name:'fries',
    img:'images/fries.png'   },

   {
    name:'cheeseburger',
    img:'images/cheeseburger.png'   },

   {
    name:'hotdog',
    img:'images/hotdog.png'   },
   {
    name:'ice-cream',
    img:'images/ice-cream.png'   },
   {
    name:'milkshake',
    img:'images/milkshake.png'   },
   {
    name:'pizza',
    img:'images/pizza.png'   },
   {
    name:'fries',
    img:'images/fries.png'   },

   {
    name:'cheeseburger',
    img:'images/cheeseburger.png'   },

   {
    name:'hotdog',
    img:'images/hotdog.png'   },
   {
    name:'ice-cream',
    img:'images/ice-cream.png'   },
   {
    name:'milkshake',
    img:'images/milkshake.png'   },
   {
    name:'pizza',
    img:'images/pizza.png'   }
]
cardArray.sort(() =>0.5 - Math.random())//shortcut for shuffling an array
const gridDisplay=document.querySelector('#grid')
const resultDisplay=document.querySelector('#result')
let cardschosen=[]
let cardschosenids=[]
const cardswon=[]
function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        
       const card= document.createElement('img')
       card.setAttribute('src','images/blank.png')
       card.setAttribute('data-id',i)
       console.log(card,i)
       card.addEventListener('click',flipcard)
       gridDisplay.appendChild(card)//we add function to html elements with js

    }
}
createBoard()

function checkMatch(){
    const cards=document.querySelectorAll('img')
    const optionId=cardschosenids[0]
    const optionTwoId=cardschosenids[1]

    console.log('check for match!')
    if(optionId===optionTwoId){
        cards[optionId].setAttribute('src','images/blank.png')
      cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('you have clicked same image! ')
    }


    if(cardschosen[0]==cardschosen[1]){
        alert('you found a match!')
      cards[optionId].setAttribute('src','images/white.png')
      cards[optionTwoId].setAttribute('src','images/white.png')
      cards[optionId].removeEventListener('click',flipcard)
      cards[optionTwoId].removeEventListener('click',flipcard)
      cardswon.push(cardschosen)
    } else {
        cards[optionId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('sorry try again!')
    }
    resultDisplay.textContent=cardswon.length
    cardschosen=[]
    cardschosenids=[]

    if(cardswon.length == cardArray.length/2){
        resultDisplay.textContent='congrats you found them all'
    }
}

function flipcard(){
   
 let cardId=this.getAttribute('data-id')// allowing us to interact with whatever element we click  
 
 cardschosen.push(cardArray[cardId].name)
cardschosenids.push(cardId)
this.setAttribute('src',cardArray[cardId].img)
if(cardschosen.length ===2){
    setTimeout( checkMatch,500)
}

}
