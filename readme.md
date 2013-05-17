# Finisher

Finisher is a simple control flow tool that allows you to invoke a function after running multiple async operations in parallel.

## Install

	npm install finisher

## Use

```js
var finisher = require('finisher');

// Create a wrap function.
// Wrap all your async callbacks with this function
var wrap = finisher(done);

// Do async stuff
doSomethingAsync(wrap(function(){
	// Do stuff
}))
doSomethingAsync(wrap(function(){
	// Do something
}))
doSomethingAsync(wrap(function(){
	// Do something else
}))

// This will get called after all the callbacks have finished
function done(){
	// Called after all async operations have completed.
}
```

## Syntax

### var wrap = finisher(callback)

Finisher returns a wrap function with that will increment an internal counter when called, and decrement 
it when the wrapper's callback is invoked. The wrapper returns a special function to call it's callback.

Once the internal counter reaches zero again (it starts at zero), then the finisher's callback will be invoked.

Check out the source code to get a better understanding; it's only 14 lines of code (as of writing this).