let fondo = document.getElementById("fondo_juego");
let mosca = document.querySelectorAll("IMG")
let marcador = document.getElementById("marcador");

const validarPosiciones = (posLeft, posTop) => {
    let posCorrecta = true;
    let moscas = fondo_juego.children;
    let i = 0;
    while (i < moscas.length && posCorrecta) {
        moscaLeft = parseInt(moscas[i].style.left);
        moscaTop = parseInt(moscas[i].style.top)

        if (
            posLeft + 80 < moscaLeft ||
            posLeft - 80 > moscaLeft ||
            posTop + 80 < moscaTop ||
            posTop - 80 > moscaTop
        ) {
            posCorrecta = true;
        } else {
            posCorrecta = false;
        }
        i++;
    }
    return posCorrecta;
}

const cargarMoscas = () => {
    let random = Math.floor(Math.random() * 30) + 5;
    console.log(random);
    marcador.textContent = random;
    let posLeft = 0;
    let posTop = 0;
    for (let i = 0; i < random; i++) {
        
        do {
            posLeft = Math.floor(Math.random() * (fondo_juego.offsetWidth - 90));
            posTop = Math.floor(Math.random() * (fondo_juego.offsetHeight - 90));


        } while (!validarPosiciones(posLeft, posTop))

        console.log(posTop);
        nuevaMosca = document.createElement("IMG");
        nuevaMosca.setAttribute("src", "./imagenes/mosca.png");
        nuevaMosca.setAttribute(
            "style",
            "position:absolute; left:" + posLeft + "px; top:" + posTop + "px;");


        fondo.appendChild(nuevaMosca);

    }

}
const decreaseAmount = () => {
    marcador.textContent = parseInt(marcador.textContent) - 1
}
const handlerClick = (event) => {
    const e = event.target

    if (e.tagName === 'IMG'){
        e.remove()
        decreaseAmount()
    }
}

document.addEventListener("DOMContentLoaded", cargarMoscas)


fondo_juego.addEventListener('click',handlerClick)