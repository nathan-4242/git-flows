// Newsletter
function iniciarNewsLetter() {
    const newsNome = document.getElementById("nome");
    const form = document.getElementById("news-form");
    const newsEmail = document.getElementById("email");
    const newsTelefone = document.getElementById("telefone");
    const newsErroTelefone = document.getElementById("news-erro-telefone");
    const newsErroEmail = document.getElementById("news-erro-email");
    const newsButton = document.getElementById("news-button");
    const checkNews = document.getElementById("aceite-novidades");
    const checkPrivacidade = document.getElementById("privacy-consent");

    // Validação do formulário
    newsEmail.addEventListener('blur', (e) => {
        let email = e.target.value;
        let regex = /\w+\@[a-zA-Z0-9-]+\.[a-zA-Z]+(\.[a-zA-Z]+)*/;
        if (email.length > 0) {
            if (!regex.test(email)) {
                newsEmail.classList.toggle("erroInput", true);
                newsErroEmail.style.display = "flex";
                newsErroEmail.textContent = "Insira um e-mail válido";
            } else {
                newsEmail.classList.toggle("erroInput", false);
                newsErroEmail.style.display = "none";

            };
        };

    });


    newsTelefone.addEventListener("input", (e) => {
        let regex = /\D/
        if (regex.test(e.data) && e.data !== " " && e.data !== null) {
            newsTelefone.classList.toggle("erroInput", true);
            newsErroTelefone.style.display = "flex";
            newsErroTelefone.classList.toggle("erroSpan", true);
            newsErroTelefone.textContent = "Digite apenas números";
        } else {
            newsTelefone.classList.toggle("erroInput", false);
            newsErroTelefone.classList.toggle("erroSpan", false)
            newsErroTelefone.textContent = "";
            newsErroTelefone.style.display = "none";

        };
        let dados = e.target.value;
        // O único motivo de não apagar os () e - é porque os outros dois sempre os recolocam
        let numeros = dados.replace(/\D/g, "").slice(0, 14);
        // Realiza o teste ancorado no início da string ^ -> um grupo de dois números e qualquer número após
        numeros = numeros.replace(/^(\d{2})(\d)/, '($1)$2');
        // Agora analisa o grupo todo e faz o último replace
        numeros = numeros.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = numeros;

    });

    newsTelefone.addEventListener("blur", (e) => {
        let telefone = e.target.value;
        let regex = /\(\d{2}\)\d{5}-\d{4}/
        if (telefone.length > 0) {
            if (!regex.test(telefone)) {
                newsTelefone.classList.toggle("erroInput", true);
                newsErroTelefone.style.display = "flex";
                newsErroTelefone.textContent = "Insira um telefone válido";

            } else {
                newsTelefone.classList.toggle("erroInput", false);
                newsErroTelefone.style.display = "none";

            };
        };
    });

    newsNome.addEventListener("blur", (e) => {
        let nome = e.target.value;
        if (nome.length > 0) {
            const spanNome = document.getElementById("news-erro-nome");
            spanNome.style.display = "none";
            newsNome.classList.toggle("erroInput", false);

        };
    });

    form.addEventListener("submit", (e) => {
        const elementosForm = new FormData(form);
        e.preventDefault()
        let valido = form.querySelector(".erroInput") ? 0 : 1;

        let labelNews = checkNews.nextElementSibling;
        let labelPrivacidade = checkPrivacidade.nextElementSibling;



        if (elementosForm.has("aceite-novidades")) {
            labelNews.style.color = "green";
        } else {
            labelNews.style.color = "red"
            valido = 0;
        };

        if (elementosForm.has("aceite-privacidade")) {
            labelPrivacidade.style.color = "green";
        } else {

            labelPrivacidade.style.color = "red"
            valido = 0;
        };

        for (const [nome, valor] of elementosForm.entries()) {
            if (valor.trim() === "") {
                valido = 0;
                if (nome === "nome") {
                    const spanNome = document.getElementById("news-erro-nome");
                    spanNome.style.display = "flex";
                    spanNome.textContent = "Preencha o campo";
                    newsNome.classList.toggle("erroInput", true);
                } else if (nome === "email") {
                    newsEmail.classList.toggle("erroInput", true);
                    newsErroEmail.style.display = "flex";
                    newsErroEmail.textContent = "Preencha o campo";
                } else if (nome === "telefone") {
                    newsTelefone.classList.toggle("erroInput", true);
                    newsErroTelefone.style.display = "flex";
                    newsErroTelefone.textContent = "Preencha o campo";
                };
            };
        };
        if (valido === 1) {
            labelNews.style.color = "black";
            labelPrivacidade.style.color = "black";
            form.reset();
        };
    });
}