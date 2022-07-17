import { 
    counterClockwiseRotator,
    clockwiseRotator
 } from "../utils/constants.js";

export const rotateTopRow = (rCube, direction) => {
    const priorCube = [];
    rCube.forEach( e => priorCube.push([ ...e]))

    //rotate vertical squares      
    for ( let i = 0 ; i < 4 ; i++ ){

        rCube[i].splice(0,3)

        for ( let j = 2 ; j >= 0; j-- ){

            //add first 3 (j) from the other side (k)
            const k = direction === "left" ?  ( i !== 0 ? i - 1 : 3 ) : ( i < 3 ? i + 1 : 0 )
            rCube[i].unshift( [ ...priorCube[k][j]].reduce( (a,b) => a+b ))      
        }   

    }

    //spin the top facing squares 90deg
    const rotator = direction === "left" ? clockwiseRotator : counterClockwiseRotator
    rCube[4].forEach( (e, i) => rCube[4][i] = priorCube[4][rotator[i]])

}

export const rotateMiddleRow = (rCube, direction) => {
    const priorCube = [];
    rCube.forEach( e => priorCube.push([ ...e]))

    // four sides, remove first six squares 
    for ( let i = 0 ; i < 4 ; i++ ){ 
        rCube[i].splice(0,6)

        //add middle 3 (j) from the other side (k)
        for ( let j = 5; j >= 3; j-- ){
            const k = direction === "left" ?  ( i !== 0 ? i - 1 : 3 ) : ( i < 3 ? i + 1 : 0 )  
            rCube[i].unshift( [ ...priorCube[k][j]].reduce( (a,b) => a+b ))      
        }

        // add the top row unchanged
        for ( let j = 2; j >= 0; j-- ){
            rCube[i].unshift( [ ...priorCube[i][i]].reduce( (a,b) => a+b )) 
        }
    }
}

export const rotateBottomRow = (rCube, direction) => {
    const priorCube = [];
    rCube.forEach( e => priorCube.push([ ...e]))           

    for ( let i = 0 ; i < 4 ; i++ ){
        rCube[i].splice(6,3)
        
        for ( let j = 6; j < 9; j++ ){
            //add last 3 (j) from the other side (k)
            const k = direction === "left" ?  ( i !== 0 ? i - 1 : 3 ) : ( i < 3 ? i + 1 : 0 )
            rCube[i].push( [ ...priorCube[k]][j])              
        }
    }
     //spin the bottom facing squares 90deg
    const rotator = direction === "left" ? counterClockwiseRotator : clockwiseRotator
    rCube[5].forEach( (e, i) => rCube[5][i] = priorCube[5][rotator[i]])
}