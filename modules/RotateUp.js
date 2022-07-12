export function rotateLeftRowUp(rCube) {
    const priorCube = [];
    rCube.forEach( e => priorCube.push([ ...e]))

   
    //rotateVertically facing sides
    let i=0;
    while ( i<=6 ){
        i+=3
        const coresp5= [ ...priorCube[5][i]].reduce( (a,b) => a+b ) // corresponding square on bottom
        rCube[0].splice(i,1,coresp5) // priorCube[5][i] // front will be bottom
        
        const coresp2 = [ ...priorCube[2][i]].reduce( (a,b) => a+b ) // corresponding square on back
        rCube[5].splice(i,1,coresp2) // = priorCube[2][i] // bottom will be back

        const coresp4 = [ ...priorCube[4][i]].reduce( (a,b) => a+b ) // corresponding square on top
        rCube[2].splice(i,1,coresp4) // = priorCube[3][i] // back will be top
        
        const coresp0= [ ...priorCube[0][i]].reduce( (a,b) => a+b ) // corresponding square on top
        rCube[4].splice(i,1,coresp0) //= priorCube[0][i] // top will be front
    }

    //rotateHorizontally facing side on left
        //counterClockwiseRotation topRow[2, 5, 8] middleRow[1,4,7] bottomRow[0,3,6]

    rCube[1].forEach( (e, i) => rCube[1][i] = priorCube[1][counterClockwiseRotator[i]])
}