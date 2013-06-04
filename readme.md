# Finisher

Finisher is a simple control flow tool that allows you to invoke a function after running multiple async operations in parallel.

## Install

	npm install finisher

## Use

```js
var finisher = require('finisher');

// Create a check function.
// Wrap all your async callbacks within this function
var check = finisher(done);

// Do async stuff
doSomethingAsync(check(function(){
	// Do stuff
}))
doSomethingAsync(check(function(){
	// Do something
}))
doSomethingAsync(check(function(){
	// Do something else
}))

// This will get called after all the callbacks have finished
function done(){
	// Called after all async operations have completed.
}
```

## Syntax

### var check = finisher(callback)

Finisher returns a check function that will increment an internal counter when invoked.
You must pass a callback to the check function. The check function returns a special function that 
will invoke the check functions's callback and decrement the internal counter.

Once the internal counter reaches zero again (it starts at zero), then the finisher's callback will be invoked (known as the 'done' function).

Check out the source code to get a better understanding; it's only 15 lines of code (as of writing this).

Note: you can name these functions anything you like of course; 'check' and 'done' are just recommended conventions.