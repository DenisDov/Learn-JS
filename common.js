while(number <= 12) {
	console.log(number);
	number = number + 2;
}

//
for(var i = 0; i <=12; i += 2 )
console.log(i);
//
var result = 1;
var counter = 0;

while(counter < 10) {
	result = result * 2;
	counter = counter + 1;
	if(result == 512){
		console.log(result);
	}
}

//
do{
	var name = prompt('Who are you?');
} while(!name);
console.log(name);

//
for (var line = "#"; line.length < 8; line += "#")
	console.log(line);

//Array loop

var names = ['Denis','Anna','Dima','Ira','Alex'];
for(var i = 0; i < names.length; i++) {
	console.log("I know someone called " + names[i]);
}

//

var text = "Bla bla bla Denis, bla bla bla Denis, find name Denis, find name Denis";
var myName = "Denis";
var searchResult = [];

for (var i = 0; i < text.length; i++)
	if (text[i] === "D") {

	}

	//Fahrenheit convert function

function convert(celsius) {
	// Only change code below this line
	var fahrenheit = celsius * 9 / 5 + 32;

	// Only change code above this line
	if (fahrenheit !== 'undefined') {
		return fahrenheit;
	} else {
		return 'fahrenheit not defined';
	}
}

// Change the inputs below to test your code
console.log(convert(30));

//Concatenate strings

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

//
var myName = "Denis";
var myStr = "My name is " + myName + " and I am swell!";
//
var someAdjective = 'Fun';
var myStr = "Learning to code is ";
myStr += someAdjective;

//First Character in a String
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
//Find Last Character
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 2];

//Word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	var result = "";
	result += "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;
	return result;
}
wordBlanks("dog", "big", "ran", "quickly");

//Array index
var myArray = [1, 2, 3];
var myData = myArray[0];
//Change array index
var myArray = [1, 2, 3];
myArray[0] = 3;
//Multi array index
var myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[
		[10, 11, 12], 13, 14
	]
];
var myData = myArray[2][1]; //8

//Push to last array
var myArray = [
	["John", 23],
	["cat", 2]
];
myArray.push(["dog", 3]);

//trim last array From My Array
var myArray = [
	["John", 23],
	["cat", 2]
];
var removedFromMyArray = myArray.pop();

//trim first array From My Array
var myArray = [
	["John", 23],
	["dog", 3]
];
var removedFromMyArray = myArray.shift();

//trim first array From My Array and add another array
var myArray = [
	["John", 23],
	["dog", 3]
];
myArray.shift();
myArray.unshift(["Paul", 35]);

//Shopping List in Array
var myList = [
	["Vodka", 0.5],
	["Vodka", 0.5],
];

//Simple function
function myFunction() {
	console.log("Hi World")
}
myFunction(); //Hi World
//
function myFunction(a, b) {
	console.log(a * b);
}
myFunction(3, 3); //9

//Return value
function timesFive(num) {
	return num * 5; //25
}

//
var processed = 0;

function process(num) {
	return (num + 3) / 5;
}
processed = process(7); //2

