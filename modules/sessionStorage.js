const cardsContainer = document.querySelector(".cards-container");
function makeCard(employee) {
    const card = document.createElement("div");
    card.classList.add("card-employee");

    card.innerHTML = `
        <div class="avatar"></div>
        <h3>${employee.name}</h3>
        <p>${employee.skill}</p>
        <div class="rating">⭐⭐⭐⭐⭐ <span>4.8</span></div>
        <button class="btn btn-primary">Contactar</button>
    `;

    cardsContainer.appendChild(card);
}

// Lee los resultados guardados y genera una carta por cada empleado
const resultados = JSON.parse(sessionStorage.getItem('resultados'));

if (resultados && resultados.length > 0) {
    resultados.forEach(employee => makeCard(employee)); 
} else {
    cardsContainer.innerHTML = '<p>No se encontraron contratistas</p>';
}