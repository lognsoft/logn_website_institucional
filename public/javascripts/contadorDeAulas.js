function contarAulas(){
    let containerContador = document.querySelector("#contador-aulas");
    let teamDetails = document.querySelectorAll(".accordion .active");
    containerContador.innerHTML = teamDetails.length
}
window.addEventListener("load", contarAulas);