import { counterClockwiseRotator } from "../utils/constants.js";

export const rotateTopRowRight = (rCube) => {
    const priorCube = [];
    rCube.forEach( e => priorCube.push([ ...e]))

    //rotateHorizontally facing sides
    //counterClockwiseRotation topRow[2, 5, 8] middleRow[1,4,7] bottomRow[0,3,6]
          //            
    for (let i = 0; i < 3; i++ ){
        rCube[0].shift()// priorCube[1][i] // front will be left
        rCube[1].shift()// = priorCube[2][i] // left will be left will be back
        rCube[2].shift()// = priorCube[3][i] // back will be right
        rCube[3].shift() //= priorCube[0][i] // right will be front
    }

    for ( let i = 2; i > 0; i-- ){
        rCube[0].unshift( [ ...priorCube[1][i]].reduce( (a,b) => a+b )) 
        rCube[1].unshift( [ ...priorCube[2][i]].reduce( (a,b) => a+b ))  
        rCube[2].unshift( [ ...priorCube[3][i]].reduce( (a,b) => a+b )) 
        rCube[3].unshift( [ ...priorCube[0][i]].reduce( (a,b) => a+b ))        
        //rotateVertically facing sides
    }

    rCube[4].forEach( (e, i) => rCube[4][i] = rCube[4][counterClockwiseRotator[i]])
}