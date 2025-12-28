// Tableau de couleurs disponibles
const colors = ['#ffffff', '#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#6f42c1', '#e83e8c'];

let currentColorIndex = 0;

// Récupération du bouton
const changeColorBtn = document.getElementById('changeColorBtn');

// Fonction pour changer la couleur de fond
function changeBackgroundColor() {
    // Passage à la couleur suivante
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    
    // Application de la nouvelle couleur
    document.body.style.backgroundColor = colors[currentColorIndex];
    
    // Ajustement de la couleur du texte du conteneur si nécessaire
    const container = document.querySelector('.container');
    if (currentColorIndex === 0) {
        // Si la couleur est blanche, on garde le style par défaut
        container.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    } else {
        // Pour les autres couleurs, on ajuste la transparence du conteneur
        container.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
}

// Ajout de l'événement de clic sur le bouton
changeColorBtn.addEventListener('click', changeBackgroundColor);

