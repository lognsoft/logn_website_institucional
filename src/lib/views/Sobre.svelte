<script setup>
import BannerComponent from '../components/BannerComponent.svelte';
import apresentacao from '../../assets/images/about/3.png'
import { Link } from 'svelte-routing';
import HeaderComponent from '../components/HeaderComponent.svelte';
import { onMount, onDestroy } from 'svelte';
import { generateScript, clearScript } from '../../tools';
import { moveTopPage } from '../../tools/scrollMove';

onMount(() => {
  moveTopPage()
  generateScript();
})

onDestroy(clearScript);

</script>



<HeaderComponent/>
<BannerComponent title="Sobre nós"/>
<section class="about mega-section" id="about">
  <div class="container">
    <div class="content-block  ">
      <div class="row">
        <div class="col-12 col-lg-6 d-flex align-items-center order-1 order-lg-0 about-col pad-end  wow fadeInUp " data-wow-delay="0.6s">
          <div class="text-area ">
            <div class="sec-heading  light-title ">
              <div class="content-area"><span class=" pre-title       wow fadeInUp " data-wow-delay=".2s">Sobre nós</span>
                <h2 class=" title    wow fadeInUp" data-wow-delay=".4s"><span class='hollow-text'>Fundado em</span> <span class='featured-text'>  2022. <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path></svg></span></h2>
              </div>
            </div>
            <p class=" about-text">
              Acreditamos que aprender a programar é mais do que apenas escrever códigos; é sobre resolver problemas, pensar de forma lógica e criar soluções inovadoras para o mundo.</p>
            <div class="info-items-list ">
              <div class="row ">
                <div class="col-9 col-xl-6">
                  <div class="info-item"><i class="flaticon-medal  info-icon"></i>
                    <div class="info-content">
                      <h5 class="info-title">Nossa Missão</h5>
                      <p class="info-text">Inspirar e capacitar pessoas a se tornarem programadores habilidosos e inovadores.</p>
                    </div>
                  </div>
                </div>
                <div class="col-9 col-xl-6">
                  <div class="info-item"><i class="flaticon-book info-icon"></i>
                    <div class="info-content">
                      <h5 class="info-title">Didática</h5>
                      <p class="info-text">Combinamos teoria e prática para garantir que os alunos aprendam de verdade.</p>
                    </div>
                  </div>
                </div>
                <div class="col-9 col-xl-6">
                  <div class="info-item"><i class="flaticon-happy info-icon"></i>
                    <div class="info-content">
                      <h5 class="info-title">Ambiente acolhedor</h5>
                      <p class="info-text">Estimulamos os alunos a fazer perguntas e criamos um ambiente seguro e acolhedor para que eles não tenham medo de errar!</p>
                    </div>
                  </div>
                </div>
                <div class="col-9 col-xl-6">
                  <div class="info-item"><i class="flaticon-map  info-icon"></i>
                    <div class="info-content">
                      <h5 class="info-title">Localização</h5>
                      <p class="info-text">A LOGN está localizada em um ambiente seguro e de fácil acesso.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cta-area">
              <Link class=" btn-solid reveal-start" to="/contato">Entrar em contato</Link>
              <div class="signature ">
                <div class="signature-img"></div>
                <div class="signature-name">CEO &amp; Founder </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 d-flex align-items-center order-0 order-lg-1 about-col  wow fadeInUp" data-wow-delay="0.2s">
          <div class="img-area  " data-tilt>
            <div class="image   "><img class="about-img img-fluid " loading="lazy" src={apresentacao} alt="Our vision"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<style>
</style>
