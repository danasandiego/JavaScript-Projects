function addition_Function(){
    var addition = 2+2;
    document.getElementById("Math").innerHTML = "2+2=" + addition;
}

function subtraction_Function(){
    var Subtraction = 5-2;
    document.getElementById("Math").innerHTML = "5-2 =" + Subtraction;

}

function multiplication(){
    var simple_Math = 6*8;
    document.getElementById("Math").innerHTML = " 6 x 8 =" + simple_Math;
}

function division(){
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = " 48 / 6 =" + simple_Math;
}
//multiple operators
function more_Math(){
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}
//modulus
function modulus_Operator(){
    var simple_Math = 25%6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}
//negation
function negation_Operator(){
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}
//increment & decrement
function increment(){
    var x = 5;
    x++;
    document.getElementById("Math").innerHTML = x;
}
function decrement(){
    var x = 5;
    x--;
    document.getElementById("Math").innerHTML = x;
}
//random number from 0-100
function random(){
    window.alert(Math.random() * 100);
}
//rounding off number
function math_Object(){
    var x = 5.6;
    document.getElementById("Math").innerHTML = Math.round(x);
}