const categoriaSelect = document.getElementById('categoria-select');
const descripcionInput = document.getElementById('descripcion-input');

const actualizarBusquedas = () => {
    listaBusquedas.innerHTML = '';
    //agregarBusqueda(data.id, data.categoria, data.descripcion)
    fetch(`http://localhost:3000/busquedas`)
    .then(respuesta => respuesta.json())
    .then(busquedas => {
        for(const busqueda of busquedas){
            agregarBusqueda(busqueda.id, busqueda.categoria, busqueda.descripcion)
        }
    });
}

const crearBusqueda = () => {
    fetch(`http://localhost:3000/busquedas`, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            categoria: categoriaSelect.value,
            descripcion: descripcionInput.value
        })
    })
    .then(respuesta => respuesta.json())
    .then(data => {
        actualizarBusquedas();
        ocultarModal();
    });
};

const editarBusqueda = id => {
    fetch(`http://localhost:3000/busquedas/${id}`, {
    method: 'put',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            categoria: categoriaSelect.Value,
            descripcion: descripcionInput.value
        })
    })
        .then(respuesta => respuesta.json())
        .then(data => {
        actualizarBusquedas();
        ocultarModal();
    });
}


const eliminarBusqueda = id => {
    fetch(`http:localhost:3000/busquedas/${id}`,{
        method: 'delete',
    })
    .then(respuesta => respuesta.json())
    .then(data => actualizarBusquedas());
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

// const obtenerPeliculas = () => {
//     fetch('http://localhost:3000/peliculas')
//     .then(respuesta => respuesta.json())
//     .then(data => console.log(data));
// }

// const obtenerPelicula = (id) => {
//     fetch(`http://localhost:3000/peliculas/${id}`)
//     .then(respuesta => respuesta.json())
//     .then(data => console.log(data));
// }

// const agregarPelicula = nombrePelicula => {
//     fetch('http://localhost:3000/peliculas',{
//         method: 'post',
//         headers:{
//             'Content-type':'application/json'
//         },
//         body: JSON.stringify({
//             nombre: nombrePelicula
//         })
//     })
//     .then(respuesta => respuesta.json())
//     .then(data => console.log(data));
// } 

// const eliminarPelicula = id => {
//     fetch(`http://localhost:3000/peliculas/${id}`,{
//         method: 'delete',
//     })
//     .then(respuesta => respuesta.json())
//     .then(data => console.log(data));
// } 

// const actualizarPelicula = (id, nombrePelicula) => {
//     fetch(`http://localhost:3000/peliculas/${id}`,{
//         method: 'put',
//         headers:{
//             'Content-type':'application/json'
//         },
//         body: JSON.stringify({
//             nombre: nombrePelicula
//         })
//     })
//     .then(respuesta => respuesta.json())
//     .then(data => console.log(data));
// } 


