<script setup>
import { Link } from 'svelte-routing';
import logolight from '../../assets/images/logo/logo-light.svg';
import darkLogo from '../../assets/images/logo/logo-dark.png';
import { useHistory } from 'svelte-routing';

let rota = useHistory();
let path = '';
let createMain;

$: path = rota.location.pathname;

function handleScroll(e){
  let id = e.target.getAttribute("href");
  let section = document.querySelector(id);
  let offsetTop = section.offsetTop - 90;

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  })
  document.querySelector(".links.menu-wrapper").classList.remove("show");
  document.querySelector(".control.menu-toggler").classList.remove("close-menu")
}

</script>


<header class=" page-header header-basic" style="background-color: #09aff4;" id="page-header">
  <div class="container">
    <nav class="menu-navbar">
      <div class="header-logo"><Link class="logo-link" to="/">
        <img style="width: 100px; margin: 20px;" class="logo-img light-logo" loading="lazy" src={logolight} alt="logo"/>
        <img class="logo-img  dark-logo" loading="lazy" src={darkLogo} alt="logo"/></Link></div>
      <div  class="links menu-wrapper">
        <ul class="list-js links-list">
          {#if path !== "/"}
          <li class="menu-item has-sub-menu">
            <!-- <Link class="menu-link{path === '/' ? ' active' : ''}" to="/">Home</Link> -->
          </li>
          {:else}
          <li class="menu-item has-sub-menu">
            <a class="menu-link active" href="#page-hero" on:click|preventDefault={handleScroll}>Home <i class="fas fa-plus  plus-icon"> </i></a>
            <ul class="sub-menu ">
              <li class="menu-item sub-menu-item"><a class="menu-link sub-menu-link" href="#services" on:click|preventDefault={handleScroll}>Cursos</a></li>
              <li class="menu-item sub-menu-item"><a class="menu-link sub-menu-link" href="#about" on:click|preventDefault={handleScroll}>Escola</a></li>
            </ul>
          </li>
          {/if}
          <li class="menu-item">
            <!-- <Link class="menu-link{path === '/sobre' ? ' active' : ''}" to="/sobre">Sobre</Link> -->
          </li>
          <li class="menu-item">
            <!-- <Link class="menu-link{path === '/contato' ? ' active' : ''}" to="/contato">Contato</Link> -->
          </li>
        </ul>
      </div>
      <div class="controls-box">
        <!--Menu Toggler button-->
        <!-- <div class="control menu-toggler"><span></span><span></span><span></span></div> -->
      </div>
    </nav>
  </div>
</header>