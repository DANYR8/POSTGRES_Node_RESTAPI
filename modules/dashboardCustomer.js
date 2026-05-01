const employee = JSON.parse(sessionStorage.getItem('employee'));
const customer = JSON.parse(sessionStorage.getItem('customer'));


if(!customer || !employee){
    alert('Debes iniciar sesión primero');
    window.location.href = '../pages/index.html';
}

//Customer
document.getElementById('dashCustomerNombre').textContent    = customer.name;
document.getElementById('dashCustomerEmail').textContent     = customer.email;
document.getElementById('dashCustomerUbicacion').textContent = customer.ubicacion || 'No registrada';
document.getElementById('dashCustomerhId').textContent = customer.id;

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
                body: JSON.stringify({ name, email,})
            })

            const data = await response.json();

            if(response.ok){
                sessionStorage.setItem('resultados', JSON.stringify(data));
                window.location.href = '../pages/dashboardCustomer.html';
            }

        }catch(error){

        }
    })
}
