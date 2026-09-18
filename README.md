# Instituto Tempo Tranquilo

Projeto acadêmico de um site institucional para o Instituto Tempo Tranquilo. A interface apresenta a atuação da organização, projetos, formas de apoio e um formulário de cadastro.

## Como executar

O projeto usa HTML, CSS e JavaScript puro. Não há dependências de aplicação, instalação de pacotes ou etapa de build.

1. Clone o repositório ou baixe seus arquivos.
2. Abra `html/index.html` no navegador. Para trabalhar com um servidor local, sirva a raiz do projeto e acesse `/html/index.html` (por exemplo, com o Live Server no VS Code).

A navegação usa o fragmento da URL: `#/inicio`, `#/projetos` e `#/cadastro`. Os links de seções da página inicial usam o formato `#/inicio/nome-da-secao`.

Para criar a versão otimizada, execute `npm install` e depois `npm run build`. A saída fica em `dist/`, com `index.html` na raiz. Sirva a pasta `dist/` num servidor estático para conferir a build. O esbuild reúne e minifica JavaScript e CSS; o html-minifier-terser reduz o HTML. O Sharp gera imagens WebP responsivas com 480, 960 e 1440 pixels, mantendo os arquivos JPG e PNG originais como fallback. Os arquivos de desenvolvimento continuam editáveis fora de `dist/`.

As imagens usam `srcset` e `sizes` para que o navegador escolha a resolução mais próxima do espaço disponível. Imagens abaixo da primeira área visível usam carregamento tardio; as imagens principais têm prioridade. Os atributos `width` e `height` reservam o espaço antes do carregamento e reduzem mudanças inesperadas de layout.

## Publicação

O projeto usa GitHub Pages com GitHub Actions. Quando uma alteração chega à branch `main`, o workflow instala as dependências com `npm ci`, executa `npm run build` e publica o conteúdo de `dist/`. O site fica disponível em `https://nathan-4242.github.io/git-flows/` depois que o GitHub Pages estiver configurado para usar GitHub Actions e o primeiro deploy terminar com sucesso.

## Funcionalidades

- Página inicial com apresentação, atuação, depoimento e formulário de newsletter.
- Página de projetos com informações sobre ações e formas de apoio.
- Página de cadastro para interessados em apoiar o instituto.
- Menu responsivo e navegação entre páginas e seções sem recarregar o documento.
- Botão "Alto contraste" no menu, acionável por teclado. A escolha de cores é mantida neste navegador pelo `localStorage`.
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
| `js/script.js` | Controla o menu responsivo e a opção de alto contraste. |
| `js/newsletter.js`, `js/cadastro.js` | Tratam os formulários e suas validações. |
| `imagens/` | Imagens e ícones usados na interface. |

## Organização do trabalho

`main` representa a versão pronta; `develop` recebe as mudanças em desenvolvimento. Novas tarefas partem de `develop` em branches `feature/` e são propostas para integração por pull request. Correções urgentes de uma versão publicada podem usar `hotfix/` quando necessário.

As mensagens de commit usam prefixos descritivos, como `feat:` para funcionalidades, `fix:` para correções e `docs:` para documentação.
