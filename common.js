// while(number <= 12) {
// 	console.log(number);
// 	number = number + 2;
// }

// //
// for(var i = 0; i <=12; i += 2 )
// console.log(i);
// //
// var result = 1;
// var counter = 0;

// while(counter < 10) {
// 	result = result * 2;
// 	counter = counter + 1;
// 	if(result == 512){
// 		console.log(result);
// 	}
// }

// //
// do{
// 	var name = prompt('Who are you?');
// } while(!name);
// console.log(name);

// //
// for (var line = "#"; line.length < 8; line += "#")
// 	console.log(line);

// //Array loop

// var names = ['Denis','Anna','Dima','Ira','Alex'];
// for(var i = 0; i < names.length; i++) {
// 	console.log("I know someone called " + names[i]);
// }

// //

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
  //   answer = "Marley";
  // } else if (val === 42) {
  //   answer = "The Answer";
  // } else if (val === 1) {
  //   answer = "There is no #1";
  // } else if (val === 99) {
  //   answer = "Missed me by this much!";
  // } else if (val === 7) {
  //   answer = "Ate Nine";
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

//   if (a < b) {
//     return true;
//   } else {
//     return false;
//   }
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

  var lookup =  {
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
//  while(count < 3){
//    count++;
//    console.log("I'm looping!");

//  }
// };

// loop();
// //Another while
// var condition = true;

// var soloLoop = function(){
//   while ( condition ) {
//       console.log("Looped once!");
//       condition = false;
//     }
// };

// soloLoop();

// //do while

// var loopCondition = false;

// do {
//  console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");
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
