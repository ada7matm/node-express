// modal
const botonModal = document.getElementById('boton-modal');
const tituloModal = document.getElementById('titulo-modal');

// busqueda
const agregarBusquedaBoton = document.getElementById('agregar-busqueda');
const busquedaModelo = document.getElementsByClassName('busqueda-modelo')[0];
const listaBusquedas = document.getElementById('busquedas');

// oferta
const agregarOfertaBoton = document.getElementById('agregar-oferta');
const ofertaModelo = document.getElementsByClassName('oferta-modelo')[0];
const listaOfertas = document.getElementById('ofertas');


agregarBusquedaBoton.onclick = () => {
    tituloModal.innerText = 'Busqueda';
    botonModal.innerText = 'Agregar';
    categoriaSelect.value = '';
    categoriaSelect.firstElementChild.selected = true;
    descripcionInput.value = '';
    botonModal.onclick = crearBusqueda;
}

agregarOfertaBoton.onclick = () => {
    tituloModal.innerText = 'Oferta';
    botonModal.innerText = 'Agregar';
    categoriaSelect.value = '';
    categoriaSelect.firstElementChild.selected = true;
    descripcionInput.value = '';
    botonModal.onclick = crearOferta;
}

const agregarBusqueda = (id, categoria, descripcion) => {
    const nuevaBusqueda = busquedaModelo.cloneNode(true);
    nuevaBusqueda.children[0].innerText = categoria;
    nuevaBusqueda.children[1].innerText = descripcion;
    nuevaBusqueda.children[2].firstElementChild.firstElementChild.onclick = () => {
        tituloModal.innerText = 'Búsqueda';
        botonModal.innerText = 'Editar';
        categoriaSelect.value = categoria;
        descripcionInput.value = descripcion;
        descripcionInput.dispatchEvent(new Event('focus'));
        botonModal.onclick = () => {
            editarBusqueda(id);
        };
    }
    nuevaBusqueda.children[3].firstElementChild.firstElementChild.onclick = () => {
        eliminarBusqueda(id);
    }
    listaBusquedas.appendChild(nuevaBusqueda);
}

const agregarOferta = (id, categoria, descripcion) => {
    const nuevaOferta = busquedaModelo.cloneNode(true);
    nuevaOferta.children[0].innerText = categoria;
    nuevaOferta.children[1].innerText = descripcion;
    nuevaOferta.children[2].firstElementChild.firstElementChild.onclick = () => {
        tituloModal.innerText = 'Oferta';
        botonModal.innerText = 'Editar';
        categoriaSelect.value = categoria;
        descripcionInput.value = descripcion;
        descripcionInput.dispatchEvent(new Event('focus'));
        botonModal.onclick = () => {
            editarOferta(id);
        };
    }
    nuevaOferta.children[3].firstElementChild.firstElementChild.onclick = () => {
        eliminarOferta(id);
    }
    listaOfertas.appendChild(nuevaOferta);
}

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


