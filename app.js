
import { initialCube } from './utils/constants.js';
import { 
    rotateTopRowLeft,
    rotateMiddleRowLeft,
    rotateBottomRowLeft } from './modules/RotateLeft.js';
import { 
    rotateTopRowRight,
    rotateMiddleRowRight,
    rotateBottomRowRight
 } from './modules/RotateRight.js';


const rCube = []
initialCube.forEach(e => rCube.push([ ...e ]))
console.log(1,rCube)

rotateBottomRowRight(rCube)
console.log(2,rCube)

rotateMiddleRowRight(rCube)
console.log(3,rCube)

rotateTopRowRight(rCube)
console.log(4,rCube)
