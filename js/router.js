document.addEventListener("DOMContentLoaded", () => {
    renderizarRota();
    window.addEventListener("hashchange", renderizarRota);
});


function renderizarRota() {
    if (window.location.hash === "#/projetos") {
        const htmlProjetos = templateProjetos()
        document.querySelector("main").innerHTML = htmlProjetos
        document.querySelector("#motivo .projetos-cta").addEventListener("click", (event) => {
            event.preventDefault();
            document.getElementById("realizacoes").scrollIntoView({ behavior: "smooth" });
        });
    } else if (window.location.hash === "#/cadastro") {
        const htmlCadastro = templateCadastro();
        document.querySelector("main").innerHTML = htmlCadastro;
        iniciarCadastro()
    } else {
        const htmlHome = templateHome();
        document.querySelector("main").innerHTML = htmlHome;
        iniciarNewsLetter()
    }
}
