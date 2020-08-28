
function DropDownMenu(container, onItemClick) {
    this.container = container;
    this.onItemClick = onItemClick;
    const list = container.querySelector('ul');
    const button = container.querySelector('div');

    list.classList.add('hide');

    button.addEventListener('click', () => {
        if (list.classList.contains('hide')) {
            list.classList.remove('hide');
            list.classList.add('show');
        } else {
            list.classList.remove('show');
            list.classList.add('hide');
        }
    })

    const items = list.querySelectorAll('li');
    items.forEach((li) => {
        li.addEventListener('click', this.onItemClick);
    })
        
}

module.exports = DropDownMenu;



