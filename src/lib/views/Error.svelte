<script setup>
import { Link } from 'svelte-routing';
import HeaderComponent from '../components/HeaderComponent.svelte';
import sectionbgimg from '../../assets/images/sections-bg-images/pattern-bg-1.jpg';
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
<section class=" err-404 d-flex align-items-center">
  <div class="overlay-photo-image-bg" data-bg-img={sectionbgimg} data-bg-opacity=".35"></div>
  <div class="container">
    <div class="row">
      <div class="col-12   mx-auto">
        <!--Start of .hero-text-area-->
        <div class="err-text-area text-center  ">
            <h1 class="err-title hollow-text wow   fadeInUp" data-wow-delay="0s">404 </h1>
            <h2 class="err-subtitle wow  fadeInUp " data-wow-delay="0.2s">página não encontrada</h2>
            <p class="err-text narrow-centerd-text wow  fadeInUp  " data-wow-delay="0.4s">
                opa! a página que você estava solicitando não existe.
            </p>
        </div>
      </div>
      <div class="col-12 col-md-10 col-lg-8 mx-auto text-center">
        <div class="cta-links-area wow  fadeInUp " data-wow-delay=".8s"><Link to="/" class=" btn-solid cta-link">Voltar a página inicial</Link></div>
      </div>
    </div>
    <!--End of .hero-text-area -->
  </div>
</section>
