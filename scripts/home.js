const categoriaSelect = document.getElementById('categorias');
const busquedaInput = document.getElementById('busqueda');
const contenedor = document.getElementById('contenedor');
const tarjeta = document.getElementsByClassName('card')[0];

const actualizarCategorias = categorias => {
    categoriaSelect.innerHTML = '';
    
    const disabledOpt = document.createElement('option');
    disabledOpt.disabled = true;
    disabledOpt.selected = true;
    disabledOpt.innerText = 'Categorías';
    categoriaSelect.appendChild(disabledOpt);

    for(const categoria of categorias) {
        const option = document.createElement('option');
        option.value = categoria;
        option.innerText = categoria;
        categoriaSelect.appendChild(option);
    }
}

const agregarTarjeta = (id, nombre, categoria, descripcion) => {
    const nuevaTarjeta = tarjeta.parentElement.cloneNode(true);
    nuevaTarjeta.firstElementChild.children[0].children[0].innerText = nombre;
    nuevaTarjeta.firstElementChild.children[0].children[1].innerText = categoria;
    nuevaTarjeta.firstElementChild.children[1].children[0].innerText = descripcion;
    contenedor.appendChild(nuevaTarjeta);
}