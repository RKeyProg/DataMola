const btn = document.querySelector('#hamburger');
const linkArray = document.querySelectorAll('.menu__link');
const body = document.body;

btn.addEventListener('click', e => {
    e.preventDefault();
    menu(linkArray);
})

function menu(arr) {
    const full = document.createElement('div');
    const list = document.createElement('ul');
    full.classList.add('full');
    list.classList.add('full-menu__list');

    arr.forEach(e => {
        let href = e.getAttribute('href');
        const item = document.createElement('li');
        const link = document.createElement('a');
        item.classList.add('full-menu__item');
        link.classList.add('full-menu__link');
        link.href = href;
        link.textContent = e.textContent;

        item.appendChild(link);
        list.appendChild(item);
    });

    full.appendChild(list);
    body.appendChild(full);

    full.addEventListener('click', e => {
        body.removeChild(full);
    })
}