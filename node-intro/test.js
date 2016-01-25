'use strict'; // Puts interpreter into strict mode so if we accidently create a var it doesn't create one for us

var x = 1;

function doubleIt(x) { 
    x = x * 2;
}

doubleIt(x); 
console.log(x); // The output will be 1, not 2, because the paramater name in doubleIt is hiding the global variable

//-------------------------------------------------------------------------------------------
var name = 'Dalia';

function getHello(name) {
    return function() {
        console.log(name);
    }
}

var sayHello = getHello(name);
name = 'Fred';
sayHello(); // First name gets printed because the function you return has access to the stack returned at the time of the function. So it has access to Dalia.


