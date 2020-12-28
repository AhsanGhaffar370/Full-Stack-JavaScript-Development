document.getElementById("demo").innerHTML = person("ahsan", "21");

function person(name1, age1) {
    return ("Your name is " + name1 + ". You're " + age1 + " years old.");
}


function current_date() {
    document.getElementById("demo1").innerHTML = Date();
}

var name = prompt("What is your name?", "Ahsan");
console.log("Your name is:", name);

var age = prompt("What is your age?");
// new_age=parseInt(age)+5;
// new_age=parseFloat(age)+5;
new_age = Number(age) + 5;
console.log("Your age is;", new_age);





var whereWeAt = window.location.href; //file:///E:/Full-Stack-JavaScript-Development/js_basics.html
console.log(whereWeAt)

var theDomain = window.location.hostname;
console.log(theDomain)

var thePath = window.location.pathname; // /E:/Full-Stack-JavaScript-Development/js_basics.html
console.log(thePath)

var theAnchor = window.location.hash;
console.log(theAnchor)




/////////////////////////
//Objects and Constructors
/////////////////////////



var single_person = {
    firstName: "Ahsan",
    lastName: "Ghaffar",
    id: 5566,
    fullName: function() { return this.firstName + " " + this.lastName; }
};

console.log("single_person", single_person)
console.log(single_person.firstName);
console.log(single_person["lastName"]);
console.log(single_person.fullName());


//constuctors for multiple persons (It's also a of object)
function person_cons(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.fullName = function() { return this.firstName + " " + this.lastName; }
}

var person1 = new person_cons("ahsan", "ghaffar", "123")
var person2 = new person_cons("bisma", "ghaffar", "456")
var person3 = new person_cons("osama", "ghaffar", "789")

console.log("person_cons", person1)
console.log("person1", person1.fullName())



/////////////////////////
//Array
/////////////////////////

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var arr2 = ["dog", "cat", "bird"];

//toString() converts array to a string of (comma separated) array values.
document.getElementById("arr1").innerHTML = fruits.toString();

//var x = fruits.pop();      // Removes the last element ("Mango") and save it in x
//var x = fruits.push("Kiwi"); // the value of x is 5

var res12 = arr2.shift();
var res12 = arr2.unshift("mice", "ostrich");

// splice(start_point, replace, val1,val2,....)
// start_point= index of array from where we want to start adding
// replace= num of elements we want to remove from start_point
arr2.splice("mice2", "ostrich2");


console.log("shift function remove and return first element of array:", res12)




/////////////////////////
//String functions
/////////////////////////

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var str = "Please locate where 'locate' occurs!";
var str1 = "Apple, Banana, Kiwi";
var str2 = "Hello World!";

var len = txt.length;

var ind1 = str.indexOf("locate"); // return location of first find value
var ind2 = str.lastIndexOf("locate"); // return location of last find value
var ind3 = str.indexOf("locate", 15); // start search from location 15 and then take first find value
var ind4 = str.search("locate");
//The search() method cannot take a second start position argument. 
//The indexOf() method cannot take powerful search values (regular expressions).

var res1 = str1.slice(7, 13);
var res2 = str1.slice(-12, -6);
var res3 = str1.slice(7);
var res4 = str1.slice(-12);
var res5 = str1.substring(7, 13); //substring() cannot accept negative indexes like slice.
var res6 = str1.substr(7, 9); // substr(start, length) is similar to slice(). second parameter of substr is length of string

var res7 = str.replace("locate", "W3Schools"); //replace only replace first match from string
var res8 = str.replace(/LOCATE/i, "W3Schools"); // i makes it case insensitive
var res9 = str.replace(/LOCATE/g, "W3Schools"); // g replace all matches from string rather than replacing only first

var res10 = str2.toUpperCase();
var res11 = str2.toLowerCase();


console.log("Length of string:", len);
console.log("indexOf:", ind1);
console.log("index of last:", ind2);
console.log("indexOf with start point:", ind3);
console.log("search:", ind4);
console.log("slice:", res1);
console.log("slice -ve pos:", res2);
console.log("slice with only start pos:", res3);
console.log("slice with only -ve start pos", res4);
console.log("substring:", res5);
console.log("substr:", res6);
console.log("replace:", res7);
console.log("replace with case insensitive:", res8);
console.log("replace all:", res9);
console.log("to upper case:", res10);
console.log("to lower case:", res11);



/////////////////////////
//Math Functions
/////////////////////////

var num1 = 23.45647283;

console.log("ceil() function:", Math.ceil(num1));
console.log("floor() function:", Math.floor(num1));
console.log("round() function:", Math.round(num1));
console.log("fixed() function:", num1.toFixed(2));
console.log("round() function:", Math.round(num1));



/////////////////////////
//EcmaScript6 (ES6)
/////////////////////////


///////
//JavaScript Arrow Function
///////

//before
// hello_old = function() {
//     return "Hello old World!";
// }

//after (with arrow function)
// hello = (name) => { return ("Hello " + name); }
//OR
hello = (name) => { `Hello  ${name}` }

document.getElementById("arrow").innerHTML = hello("Arrow");


///////
// Promises
///////

// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
//     myResolve(); // when successful
//     myReject(); // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise).

// myPromise.then(
//     function(value) { /* code if successful */ },
//     function(error) { /* code if some error */ }
// );


// let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("I love You !!"); }, 3000);
// });

// myPromise.then(function(value) {
//     document.getElementById("demo").innerHTML = value;
// });



/////////////////////////
//Class
/////////////////////////

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
document.getElementById("class1").innerHTML = "My car is " + myCar.age(year) + " years old.";