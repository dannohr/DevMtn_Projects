//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer  -  

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer  1 - When a function is contained in the global scope, the value of this inside of that function will be the window object.
      //        2 - When a function is called by a preceding dot, the object before that dot is this.
      //        3 - When a constructor function is used, this refers to the specific instance of the object that is created and returned 
      //            by the constructor function.
      //        4 - When JavaScript’s call or apply method is used, this is explicitly defined.

  // 3) What does .bind do?

      //Answer - Use bing to call a function and explicity define what "this" is.



//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here

    var user = {
      username: 'dnohr',
      email: 'dnohr@gmail.com',
      getUsername: function () {
        return this.username
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

console.log(user.getUsername())

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

  //Function Invocations Here

  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function(){
      return this.move += 10;
    }
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Continuation of previous problem

var getYear = function(){
  return this.year;
};

// Above you are given a getYear function.  Use the bind function to bind the prius object to the function and save it in a variable called getPriusYear
// Then use the bind function to bind the mustang to the function and save it in a varabile called getMustangYear
// Console Log the results of the getPriusYear and getMustangYear to see that they are returning the correct years.


//Note(no tests)
  //Code Here
  var getPriusYear = getYear.bind(prius);
  var getMustangYear = getYear.bind(mustang);
  console.log(getPriusYear())
  console.log(getMustangYear())
  
//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

// var userName = getMyUsername(); //Fix this
  var userName = getMyUsername.call(myUser);

console.log(userName())  

//Above you're given an object, and  a function. What will the getMyUsername function return?
  //   It will return the username for the calling object, the object it's bound to.

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here  - It is bound to the myUser object


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

