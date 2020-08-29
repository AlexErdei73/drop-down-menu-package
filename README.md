# @alexerdei73/drop-down-menu

This is an npm package, which can be used to handle a drop down menu. 

## General Information
The HTML file of your page should contain a container element. This element 
must contain a div element and an unordered list, wich contains the menu points 
as list elements. When the user clicks the div element, the java script shows 
the menu points. When the user clicks again, the menu points disapear. The
CSS stylesheet should contain the .show and .hide classes, which show 
and hide the list, when they are given to the class list of the list
element. When the menu items are clicked, when they show, an event handler
gets activated.

The javascript of the page should import the DropDownMenu class from this package.
Then you make an instance of the object. The class has two parameters. The first is
the container element, the second is the event handler function. 
Example usage is in the index.html and sample.js files. These files can be found in
the node folder of your code, where the package downloaded.

## Making a sample drop-down-menu in your browser
You need npm and webpack installed if you want to use this package in your webpage.
To set up your smaple page follow the steps: 
1. Install node.js 
2. Make an empty directory for your page.
3. Run `npm init` in your directory to generate a package.json file.
4. Run `npm install webpack webpack-cli --save-dev` to install webpack to the node_modules directory of your project.
5. Create the dist and src directories in your directory.
6. Run `npm install @alexerdei/drop-dow-menu`. This will install this package in the node_modules
   folder in your directory.
7. Copy from the folder of this package, which is in the `node_modules` folder, the index.html file to the dist directory and the sample.js file to the src directory. Rename sample.js in the src directory to index.js.
8. Run `npx webpack` in the root directory of your project. Now you can view your index.html file in the browser. 