import { counterClockwiseRotator, clockwiseRotator } from "../utils/constants.js";
export function rotateColumnUp(rCube, side) {
    const priorCube = [];
    rCube.forEach( e => priorCube.push([ ...e]))

    let m = 0;
    while ( m <= 6 ) {
        const n = 8 - m 
        const i = side === "left" ? m : n // m's locations 0,3,6 are (m) left 
        const j = side === "left" ? n : m // n is the 180 rotated corresponding location
        // *rotating from the bottom to the front is a v180 deg orientation
        const coresp5= [ ...priorCube[5]][j] // corresponding square on bottom is 180 orientation
        rCube[0].splice(i,1,coresp5) // priorCube[5][i] // front will be bottom
        
        const coresp2 = [ ...priorCube[2]][j] // corresponding square on backside
        rCube[5].splice(j,1,coresp2) // = priorCube[2][i] // bottom will be replaced by back

        const coresp4 = [ ...priorCube[4]][i] // corresponding square on top
        rCube[2].splice(j,1,coresp4) // = priorCube[3][i] // backside bottom-right will be topside upper-left
        
        const coresp0= [ ...priorCube[0]][i] // corresponding square on front
        rCube[4].splice(i,1,coresp0) //= priorCube[2][i] // top will be replaced by front

        m += 3
    }

    rCube[1].forEach( (e, i) => rCube[1][i] = priorCube[1][counterClockwiseRotator[i]])

}

export function rotateColumnDown(rCube, side) {
    const priorCube = [];
    rCube.forEach( e => priorCube.push([ ...e]))
   
    let m = 0;
    while ( m <= 6 ) {
        const n = 8 - m 
        const i = side === "left" ? m : n // m's locations 0,3,6 are (m) left 
        const j = side === "left" ? n : m // n is the 180 rotated corresponding location
         // *rotating from the bottom to the front is a v180 deg orientation
        const coresp5= [ ...priorCube[5]][j] // corresponding square on bottom is 180 orientation
        rCube[2].splice(j,1,coresp5) // back will be bottom
        
        const coresp2 = [ ...priorCube[2]][j] // corresponding square on backside
        rCube[4].splice(i,1,coresp2) // top will be replaced by back

        const coresp4 = [ ...priorCube[4]][i] // corresponding square on topside
        rCube[0].splice(i,1,coresp4) // frontside square arrives from topside         
       
        const coresp0= [ ...priorCube[0]][i] // corresponding square on front
        rCube[5].splice(j,1,coresp0) //= priorCube[2][i] // bottom will be replaced by front

        m += 3
    }

    rCube[1].forEach( (e, i) => rCube[1][i] = priorCube[1][clockwiseRotator[i]])

}


