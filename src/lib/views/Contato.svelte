<script setup>
import Banner from '../components/BannerComponent.svelte';
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
  <Banner title="Contato"/>
  <section class="contact-us  mega-section  pb-0" id="contact-us">
    <div class="container">
      <section class="locations-section  mega-section ">
        <div class="sec-heading centered  ">
          <div class="content-area">
            <h2 class=" title    wow fadeInUp" data-wow-delay=".4s">Agende uma visita.</h2>
          </div>
        </div>
        <div class=" contact-info-panel ">
          <div class="info-section ">
            <div class="row">
              <div class="col-12 col-lg-4">           
                <div class="info-panel  wow fadeInUp" data-wow-delay=".6s">
                  <h4 class="location-title">Hortolândia/SP</h4>
                  <div class="line-on-side "> </div>
                  <p class="location-address">Edifício Comercial Metropolitan Office Tower R. Carlos Roberto de Melo, 475 - Parque Gabriel - CEP: 13186-604</p>
                  <div class="location-card  "><i class="flaticon-email icon"></i>
                    <div class="card-content">
                      <h6 class="content-title">email:</h6><a class="email link" href="mailto:contato@logn.com.br">contato@logn.com.br</a>
                    </div>
                  </div>
                  <div class="location-card  "><i class="flaticon-phone-call icon"></i>
                    <div class="card-content">
                      <h6 class="content-title">Telefone/WhatsApp:</h6><a class="tel link" href="tel:19-93618.9503">19-93618.9503</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="map-section  elf-section">
        <div class="sec-heading  centered   ">
          <div class="content-area">
            <h2 class=" title    wow fadeInUp" data-wow-delay=".4s">Nosso Google Maps</h2>
          </div>
        </div>
        <div class="map-box  wow fadeInUp" data-wow-delay=".6s">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe title="" class="map-iframe" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772.7861353084663!2d-47.209496056617915!3d-22.876049022141295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8bb8b24fcb8a3%3A0x4a566fa51595b530!2sC%C3%B3digo%20Das%20Coisas!5e0!3m2!1spt-BR!2sbr!4v1691972378398!5m2!1spt-BR!2sbr"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
