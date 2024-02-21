function contarAulas(){
    let containerContador = document.querySelector("#contador-aulas");
    let teamDetails = document.querySelectorAll(".accordion .tg__animate-text");
    
    containerContador.innerHTML = teamDetails.length
}
window.addEventListener("load", contarAulas);