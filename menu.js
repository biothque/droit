const container = document.createElement('nav');
container.className = 'menu-container';

const btn = document.createElement('button');
btn.id = 'menu-btn';
btn.innerHTML = 'Menu <i class="fas fa-bars"></i>';

const menu = document.createElement('ul');
menu.id = 'menu';
menu.innerHTML = `
    <li><a href="acces.html"><i class="fas fa-home"></i> Accueil</a></li>
    <li><a href="https://biothque.github.io/bibliothque/medecine.html"><i class="fas fa-user"></i> Médecine </a></li>
    <li><a href="bienvenue.html"><i class="fas fa-cogs"></i> Droit</a></li>
    <li><a href="https://biothque.github.io/bibliothque/litterature.html"><i class="fas fa-cogs"></i> Littérature</a></li>
    <li><a href="https://fr.scribd.com/search?query=Fran%C3%A7ais%20"><i class="fas fa-cogs"></i> Grande Édition</a></li>
   <li><a href="travaux_scientifiques.html"><i class="fas fa-home"></i> Travaux scientifiques</a></li>
    <li><a href="propos.html"><i class="fas fa-envelope"></i> Contact</a></li>
`;

container.appendChild(btn);
container.appendChild(menu);
document.body.appendChild(container);

// Animation menu
btn.addEventListener('click', () => {
    menu.classList.toggle('show');

    // Animation des items avec léger décalage
    const links = menu.querySelectorAll('li a');
    links.forEach((link, i) => {
        link.style.transitionDelay = menu.classList.contains('show') ? `${i * 0.05}s` : '0s';
    });
});

// Fermer le menu si clic en dehors
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove('show');
    }
});
