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
                        <h5 class="info-title">Algoritmos e a Lógica de Programaçâo</h5>
                        <p class="info-text">Introdução ao conceito de algoritmos e desenvolvimento do pensamento lógico necessário para programar.</p>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">03.</span>
                      <div class="info-content">
                        <h5 class="info-title">Git e GitHub</h5>
                        <p class="info-text">Se prepare para aprender a trabalhar em equipe.</p>
                      </div>
                    </div>
                  </div> -->
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">03.</span>
                      <div class="info-content">
                        <h5 class="info-title">Programação com Sequência</h5>
                        <p class="info-text">Execução de comandos em ordem direta para realizar tarefas programadas.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">04.</span>
                      <div class="info-content">
                        <h5 class="info-title">Programação com Decisão</h5>
                        <p class="info-text">Ensino do uso de instruções condicionais para criar bifurcações lógicas no código.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">05.</span>
                      <div class="info-content">
                        <h5 class="info-title">Programação com Laços</h5>
                        <p class="info-text">Exploração das estruturas de repetição e como elas permitem executar um conjunto de instruções várias vezes.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">06.</span>
                      <div class="info-content">
                        <h5 class="info-title">Estruturas de Dados Homogêneas de Uma Dimensão</h5>
                        <p class="info-text">Uso de arrays (vetores) para armazenar e manipular coleções de dados do mesmo tipo.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">07.</span>
                      <div class="info-content">
                        <h5 class="info-title">Aplicações Básicas com Matrizes de Uma Dimensão</h5>
                        <p class="info-text">Aplicação prática dos conceitos de arrays em problemas de programação.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">08.</span>
                      <div class="info-content">
                        <h5 class="info-title">Estruturas de Dados Homogêneas de Duas Dimensões</h5>
                        <p class="info-text">Introdução a matrizes bidimensionais (arrays de arrays) e seu uso em diferentes contextos.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">09.</span>
                      <div class="info-content">
                        <h5 class="info-title">Estrutura de dados Heterogêneas</h5>
                        <p class="info-text">Estruturas que podem armazenar diferentes tipos de dados, como structs ou classes.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="info-item"><span class="info-number ">10.</span>
                      <div class="info-content">
                        <h5 class="info-title">Subprogramas</h5>
                        <p class="info-text">Abordagem sobre funções e procedimentos, ensinando a modularização do código.</p>
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
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">Módulo 01 - Primeiros Passos</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-1" aria-labelledby="collapse-1" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>O que é Programação?</li>
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
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">Módulo 02 - Algoritmos e a Lógica de Programação</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-2" aria-labelledby="collapse-2" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>Algoritmos Computacionais</li>  
                            <li>Lógica de Programação de Computadores </li>
                            <li>Linguagem de Programação de Computadores</li>
                        </ul>                                                       
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <!-- <div class="card mb-2">
                    <div class="card-header " id="heading-3">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">Módulo 3 - Git e GitHub</button>
                      </h5>
                    </div>  
                    <div class="collapse " id="collapse-3" aria-labelledby="collapse-3" data-bs-parent="#accordion">
                      <div class="card-body">
                    
                          <ul class="faq-answer">
                            <li>Criação de conta GitHub</li>
                            <li>Instalando GitHub CLI</li>
                            <li>Git ADD</li>
                            <li>Git Commit</li>
                            <li>Git Pull</li>
                            <li>Git Push</li>
                          </ul>                                                                                   
          
                      </div>
                    </div>
                  </div> -->
                  <div class="card mb-2">
                    <div class="card-header " id="heading-4">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="true" aria-controls="collapse-4">Módulo 03 - Programação com Sequência</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-4" aria-labelledby="collapse-4" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>Etapas de Ação de um Computador</li>
                            <li>Tipos de Dados Primitivos ou Dados Básicos</li>
                            <li>O Uso de Variáveis</li>
                            <li>O Uso de Constantes</li>
                            <li>Os Operadores Aritméticos</li>
                            <li>Expressões Aritméticas</li>
                            <li>Instruções e Comandos</li>
                        </ul>                                                                                  
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-5">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="true" aria-controls="collapse-5">Módulo 04 - Programação com Decisão</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-5" aria-labelledby="collapse-5" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>Decisões, Condições e Operadores Relacionais</li>
                            <li>Desvio Condicional Simples</li>
                            <li>Desvio Condicional Composto</li>
                            <li>Outras Formas de Desvios Condicionais</li>
                            <li>Operadores Lógicos</li>
                            <li>Divisibilidade: Multiplos e Divisores</li>
                        </ul>                                                                                                             
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-6">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="true" aria-controls="collapse-6">Módulo 05 - Programação com Laços</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-6" aria-labelledby="collapse-6" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul>
                            <li>Laços ou Malhas (Loopings ou Loops)</li>
                            <li>Laço Condicional Pré-Teste</li>
                            <li>Laço Condicional Pós-Teste</li>
                            <li>Laço Condicional Seletivo</li>
                            <li>Laço Incondicional</li>
                            <li>Consideracões entre Tipos de Laços</li>
                          </ul>                                                                                                                                        
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-7">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="true" aria-controls="collapse-7">Módulo 06 - Estruturas de Dados Homogêneas de Uma Dimensão</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-7" aria-labelledby="collapse-7" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>Matrizes de Uma Dimensão</li>
                        </ul>                                                                                                                                                                   
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-8">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="true" aria-controls="collapse-8">Módulo 07 - Aplicações Básicas com Matrizes de Uma Dimensāo</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-8" aria-labelledby="collapse-8" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>Classificação de Elementos</li>
                            <li>Métodos de Pesquisa de Elementos</li>
                            <li>Utilização de Matrizes Dinâmicas</li>
                        </ul>                                                                                                                                                                                              
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-9">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="true" aria-controls="collapse-9">Módulo 08 - Estruturas de Dados Homogêneas de Duas Dimensões</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-9" aria-labelledby="collapse-9" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>Matrizes com Mais de Uma Dimensão</li>
                            <li>Matrizes de Duas Dimensoes</li>
                        </ul>                                                                                                                                                                                                                         
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-10">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-10" aria-expanded="true" aria-controls="collapse-10">Módulo 09 - Estrutura de dados Heterogêneas</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-10" aria-labelledby="collapse-10" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>Estrutura de Registro</li>
                            <li>Estrutura de Registro de Matriz</li>
                            <li>Estrutura de Matriz de Registros</li>
                        </ul>                                                                                                                                                                                                                                                     
                        <!-- </p> -->
                      </div>
                    </div>
                  </div>
                  <div class="card mb-2">
                    <div class="card-header " id="heading-11">
                      <h5 class="mb-0 faq-title">
                        <button class="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-11" aria-expanded="true" aria-controls="collapse-11">Módulo 10 - Subprogramas/Funções</button>
                      </h5>
                    </div>
                    <div class="collapse " id="collapse-11" aria-labelledby="collapse-11" data-bs-parent="#accordion">
                      <div class="card-body">
                        <!-- <p class="faq-answer"> -->
                          <ul class="faq-answer">
                            <li>Modularidade</li>
                            <li>Métodos Top-Down e Bottom-Up</li>
                            <li>Procedimentos</li>
                            <li>Escopo de Variáveis</li>
                            <li>Passagens de Parâmetros</li>
                            <li>Funções e Recursividade</li>
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
