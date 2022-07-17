
import { initialCube } from './utils/constants.js';

import { 
    rotateTopRow,
    rotateMiddleRow,
    rotateBottomRow
 } from './rotate/rows.js';

 import { 
    rotateLeftRowUp,
    rotateLeftRowDown
 } from './rotate/columns';

const rCube = []
initialCube.forEach(e => rCube.push([ ...e ]))
 console.log(1,rCube)

rotateBottomRow(rCube, "right")
 console.log(2,rCube)

rotateMiddleRow(rCube, "right")
 console.log(3,rCube)

rotateTopRow(rCube, "right")
 console.log(4,rCube)
