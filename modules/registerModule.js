
function mostrarRegistro() {
    document.querySelector(".card-login").style.display = "none";
    document.getElementById("registro").style.display = "block";
}

function mostrarLogin() {
    document.querySelector(".card-login").style.display = "block";
    document.getElementById("registro").style.display = "none";
}



document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    console.log(email)
    console.log(password)



})


document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('regEmail').value
    const password = document.getElementById('password').value
    const name = document.getElementById('name').value
    const lastname = document.getElementById('lastName').value
    const birthday = document.getElementById('birthday').value

    try {
        const response = await fetch('http://localhost:4000/customer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, lastname, birthday, email, password})
        });

        const data = await response.json();

        if (response.ok) {
            alert(`Usuario creado: ${data.name}`);
            mostrarLogin();
        } else {
            alert(`Error: ${data.message}`);
        }

    } catch (error) {
        console.error('Error al registrar:', error);
        alert('No se pudo conectar con el servidor');
    }



})

