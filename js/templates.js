function templateHome() {
    return `
        <section id="apresentacao" class="apresentacao" aria-labelledby="titulo-instituto">
            <div class="container-texto">
                <p class="apresentacao-marca">Instituto Tempo Tranquilo</p>
                <h1 id="titulo-instituto"><span>Ninguém deveria</span> <span>envelhecer</span> <span>sozinho.</span>
                </h1>
                <p class="apresentacao-descricao">Acolhimento, cuidado e companhia para idosos em situação de
                    vulnerabilidade.</p>
                <a class="apresentacao-cta" href="#/cadastro">Ajude uma vida <span aria-hidden="true">→</span></a>
                <p class="apresentacao-convite">Cada visita, cada gesto, transforma uma vida.</p>
            </div>

            <div class="container-imagem-apresentacao">
                <picture>
                    <source type="image/webp"
                        srcset="../imagens/idosos-acolhimento-480.webp 480w, ../imagens/idosos-acolhimento-960.webp 960w, ../imagens/idosos-acolhimento-1440.webp 1440w"
                        sizes="(min-width: 768px) 58vw, 100vw">
                    <img src="../imagens/idosos-acolhimento.jpg"
                        alt="Idosa sorridente sendo acolhida por uma cuidadora do Instituto Tempo Tranquilo durante uma refeição em grupo"
                        width="1536" height="1024" fetchpriority="high" decoding="async">
                </picture>
            </div>

        </section>

        <section id="atuacao">
            <h2 id="titulo-atuacao">Números que fazem a diferença</h2>
            <div class="atuacao-cards">
                <div class="card" role="group" aria-label="Atendidos">
                    <img src="../imagens/home-heart.svg" alt="">
                    <div class="conteudo-card">
                        <h3>Idosos atendidos</h3>
                        <p>320+</p>
                    </div>

                </div>

                <div class="card" role="group" aria-label="Tempo">
                    <img src="../imagens/calendar-week.svg" alt="">
                    <div class="conteudo-card">
                        <h3>Anos de atuação</h3>
                        <p>12</p>
                    </div>

                </div>

                <div class="card" role="group" aria-label="Refeições">
                    <img src="../imagens/tools-kitchen-2.svg" alt="">
                    <div class="conteudo-card">
                        <h3>Refeições servidas por mês</h3>
                        <p>15.000+</p>
                    </div>


                </div>
            </div>
            <a class="projetos-cta" href="#/projetos">Conheça nossos projetos <span aria-hidden="true">→</span></a>
        </section>

        <section id="depoimento">
            <h2>Veja o depoimento de quem vive essa história</h2>
            <blockquote>
                <p>"Depois que fui acolhida no Instituto Tempo Tranquilo, não me sinto mais sozinha. Aqui eu almoço,
                    converso, faço amizades. É uma segunda família." — Dona Aparecida, 74 anos
                </p>
            </blockquote>
            <video controls>
                <source src="depoimento-aparecida.mp4" type="video/mp4">
                Seu navegador não suporta vídeo.
            </video>
        </section>

        <section id="sobre-nos" class="secao-ilustrada">
            <div class="secao-ilustrada-container">
                <div class="texto-secao-ilustrada">
                    <h2>Envelhecer com dignidade também é um direito</h2>
                    <p>O Instituto Tempo Tranquilo nasceu em 2014, na comunidade onde atua, com o propósito de acolher
                        idosos em
                        situação de vulnerabilidade social. Ao longo dos anos, nos tornamos uma referência local em
                        cuidado,
                        convivência e dignidade para a terceira idade.</p>
                </div>
                <picture class="ilustracao-secao">
                    <source type="image/webp"
                        srcset="../imagens/ilustracao-quem-somos-480.webp 480w, ../imagens/ilustracao-quem-somos-960.webp 960w, ../imagens/ilustracao-quem-somos-1440.webp 1440w"
                        sizes="(min-width: 768px) 50vw, 100vw">
                    <img src="../imagens/ilustracao-quem-somos.png"
                        alt="Ilustração de três idosos e uma cuidadora reunidos ao redor da árvore símbolo do Instituto Tempo Tranquilo"
                        width="1536" height="1024" loading="lazy" decoding="async">
                </picture>
            </div>
        </section>

        <section id="oque-fazemos" class="secao-ilustrada">
            <div class="secao-ilustrada-container">
                <div class="texto-secao-ilustrada">
                    <h2>O que fazemos</h2>
                    <p>Oferecemos alimentação diária, acompanhamento de saúde básico, atividades de convivência e apoio
                        emocional para idosos que muitas vezes não têm mais rede de apoio familiar próxima.</p>
                </div>
                <picture class="ilustracao-secao">
                    <source type="image/webp"
                        srcset="../imagens/ilustracao-o-que-fazemos-480.webp 480w, ../imagens/ilustracao-o-que-fazemos-960.webp 960w, ../imagens/ilustracao-o-que-fazemos-1440.webp 1440w"
                        sizes="(min-width: 768px) 50vw, 100vw">
                    <img src="../imagens/ilustracao-o-que-fazemos.png"
                        alt="Ilustração de um idoso tomando café no sofá enquanto conversa com uma funcionária do instituto"
                        width="1536" height="1024" loading="lazy" decoding="async">
                </picture>
            </div>
        </section>

        <section id="newsletter" class="secao-formulario">
            <div id="news-container">
                <div id="news-titulo">
                    <h2>Fique por dentro</h2>
                    <p>Cadastre seu e-mail e receba notícias, histórias e formas de ajudar o Instituto Tempo Tranquilo a
                        continuar cuidando de quem mais precisa.</p>
                </div>
                <div id="news-form-container" class="formulario-container">
                    <form id="news-form" novalidate>
                        <div id="input-container">
                            <div>
                                <input type="text" id="nome" placeholder="Nome" name="nome" aria-label="Nome">
                                <span hidden id="news-erro-nome" class="spanErro"></span>
                            </div>


                            <div>
                                <input type="email" id="email" placeholder="E-mail" name="email" aria-label="E-mail"
                                    pattern="\w+@[a-zA-Z0-9\-]+\.[a-zA-Z]+(\.[a-zA-Z]+)*">
                                <span hidden id="news-erro-email"></span>
                            </div>

                            <div>
                                <input type="tel" id="telefone" placeholder="Telefone" name="telefone"
                                    aria-label="Telefone" maxlength="14" pattern="\(\d{2}\)\d{5}-\d{4}">
                                <span hidden id="news-erro-telefone"></span>
                            </div>

                        </div>
                        <div id="checkbox-container">
                            <input type="checkbox" id="aceite-novidades" name="aceite-novidades" required>
                            <label for="aceite-novidades">Desejo receber novidades e comunicados do Instituto Tempo
                                Tranquilo
                                *</label>

                            <input type="checkbox" id="privacy-consent" name="aceite-privacidade" required>
                            <label for="privacy-consent">Li e concordo com a <a href="#">Política de Privacidade</a> do
                                Instituto
                                Tempo Tranquilo *</label>
                        </div>
                        <div id="button-container">
                            <button id="news-button" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    `;
}

