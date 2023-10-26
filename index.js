class Board{
constructor(array){
  this.array = array
}

boardGenerator(value){
  let array = [];
for(let x = 0; x < value;x++){
 let row = [];
 for(let y = 0; y < value;y++){
  row.push([x,y])
 }
 array.push(row)
}
return array
}
  


}




class Node{
  constructor(knight){
    this.knightX = knight[0];
    this.knightY = knight[1];
    this.child1 = null
    this.child2 = null
    this.child3 = null
    this.child4 = null
    this.child5 = null
    this.child6 = null
    this.child7 = null
    this.child8 = null
  }

}

function knightPosition(x,y){
  let array = [x,y]
  let knight = new Node(array)
  possibleMoves(knight)
  return knight
}


function possibleMoves(knight){

let move1 = calculator([-1,2],knight);
let move2 = calculator([-2,1],knight);
let move3 = calculator([-2,-1],knight);
let move4 = calculator([-1,-2],knight);
let move5 = calculator([1,-2],knight);
let move6 = calculator([2,-1],knight);
let move7 = calculator([2,1],knight);
let move8 = calculator([1,2],knight);
knight.child1 = move1
knight.child2 = move2
knight.child3 = move3
knight.child4 = move4
knight.child5 = move5
knight.child6 = move6
knight.child7 = move7
knight.child8 = move8

}


function calculator(array, knight){
  let knightX = knight.knightX;
  let knightY = knight.knightY;
  let resultX = array[0] + knightX;
  let resultY = array[1] + knightY;
  return [resultX,resultY]
}




 console.log(knightPosition(3,3))




 let newGame = new Board
 console.log(newGame.boardGenerator(8))