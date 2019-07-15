const categoriaSelect = document.getElementById('categoria-select');
const descripcionInput = document.getElementById('descripcion-input');

const actualizarBusquedas = () => {
    listaBusquedas.innerHTML = '';
    // agregarBusqueda(id, categoria, descripcion)
}

const crearBusqueda = () => {

}

const editarBusqueda = id => {
}

const eliminarBusqueda = id => {
}

const actualizarOfertas = () => {
    listaOfertas.innerHTML = '';
    // agregarOferta(id, categoria, descripcion)
}

const crearOferta = () => {
}

const editarOferta = id => {
}

const eliminarOferta = id => {
}

actualizarCategorias(['Electricidad', 'Plomería', 'Albañilería', 'Gas']);
actualizarBusquedas();
actualizarOfertas();