function templateProjetos() {
    return `
     <section id="motivo" class="apresentacao" aria-labelledby="titulo-projetos">
            <div class="container-texto">
                <p class="projetos-identificacao">Nossos projetos</p>
                <h1 id="titulo-projetos">Sua ajuda se transforma em cuidado.</h1>
                <p>Uma refeição quente, um reencontro, uma tarde de companhia. Conheça as ações que levam acolhimento e
                    dignidade à rotina dos idosos.</p>
                <a class="projetos-cta" href="#realizacoes">Conheça os projetos <span aria-hidden="true">↓</span></a>
            </div>
            <div class="container-imagem-apresentacao">
                <picture>
                    <source type="image/webp"
                        srcset="../imagens/doacao-impacto-480.webp 480w, ../imagens/doacao-impacto-960.webp 960w, ../imagens/doacao-impacto-1440.webp 1440w"
                        sizes="(min-width: 768px) 50vw, 100vw">
                    <img src="../imagens/doacao-impacto.jpg"
                        alt="Idoso sorridente segurando as mãos de um voluntário do Instituto Tempo Tranquilo"
                        width="1660" height="947" fetchpriority="high" decoding="async">
                </picture>
            </div>
        </section>

        <section id="realizacoes">
            <div class="secao-cabecalho">
                <h2>O que já realizamos</h2>
                <p>Confira histórias reais de transformação</p>
            </div>

            <div class="realizacao-card">
                <div class="realizacao-textos">
                    <div class="realizacao-conteudo">
                        <h3>Reencontros que Emocionam</h3>
                        <p>Idosos que viviam isolados, sem contato com a família há anos, foram reconectados através do
                            trabalho
                            de assistência social do instituto.</p>
                    </div>
                    <div class="realizacao-dados">
                        <p class="realizacao-resultado">45 famílias reconectadas</p>
                        <small>Fonte: Relatório Anual do Instituto Tempo Tranquilo, 2025</small>
                    </div>
                </div>
                <div class="realizacao-imagem">
                    <picture>
                        <source type="image/webp"
                            srcset="../imagens/reencontro-familiar-480.webp 480w, ../imagens/reencontro-familiar-960.webp 960w, ../imagens/reencontro-familiar-1440.webp 1440w"
                            sizes="(min-width: 768px) 45vw, 100vw">
                        <img src="../imagens/reencontro-familiar.jpg"
                            alt="Idosa emocionada durante reencontro com um familiar" width="1536" height="1024"
                            loading="lazy" decoding="async">
                    </picture>
                </div>
            </div>

            <div class="realizacao-card realizacao-card--invertido">
                <div class="realizacao-textos">
                    <div class="realizacao-conteudo">
                        <h3>Oficina de Memórias</h3>
                        <p>Um projeto de contação de histórias transformou a rotina de idosos com início de perda de
                            memória,
                            estimulando a mente através de atividades em grupo.</p>
                    </div>
                    <div class="realizacao-dados">
                        <p class="realizacao-resultado">60 participantes ativos</p>
                        <small>Fonte: Relatório Anual do Instituto Tempo Tranquilo, 2025</small>
                    </div>
                </div>
                <div class="realizacao-imagem">
                    <picture>
                        <source type="image/webp"
                            srcset="../imagens/oficina-memorias-480.webp 480w, ../imagens/oficina-memorias-960.webp 960w, ../imagens/oficina-memorias-1440.webp 1440w"
                            sizes="(min-width: 768px) 45vw, 100vw">
                        <img src="../imagens/oficina-memorias.jpg"
                            alt="Idosos participando da Oficina de Memórias em roda de conversa" width="1536" height="1024"
                            loading="lazy" decoding="async">
                    </picture>
                </div>
            </div>

            <div class="realizacao-card">
                <div class="realizacao-textos">
                    <div class="realizacao-conteudo">
                        <h3>De Volta ao Convívio</h3>
                        <p>Seu Antônio, que vivia isolado há dois anos após perder a esposa, hoje participa das
                            atividades
                            semanais e recuperou o ânimo para viver.</p>
                    </div>
                    <div class="realizacao-dados">
                        <p class="realizacao-resultado">1 nova amizade por semana, em média</p>
                        <small>Fonte: Relatório Anual do Instituto Tempo Tranquilo, 2025</small>
                    </div>
                </div>
                <div class="realizacao-imagem">
                    <picture>
                        <source type="image/webp"
                            srcset="../imagens/volta-convivio-480.webp 480w, ../imagens/volta-convivio-960.webp 960w, ../imagens/volta-convivio-1440.webp 1440w"
                            sizes="(min-width: 768px) 45vw, 100vw">
                        <img src="../imagens/volta-convivio.jpg"
                            alt="Idoso sorridente participando de atividade em grupo no instituto" width="1578" height="997"
                            loading="lazy" decoding="async">
                    </picture>
                </div>
            </div>
        </section>

        <section id="por-que-doar" aria-labelledby="titulo-por-que-doar">
            <h2 id="titulo-por-que-doar">Por que doar?</h2>
            <p>Cada doação ao Instituto Tempo Tranquilo se transforma em cuidado real: uma refeição quente, um remédio,
                uma
                tarde de companhia para quem já deu tanto e agora precisa de apoio. Sua contribuição, do tamanho que
                for, muda a rotina de um idoso que muitas vezes enfrenta a velhice sozinho.</p>
            <p>Mais do que ajuda financeira, doar é um gesto de reconhecimento com quem construiu a história que vivemos
                hoje.</p>
        </section>

        <section id="ajuda">
            <div class="secao-cabecalho">
                <h2>Formas de ajudar</h2>
                <p>Escolha a maneira que mais combina com você para fazer parte dessa transformação.</p>
            </div>
            <div class="cards-grid cards-ajuda">
                <article class="card-acao">
                    <div class="icone-card-acao" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M15 11v.01"></path>
                            <path d="M5.173 8.378a3 3 0 1 1 4.656 -1.377"></path>
                            <path
                                d="M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3">
                            </path>
                        </svg>
                    </div>
                    <h3>Doação Financeira</h3>
                    <p>Contribua com qualquer valor, de forma única ou recorrente, e ajude a custear alimentação,
                        remédios e
                        cuidados diários dos idosos atendidos.</p>
                    <a href="#">Quero doar</a>
                </article>
                <article class="card-acao">
                    <div class="icone-card-acao" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 9a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2">
                            </path>
                            <path d="M12 8l0 13"></path>
                            <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7"></path>
                            <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5">
                            </path>
                        </svg>
                    </div>
                    <h3>Doação de Itens</h3>
                    <p>Fraldas geriátricas, roupas, alimentos não perecíveis e itens de higiene fazem toda a diferença
                        no dia
                        a
                        dia do instituto.</p>
                    <a href="#">Ver itens necessários</a>
                </article>
                <article class="card-acao">
                    <div class="icone-card-acao" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                        </svg>
                    </div>
                    <h3>Voluntariado</h3>
                    <p>Doe seu tempo: converse, acompanhe atividades ou ofereça alguma habilidade que possa alegrar a
                        rotina
                        dos idosos.</p>
                    <a href="#">Quero ser voluntário</a>
                </article>
            </div>
        </section>

        <section id="apoio">
            <div class="secao-cabecalho">
                <h2>Podemos contar com seu apoio?</h2>
                <p>Escolha a forma de contribuição que funciona melhor para você.</p>
            </div>
            <div class="cards-grid cards-apoio">
                <article class="card-acao card-apoio card-apoio--recorrente">
                    <div class="icone-card-apoio" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 7h16v13H4Z"></path>
                            <path d="M8 3v4M16 3v4M4 11h16"></path>
                            <path d="M9 15a3 3 0 0 1 5 -1l1 1"></path>
                            <path d="M15 13v2h-2M15 17a3 3 0 0 1 -5 1l-1 -1M9 19v-2h2"></path>
                        </svg>
                    </div>
                    <span class="selo-card-apoio">Cuidado contínuo</span>
                    <h3>Doação Recorrente</h3>
                    <p>Contribua todo mês e ajude a garantir cuidado contínuo para os idosos atendidos pelo instituto.
                    </p>
                    <a href="#">Quero doar mensalmente</a>
                </article>
                <article class="card-acao card-apoio card-apoio--unica">
                    <div class="icone-card-apoio" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="9"></circle>
                            <path d="M15 8.5h-4.5a2 2 0 0 0 0 4h3a2 2 0 0 1 0 4H9M12 6.5v2M12 16.5v2"></path>
                        </svg>
                    </div>
                    <h3>Doação Única</h3>
                    <p>Faça uma contribuição pontual e apoie diretamente as ações do Instituto Tempo Tranquilo.</p>
                    <a href="#">Fazer doação única</a>
                </article>
            </div>
        </section>
    `
}

