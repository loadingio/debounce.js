# Debounce.js

Debounce.js helps you to debounce your function.

## Features

 * Simply by wrapping function in debounce().
 * Preserve scope for object methods.
 * Support Promise

## Usage

 * simply debounce:

    ````
    var myFunc = debounce(function( ... ) {
      /* do whatever you want */
    }); 
    myFunc(...);
    ````


 * custom delay: 

    ````
    var myFunc = debounce(func: function(p1, p2, ...) { ... }, 123); /* default delay is 500 */
    myFunc(...);
    ````

 * use promise after function is executed:

    ````
    var myFunc = debounce(function( ... ) { ... }); 
    myFunc(...).then(function(ret) {
      if(ret) { ... } /* ret is thre return value of the function inside debounce */
    });
    ````

 * used with object members:

    ````
    var obj = {
      member: debounce(function( ... ) { this.value = 2; },
      value: 1
    };
    ````

 * clear previously scheduled function call:

   ````
   myFunc();
   myFunc.clear();
   ````

 * bypassing debounce and call immediately:
   ```
   myFunc.now();
   ```

 * simply delay for a few milliseconds (e.g., 300 ms):
   ```
   debounce(300).then(function() { ... });
   ```

## Compatibility

 * debounce.js uses Promise, which is not supported in some browsers like IE. Remember to install polyfill before using debounce.js.


## LICENSE

MIT
