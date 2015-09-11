// Node 4.0.0 requires strict mode for ES6
'use strict';

///////////////////////////////////////////////////////////////////////////////////
// Take this ES5 function for example
///////////////////////////////////////////////////////////////////////////////////
var greeting = function(message, name){
    return message + name;
}

console.log(greeting('Hello', ' Adam'));
// => Hello Adam


///////////////////////////////////////////////////////////////////////////////////
// Now rewritten using ES6 arrow function
// The only difference is the fat arrow on the right side vs. function keyword on the left
///////////////////////////////////////////////////////////////////////////////////
var arrowGreeting = (message, name) => {
    return message + name;
}

console.log(arrowGreeting('Hey there', ' Sexy'));
// => Hey there Sexy


///////////////////////////////////////////////////////////////////////////////////
// We can refactor this
// Notice that we remove the curly braces and the return keyword
// The return is now implied
///////////////////////////////////////////////////////////////////////////////////
var arrowGreeting = (message, name) => message + name;

console.log(arrowGreeting('Hey it works', ' Dude!'));
// => Hey it works Dude!


///////////////////////////////////////////////////////////////////////////////////
// Here is an example with only one argument
// You can omit the parenthesis
///////////////////////////////////////////////////////////////////////////////////
var squared = x => x * x;

console.log('The square root of 4 is:', squared(4));
// => The square root of 4 is: 16


///////////////////////////////////////////////////////////////////////////////////
// A function with no arguments does require the parenthesis
///////////////////////////////////////////////////////////////////////////////////
var apple = 'manzana';
var logApple = () => console.log('The apple:', apple);

logApple();
// => The apple: manzana


///////////////////////////////////////////////////////////////////////////////////
// What about THIS?
// The value of 'this' inside an arrow function is always inherited from the enclosing scope
// You no longer need to declare 'var self = this' when using an arrow function
///////////////////////////////////////////////////////////////////////////////////
var fruit = {
    name: 'Pineapple',
    quantity: 54,
    price: 2.00,
    totalCost: function(){
        // You dont need to store 'this' in a var anymore for use in the inner function
        // var self = this;
        var logCost = () => console.log('The total cost is', this.quantity * this.price);
        logCost();
    }
}

fruit.totalCost();
// => The total cost is 108



