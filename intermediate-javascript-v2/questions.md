 #1  ###################
 # Scope
 Given the following function
 ```
 function street(){
     var weather = "rainy";

     function firstFloor(){
         var weather = "dry";

         function secondFloor(){
             var temperature = 72;
         }
     }

     function neighbors(){
         var ceiling = "leaking";

         function neighborsSecondFloor(){

         }
     }
 }
 ```

 Remove entries from the array until only correct answers remain

 Which function(s) access the weather variable and get "rainy" (Delete wrong answers, leave correct ones)
`var scopeArray1 = ["street", "firstFloor", "secondFloor", "neighbors", "neighborsSecondFloor"];`

 Which function(s) access the weather variable and get "dry" (Delete wrong answers, leave correct ones)
`var scopeArray2 = ["street", "firstFloor", "secondFloor", "neighbors", "neighborsSecondFloor"];`

 Which function(s) access the ceiling variable and get undefined (Delete wrong answers, leave correct ones)
`var scopeArray3 = ["street", "firstFloor", "secondFloor", "neighbors", "neighborsSecondFloor"];`

 Which functions accesss the ceiling variable and get "leaking" (Delete wrong answers, leave correct ones)
`var scopeArray4 = ["street", "firstFloor", "secondFloor", "neighbors", "neighborsSecondFloor"];`

 Which functions access the temperature variable and get 72 (Delete wrong answers, leave correct ones)
`var scopeArray5 = ["street", "firstFloor", "secondFloor", "neighbors", "neighborsSecondFloor"];`


 #2  ###################
 # Promises
`var changed = false;`
  Write a function called async.
  Use $q to create a promise object and return the promise.
  Call setTimeout on a function
  which changes the variable changed (above) to the boolean true;
  And resolve the promise when setTimeout completes.


```
var contextObj = {
  number: 0
}

function sum(x, y) {
  return this.number += (x + y);
}
```

 #3 ###################
 # Context 1
 Create a function called context1 that will take in two numbers x and y.
 invoke sum passing in the two numbers x and y and explicitly set the context to the object called contextObj.

 #4 ####################
 # Context 2
 Write a function called context2 that will take in an array of numbers called params
 invoke sum and explicitly set the context to the object called contextObj, and pass in the array called params.


 #5 ####################
 # Context 3
 Write a function called context3.
 Make context3 permanently link the context of sum to the object contextObj.
 This should give you a new function. Return it.



 #6  ###################
 # Constructor Function
 Make a constructor function called Sandwich that takes in 3 parameters: bread, meat, spread and assigns them to identically named properties.




 #7  ###################
 # Implicit binding
 Make a constructor function called RoadTrip.  It has a property called gasLeft = 100.  It has a property called drive that is a function.  When drive is invoked it uses context to implicitly subract 10 from the gasLeft on the roadTrip.



 #8  ###################
 # Prototype 1
 Add prototype function called addTwo to the array type that adds two to the value of every item in the array.




 #9  ###################
 # Prototype 2
 Write a constructor function called CoinToss.  It has a property called results which is an empty array.  It has a prototype function called flip.  When flip is invoked it uses context to implicitly add 'heads' or 'tails' to the results array.




 #10  ###################
 # Closure 1
 Write a function called animal machine that creates new animals from two existing animals.  It takes in a parameter called partOne.  It returns a function called animalSmasher.
 When animalSmasher is invoked it should take in a parameter called partTwo and return a new string that adds partOne and partTwo together.



 #11  ###################
 # Closure 2
 Write a function called partyTime.  It takes in one parameter called partyName.
 It needs to keep track of who is on the guest list.
 It needs to do this by returning a function called addGuest.
 When addGuest is invoked it saves that guest with previously added guests and then returns an object that looks like this (Replace the parts wrapped in <> with correct data):
 ```
 {
     partyName: <Person name goes here>,
     guestList: <Array of ingredients goes here>
 }
 ```



 #12  ###################
 # Type checking
 Write a function that takes in 2 parameters.
 If both parameters are the same type an the same value return "Exact match".
 If both parameters have the same value but are different types return "Different types"
 Otherwise return "Different values"
