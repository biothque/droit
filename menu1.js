// Création du menu
const container = document.createElement('nav');
container.className = 'menu-container';

const btn = document.createElement('button');
btn.id = 'menu-btn';
btn.innerHTML = 'Menu <i class="fas fa-bars"></i>';

const menu = document.createElement('ul');
menu.id = 'menu';
menu.innerHTML = `
    <li><a href="index.html">Accueil</a></li>
    <li><a href="politique.html">Politique d'utilisation</a></li>
    <li><a href="tutoriel.html">Tutoriel</a></li>
`;

container.appendChild(btn);
container.appendChild(menu);
document.body.appendChild(container);

// Toggle menu
btn.addEventListener('click', () => {
    menu.classList.toggle('show');
    const links = menu.querySelectorAll('li a');
    links.forEach((link, i) => {
        link.style.transitionDelay = menu.classList.contains('show') ? `${i * 0.05}s` : '0s';
    });
});

// Fermer si clic en dehors
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove('show');
    }
});
