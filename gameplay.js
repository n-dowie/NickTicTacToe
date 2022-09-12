let turn = "O";
let winner = 0;
let player;
let board = ["", "", "", "", "", "", "", "", ""];
let divID;
let Xwinner = 0;
let Owinner = 0;

function setDivID(gridMove){
  divID = gridMove;
  checkWinner(divID)
}

function checkWinner(divID){
	if (winner === 1){
  	alert("There's Been a Winner!");
  }  else {
    checkSpace(divID);
  }
}


function checkSpace(divID){
	if(document.getElementById(divID).innerHTML !== ""){
  	alert("You Can't Go There");
  }  else {
        play(divID);
  }
}

function play(divID){
	if (turn === "O"){
  	document.getElementById(divID).innerHTML = "O";
    setBoard(divID);    
  }  else {
   	document.getElementById(divID).innerHTML = "X";
    setBoard(divID);
   }
}

function setBoard(squareID){
  if (turn === "O"){
  	board[squareID] = "O";
    setTurn(); 
  } else {
      board[squareID]= "X";
     setTurn();   
    }
  }

function setTurn(divID){
	if(turn === "X") {
  	turn = "O";
    whosTurn();
  } else {
  	turn = "X";
    whosTurn();
  }
}

function whosTurn(){
  if(turn === "X") {
    document.getElementById("playerText").innerHTML = "It's Player X's Turn";
    document.getElementById("playerText").style.color = "red";
    defineColor();
   } else {
    document.getElementById("playerText").innerHTML = "It's Player O's Turn";
    document.getElementById("playerText").style.color = "navy";
    defineColor();
  }
}

function defineColor(){
  if (turn === "X") {
    document.getElementById(divID).style.color = "navy"
    findWinner();
  }  else  {
    document.getElementById(divID).style.color = "red";
    findWinner();
  }
}

function findWinner(){

    if (board[0] === board[1] && board[0] === board[2] && board[0] !== '') {
     setwinner();
     }
  
    else if (board[3] === board[4] && board[3] === board[5] && board[3] !== '') {
    setwinner();
     }
      
    else if (board[6] === board[7] && board[6] === board[8] && board[6] !== '') {
    setwinner();
     }
  
    else if (board[0] === board[3] && board[0] === board[6] && board[0] !== '') {
    setwinner();
     }
    
    else if (board[1] === board[4] && board[1] === board[7] && board[1] !== '') {
    setwinner();
     }

    else if (board[2] === board[5] && board[2] === board[8] && board[2] !== '') {
    setwinner();
     }
  
    else if (board[0] === board[4] && board[0] === board[8] && board[0] !== '') {
    setwinner();
     }
  
    else if (board[2] === board[4] && board[2] === board[6] && board[2] !== '') {
    setwinner();
    } 
    else {
      checkDraw();
    }  
	}

function checkDraw(){
    if (board[0] !== "" && board[1] !== "" && board[2] !== "" && board[3] !== "" && board[4] !== "" && board[5] !== "" && board[6] !== "" && board[7] !== "" && board[8] !== ""){
      alert("It's a Draw, Reset the Board");
    }
  }
  
function setwinner(){
  winner = 1;
  scoreBoard();
}



function scoreBoard(){
  if (turn === "O"){
   Xwinner++;
   displayScores();
  }  else  {
   Owinner++;
   displayScores();
  }
}
  
function displayScores(){
  document.getElementById("Xwin").innerHTML = Xwinner;
  document.getElementById("Owin").innerHTML = Owinner;
  document.getElementById("winnerText").innerHTML = "There's a Winner!";
}
function resetWinner(){
	winner = 0;
  resetTurn();
}
 
 function resetTurn(){
	turn = "O";
  resetUI();
 }
 
function resetUI(){
  for (let i = 0; i < 9; i++){
  	document.getElementById(i).innerHTML = "";
  }
  resetBoard();
 }

 function resetBoard(){
  board = ["", "", "", "", "", "", "", "", ""];
  resetWinnerText()
 }

 function resetScore(){
  location.reload();
 }
 
  function resetWinnerText(){
  document.getElementById("winnerText").innerHTML = "No Winner Yet";
  document.getElementById("playerText").innerHTML = "It's Player O's Turn";
  document.getElementById("playerText").style.color = "navy";
 }
 
 