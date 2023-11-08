<script>
  import { Router, Route } from 'svelte-routing';
  //views
  import Home from './lib/views/Home.svelte';
  import Sobre from './lib/views/Sobre.svelte';
  import Contato from './lib/views/Contato.svelte';
  import Error from './lib/views/Error.svelte';
  import Curso from './lib/views/Curso.svelte';
  import Lp from './lib/views/Lp.svelte';

  //components
  import FooterComponent from './lib/components/FooterComponent.svelte';
  import WhatsAppButton from './lib/components/WhatsAppButton.svelte';
  import LoadingComponent from './lib/components/LoadingComponent.svelte';
  


  export let url = '';
</script>

<WhatsAppButton/>
<LoadingComponent/>
<Router {url}>
  <main>
    <Route path="/" component={Home}/>
    <Route path="/sobre" component={Sobre}/>
    <Route path="/contato" component={Contato}/>
    <Route path="/curso" component={Curso}/>
    <Route path="/lp" component={Lp}/>
    <Route path="*" component={Error}/>
  </main>
</Router>
<FooterComponent/>


