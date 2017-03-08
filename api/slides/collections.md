# Collections

When you're rendering a collection of items, you need to give React some more information to perform its diffing with the 
dom in the form of a *key* attribute for each rendered item in the collection.  If the items in the collection were to 
change, React needs to know which items to delete, which items to insert, and which items to update:

___src/examples/ToDoList.js

Example usage:

___src/examples/ToDoListExample.js
