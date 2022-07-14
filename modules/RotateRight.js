import { 
    counterClockwiseRotator,
    clockwiseRotator
 } from "../utils/constants.js";

export const rotateTopRowRight = (rCube) => {
    const priorCube = [];
    rCube.forEach( e => priorCube.push([ ...e]))

    //rotateHorizontally facing sides
    //counterClockwiseRotation topRow[2, 5, 8] middleRow[1,4,7] bottomRow[0,3,6]
          //            

    for ( let i = 0 ; i < 4 ; i++ ){
        rCube[i].splice(0,3)
    }

    for ( let i = 2; i >= 0; i-- ){
        rCube[0].unshift( [ ...priorCube[1][i]].reduce( (a,b) => a+b )) 
        rCube[1].unshift( [ ...priorCube[2][i]].reduce( (a,b) => a+b ))  
        rCube[2].unshift( [ ...priorCube[3][i]].reduce( (a,b) => a+b )) 
        rCube[3].unshift( [ ...priorCube[0][i]].reduce( (a,b) => a+b ))        
        //rotateVertically facing sides
    }

    rCube[4].forEach( (e, i) => rCube[4][i] = priorCube[4][counterClockwiseRotator[i]])
}

export const rotateMiddleRowRight = (rCube) => {
    const priorCube = [];
    rCube.forEach( e => priorCube.push([ ...e]))

    //rotateHorizontally facing sides
    //counterClockwiseRotation topRow[2, 5, 8] middleRow[1,4,7] bottomRow[0,3,6]
          //            
    for ( let i = 0 ; i < 4 ; i++ ){
        rCube[i].splice(0,6)
    }

    for ( let i = 5; i >= 3; i-- ){
        rCube[0].unshift( [ ...priorCube[1][i]].reduce( (a,b) => a+b )) 
        rCube[1].unshift( [ ...priorCube[2][i]].reduce( (a,b) => a+b ))  
        rCube[2].unshift( [ ...priorCube[3][i]].reduce( (a,b) => a+b )) 
        rCube[3].unshift( [ ...priorCube[0][i]].reduce( (a,b) => a+b ))        
        //rotateVertically facing sides
    }
    for ( let i = 2; i >= 0; i-- ){
        rCube[0].unshift( [ ...priorCube[0][i]].reduce( (a,b) => a+b )) 
        rCube[1].unshift( [ ...priorCube[1][i]].reduce( (a,b) => a+b ))  
        rCube[2].unshift( [ ...priorCube[2][i]].reduce( (a,b) => a+b )) 
        rCube[3].unshift( [ ...priorCube[3][i]].reduce( (a,b) => a+b ))        
        //rotateVertically facing sides
    }

}

export const rotateBottomRowRight = (rCube) => {
    const priorCube = [];
    rCube.forEach( e => priorCube.push([ ...e]))
    //rotateHorizontally facing sides
    //counterClockwiseRotation topRow[2, 5, 8] middleRow[1,4,7] bottomRow[0,3,6]
          //            

    for ( let i = 0 ; i < 4 ; i++ ){
        rCube[i].splice(6,3)
    }

    for ( let i = 6; i < 9; i++ ){
        rCube[0].push( [ ...priorCube[1]][i]) 
        rCube[1].push( [ ...priorCube[2]][i])  
        rCube[2].push( [ ...priorCube[3]][i]) 
        rCube[3].push( [ ...priorCube[0]][i])        
        //rotateVertically facing sides
    }

    rCube[5].forEach( (e, i) => rCube[5][i] = priorCube[5][clockwiseRotator[i]])
}