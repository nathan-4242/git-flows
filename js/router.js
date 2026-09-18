document.addEventListener("DOMContentLoaded", () => {
    renderizarRota();
    const logoDiv = document.querySelector(".marca-header");
    logoDiv.addEventListener("click", () => {
        if (document.querySelector("#apresentacao") !== null) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

    })
    window.addEventListener("hashchange", renderizarRota);
});


function renderizarRota() {
    if (window.location.hash === "#/projetos") {
        const htmlProjetos = templateProjetos()
        document.querySelector("main").innerHTML = htmlProjetos
        window.scrollTo({ top: 0, behavior: 'instant' })
        document.querySelector("#motivo .projetos-cta").addEventListener("click", (event) => {
            event.preventDefault();
            document.getElementById("realizacoes").scrollIntoView({ behavior: "smooth" });
        });
    } else if (window.location.hash === "#/cadastro") {
        const htmlCadastro = templateCadastro();
        document.querySelector("main").innerHTML = htmlCadastro;
        window.scrollTo({ top: 0, behavior: 'instant' })
        // apos carregamento, fazer com que pagina comece no inicio
        iniciarCadastro()
    } else {
        if (document.querySelector("#apresentacao") === null) {
            const htmlHome = templateHome();
            document.querySelector("main").innerHTML = htmlHome;
            window.scrollTo({ top: 0, behavior: 'instant' })
            iniciarNewsLetter()
        }
        if (window.location.hash === "#/inicio/sobre-nos") {
            document.querySelector("#sobre-nos").scrollIntoView({ behavior: "smooth" })
        } else if (window.location.hash === '#/inicio/atuacao') {
            document.querySelector("#atuacao").scrollIntoView({ behavior: "smooth" })
        } else if (window.location.hash === "#/inicio/depoimento") {
            document.querySelector("#depoimento").scrollIntoView({ behavior: "smooth" })
        } else if (window.location.hash === '#/inicio/newsletter') {
            document.querySelector("#newsletter").scrollIntoView({ behavior: "smooth" })
        } else if (window.location.hash === '#/inicio/oque-fazemos') {
            document.querySelector("#oque-fazemos").scrollIntoView({ behavior: "smooth" })
        }



        // apos carregamento, fazer com que pagina comece no inicio
        // tratando links internos
    }
}