function templateCadastro() {
    return `<section id="cadastro" class="secao-formulario">
            <div class="secao-cabecalho">
                <h1>Faça parte dessa história!</h1>
                <p>Preencha seus dados para se cadastrar como doador ou voluntário do Instituto Tempo Tranquilo.</p>
            </div>

            <div class="formulario-container">
                <h2>Formulário de Cadastro</h2>
                <form id="cadastro-form" class="formulario-vertical" novalidate>
                    <fieldset>
                        <legend>Dados Pessoais</legend>
                        <div>
                            <label for="nome">Nome:</label>
                            <input type="text" id="nome" name="nome" title="Digite seu nome" required>
                            <span hidden id="cadastro-erro-nome" class="spanErro"></span>
                        </div>

                        <div>
                            <label for="cpf">CPF:</label>
                            <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" maxlength="14"
                                pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="Digite seu CPF" required>
                            <span id="cadastro-erro-cpf"></span>
                        </div>

                        <div>
                            <label for="email">E-mail:</label>
                            <input type="email" id="email" name="email"
                                pattern="\w+@[a-zA-Z0-9\-]+\.[a-zA-Z]+(\.[a-zA-Z]+)*" placeholder="exemplo@email.com"
                                required>
                            <span id="cadastro-erro-email"></span>
                        </div>

                        <div>
                            <label for="telefone">Telefone:</label>
                            <input type="tel" id="telefone" pattern="\(\d{2}\)\d{5}-\d{4}" name="telefone"
                                maxlength="14" placeholder="(00)00000-0000" title="Digite seu telefone" required>
                            <span id="cadastro-erro-telefone"></span>
                        </div>

                    </fieldset>
                    <fieldset>
                        <legend>Endereço</legend>
                        <div>
                            <label for="cep">CEP:</label>
                            <input type="text" id="cep" name="cep" placeholder="00000-000" pattern="\d{5}-\d{3}"
                                maxlength="9" required>
                            <span id="cadastro-erro-cep"></span>
                        </div>

                        <div>
                            <label for="rua">Logradouro:</label>
                            <input type="text" id="rua" name="rua" placeholder="Rua, Avenida, etc.">
                            <span hidden id="cadastro-erro-rua" class="spanErro"></span>
                        </div>

                        <div>
                            <label for="numero">Número:</label>
                            <input type="text" id="numero" name="numero">
                            <span hidden id="cadastro-erro-numero" class="spanErro"></span>
                        </div>


                        <div>
                            <label for="bairro">Bairro:</label>
                            <input type="text" id="bairro" name="bairro">
                            <span hidden id="cadastro-erro-bairro" class="spanErro"></span>
                        </div>


                        <div>
                            <label for="cidade">Cidade:</label>
                            <input type="text" id="cidade" name="cidade">
                            <span hidden id="cadastro-erro-cidade" class="spanErro"></span>
                        </div>


                        <div>
                            <label for="estado">Estado:</label>
                            <select id="estado" name="estado" required>
                                <option value="" disabled selected hidden>
                                    Selecione um estado
                                </option>
                            </select>
                            <span hidden id="cadastro-erro-estado"></span>
                        </div>
                    </fieldset>
                    <button id="botao-cadastro" type="submit">Cadastrar</button>
                </form>
            </div>
            <div id="ultimos-cadastros">
                <h3>Conheça os novos membros da família!</h3>
                <ul id="cadastros-lista">
                </ul>
            </div>
        </section>`
}
