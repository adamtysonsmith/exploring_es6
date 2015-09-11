// Node 4.0.0 requires strict mode for ES6
'use strict';

// New Variable Declarations in ES6
const immutable = 6;
let apple = 'manzana';

console.log('Immutable value is:', immutable);
// => Immutable value is: 6

console.log('Apple is:', apple);
// => Apple is: manzana

// Const variables are immutable, this will throw an error
//immutable = 5;
// => TypeError: Assignment to constant variable.

// Let variables behave the same way as vars
apple = 'la manzana';
console.log('The new apple:', apple);
// => The new apple: la manzana

// Both const and let have block scope!
if(true === true){
    let apple = 'Granny Smith';
    const immutable = 7;
    console.log('The block scoped apple and immutable value:', apple, immutable);
}
// => The block scoped apple and immutable value: Granny Smith 7

// Conclusion
// The block scoping is super awesome, it is a bit easier to manage than function scope
// Const is great to ensure immutability