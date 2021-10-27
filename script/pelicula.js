import movie from './data.js'

const pelis = document.querySelector('#contenedorPrincipal');

function verStorage() {
    idMovie = localStorage.getItem('idMovie');
    movie.forEach(moviedata => {
        if (idMovie == moviedata.id) {
            const items = document.createElement('div');
            document.title = "CineFlix | " + moviedata.name;
            items.innerHTML = `
                    <div class="div-img">
                        <img src="${moviedata.image}" alt="">
                    </div>
                    <div class="contenedor-descripcion">
                        <h2>${moviedata.name}</h2>
                        <div>
                            <p>
                                ${moviedata.descripcion}
                            </p>
                            <button class="btn btn-primary" id="comprar" >Comprar</button>
                        </div>
                        
                    </div>
                `;
            pelis.appendChild(items);
        }
    });
}



let idMovie;
let adquirido = true;
verStorage();

const comprarPeli = () => {
    if (adquirido) {
        swal({
            title: "¡Compra exitosa!",
            text: "¡Su compra se ha realizado de manera exitosa!",
            icon: "success",
        });
        boton.style.backgroundColor = '#4D5656';
        boton.style.border = "0px";
        boton.innerHTML = "Adquirida";
        adquirido = false;
    } else {
        swal({
            title: "¡Pelicula Adquirida!",
            text: "¡Esta pelicula ya fue comprada con anterioridad!",
            icon: "warning",
        });
    }
}

let boton = document.getElementById('comprar');
boton.addEventListener('click', comprarPeli);