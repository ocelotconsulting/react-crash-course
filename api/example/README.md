Reading a file, line by line.

Doing this synchronously is actually more complicated, and the async version should hopefully be easy to understand.

The first example just echos each line.  To run:

```
node run example.txt
```

The second example analyzes the file a bit.  Note that everything you need is in run2.js - readFile.js is only 
concerned with reading the file.

```
node run2 example.txt
```