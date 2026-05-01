
function mostrarRegistroEmployee() {
    document.querySelector(".card-login-Employee").style.display = "none";
    document.getElementById("registro-Employee").style.display = "block";
}

function mostrarLoginEmployee() {
    document.querySelector(".card-login-Employee").style.display = "block";
    document.getElementById("registro-Employee").style.display = "none";
}




document.getElementById('registerFormEmployee').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('regEmail').value
    const password = document.getElementById('password').value
    const name = document.getElementById('name').value
    const birthday = document.getElementById('birthday').value

    try {
        const response = await fetch('http://localhost:4000/employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, birthday, email, password})
        });

        const data = await response.json();

        if (response.ok) {
            alert(`Usuario creado: ${data.name}`);
            mostrarLoginEmployee();
        } else {
            alert(`Error: ${data.message}`);
        }

    } catch (error) {
        console.error('Error al registrar:', error);
        alert('No se pudo conectar con el servidor');
    }



})

document.getElementById('loginFormEmployee').addEventListener('submit', async function (event) {
    event.preventDefault();
 
    const email    = document.getElementById('emailLoginEmployee').value;
    const password = document.getElementById('passwordLoginEmployee').value;
 
    try {
        const response = await fetch('http://localhost:4000/employee/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
 
        const dataEmployee = await response.json();
 
        if (response.ok) {
            console.log(dataEmployee); 
            sessionStorage.setItem('employee', JSON.stringify(dataEmployee.employee));
            window.location.href = '../pages/dashboardEmployee.html';
        } else {
            alert(`Error: ${data.message}, Correo/Password Incorrecto`);
        }
 
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        alert('No se pudo conectar con el servidor');
    }
});



