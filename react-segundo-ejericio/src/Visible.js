
function Visible(){
    function mostrar(e) {
    var elemento = document.getElementById("pEscondido")

    if(elemento.style.display === "none"){
        elemento.style.display = "block"
    } else {
        elemento.style.display = "none"
    }
}

    return(
        <div>
            <button onClick={() => mostrar()}>Enseñar/Esconder</button>
            <p id='pEscondido'>Hola buenas tardes</p>
        </div>
    )
}

export default Visible;