/**
 * Created by Eyal on 9/2/2016.
 */
import {NgModule} from "@angular/core";
import {SquareComponent} from "./square.component";
import {CircleComponent} from "./circle.component";
import {RectangleComponent} from "./rectangle.component";
import {TriangleComponent} from "./triangle.component";

const shapes = [
     SquareComponent
    ,RectangleComponent
    ,CircleComponent
    ,TriangleComponent
];

@NgModule({
    declarations   :[ shapes ],
    exports        :[ shapes ],
    entryComponents:[ shapes ]
})
export default class ShapesModule{
    shapes = new Map();

    constructor(){
        this.shapes.set( 'Square'    , SquareComponent);
        this.shapes.set( 'Rectangle' , RectangleComponent);
        this.shapes.set( 'Circle'    , CircleComponent);
        this.shapes.set( 'Triangle'  , TriangleComponent);
    }
}