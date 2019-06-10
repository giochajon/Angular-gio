export class Point {


constructor  (private _x?:number, private _y?:number){
    
}

draw() {console.log('x: '+ this.x +'y: ' +this.y)}

get x() {return this.x;}

set x(value){
    if (value < 0 )
        throw new Error('value cannot be less than 0 ');
    this.x = value;
    
}

get y() {return this.y;}

set y(value){
    if (value < 0 )
        throw new Error('value cannot be less than 0 ');
    this.y = value;
    
}

}
