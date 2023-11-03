<script setup>
import { Link } from 'svelte-routing';
import bannerimg from '../../assets/images/hero/inner-page-hero.jpg';

export let title;
</script>


<section class="d-flex align-items-center page-hero  inner-page-hero " id="page-hero">
  <div class="overlay-photo-image-bg parallax" data-bg-img={bannerimg} data-bg-opacity="1"></div>
  <div class="overlay-color" data-bg-opacity=".75"></div>
  <div class="container">
    <div class="hero-text-area centerd">
      <h1 class="hero-title  wow fadeInUp" data-wow-delay=".2s">{ title }</h1>
      <nav aria-label="breadcrumb">
        <ul style="justify-content: center;" class="breadcrumb wow fadeInUp" data-wow-delay=".6s">
          <li class="breadcrumb-item"><Link class="breadcrumb-link" to="/"><i class="bi bi-house icon "></i>home</Link></li>
          <li class="breadcrumb-item active">{ title }</li>
        </ul>
      </nav>
    </div>
  </div>
</section>
