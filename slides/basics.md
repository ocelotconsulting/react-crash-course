# React basics

+ A React application is composed of components.
+ Each component renders XML that represents DOM elements and/or other components.  
+ The XML document created by a component looks a lot like HTML but is actually an XML representation of part of the virtual DOM.  
+ As the application's state (including *state* AND *props*) changes, those components affected are re-rendered to XML.
+ The virtual DOM is diffed with the actual DOM and any differences are rendered to the browser.
+ By skipping layout and CSS rule calculations unless absolutely necessary, React applications are highly performant
  compared to traditional MVC apps (Backbone, Knockout, Angular 1).
