const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu-mobile');

if (toggle && menu) {
    toggle.addEventListener('click', () => {
        const isHidden = menu.classList.toggle('hidden');
        toggle.setAttribute('aria-expanded', String(!isHidden));
    });
}

if (menu && toggle) {
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}
