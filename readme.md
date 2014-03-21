# Paralyze

Paralyze is a simple control flow tool that allows you to invoke a function after running multiple async operations in parallel.

## Install

	npm install paralyze

## Use

```js
var paralyze = require('paralyze');

// Create a wait function.
// Wrap all your async callbacks within this function
var wait = paralyze(done);

// Do async stuff
doSomethingAsync(wait(function(){
	// Do stuff
}))
doSomethingAsync(wait(function(){
	// Do something
}))
doSomethingAsync(wait(function(){
	// Do something else
}))

// This will get called after all the callbacks have finished
function done(){
	// Called after all async operations have completed.
}
```

## Syntax

### var wait = paralyze(callback)

Paralyze returns a function that will increment an internal counter when invoked.
You must pass a callback to the wait function. The wait function returns a special function that 
will invoke the wait functions's callback and decrement the internal counter.

Once the internal counter reaches zero again (it starts at zero), then the paralyzed callback will be invoked (known as the 'done' function).

If the wait function is never invoked, then the paralyzed function is invoked on the next event loop. 
This allows you to expect execution to continue to flow even if there are no parallel operations queued.

Check out the source code to get a better understanding; it's a very small lib.

_Note: you can name these functions anything you like of course; 'wait' and 'done' are just recommended conventions._