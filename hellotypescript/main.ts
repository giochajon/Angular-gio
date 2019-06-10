
import { Point } from './point';  

let point = new Point(1,2);
let x = point.x;
point.x = 10;
point.draw();


function log(message) {
    console.log (message)
}

var message = 'Hello world'

log(message);