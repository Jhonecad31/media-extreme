document.addEventListener('DOMContentLoaded', () => {
    const dateElement = document.getElementById('current-date');
    
    // Obtener la fecha actual en un formato muy amigable y fácil de leer
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    
    // Capitalizar la primera letra para que se vea mejor
    let dateString = today.toLocaleDateString('es-ES', options);
    dateString = dateString.charAt(0).toUpperCase() + dateString.slice(1);
    
    dateElement.textContent = dateString;
});
