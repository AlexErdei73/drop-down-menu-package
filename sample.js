const DropDownMenu = require('drop-down-menu');

const menu = new DropDownMenu(document.querySelector('#dropdownmenu'), onMenuItemClick);

function onMenuItemClick(e) {
    const result = document.querySelector('#result');
    result.textContent = e.target.textContent;
}