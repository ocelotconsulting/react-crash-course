# Props vs State

A React component has *props* and (optionally) *state*.  A component is responsible for maintaining its own state, but
props are set externally.

One of the most difficult concepts to grasp when learning React is when to use props and when to use state.  Some general
rules apply:

+ The same concept should never be duplicated in props and state in a single component. 
+ State is usually modeled in top-level components - low-level components generally don't have state.  This is 
somewhat counter-intuitive for input field elements, for example.
+ When in doubt, don't use stateful components.  A typically Redux application might not contain any stateful components
whatsoever.
