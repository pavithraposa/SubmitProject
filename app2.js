let counter=0;
let firstSelection="";
let secondSelection="";
let playerTurn=true;

let playerName=document.querySelector('#playerdisplay');
let historytext=document.querySelector("#historyDisplay");
let startBtn=document.querySelector('#start');
let resetButton=document.querySelector('.resetbtn');
let exitBtn=document.querySelector('.exitbtn');
//let historytext1=document.querySelector("#newhistoryvalue");

let firstCard=false;
const displayScore1 = document.querySelector('#score1');
const displayScore2 = document.querySelector('#score2'); 
const cards=document.querySelectorAll(".images");
cards.forEach(card=>card.addEventListener('click',flipcard));
//shuffleCards();
let score1=0;
let score2=0;
playerName.innerHTML= `${localStorage.getItem("textvalue")} is Playing`;
document.querySelector("#playerscore1").innerHTML = ` ${localStorage.getItem("textvalue")} :`;
document.querySelector("#playerscore2").innerHTML =` Computer:`
let cardLength=cards.length;


//historytext1.innerText= ` ${localStorage.getItem("newhistory")}Hi`;


function shuffleCards(){
    cards.forEach(card=>{
        let randomIndex=Math.floor(Math.random()*6);
        card.style.order=randomIndex;
    });
}

function computer(){
    setTimeout(()=>{
        
        both();
    },800);
}

function flipcard(){
    
    //if(this===firstSelection) return;
    this.classList.add("clicked");

    if(!firstCard){
        firstCard=true;
        firstSelection=this;

        return; 
    }
     
    firstCard=false;
    secondSelection=this;
    checkMatch();
}

//let cards = document.querySelector('.memory-cards'); //select all the clickable cards
function both() {
    cardLength=cards.length

    let cardId1=Math.floor(Math.random()*cards.length);

	//let cardId1 = Math.random() * cards.length; //get a random number in the length of cards
    console.log(cards.length)
    let cardId2=Math.floor(Math.random()*cards.length); //second number
    
        

    cards[cardId1].click(flipcard); //fire a click event on both cards
    cards[cardId2].click(flipcard);

}


function checkMatch(){

    if(firstSelection.getAttribute("character") === secondSelection.getAttribute("character")){ 

        firstSelection.classList.add("checked"); 
        firstSelection.classList.remove("clicked");
        secondSelection.classList.add("checked");
        secondSelection.classList.remove("clicked");

        
        
        setTimeout(()=>{
                
            firstSelection.classList.remove("checked"); 
            secondSelection.classList.remove("checked");  
            firstSelection.classList.add("remove");
            secondSelection.classList.add("remove");

            firstSelection.removeEventListener('click',flipcard);
            secondSelection.removeEventListener('click',flipcard); 
        
            cardLength--;
            
            
        },200);
        

        if(playerTurn){

            score1+=2
            displayScore1.textContent=score1.toString(); 
            historytext.innerText+=`${localStorage.getItem("textvalue")} found ${firstSelection.getAttribute("character")+'\n'}`;  
        }else{

            score2+=2
            displayScore2.textContent=score2.toString();
            historytext.innerText+=`Computer found ${firstSelection.getAttribute("character")+'\n'}`;
            computer();
        }

        

    }else{
       
        firstSelection.classList.add("change");
        secondSelection.classList.add("change");

        setTimeout(()=>{
            firstSelection.classList.remove("change");
            firstSelection.classList.remove("clicked");
            secondSelection.classList.remove("change");
            secondSelection.classList.remove("clicked");

        },200);

        if(!playerTurn){
          
            playerTurn=true;
            playerName.innerHTML= `Player: ${localStorage.getItem("textvalue")}'s turn`;
            
        }
        else if(playerTurn){
            playerTurn=false;
            playerName.innerHTML= `Player: Computer's turn`; 
            computer();
        }
    }
}

resetButton.addEventListener('click',event=>{
    //historytext1.innerText+=historytext.innerText;
    //console.log(historytext1.innerText);

    cards.forEach(card=>{
        //historytext.innerText;
        card.classList.remove("clicked");
        card.classList.remove("remove");
        card.addEventListener('click',flipcard);
    });

    shuffleCards();                   
});

exitBtn.addEventListener('click',event=>{
    historytext.innerText;
})



   






