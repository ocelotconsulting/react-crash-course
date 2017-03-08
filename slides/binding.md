# Data binding

React defaults to one-way binding... your props/state are bound to components naturally.

If you need two way binding in, say, an input field you need to include both the *value* and the *onChange* props.  If
you don't do that React will make the component read-only since it is not bound.
 
___src/examples/Inputs.js

Example usage:

___src/examples/InputsExample.js
