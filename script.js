let currentPlayer="X"
let winner=null
let tie=false
let gamedraw=false

let gameGrid=[
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

let gameGrid2=[
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

let gameboard={
  grid:gameGrid
}

console.log(gameboard)


function changePlayer(){
  if (currentPlayer==="X"){
    currentPlayer="O";
  }
  else{
    currentPlayer="X";
  }
}

document.querySelectorAll("cell")

function updategameBoard1(){
  cell1=document.getElementById("0")
  cell1.innerHTML=currentPlayer;
  if(currentPlayer==="X"){
    gameGrid[0][0]="X"
    console.log(gameGrid)
  }
  else{
    gameGrid2[0][0]="O"
    console.log(gameGrid2)
  }  
  }

  
function updategameBoard2(){
  cell2=document.getElementById("1")
  cell2.innerHTML=currentPlayer;
  if(currentPlayer==="X"){
  gameGrid[0][1]="X"
  console.log(gameGrid)
  }
  else{
    gameGrid2[0][1]="O"
    console.log(gameGrid2)
  } 
  }
function updategameBoard3(){
  cell3=document.getElementById("2")
  cell3.innerHTML=currentPlayer;
  if(currentPlayer==="X"){
    gameGrid[0][3]="X"
  console.log(gameGrid)
  }
  else{
    gameGrid2[0][3]="O"
    console.log(gameGrid2)
  } 
  console.log(gameGrid)
}
function updategameBoard4(){
  cell4=document.getElementById("3")
  cell4.innerHTML=currentPlayer;
  if(currentPlayer==="X"){
    gameGrid[1][0]="X"
  console.log(gameGrid)
  }
  else{
    gameGrid2[1][0]="O"
    console.log(gameGrid2)
  } 

}
function updategameBoard5(){
  cell5=document.getElementById("4")
  cell5.innerHTML=currentPlayer;
  if(currentPlayer==="X"){
    gameGrid[1][1]="X"
  console.log(gameGrid)
  }
  else{
    gameGrid2[1][1]="O"
    console.log(gameGrid2)
  } 

}
function updategameBoard6(){
  cell6=document.getElementById("5")
  cell6.innerHTML=currentPlayer;
  if(currentPlayer==="X"){
    gameGrid[1][2]="X"
  console.log(gameGrid)
  }
  else{
    gameGrid2[1][2]="O"
    console.log(gameGrid2)
  } 

}
function updategameBoard7(){
  cell7=document.getElementById("6")
  cell7.innerHTML=currentPlayer;
  if(currentPlayer="X"){
    gameGrid[2][0]="X"
  console.log(gameGrid)
  }
  else{
    gameGrid2[2][0]="O"
    console.log(gameGrid2)
  } 

}
function updategameBoard8(){
  cell8=document.getElementById("7")
  cell8.innerHTML=currentPlayer;
  if(currentPlayer==="X"){
    gameGrid[2][1]="X"
    console.log(gameGrid)
  }
  else{
    gameGrid2[2][1]="O"
    console.log(gameGrid2)
  } 

}
function updategameBoard9(){
  cell1=document.getElementById("8")
  cell1.innerHTML=currentPlayer;
  if(currentPlayer==="X"){
    gameGrid[2][2]="X"
    console.log(gameGrid)
  }
  else{
    gameGrid2[2][2]="O"
    console.log(gameGrid2)
  } 

}

function checkWin(){
  if(gameGrid[0][0].textContent === "X" &&
    gameGrid[0][1].textContent === "X" &&
    gameGrid[0][2].textContent === "X"
  ) { console.log("win")}
  else if (
    gameGrid[1][0].textContent === "X" &&
    gameGrid[1][1].textContent === "X" &&
    gameGrid[1][2].textContent === "X"
  ) { console.log("Win")}
   else if (
    gameGrid[2][0].textContent === "X" &&
    gameGrid[2][1].textContent === "X" &&
    gameGrid[2][2].textContent === "X"
  ) { console.log("Win")}
  else if(
    gameGrid[0][1].textContent==="X"&&
    gameGrid[1][1].textContent==="X"&&
    gameGrid[2][2].textContent==="X"
  ){console.log("Win")}
}

checkWin()