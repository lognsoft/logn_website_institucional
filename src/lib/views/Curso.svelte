<script setup>
import BannerComponent from '../components/BannerComponent.svelte';
import avatar from "../../assets/images/others/avatar.png";
import HeaderComponent from '../components/HeaderComponent.svelte';
import { onMount, onDestroy } from 'svelte';
import { moveTopPage } from '../../tools/scrollMove';
import { generateScript, clearScript } from '../../tools/index.js';

onMount(() => {
  moveTopPage()
  generateScript();
})

onDestroy(clearScript);
</script>
  
<HeaderComponent/>
<BannerComponent title="Programação para iniciantes"/>
<div class="service-single "> 
  <div class="container">
    <div class="row">
      <!--Start service content-->
      <div class="col-12 col-xl-8  ">
        <div class="service-content-area">
          <!-- <div class="featured-img-area part"><img class="feat-img img-fluid" src="assets/images/services/service-single-featured-img.jpg" alt="featured image"></div> -->
          <div class="service-content">
            <div class="part">
              <h2 class="service-title">Veja como será essa jornada</h2>
              <p class="service-text">
                Se você nunca teve contato com programação ou já possui experiência e deseja refinar seus conhecimentos, este é o curso ideal para você! Nosso foco principal é lógica de programação e algoritmos. Para escrever os códigos, usamos a linguagem de programação C# muito poderosa criada pela Microsoft.</p>
            </div>
            <div class="part">
              <h2 class="service-title">O que você vai aprender</h2>
              <p class="service-text">Ao longo do curso, usaremos a linguagem de programação C#. No entanto, nosso foco primordial é aprofundar-se em algoritmos e lógica de programação, pilares essenciais para a formação de um programador de excelência.</p>
            </div>
            <div class="part">
              <h2 class="service-title">Estruturado em 13 Módulos Essenciais!</h2>
              <p class="service-text">Com o objetivo de promover uma aprendizagem contínua e completa, desenhamos este curso em 13 módulos essenciais. Cada segmento foi cuidadosamente planejado para assegurar que você alcance uma profunda compreensão dos tópicos abordados. Estruturamos todo o curso de forma lógica e didática, buscando enriquecer ao máximo sua trajetória como programador.</p>

              <h2 class="service-title">Duração - 12 meses</h2>
              <p class="service-text">Todos os nossos cursos são flexiveis em relação à data de conclusão. O mentor avança pelos módulos de acordo com o desenvolvimento da turma. Nossa principal meta não é simplesmente finalizar o curso em 12 meses, mas assegurar que cada aluno compreenda e assimile plenamente o conteúdo apresentado. Assim, a duração do curso pode, ocasionalmente, exceder os 12 meses.</p>

              <h2 class="service-title">Certificado</h2>
              <p class="service-text">Ao concluir o curso, o aluno receberá um certificado que atestará sua competência e dedicação no aprendizado. Esse documento servirá como uma comprovação do conhecimento adquirido e poderá ser usado para enriquecer seu currículo profissional.</p>
              <div class="info-items-list">
                <div class="row">
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">01.</span>
                      <div class="info-content">
                        <h5 class="info-title">Primeiros passos</h5>
                        <p class="info-text">Primeiro contato com ferramentas de desenvolvimento de programas.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">02.</span>
                      <div class="info-content">
                        <h5 class="info-title">Primeiros códigos</h5>
                        <p class="info-text">Contato com as primeiras linhas de código, captura de dados digitados e manipulação de variáveis.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">03.</span>
                      <div class="info-content">
                        <h5 class="info-title">Git e GitHub</h5>
                        <p class="info-text">Se prepare para aprender a trabalhar em equipe.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">04.</span>
                      <div class="info-content">
                        <h5 class="info-title">Tipos dados e operadores</h5>
                        <p class="info-text">Como efetuar operações matemátcias, contatenação e conversão de dados.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">05.</span>
                      <div class="info-content">
                        <h5 class="info-title">Estruturas de repetição</h5>
                        <p class="info-text">Criação de algoritmos que se repetem enquanto uma condição for verdadeira.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">06.</span>
                      <div class="info-content">
                        <h5 class="info-title">Vetores e matrizes</h5>
                        <p class="info-text">Dados serão armazenados em uma sequência organizada, disponíveis para acesso posterior.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">07.</span>
                      <div class="info-content">
                        <h5 class="info-title">Listas dinâmicas</h5>
                        <p class="info-text">Parecem bastante com vetores e matrizes, mas são bem mais poderosas!</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">08.</span>
                      <div class="info-content">
                        <h5 class="info-title">Funções</h5>
                        <p class="info-text">Reutilização de blocos de código ao longo do programa.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">09.</span>
                      <div class="info-content">
                        <h5 class="info-title">Memória Stack e Heap</h5>
                        <p class="info-text">Comportamento dos dados na memória stack e heap</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">10.</span>
                      <div class="info-content">
                        <h5 class="info-title">Strings</h5>
                        <p class="info-text">Entendendo profundamente o comportamento das strings.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">11.</span>
                      <div class="info-content">
                        <h5 class="info-title">Tratamentos de erros com exceções</h5>
                        <p class="info-text">Tratar erros é uma parte fundamental da programação, abordaremos o mecanismo try/catch/finally.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">12.</span>
                      <div class="info-content">
                        <h5 class="info-title">Programas com interface gráfica GUI</h5>
                        <p class="info-text">Criar aplicações com interface gráfica é muito mais divertido!</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">13.</span>
                      <div class="info-content">
                        <h5 class="info-title">Programação assíncrona</h5>
                        <p class="info-text">Paradigma de programação que permite que operações sejam executadas sem bloquear a execução do programa principal.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="part">
              <h2 class="service-title">Grade completa</h2>
              <div class="faq">           
                <!--Start Accordion List For FAQ-->
                <div class="faq-accordion " id="accordion">
                  <div class="card mb-2">
                    <div class="card-header " id="heading-1">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">Módulo 1 - Primeiros Passos</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-1" aria-labelledby="collapse-1" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>O que é Programação?</li>
                            <li>Lógica de programação</li>
                            <li>Algoritmos</li>
                            <li>Visual Studio</li>
                            <li>Visual Studio Code - extensões</li>
                            <li>.Net</li>
                            <li>Como funciona o C# e o dot.net</li>
                            <li>Por que escolhi C# para este curso de programação</li>
                        </ul>                            
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-2">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">Módulo 2 - Escrevendo os primeiros códigos</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-2" aria-labelledby="collapse-2" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>Terminal / Primeiro programa</li>
                            <li>Hello World - Brian Kernighan</li>
                            <li>Console.WriteLine</li>
                            <li>Console.ReadLine</li>
                            <li>Comentários</li>
                            <li>Variáveis</li>
                            <li>Estrutura de controle</li>
                            <li>Estrutura de repetição</li>
                            <li>Desafios</li>
                        </ul>                                                       
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-3">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">Módulo 3 - Git e GitHub</button>
                      </h5>
                    </div>  
                    <div class="collapse " id="collapse-3" aria-labelledby="collapse-3" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>Criação de conta GitHub</li>
                            <li>Instalando GitHub CLI</li>
                            <li>Git ADD</li>
                            <li>Git Commit</li>
                            <li>Git Pull</li>
                            <li>Git Push</li>
                          </ul>                                                                                   
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-4">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="true" aria-controls="collapse-4">Módulo 4 - Tipos de Dados, Operadores e Saida de dados</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-4" aria-labelledby="collapse-4" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>Tipo de dados</li>
                            <li>Casting</li>
                            <li>Tabela Ascii</li>
                            <li>Variáveis e Constantes</li>
                            <li>Regras para criação de variáveis/constantes</li>
                            <li>Enumeradores</li>
                            <li>Operadores</li>
                            <li>Tabela verdade</li>
                            <li>Concatenação</li>
                            <li>Entrada de dados</li>
                            <li>Covert.To</li>
                            <li>Alias</li>
                            <li>Desafios</li>
                        </ul>                                                                                  
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-5">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="true" aria-controls="collapse-5">Módulo 5 - Instrução de Decisão e Repetição</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-5" aria-labelledby="collapse-5" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>Estrutura de controle</li>
                            <li>Switch...case</li>
                            <li>For</li>
                            <li>While</li>
                            <li>Do While</li>
                            <li>Break</li>
                            <li>Continue</li>
                            <li>Desafios</li>
                        </ul>                                                                                                             
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-6">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="true" aria-controls="collapse-6">Módulo 6 - Vetores e Matrizes</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-6" aria-labelledby="collapse-6" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul>
                            <li>Vetores</li>
                            <li>Matrizes</li>
                            <li>Copiando vetor ou matriz</li>
                            <li>Foreach</li>
                            <li>Redimensionamento de vetores</li>
                            <li>Ordenação de vetores</li>
                            <li>Busca de itens</li>
                            <li>Desafios</li>
                          </ul>                                                                                                                                        
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-7">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="true" aria-controls="collapse-7">Módulo 7 - Listas dinâmicas</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-7" aria-labelledby="collapse-7" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>Criação de lista dinâmica</li>
                            <li>Adicionando elementos</li>
                            <li>Acesso a elementos</li>
                            <li>Pesquisa e filtragem</li>
                            <li>Remoção de elementos</li>
                            <li>Iteração sobre a lista</li>
                            <li>Verificando tamanho de uma lista</li>
                            <li>Desafios</li>
                        </ul>                                                                                                                                                                   
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-8">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="true" aria-controls="collapse-8">Módulo 8 - Funções </button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-8" aria-labelledby="collapse-8" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>O que é função</li>
                            <li>Parâmetro e argumento</li>
                            <li>Retorno</li>
                            <li>Argumento por referência</li>
                            <li>Valores por omissão</li>
                            <li>Recursividade</li>
                            <li>Função na prática</li>
                            <li>Função de callback</li>
                            <li>Função anônima</li>
                            <li>Desafios</li>
                        </ul>                                                                                                                                                                                              
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-9">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="true" aria-controls="collapse-9">Módulo 9 - Memória Stack e Heap</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-9" aria-labelledby="collapse-9" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>Memória Stack</li>
                            <li>Memória Heap</li>
                        </ul>                                                                                                                                                                                                                         
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-10">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-10" aria-expanded="true" aria-controls="collapse-10">Módulo 10 - Strings </button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-10" aria-labelledby="collapse-10" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>O que são strings</li>
                            <li>Compondo palavra usando Char</li>
                            <li>Strings são imutáveis</li>
                            <li>Comparação de strings</li>
                            <li>Manipulação de String</li>
                            <li>StringBuilder</li>
                            <li>Desafios</li>
                        </ul>                                                                                                                                                                                                                                                     
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-11">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-11" aria-expanded="true" aria-controls="collapse-11">Módulo 11 - Tratamentos de erros com exceções</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-11" aria-labelledby="collapse-11" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>Tratamento de exceções</li>
                            <li>Exceções personalizadas</li>
                            <li>Exceções personalizadas</li>
                        </ul>                                                                                                                                                                                                                                                     
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-12">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-12" aria-expanded="true" aria-controls="collapse-12">Módulo 12 - Programas com interface gráfica GUI</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-12" aria-labelledby="collapse-12" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>Instalando IDE Visual Studio</li>
                            <li>Criando um projeto do zero</li>
                            <li>Primeiros controles</li>
                            <li>Capturando o nome digitado</li>
                            <li>Entendendo o arquivo Design.cs</li>
                            <li>Criando uma calculadora simples</li>
                            <li>Criando uma lista de compras</li>
                            <li>Sequência de exercícios</li>
                          </ul>                                                                                                                                                                                                                                                                                                             
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-13">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-13" aria-expanded="true" aria-controls="collapse-13">Módulo 13 - Programação assíncrona</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-13" aria-labelledby="collapse-13" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>O que é programação assíncrona</li>
                            <li>Criando um arquivo TXT</li>
                            <li>Criando arquivos TXT usando programação assíncrona</li>
                        </ul>                                                                                                                                                                                                                                                                                
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Start service content-->
      <!-- Start service sidebar-->
      <div class="col-12 col-xl-4">
        <div class="service-sidebar ">
          <div class="sidebar-pane" style="padding: 0px;">
            <img src={avatar} alt="" style="width: 100%; border-radius: 3px">
          </div>
          <div class="sidebar-pane">
            <div class="download-area">
              <h2 class="sidebar-title">Bruno Bafilli</h2>
              <p class="sidebar-text">Iniciou sua trajetória no mundo da programação em 2006 e, desde então, tem se dedicado intensamente a esta área. Participou de projetos de grande relevância para empresas como Coca-Cola, Banco Original, Bradesco e Gol Linhas Aéreas. Suas linguagens de programação favoritas incluem C#, Solidity (utilizado em Blockchain para Contratos Inteligentes), Javascript, HTML e CSS. Quanto a frameworks, prefere .NET, jQuery e VUE.JS. No que diz respeito a banco de dados, tem expertise em SQL e NoSQL.</p>
            </div>
          </div>
          <div class="sidebar-pane">
            <div class="social-area">
              <h2 class="sidebar-title">Redes sociais</h2>
              <div class="sc-wrapper dir-row sc-size-40">
                <ul class="sc-list">
                  <!-- <li class="sc-item " title="Facebook"><a class="sc-link" href="#0" title="social media icon"><i class="fab fa-facebook-f sc-icon"></i></a></li>
                  <li class="sc-item " title="youtube"><a class="sc-link" href="#0" title="social media icon"><i class="fab fa-youtube sc-icon"></i></a></li> -->
                  <li class="sc-item " title="instagram"><a class="sc-link" href="https://www.instagram.com/brunobafilli/" target="_blank" title="social media icon"><i class="fab fa-instagram sc-icon"></i></a></li>
                  <li class="sc-item " title="twitter"><a class="sc-link" href="https://www.linkedin.com/feed/" target="_blank" title="social media icon"><i class="fab fa-linkedin sc-icon"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End service sidebar-->
    </div>
  </div>
</div>
