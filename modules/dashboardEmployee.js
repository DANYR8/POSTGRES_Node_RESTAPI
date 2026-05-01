const employee = JSON.parse(sessionStorage.getItem('employee'));
const customer = JSON.parse(sessionStorage.getItem('customer'));

if (!employee || !customer) {
    alert('Debes iniciar sesión primero');
    window.location.href = '../pages/index.html';
}


document.getElementById('dashEmployeeNombre').textContent = employee.name;
document.getElementById('dashEmployeeEmail').textContent  = employee.email;
document.getElementById('dashEmployeeUbicacion').textContent  = employee.ubicacion || 'No registrada';
document.getElementById('dashEmployeeHabilidades').textContent = employee.skill    || 'No registradas';
document.getElementById('dashEmployeeId').textContent         = employee.id;


function editarInformacion() {
    document.querySelector(".cardPerfilProfecionalEmployee").style.display = "none";
    document.getElementById("editarPerfilPofrecionalEmployee").style.display = "block";
}

function guardarInformacion(){
    document.querySelector(".cardPerfilProfecionalEmployee").style.display = "block";
    document.getElementById("editarPerfilPofrecionalEmployee").style.display = "none";
    
    document.getElementById().addEventListener('click', async (e) => {
    e.preventDefault();

        try{
            const response = await fetch(`/employee/${data.id}`,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, birthday, email, password})
            })

            const data = await response.json();

            if(response.ok){
                sessionStorage.setItem('employee', JSON.stringify(data));
                window.location.href = '../pages/dashboardEmployee.html';
            }

        }catch(error){

        }
    })
}
