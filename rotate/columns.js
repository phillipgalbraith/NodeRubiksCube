import { counterClockwiseRotator, clockwiseRotator } from "../utils/constants.js";
export function rotateLeftColumnUp(rCube) {
    const priorCube = [];
    rCube.forEach( e => priorCube.push([ ...e]))

    //rotateVertically facing sides
    let i=0;
    while ( i<=6 ){
        const j = 8 - i // 180 degree rotated coordinates
        console.log({j})
        // *rotating from the bottom to the front is a v180 deg orientation
        const coresp5= [ ...priorCube[5]][j] // corresponding square on bottom is 180 orientation
        rCube[0].splice(i,1,coresp5) // priorCube[5][i] // front will be bottom
        
        const coresp2 = [ ...priorCube[2]][j] // corresponding square on backside
        rCube[5].splice(j,1,coresp2) // = priorCube[2][i] // bottom will be replaced by back

        const coresp4 = [ ...priorCube[4]][i] // corresponding square on top
        rCube[2].splice(j,1,coresp4) // = priorCube[3][i] // backside bottom-right will be topside upper-left
        
        const coresp0= [ ...priorCube[0]][i] // corresponding square on front
        rCube[4].splice(i,1,coresp0) //= priorCube[2][i] // top will be replaced by front

        i += 3
    }

    rCube[1].forEach( (e, i) => rCube[1][i] = priorCube[1][counterClockwiseRotator[i]])

}

export function rotateLeftColumnDown(rCube) {
    const priorCube = [];
    rCube.forEach( e => priorCube.push([ ...e]))

    //rotateVertically facing sides
    //rotateVertically facing sides
    let i=0;
    while ( i<=6 ){
        const j = 8 - i // 180 degree rotated coordinates
        console.log({j})
        // *rotating from the bottom to the front is a v180 deg orientation
        const coresp5= [ ...priorCube[5]][j] // corresponding square on bottom is 180 orientation
        rCube[2].splice(j,1,coresp5) // back will be bottom
        
        const coresp2 = [ ...priorCube[2]][j] // corresponding square on backside
        rCube[4].splice(i,1,coresp2) // top will be replaced by back

        const coresp4 = [ ...priorCube[4]][i] // corresponding square on top
        rCube[2].splice(i,1,coresp4) // front will be topside         
       
        const coresp0= [ ...priorCube[0]][i] // corresponding square on front
        rCube[5].splice(j,1,coresp0) //= priorCube[2][i] // bottom will be replaced by front

        i += 3
    }

    rCube[1].forEach( (e, i) => rCube[1][i] = priorCube[1][clockwiseRotator[i]])

}