# Debounce.js

Debounce.js helps you to debounce your function.

## Features

 * Simply by wrapping function in debounce().
 * Preserve scope for object methods.
 * Support Promise

## Usage

 * simply debounce:
    var myFunc = debounce(function( ... ) {
      /* do whatever you want */
    }); 
    myFunc(...);

 * custom delay: 
    var myFunc = debounce(func: function(p1, p2, ...) { ... }, 123); /* default delay is 500 */
    myFunc(...);

 * use promise after function is executed:
    var myFunc = debounce(function( ... ) { ... }); 
    myFunc(...).then(function(ret) {
      if(ret) { ... } /* ret is null if myFunc is debounced. */
    });

 * used with object members:
   var obj = {
     member: debounce(function( ... ) { this.value = 2; },
     value: 1
   };


## LICENSE

MIT
