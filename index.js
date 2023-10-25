function knight(x,y){
    let array = []
    array.push(x,y)
    return array
    
}


function calculateChildren(x,y,array){
  let childArray= []
  let resultX = array[0] + x;
  let resultY = array[1] + y;
  if(resultX < 0 || resultY < 0)return 'no child'

  childArray.push(resultX,resultY)
  console.log()
return (childArray)
}

class Node{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.child1 = calculateChildren(-1,2,knight(x,y));
        this.child2 = calculateChildren(-2,1,knight(x,y))
        this.child3 = calculateChildren(-2,-1,knight(x,y))
        this.child4 = calculateChildren(-1,-2,knight(x,y))
        this.child5 = calculateChildren(1,-2,knight(x,y))
        this.child6 = calculateChildren(2,-1,knight(x,y))
        this.child7 = calculateChildren(2,1,knight(x,y))
        this.child8 = calculateChildren(1,2,knight(x,y))
        
    }

  
}
class GameBoard{
    constructor(n) {
        this.n = n;
        this.grid = this.generateArray(n);
      }

    generateArray(n) {
        const arr = [];
        const result = []
        for (let i = 0; i <= n; i++) {
          for (let j = 0; j <= n; j++) {
            arr.push([i, j]);
          }
          
        }
        result.push(arr)
        return result;
      }

    
    }



  
  const n = 10;
  
  let newthing = new GameBoard(n);
  
  console.log(newthing.grid);









//chessboard
//knight
//board locations
//possible moves
//nodes
//children