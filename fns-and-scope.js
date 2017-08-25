//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

function isTyler (name){
  if (name === "Tyler") {
    return true;
  }
  else{return false}

}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here

function getName() {

  var name = prompt("Enter your name:");

  return name;

}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

  function welcome () {
    alert("Welcome, " + getName());
  }

  welcome();


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here

  // Parameters are the inputs to the fuction, enclosed in parenthesis after the function name
  // Arguements are the values you pass to the parameters when you run the function

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

  // There are 6 falsy values:
  //     1- null
  //     2- NaN
  //     3- 0
  //     4- false
  //     5- ""
  //     5- undefined

  //     You can check is something is false by using:  if(!something)

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  
  function myName(){
    return "Dan Nohr";
  }


//Now save the function definition of myName into a new variable called newMyName

  //Code Here

  var newMyName = myName();

//Now alert the result of invoking newMyName

  alert (newMyName);




//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

  var outerFn = function() {
    return('Dan Nohr');
  };
 

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

  var innerFn = outerFn;

//Now invoke innerFn.

innerFn;
