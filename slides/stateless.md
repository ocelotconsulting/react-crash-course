# Stateless Components

You may have noticed in the previous slide that the components were nothing more than arrow functions... we did 
not extend React.Component as we did in the first slide.

This is the recommended approach for *stateless* components.  As a general rule, stateless code is easier to 
test and reason about than stateful code.  You should therefore prefer stateless to stateful whenever you have a choice.
 
Also, notice that we're using ES2015 *destructuring* in the stateless component.  This is a common practice:

___src/examples/Stateless.js
