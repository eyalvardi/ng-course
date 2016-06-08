var Point = (function () {
    // static private
    var counter = 0;
    // constructor
    function Point(x,y) {
        this.x = x;
        this.y = y;
        counter++;
    }
    // public methods
    Point.prototype.getX = function () {
        return this.x;
    };

    // public static methods
    Point.getCounter = function () {
        return counter;
    };

    return Point;
})();

var  p = new Point(1,2);
Point.getCounter(); // 1
new Point(3,3);
Point.getCounter(); // 2;









var p = Point(1,2);
var p = new Point(1,2); // {x:1,y:2}
p.getX(); //1
p.x = 2;
p.getX(); // 1


var p = {__proto__:Point.prototype};
Point.call(p,1,2);




function bind(THIS,fn) {
    return function () {
        fn.apply(THIS,arguments);
    }
}




var clac = {
    value : 0,
    add: function (a,b) {
        console.log(this.value);
        return a+b;
    }
};

calc.add();
var add = calc.add;
add()










var color = "blue";
changeColor();

/////////////////////////
function changeColor() {

    var anotherColor = "red";

    function swapColors(){
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        // color, anotherColor, and tempColor
        // are all accessible here.
    }
    // color and anotherColor are accessible here,
    // but not tempColor.
    swapColors();
}
var old_changeColor = changeColor;
changeColor = function () {
    // TODO
    old_changeColor.apply(this,arguments);
    //TODO
};