//Queue
function queue(arr, item) {

	arr.push(item);
	var removed = arr.shift();
	return removed; // Change this line
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(queue(testArr, 6)); //1
console.log("After: " + JSON.stringify(testArr));

//Boolean
function welcomeToBooleans() {

	if ("on") {
		return true;
	} else {
		return false;
	}
}
//===============================Comaprison &&==================================
function myTest(val) {
	if (val <= 50 && val >= 25) {
		return "Yes";
	}
	return "No";
}
myTest(35);
//==================================||==========================================
function myTest(val) {
	if (val < 10 || val > 20) {
		return "Outside";
	}
	return "Inside";
}
myTest(15);
//======================Else STATEMENT=======================================
function myTest(val) {
	var result = "";

	if (val > 5) {
		result = "Bigger than 5";
	} else {
		result = "5 or Smaller";
	}
	return result;
}

myTest(4);
//================================GOLF SCORE FUNCTION===========================
function golfScore(par, strokes) {

	if (strokes == 1) {
		return "Hole-in-one!";
	} else if (strokes <= par - 2) {
		return "Eagle";
	} else if (strokes == par - 1) {
		return "Birdie";
	} else if (strokes == par) {
		return "Par";
	} else if (strokes == par + 1) {
		return "Bogey";
	} else if (strokes == par + 2) {
		return "Double Bogey";
	} else if (strokes >= par + 3) {
		return "Go Home!";
	} else {
		return "Change Me";
	}

}

golfScore(4, 2);

//=============================SWITCH CASE======================================
function myTest(val) {
	var answer = "";

	switch (val) {
		case 1:
			answer = "alpha";
			break;
		case 2:
			answer = "beta";
			break;
		case 3:
			answer = "gamma";
			break;
		case 4:
			answer = "delta";
			break;
	}

	return answer;
}

myTest(2);

//=======================Default CASE===========================================
function myTest(val) {
	var answer = "";

	switch (val) {
		case "a":
			answer = "apple";
			break;
		case "b":
			answer = "bird";
			break;
		case "c":
			answer = "cat";
			break;
		default:
			answer = "stuff";
	}
	return answer;
}

myTest(1);

//=======================Multiple switch========================================
function myTest(val) {
	var answer = "";

	switch (val) {
		case 1:
		case 2:
		case 3:
			answer = "Low";
			break;
		case 4:
		case 5:
		case 6:
			answer = "Mid";
			break;
		case 7:
		case 8:
		case 9:
			answer = "High";
			break;
	}

	return answer;
}

myTest(1);

//====================Replacing IF ELSE/SWICH===================================

function myTest(val) {
	var answer = "";

	// if (val === "bob") {
	//	 answer = "Marley";
	// } else if (val === 42) {
	//	 answer = "The Answer";
	// } else if (val === 1) {
	//	 answer = "There is no #1";
	// } else if (val === 99) {
	//	 answer = "Missed me by this much!";
	// } else if (val === 7) {
	//	 answer = "Ate Nine";
	// }

	switch(val) {
		case "bob": answer = "Marley"; break;
		case 42: answer = "The Answer"; break;
		case 1: answer = "There is no #1"; break;
		case 99: answer = "Missed me by this much!"; break;
		case 7: answer = "Ate Nine"; break;
	}

	return answer;
}

myTest(7);

//============================Easy comparison===================================
function isLess(a, b) {

//	 if (a < b) {
//		 return true;
//	 } else {
//		 return false;
//	 }
// }

return a < b;

isLess(10, 15);

//=====================================Objects access variable==================

var testObj = {
	12: "Namath",
	16: "Montana",
	19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber]; //Montana

//==========================Updating Object=====================================
var myDog = {
	"name": "Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["Free Code Camp Campers"]
};
myDog.name = "Happy Coder"; //change existing property
myDog.bark = "woof";//add new property
delete myDog.tails;//delete property

//=====================Object Lookup============================================
// Setup
function phoneticLookup(val) {
	var result = "";

	var lookup =	{
	 "alpha": "Adams",
	 "bravo": "Boston",
	 "charlie": "Chicago",
	 "delta": "Denver",
	 "echo": "Easy",
	 "foxtrot": "Frank"
	};

	result = lookup[val];
	return result;
}

phoneticLookup("charlie");

//================Testing Objects for Properties===============================

// Setup
var myObj = {
	gift: "pony",
	pet: "kitten",
	bed: "sleigh"
};

function checkObj(checkProp) {

	var result = myObj[checkProp];

	if(myObj.hasOwnProperty(checkProp)) {
		return result;
	} else {
		return "Not Found";
	}

}

checkObj("gift");

//==========================Eloquent JS======== Functions======================

var power = function(base, exponent) {
	var result = 1;
	for (var count = 0; count < exponent; count++)
		result *= base;
	return result;
};

console.log(power(2, 10));

//
// //Date
// document.getElementById("demo").innerHTML = Date();

// //While
// var count = 0;

// var loop = function(){
//	while(count < 3){
//		count++;
//		console.log("I'm looping!");

//	}
// };

// loop();
// //Another while
// var condition = true;

// var soloLoop = function(){
//	 while ( condition ) {
//			 console.log("Looped once!");
//			 condition = false;
//		 }
// };

// soloLoop();

// //do while

// var loopCondition = false;

// do {
//	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");
// } while (loopCondition);

var getToDaChoppa = function(){
	// Write your do/while loop here!
	var age = 18;
	do {
	 console.log("Your age is " + age);
		}
		while(age < 18);
};

getToDaChoppa();

//Let loop
for (let i = 10; i > 0; i--) {
		console.log(i);
		}
//Switch
//var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
	case 'licorice':
		console.log("Gross!");
		break;
	case 'gum':
		console.log("I like gum!");
		break;
	case 'beets':
		console.log("...is that even a candy?");
		break;
	// Add your code here!
	default:
		console.log("I don't know that candy!");
}
//Loop Aray
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for(let i = 0; i < languages.length; i++) {
		console.log("I want to learn "+ languages[i]);
		}
//Objects
var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
	console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();

//Array Object
var myArray = [4, false, "OK", {
		age: 32,
		name: "Denis"
		}];

console.log(myArray[3].name);
//
var newArray = [
		["Name", 32, true, false],
		["sfsf", 23,
				{
				name: "Denis",
				age: "30"
				}
		]
];

console.log(newArray[1][2].name);
//
var myObject = {
	name: 'Eduardo',
	type: 'Most excellent',
	// Add your code here!
	interests: ["JS", "Python", "CSS"]

};

console.log(myObject.interests[0]);
//
var myOwnObject = new Object();

myOwnObject.name = "Denis";
myOwnObject.age = 32;

console.log(myOwnObject.age);

//FizzBuzz
for(let i = 1; i <= 20; i++) {
	if(i % 3 == 0 && i % 5 == 0) {
		console.log("FizzBuzz")
	} else if (i % 3 == 0) {
		console.log("Fizz")
	}
	else if(i % 5 ==0) {
		console.log("Buzz")
	}
	else {
		console.log(i)
	}
}

//Switch return
var getReview = function (movie) {

		switch(movie){
				case "Toy Story 2":
						return "Great story. Mean prospector.";
						break;
				case "Finding Nemo":
						return "Cool animation, and funny turtles.";
						break;
				case "The Lion King":
						return "Great songs.";
						break;
				default:
						return "I don't know!";
		}

};


getReview("The Lion King");

//THIS

var setAge = function (newAge) {
	this.age = newAge;
};

var susan = new Object();
susan.age = 25;
susan.setAge = setAge;
susan.setAge(35);

//OBJECTS
var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
	return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function() {
	//return this.sideLength * this.sideLength;
	return Math.pow(this.sideLength,2)
};

var p = square.calcPerimeter();
var a = square.calcArea(10);

console.log(a)

//Constructor

function Person(name,age) {
	this.name = name;
	this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);


// Arrays of Objects
function Person (name, age) {
		this.name = name;
		this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy", 6);


// LOOP THE LOOP=================================================
function Person(name, age) {
		this.name = name;
		this.age = age;
};

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);

// loop through our new array
for(let i = 0; i < family.length; i++ ) {
		console.log("My family years is "+ family[i].name);
}

// Get Older PErson =============================================================
function Person (name, age) {
		this.name = name;
		this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
		return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function(person1, person2) {
		return Math.max(person1.age, person2.age);
};



// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));

//Circle function
function Circle (radius) {
		this.radius = radius;
		this.area = function () {
				return Math.PI * this.radius * this.radius;

		};
		// define a perimeter method here
		this.perimeter = function() {
				return 2 * Math.PI * this.radius
		};

};

//Displaying People
var bob = {
		firstName: "Bob",
		lastName: "Jones",
		phoneNumber: "(650) 777-7777",
		email: "bob.jones@example.com"
};

var mary = {
		firstName: "Mary",
		lastName: "Johnson",
		phoneNumber: "(650) 888-8888",
		email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

// printPerson added here
function printPerson (person) {
		console.log(person.firstName + ' ' + person.lastName)
};

printPerson(contacts[0]);
printPerson(contacts[1]);

//Listing Everybody
var bob = {
		firstName: "Bob",
		lastName: "Jones",
		phoneNumber: "(650) 777-7777",
		email: "bob.jones@example.com"
};

var mary = {
		firstName: "Mary",
		lastName: "Johnson",
		phoneNumber: "(650) 888-8888",
		email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
		console.log(person.firstName + " " + person.lastName);
}

function list() {
		var contactsLength = contacts.length;
		for (let i = 0; i < contactsLength; i++) {
				printPerson(contacts[i]);
		}
};

list();

// searchResult
var bob = {
		firstName: "Bob",
		lastName: "Jones",
		phoneNumber: "(650) 777-7777",
		email: "bob.jones@example.com"
};

var mary = {
		firstName: "Mary",
		lastName: "Johnson",
		phoneNumber: "(650) 888-8888",
		email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
		console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

function search(lastName) {
		var contactsLength = contacts.length;
		for (var i = 0; i < contactsLength; i++) {
			if (lastName == contacts[i].lastName) {
						printPerson(contacts[i]);
		 }
	}
};

search("Jones");

//Add member
var bob = {
		firstName: "Bob",
		lastName: "Jones",
		phoneNumber: "(650) 777-7777",
		email: "bob.jones@example.com"
};

var mary = {
		firstName: "Mary",
		lastName: "Johnson",
		phoneNumber: "(650) 888-8888",
		email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
		console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

function add(firstName, lastName, email, phoneNumber) {
	contacts[contacts.length] = {
firstName: firstName,
lastName: lastName,
email: email,
phoneNumber: phoneNumber
}
};

add("Denis", "Dov", "xs@example.com", "(8091) 301 43 34");

list();


//function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function() {
         console.log("Hello!");
    }

}

var user = new Person("Codecademy Student",false);
user.speak();

//Dressed to Impress
var suitcase = {
    shirt: "Hawaiian"
};

if(suitcase.hasOwnProperty('shorts')) {
    console.log(suitcase.shorts)
} else {
    suitcase.shorts = "red";
    console.log(suitcase.shorts)
}

//List ALL the Properties!
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties

for(var key in nyc){
     console.log(nyc[key])   
}

//Classes 
function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name
var me = new Person("Denis", 32);
printPersonName(me);


// DRY

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();
var penguin = new Penguin("Bob");
penguin.sayName();


//=====================

function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor(name) {
    this.name = name;    
}

// create an "emperor" object and print the number of legs it has

Emperor.prototype = new Penguin;

var emperor = new Emperor('Emp');
console.log(emperor.numLegs);


//========Prototype chain===============

// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log( myEmperor.saying ); // should print "Waddle waddle"
console.log( myEmperor.numLegs ); // should print 2
console.log( myEmperor.isAlive ); // should print true


//======Accessing Private Variables==============
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance;
   };
}

var john = new Person('John','Smith',30);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log(myBalance);


//======Private Methods======

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   var returnBalance = function() {
      return bankBalance;
   };
       
   // create the new function here
   this.askTeller = function() {
      return returnBalance;
   };
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);

