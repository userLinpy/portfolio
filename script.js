// Sélection des éléments HTML
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Ajout de l'écouteur d'événement au clic sur l'icône
menuIcon.addEventListener('click', () => {
    // La méthode toggle ajoute la classe si elle n'est pas là, et l'enlève si elle y est
    navbar.classList.toggle('active');
});

// Fermer le menu automatiquement quand on clique sur un lien
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});