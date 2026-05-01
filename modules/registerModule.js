
function mostrarRegistro() {
    document.querySelector(".card-login").style.display = "none";
    document.getElementById("registro").style.display = "block";
}

function mostrarLogin() {
    document.querySelector(".card-login").style.display = "block";
    document.getElementById("registro").style.display = "none";
}



// ── REGISTRO  ───────────────────────────────────────────────────────────────
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

document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();
 
    const email    = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
 
    try {
        const response = await fetch('http://localhost:4000/customer/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
 
        const data = await response.json();
 
        if (response.ok) {
            sessionStorage.setItem('customer', JSON.stringify(data.customer));
            window.location.href = '../pages/dashboard.html';
        } else {
            alert(`Error: ${data.message}, Correo/Password Incorrecto`);
        }
 
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        alert('No se pudo conectar con el servidor');
    }
});



