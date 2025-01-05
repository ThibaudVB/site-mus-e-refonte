function toggleMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.querySelector(".overlay");
    
    // Basculer la classe 'expanded' pour afficher ou cacher le menu
    menu.classList.toggle("expanded");
    
    // Basculer la visibilité de l'overlay
    overlay.classList.toggle("show");
}

let currentSlide = 0; // Indice de l'image actuelle
const slides = document.querySelectorAll('.carousel-images img'); // Images du carrousel
const exhibitTitle = document.getElementById('exhibit-title'); // Titre de l'exposition
const exhibitDescription = document.getElementById('exhibit-description'); // Description de l'exposition

// Titres et textes associés à chaque image
const exhibits = [
    {
        title: "Photographie : 28 Aout 1944 : Libres !",
        description: "Depuis le 28 août, place Jean-Moulin et rue Vital-Carles, les façades du Centre national Jean Moulin s’ornent de rares photographies de la Libération de Bordeaux."
    },
    {
        title: "Destinées Juives à Bordeaux",
        description: "Cette exposition 100% en ligne témoigne du drame humain vécu par les populations de confession juive installées à Bordeaux durant la Seconde Guerre mondiale."
    },
    {
        title: "Parcours de 400 000 ans d’histoire(s)",
        description: "Grâce à la richesse et à la variété de ses collections, le musée d'Aquitaine invite le visiteur à partir à la découverte de l'histoire régionale, de la préhistoire à l'époque contemporaine."
    }
];

// Fonction pour changer l'image du carrousel
function moveSlide(direction) {
    currentSlide += direction;

    // Gérer les cas où on dépasse les limites du carrousel
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Retour à la dernière image
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Retour à la première image
    }

    // Change l'image en fonction de l'indice
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;

    // Met à jour le texte avec animation
    updateTextWithAnimation();
}

// Fonction pour mettre à jour le texte avec animation
function updateTextWithAnimation() {
    // Ajouter la classe d'animation
    exhibitTitle.classList.add('fade-in');
    exhibitDescription.classList.add('fade-in');

    // Mettre à jour le texte
    exhibitTitle.innerText = exhibits[currentSlide].title;
    exhibitDescription.innerText = exhibits[currentSlide].description;

    // Supprimer la classe d'animation après l'exécution
    setTimeout(() => {
        exhibitTitle.classList.remove('fade-in');
        exhibitDescription.classList.remove('fade-in');
    }, 500); // Durée de l'animation
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Charge le texte de la première exposition
    updateTextWithAnimation();
});

darkmode.addEventListener("click", () => 
    document.body.classList.toggle("dark")
)