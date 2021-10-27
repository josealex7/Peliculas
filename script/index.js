import movie from './data.js'

const card = document.querySelector('#card-movie');



function loadMovie(movie) {
    card.innerHTML = "";
    movie.forEach(moviedata => {
        const item = document.createElement('div');
        item.innerHTML = `
        <div class="card contenedor-carta" id="${moviedata.id}" style="width: 12rem;">
            <h5 class="card-title">${moviedata.name}</h5>
            <img src=${moviedata.image} class="card-img-top image-carta" alt="...">
            <div class="card-body ">
                <a href="pelicula.html" class="btn btn-primary botones ${moviedata.id}">Descripción</a>
            </div>
        </div>
        `;
        card.appendChild(item);

    });
}

loadMovie(movie);

movie.forEach(movies => {
    let boton = document.getElementById(movies.id);

    boton.addEventListener('click', function() {
        localStorage.setItem("idMovie", JSON.stringify(movies.id));
    });

})