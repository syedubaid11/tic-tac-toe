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

let gameboard={
  grid:gameGrid
}

console.log(gameboard)


document.querySelectorAll("cell")

function updategameBoard1(){
  cell1=document.getElementById("0")
  cell1.innerHTML=currentPlayer;

}
function updategameBoard2(){
  cell2=document.getElementById("1")
  cell2.innerHTML=currentPlayer;

}
function updategameBoard3(){
  cell3=document.getElementById("2")
  cell3.innerHTML=currentPlayer;
}
function updategameBoard4(){
  cell4=document.getElementById("3")
  cell4.innerHTML=currentPlayer;

}
function updategameBoard5(){
  cell5=document.getElementById("4")
  cell5.innerHTML=currentPlayer;

}
function updategameBoard6(){
  cell6=document.getElementById("5")
  cell6.innerHTML=currentPlayer;

}
function updategameBoard7(){
  cell7=document.getElementById("6")
  cell7.innerHTML=currentPlayer;

}
function updategameBoard8(){
  cell8=document.getElementById("7")
  cell8.innerHTML=currentPlayer;

}
function updategameBoard9(){
  cell1=document.getElementById("8")
  cell1.innerHTML=currentPlayer;

}
function changePlayer(){
  currentPlayer=(currentPlayer=="X")?"O":"X";
  console.log("player changed")

}