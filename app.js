
import { initialCube } from './utils/constants.js';
import { rotateTopRowLeft } from './modules/RotateLeft.js';
import { rotateTopRowRight } from './modules/RotateRight.js';

const rCube = []
initialCube.forEach(e => rCube.push([ ...e ]))
console.log(1,rCube[0])
rotateTopRowLeft(rCube)
console.log(2,rCube[0])

rotateTopRowRight(rCube)
console.log(3,rCube[0])
