# Data binding

React defaults to one-way binding... your props/state are bound to components naturally.

If you need two -ay binding in, say, an input field you need to include both the **value** and the **onChange** props.  
If you only include **value** React will log an error to the console you unless you also include **readOnly={true}**.
 
___src/examples/Inputs.js

Example usage:

___src/examples/InputsExample.js
