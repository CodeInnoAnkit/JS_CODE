console.log("hii i am codeInnoAnkit");

// in js if we did not initialisize the variable during the decleration then its value is "undefined". undefined simply means -> it exist in memmory but it's value is not defined yet.
let userState;
console.log(`\nthe value of the user state is -> ${userState} \n`);

/**
 * VARIABLE DECLERATION IN JS.
 * (I) USING VAR KEYWORD.
 * (II) USING LET KEYWORD.
 * (III) USING CONST KEYWORD.
 */


// variable decleration using var keyword.
/**
 * we can change the value of variable declared using the var key word.
 * redecleration of variable is possible.
 * 
 */

var userId = 1234;
console.log(`the value of the user id is -> ${userId}`);
// changing the value of userId.
userId = 9800;
console.log(`the value of the user id is -> ${userId}`);
// doing the redecleration of the userId.
var userId = 405;
console.log(`the redeclared value of the user id is -> ${userId}\n\n`);
/**
 * prefer not to use the var for variable decleration.
 * because of the issue in the function scope (scope of function) and block scope (if,elseif etc)
 */



// Variable decleration using the let keyword.
/**
 * we can change the value of variable declared using the let key word.
 * redecleration of the variable is not possible.
 */
let userName = "jhon";
console.log(`the value of the userName is ${userName}`);
// changing the value of userName
userName = "peter";
console.log(`the value of the user name is -> ${userName}`);
// trying to redeclared the userName.
/*
let userName="codeInnoAnkit";
console.log(`the redeclared value of the userName is -> ${userName}`);
*/
/*
SyntaxError: Identifier 'userName' has already been declared
*/



// Variable decleration using the const keyword.
/**
 * we can not change the value of variable declared using the const keyword.
 * redecleration is not possible.
 */
const userAge = 22;
console.log(`the value of the user age is -> ${userAge}`);
// changing the value of the userAge
/*
userAge=98;
console.log(`the value of the user age is -> ${userAge}`);
TypeError: Assignment to constant variable.
*/

// trying to redeclare userAge.
/*
const userAge=98;
console.log(`the redeclared value of the userAge is -> ${userAge}`);
SyntaxError: Identifier 'userAge' has already been declared
*/




// using the table method of the console.
console.log('\n\n');
console.log(`printing all three variable using the table methode of the console -> \n`);
console.table([userId,userName,userAge]);