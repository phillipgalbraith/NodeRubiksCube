import { clockwiseRotator } from "../utils/constants.js";
export const rotateTopRowLeft = (rCube) => {
    const priorCube = [];
    rCube.forEach( e => priorCube.push([ ...e]))

          //            
    for (let i = 0; i < 3 ; i++) {
        rCube[0].shift()
        rCube[1].shift()
        rCube[2].shift()
        rCube[3].shift() 
    }

    for ( let i = 2 ; i >= 0; i--){
        rCube[0].unshift( [ ...priorCube[3][i]].reduce( (a,b) => a+b )) 
        rCube[1].unshift( [ ...priorCube[0][i]].reduce( (a,b) => a+b ))  
        rCube[2].unshift( [ ...priorCube[1][i]].reduce( (a,b) => a+b )) 
        rCube[3].unshift( [ ...priorCube[2][i]].reduce( (a,b) => a+b ))        
        //rotateVertically facing sides
    }

    rCube[1].forEach( (e, i) => rCube[1][i] = rCube[1][clockwiseRotator[i]])
}