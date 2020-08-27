# drop-down-menu

This is an npm package, which can be used to handle a drop down menu. 
The HTML file should contain a container element. This element must contain
a div element and an unordered list, wich contains the menu points as list
elements. When the user clicks the div element, the java script shows 
menu points. When the user clicks again, the menu points disapear. The
CSS stylesheet should contain the .show and .hide classes, which show 
and hide the list, when they are given to the class list of the list
element. When the menu items are clicked, when they show, an event handler
gets activated.

The javascript of the page should import the DropDownMenu class from this package.
Then you make an instance of the object. The class has two parameters. The first is
the container element, the second is the name of the event handler function. 
Example usage is in the samle.html and sample.js files.