// ====FOR IN ======

var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for(var key in languages) {
    if(typeof languages[key] == "string") {
        console.log(languages[key])
        }   
}

//===========THIS============
function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class 
// so all dogs now can say hello
Dog.prototype.sayHello = function() {
        console.log("Hello this is a " + this.breed + " dog")
    }

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();

//=====Cash Register=====
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};


//call the add method for our items
cashRegister.add(0.98);
cashRegister.add(1.23);
cashRegister.add(4.99);
cashRegister.add(0.45);

//Show the total bill
console.log('Your bill is '+cashRegister.total);

//More Example=========================

var cashRegister = {
    total: 0,
//insert the add method here    
    add: function (itemCost) {
        this.total = this.total + itemCost;
    },
    scan: function (item) {
        switch (item) { 
        case "eggs": 
            this.add(0.98); 
            break;
        
        case "milk": 
            this.add(1.23); 
            break;
        
        //Add other 2 items here
        case "magazine":
            this.add(4.99);
            break;
        
        case "chocolate":
            this.add(0.45);
            break;
        
        }
        
        return true;
    }
};

//Scan 2 eggs and 3 magazines
cashRegister.scan('eggs');
cashRegister.scan('eggs');
cashRegister.scan('magazine');
cashRegister.scan('magazine');
cashRegister.scan('magazine');
//Show the total bill
console.log('Your bill is '+cashRegister.total);


// MORE======================

var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item, quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
    }
};

// scan each item 4 times
cashRegister.scan('eggs', 4);
cashRegister.scan('milk', 4);
cashRegister.scan('magazine', 4);
cashRegister.scan('chocolate', 4);


//Show the total bill
console.log('Your bill is '+cashRegister.total);

// MORE======================

var cashRegister = {
    total:0,
    //Dont forget to add your property
    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    //Add the voidLastTransaction Method here
    voidLastTransaction: function(){
        this.total -= this.lastTransactionAmount;
}
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead
cashRegister.voidLastTransaction();
cashRegister.scan("chocolate", 3);

//Show the total bill
console.log('Your bill is '+cashRegister.total);


//=========================================
function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("Denis", 20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount : function(employee){
        this.total -= this.total * (employee.discountPercent / 100);
    }
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));