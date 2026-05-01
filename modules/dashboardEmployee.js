
const customer = JSON.parse(sessionStorage.getItem('customer'));


if (!employee) {
    alert('Debes iniciar sesión primero');
    window.location.href = '../pages/index.html';
}

//Employee
document.getElementById('dashEmployeeNombre').textContent    = employee.name;
document.getElementById('dashEmployeeEmail').textContent     = employee.email;
document.getElementById('dashEmployeeUbicacion').textContent = employee.ubicacion || 'No registrada';
document.getElementById('dashEmployeeHabilidades').textContent = employee.skill   || 'No registradas';
document.getElementById('dashEmployeeId').textContent = employee.id;


function editarInformacion() {
    document.querySelector(".cardPerfilProfecional").style.display = "none";
    document.getElementById("editarPerfilPofrecional").style.display = "block";
}

function guardarInformacion(){
    document.querySelector(".cardPerfilProfecional").style.display = "block";
    document.getElementById("editarPerfilPofrecional").style.display = "none";
    document.getElementById().addEventListener('click', async (e) => {
    e.preventDefault();

        try{
            const response = await fetch(`/employee/${data.id}`,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, lastname, birthday, email, password})
            })

            const data = await response.json();

            if(response.ok){
                sessionStorage.setItem('resultados', JSON.stringify(data));
                window.location.href = '../pages/dashboardEmployee.html';
            }

        }catch(error){

        }
    })
}
