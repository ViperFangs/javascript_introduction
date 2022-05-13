console.log('Hello');
console.log('World!');

// comments are made with //

let currentUserName = 'Aarya'; //we use camelCase for variables
const BIRTHDAY = '04.01.2002'; //we name constant as UpperCase

// Variables 

alert(BIRTHDAY); //alert shouts a value on the screen

console.log(500 + 250);
console.log(1 + 2 + 3 + 4 + 5 + 6);
console.log((4+6+9)/ 77);

let a = 10;
console.log(a);
console.log(9*a);
let b = 7 * a;
console.log(b);

const MAX = 57;
let actual = MAX -13;
let percentage = actual/MAX;

typeof percentage; //Tells the type of the variable

let myNumber = '77'; //string variable
typeof myNumber; //string
myNumber = myNumber + 3; //(or mynumber += 3;) This will print 773 instead of 80 as myNumber is a string
Number(myNumber) + 3; // Number function changes string to number (Answer here is 80)

let c = a**5; // ** is for exponents 

console.log(a + b / 10 + 5); //operator precedence: b/10 will be calculated first 

if(a === b){} // === is strict equality, checks value and datatype. == just checks the value but not the datatype.

console.log(2 + 2 + '1' ); // "41" and not "221"
console.log('1' + 2 + 2); // "122" and not "14", the complier sees the first string and treats all the other values in the parameter as strings

//only + adds the strings with numbers. All other operations will not consider strings and treat it as numbers. e.g.
console.log( 6 - '2' ); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers

function add7 (x) {
    return x+7;
}

function multiply (i, j){ //this is a function declaration
    return i*j;
}

let capitalize = (str) => { //this is a function expression
    let capitalStr = str.toUpperCase()[0]; //returns the uppercase letter at the 0th position in str
    let returnStr = str.replace(str.charAt(0), capitalStr); //replaces the charAt 0th value with its uppercase version, doesn't matter if the str is uppercase or lowercase or both
    return returnStr;  
};

