document.addEventListener("DOMContentLoaded", () => {
    const buttonHamb = document.getElementById("button-menu");
    const navHeader = document.getElementById("nav-topo");
    function fecharMenu() {
        navHeader.classList.remove("menu-aberto")
        document.body.classList.remove("menu-aberto")
        buttonHamb.ariaExpanded = false
        buttonHamb.textContent = "☰"
        buttonHamb.ariaLabel = "Abrir menu"
    }
    buttonHamb.addEventListener("click", () => {
        const estadoMenu = navHeader.classList.toggle("menu-aberto")
        document.body.classList.toggle("menu-aberto", estadoMenu)
        if (estadoMenu) {
            buttonHamb.ariaExpanded = true
            buttonHamb.textContent = "✕"
            buttonHamb.ariaLabel = "Fechar menu"
        } else {
            fecharMenu()
        }
    })
    navHeader.addEventListener("click", (e) => {
        const linkClicado = e.target.closest("a");
        if (!linkClicado) {
            return;
        }
        fecharMenu()
    })

    // Fechando o menu de hambúrguer ao clicar fora do menu (na área escura)
    // Como é um pseudoelemento, essa área não pode receber listeners
    // Então vamos adicionar um evento no body e verificar se o clique ocorreu fora da navHeader

    document.addEventListener("click", (e) => {
        if (!navHeader.classList.contains("menu-aberto")) {
            return
        }
        const clicouDentroDoMenu = navHeader.contains(e.target)
        const clicouNoBotao = buttonHamb.contains(e.target)

        if (clicouDentroDoMenu || clicouNoBotao) {
            return
        }

        fecharMenu()

    })
});
