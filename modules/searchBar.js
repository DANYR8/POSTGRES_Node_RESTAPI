
document.getElementById('btnBuscar').addEventListener('click', async (e) => {
    e.preventDefault();

    const skill = document.getElementById('busqueda').value;

    try {
        const response = await fetch(`http://localhost:4000/skill/search/${skill}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();

        if (response.ok) {
            sessionStorage.setItem('resultados', JSON.stringify(data));
            window.location.href = '../pages/buscarOficio.html';
            console.log(data);
        } else {
            alert(`Oficio no encontrado`);
        }

    } catch (error) {
        console.error('Error al buscar oficio:', error);
        alert('No se pudo conectar con el servidor');
    }
});