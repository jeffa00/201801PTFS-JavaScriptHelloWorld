// One equal sign is called the assignment operator.
// This is because we are assigning a value to a variable.
var whoToGreet = "Duluth";
var loopNumber = 5;

// Principle of software development:
// The DRY Principle.

// Don't Repeat Yourself

for(var i=0; i < loopNumber; i = i + 1){
    console.log("Index: " + i + " %2 " + i % 2);
    if (i % 2 != 0){
        console.log(i + ") Hello, " + whoToGreet +  "!");
    }
}

console.log("Done");