# Instituto Tempo Tranquilo

Projeto acadêmico de um site institucional para o Instituto Tempo Tranquilo. A interface apresenta a atuação da organização, projetos, formas de apoio e um formulário de cadastro.

## Como executar

O projeto usa HTML, CSS e JavaScript puro. Não há dependências de aplicação, instalação de pacotes ou etapa de build.

1. Clone o repositório ou baixe seus arquivos.
2. Abra `html/index.html` no navegador. Para trabalhar com um servidor local, sirva a raiz do projeto e acesse `/html/index.html` (por exemplo, com o Live Server no VS Code).

A navegação usa o fragmento da URL: `#/inicio`, `#/projetos` e `#/cadastro`. Os links de seções da página inicial usam o formato `#/inicio/nome-da-secao`.

## Funcionalidades

- Página inicial com apresentação, atuação, depoimento e formulário de newsletter.
- Página de projetos com informações sobre ações e formas de apoio.
- Página de cadastro para interessados em apoiar o instituto.
- Menu responsivo e navegação entre páginas e seções sem recarregar o documento.
- Validação dos formulários no navegador e máscaras de entrada para alguns campos.

O cadastro salva no `localStorage` deste navegador somente o nome e um identificador gerado para cada registro. Esses dados não são enviados a um servidor. O formulário de newsletter valida os campos e limpa o formulário quando os dados são aceitos; ele não envia mensagens nem armazena inscrições remotamente. Alguns links e o vídeo de depoimento ainda são demonstrativos.

## Estrutura do projeto

| Caminho | Responsabilidade |
| --- | --- |
| `html/index.html` | Documento principal, cabeçalho, rodapé e carregamento dos scripts. |
| `css/main.css` | Importa variáveis, reset, layout e componentes. |
| `css/variables.css`, `css/reset.css`, `css/layout.css`, `css/components.css` | Estilos e organização visual. |
| `js/templates.js` | Gera o conteúdo das páginas inicial, de projetos e de cadastro. |
| `js/router.js` | Seleciona a página pelo hash e controla a rolagem da navegação. |
| `js/script.js` | Controla o menu responsivo. |
| `js/newsletter.js`, `js/cadastro.js` | Tratam os formulários e suas validações. |
| `imagens/` | Imagens e ícones usados na interface. |

## Organização do trabalho

`main` representa a versão pronta; `develop` recebe as mudanças em desenvolvimento. Novas tarefas partem de `develop` em branches `feature/` e são propostas para integração por pull request. Correções urgentes de uma versão publicada podem usar `hotfix/` quando necessário.

As mensagens de commit usam prefixos descritivos, como `feat:` para funcionalidades, `fix:` para correções e `docs:` para documentação.
