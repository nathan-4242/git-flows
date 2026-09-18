// Cadastro
function iniciarCadastro() {
    const cadastroNome = document.getElementById("nome");
    const cadastroCpf = document.getElementById("cpf");
    const cadastroEmail = document.getElementById("email");
    const cadastroTelefone = document.getElementById("telefone");
    const cadastroCep = document.getElementById("cep");
    const cadastroRua = document.getElementById("rua");
    const cadastroNumero = document.getElementById("numero");
    const cadastroBairro = document.getElementById("bairro");
    const cadastroCidade = document.getElementById("cidade");
    const cadastroEstado = document.getElementById("estado");
    const cadastroBotao = document.getElementById("botao-cadastro");
    const form = document.getElementById("cadastro-form")
    const estadosBrasil = [
        "Acre",
        "Alagoas",
        "Amapá",
        "Amazonas",
        "Bahia",
        "Ceará",
        "Distrito Federal",
        "Espírito Santo",
        "Goiás",
        "Maranhão",
        "Mato Grosso",
        "Mato Grosso do Sul",
        "Minas Gerais",
        "Pará",
        "Paraíba",
        "Paraná",
        "Pernambuco",
        "Piauí",
        "Rio de Janeiro",
        "Rio Grande do Norte",
        "Rio Grande do Sul",
        "Rondônia",
        "Roraima",
        "Santa Catarina",
        "São Paulo",
        "Sergipe",
        "Tocantins"
    ];

    // Converte TEXTO JSON em array
    const dados = JSON.parse(localStorage.getItem("registros") ?? '[]');
    const ul = document.getElementById("cadastros-lista");
    for (const user of dados) {
        const li = document.createElement("li");
        li.textContent = user.name;
        ul.appendChild(li)
    }
    cadastroNome.addEventListener("blur", (e) => {
        let nome = e.target.value;
        if (nome.length > 0) {
            const span = cadastroNome.nextElementSibling;
            span.style.display = "none";
            cadastroNome.classList.toggle("erroInput", false);
        };
    });

    cadastroCpf.addEventListener("input", (e) => {
        let regex = /\D/
        if (regex.test(e.data) && e.data !== " " && e.data !== null) {
            const span = cadastroCpf.nextElementSibling;
            cadastroCpf.classList.toggle("erroInput", true);
            span.style.display = "flex";
            span.textContent = "Digite apenas números";

        } else {
            const span = cadastroCpf.nextElementSibling;
            cadastroCpf.classList.toggle("erroInput", false);
            span.style.display = "none";

        };
        let dados = e.target.value;
        let numeros = dados.replace(/\D/g, "").slice(0, 14);
        numeros = numeros.replace(/^(\d{3})(\d)/, '$1.$2');
        numeros = numeros.replace(/(\d{3})(\d)/, '$1.$2');
        numeros = numeros.replace(/(\d{3})(\d)/, '$1-$2');
        // numeros = numeros.replace(/(\d{3})(\d)/, '$1-$2');
        // numeros = numeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        e.target.value = numeros;

    });

    cadastroCpf.addEventListener("blur", (e) => {
        let cpf = e.target.value;
        let regex = /\d{3}.\d{3}.\d{3}-\d{2}/
        if (cpf.length > 0) {
            if (!regex.test(cpf)) {
                const span = cadastroCpf.nextElementSibling;
                cadastroCpf.classList.toggle("erroInput", true);
                span.style.display = "flex";
                span.textContent = "Insira um CPF válido";

            } else {
                const span = cadastroCpf.nextElementSibling;
                cadastroCpf.classList.toggle("erroInput", false);
                span.style.display = "none";

            };
        };
    });

    cadastroEmail.addEventListener('blur', (e) => {
        let email = e.target.value;
        let regex = /\w+\@[a-zA-Z0-9-]+\.[a-zA-Z]+(\.[a-zA-Z]+)*/;
        if (email.length > 0) {
            if (!regex.test(email)) {
                const span = cadastroEmail.nextElementSibling;
                cadastroEmail.classList.toggle("erroInput", true);
                span.style.display = "flex";
                span.textContent = "Insira um e-mail válido";
            } else {
                const span = cadastroEmail.nextElementSibling;
                cadastroEmail.classList.toggle("erroInput", false);
                span.style.display = "none";

            };
        };

    });


    cadastroTelefone.addEventListener("input", (e) => {
        let regex = /\D/
        if (regex.test(e.data) && e.data !== " " && e.data !== null) {
            const span = cadastroTelefone.nextElementSibling;
            cadastroTelefone.classList.toggle("erroInput", true);
            span.style.display = "flex";
            span.textContent = "Digite apenas números";
        } else {
            const span = cadastroTelefone.nextElementSibling;
            cadastroTelefone.classList.toggle("erroInput", false);
            span.style.display = "none";

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

    cadastroTelefone.addEventListener("blur", (e) => {
        let telefone = e.target.value;
        let regex = /\(\d{2}\)\d{5}-\d{4}/
        if (telefone.length > 0) {
            if (!regex.test(telefone)) {
                const span = cadastroTelefone.nextElementSibling;
                cadastroTelefone.classList.toggle("erroInput", true);
                span.style.display = "flex";
                span.textContent = "Insira um telefone válido";

            } else {
                const span = cadastroTelefone.nextElementSibling;
                cadastroTelefone.classList.toggle("erroInput", false);
                span.style.display = "none";

            };
        };


    });

    cadastroCep.addEventListener("input", (e) => {
        let regex = /\D/
        if (regex.test(e.data) && e.data !== " " && e.data !== null) {
            const span = cadastroCep.nextElementSibling;
            cadastroCep.classList.toggle("erroInput", true);
            span.style.display = "flex";
            span.textContent = "Digite apenas números";

        } else {
            const span = cadastroCep.nextElementSibling;
            cadastroCep.classList.toggle("erroInput", false);
            span.style.display = "none";

        };
        let dados = e.target.value;
        let numeros = dados.replace(/\D/g, "").slice(0, 10);
        numeros = numeros.replace(/^(\d{5})(\d)/, '$1-$2');
        e.target.value = numeros;

    });

    cadastroCep.addEventListener("blur", (e) => {
        let cep = e.target.value;
        let regex = /\d{5}\-\d{3}/
        if (cep.length > 0) {
            if (!regex.test(cep)) {
                const span = cadastroCep.nextElementSibling;
                cadastroCep.classList.toggle("erroInput", true);
                span.style.display = "flex";
                span.textContent = "Insira um CEP válido";

            } else {
                const span = cadastroCep.nextElementSibling;
                cadastroCep.classList.toggle("erroInput", false);
                span.style.display = "none";

            };
        };
    });

    cadastroRua.addEventListener("blur", (e) => {
        let rua = e.target.value;
        if (rua.length > 0) {
            const span = cadastroRua.nextElementSibling;
            span.style.display = "none";
            cadastroRua.classList.toggle("erroInput", false);
        };
    });

    cadastroNumero.addEventListener("blur", (e) => {
        let numero = e.target.value;
        if (numero.length > 0) {
            const span = cadastroNumero.nextElementSibling;
            span.style.display = "none";
            cadastroNumero.classList.toggle("erroInput", false);
        };
    });

    cadastroBairro.addEventListener("blur", (e) => {
        let bairro = e.target.value;
        if (bairro.length > 0) {
            const span = cadastroBairro.nextElementSibling;
            span.style.display = "none";
            cadastroBairro.classList.toggle("erroInput", false);
        };
    });

    cadastroCidade.addEventListener("blur", (e) => {
        let cidade = e.target.value;
        if (cidade.length > 0) {
            const span = cadastroCidade.nextElementSibling;
            span.style.display = "none";
            cadastroCidade.classList.toggle("erroInput", false);
        };
    });


    for (const estado of estadosBrasil) {
        const option = document.createElement("option");
        option.value = estado;
        option.textContent = estado
        cadastroEstado.appendChild(option)
    }

    cadastroEstado.addEventListener("change", () => {
        const span = cadastroEstado.nextElementSibling;
        span.style.display = "none";
        cadastroEstado.classList.toggle("erroInput", false);
    });







    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let valido = form.querySelector(".erroInput") ? 0 : 1;
        const elementosForm = new FormData(form);
        for (const [nome, valor] of elementosForm.entries()) {
            if (valor.trim() === "") {
                valido = 0;
                if (nome === "nome") {
                    const span = cadastroNome.nextElementSibling;
                    span.style.display = "flex";
                    span.textContent = "Preencha o campo";
                    cadastroNome.classList.toggle("erroInput", true);
                } else if (nome === "cpf") {
                    const span = cadastroCpf.nextElementSibling;
                    cadastroCpf.classList.toggle("erroInput", true);
                    span.style.display = "flex";
                    span.textContent = "Preencha o campo";
                }
                else if (nome === "email") {
                    const span = cadastroEmail.nextElementSibling;
                    cadastroEmail.classList.toggle("erroInput", true);
                    span.style.display = "flex";
                    span.textContent = "Preencha o campo";
                } else if (nome === "telefone") {
                    const span = cadastroTelefone.nextElementSibling
                    cadastroTelefone.classList.toggle("erroInput", true);
                    span.style.display = "flex";
                    span.textContent = "Preencha o campo";
                } else if (nome === "cep") {
                    const span = cadastroCep.nextElementSibling;
                    cadastroCep.classList.toggle("erroInput", true);
                    span.style.display = "flex";
                    span.textContent = "Preencha o campo";
                } else if (nome === "rua") {
                    const span = cadastroRua.nextElementSibling;
                    cadastroRua.classList.toggle("erroInput", true);
                    span.style.display = "flex";
                    span.textContent = "Preencha o campo";
                } else if (nome === "numero") {
                    const span = cadastroNumero.nextElementSibling;
                    cadastroNumero.classList.toggle("erroInput", true);
                    span.style.display = "flex";
                    span.textContent = "Preencha o campo";
                } else if (nome === "bairro") {
                    const span = cadastroBairro.nextElementSibling;
                    cadastroBairro.classList.toggle("erroInput", true);
                    span.style.display = "flex";
                    span.textContent = "Preencha o campo";
                } else if (nome === "cidade") {
                    const span = cadastroCidade.nextElementSibling;
                    cadastroCidade.classList.toggle("erroInput", true);
                    span.style.display = "flex";
                    span.textContent = "Preencha o campo";
                };
            };
        };

        if (cadastroEstado.value === "") {
            const span = cadastroEstado.nextElementSibling;
            cadastroEstado.classList.toggle("erroInput", true);
            span.style.display = "flex";
            span.textContent = "Preencha o campo";
            valido = 0
        }

        if (valido === 1) {
            const user = {
                name: cadastroNome.value,
                id: crypto.randomUUID()
            }
            dados.push(user)
            localStorage.setItem("registros", JSON.stringify(dados))
            form.reset()
        }
    })
}