let currentPlayer="X"
let winner=null
let tie=false
let gamedraw=false



const winCells=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
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
    gameGrid.splice(0,1,1)
    console.log(gameGrid)
  }
  else{
    gameGrid2.splice(0,1,0)
    console.log(gameGrid2)
  }  
  }

  
function updategameBoard2(){
  cell2=document.getElementById("1")
  cell2.innerHTML=currentPlayer;
  if(currentPlayer==="X"){
    gameGrid.splice(1,1,1)
  console.log(gameGrid)
  }
  else{
    gameGrid2.splice(1,1,0)
    console.log(gameGrid2)
  } 
  }
function updategameBoard3(){
  cell3=document.getElementById("2")
  cell3.innerHTML=currentPlayer;
  if(currentPlayer==="X"){
    gameGrid.splice(2,1,1)
  console.log(gameGrid)
  }
  else{
    gameGrid2.splice(2,1,0)
    console.log(gameGrid2)
  } 
  console.log(gameGrid)
}
function updategameBoard4(){
  cell4=document.getElementById("3")
  cell4.innerHTML=currentPlayer;
  if(currentPlayer==="X"){
    gameGrid.splice(3,1,1)
  console.log(gameGrid)
  }
  else{
    gameGrid2.splice(3,1,0)
    console.log(gameGrid2)
  } 

}
function updategameBoard5(){
  cell5=document.getElementById("4")
  cell5.innerHTML=currentPlayer;
  if(currentPlayer==="X"){
    gameGrid.splice(4,1,1)
  console.log(gameGrid)
  }
  else{
    gameGrid2.splice(4,1,0)
    console.log(gameGrid2)
  } 

}
function updategameBoard6(){
  cell6=document.getElementById("5")
  cell6.innerHTML=currentPlayer;
  if(currentPlayer==="X"){
    gameGrid.splice(5,1,1)
  console.log(gameGrid)
  }
  else{
    gameGrid2.splice(5,1,0)
    console.log(gameGrid2)
  } 

}
function updategameBoard7(){
  cell7=document.getElementById("6")
  cell7.innerHTML=currentPlayer;
  if(currentPlayer="X"){
    gameGrid.splice(6,1,1)
  console.log(gameGrid)
  }
  else{
    gameGrid2.splice(6,1,0)
    console.log(gameGrid2)
  } 

}
function updategameBoard8(){
  cell8=document.getElementById("7")
  cell8.innerHTML=currentPlayer;
  if(currentPlayer==="X"){
    gameGrid.splice(7,1,1)
    console.log(gameGrid)
  }
  else{
    gameGrid2.splice(7,1,0)
    console.log(gameGrid2)
  } 

}
function updategameBoard9(){
  cell1=document.getElementById("8")
  cell1.innerHTML=currentPlayer;
  if(currentPlayer==="X"){
    gameGrid.splice(8,1,1)
    console.log(gameGrid)
  }
  else{
    gameGrid2.splice(8,1,0)
    console.log(gameGrid2)
  } 

}




function checkWinner1(){
  for(i=0;i<gameGrid.length;i++){
    console.log(gameGrid[i])
  }
}

