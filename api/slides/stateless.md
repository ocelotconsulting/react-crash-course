# Stateless Components

You may have noticed in the previous slide that the components were nothing more than arrow functions... we did 
not extend React.Component as we did in the first slide.

This is the recommended approach for *stateless* components which do not need to implement lifecycle methods (more on that later).  As a general rule, stateless code is easier to 
test and reason about than stateful code.  You should therefore prefer stateless to stateful whenever you have a choice.

In the example below both components are stateless (and equivalent), but the second approach is preferred to reinforce 
that point.
 
Also, notice that we're using ES2015 *destructuring* in the second component.  This is a common practice:

___src/examples/Stateless.js
