# Unit Testing

Ideally, unit tests should test the target module/class/component and *nothing else*.  Dependency behavior is better
stubbed out and tested separately.

React supports this with *shallow rendering*, and the popular [enzyme](http://airbnb.io/enzyme/) from AirBnB makes 
testing your components easy.  The elements you would normally render are replaced with stub  elements. You can inspect 
these elements, simulate events on them, and query the props they are given, but they will never be actually 
rendered.  This allows you to focus on the component being tested.
 
For example, suppose we create a LandMine class that blows up on rendering:

___src/examples/LandMine.js

And then we create a MineField containing a few LandMines:

___src/examples/MineField.js

Now we can test our MineField with shallow rendering - the LandMines are rendered "inert":

___test/examples/MineFieldSpec.js

You can verify this yourself - just run **npm test** from the command line.
