# Server-side rendering

The core React library has *no dependency on the DOM* nor anything else that is only present in the browser.  It's 
possible to reuse the same code on the client and the server.  Server-side rendering can provide for a better user
experience - the user sees all dynamic content immediately without waiting for Ajax calls to complete - without 
duplicating logic between your server-side code and your client-side code.

The example below is too simple to demonstrate the full power of server-side rendering, but at least it demonstrates
that you can in fact render on the server.

You can see the example code in action [here](/server-page).

___serverPage.js
