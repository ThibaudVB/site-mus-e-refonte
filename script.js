function toggleMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.querySelector(".overlay");
    
    // Basculer la classe 'expanded' pour afficher ou cacher le menu
    menu.classList.toggle("expanded");
    
    // Basculer la visibilité de l'overlay
    overlay.classList.toggle("show");
}
