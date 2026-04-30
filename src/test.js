const apiUrl = "http://localhost:4000/users";
const cardsContainer = document.querySelector(".cards-container"); 

function makeCard(user) {
    const card = document.createElement("div");
    card.classList.add("card"); 

    const userName = document.createElement("h5"); 
    userName.textContent = user.name;

    card.appendChild(userName);
    cardsContainer.appendChild(card); 
}

async function getUsers() {
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        for(let i = 0; i < 3 ; i++){
        makeCard(users[i]);
        }
    } catch (error) {
        console.log("Error al obtener usuarios:", error);
    }
}

getUsers();