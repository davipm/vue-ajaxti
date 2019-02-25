<template>
  <section class="section client">
    <div class="container">
      <h3 class="title">Testimonials</h3>
      <div class="row">
        <div class="col-md-2">
          <div class="client-item">
            <img src="../assets/clients/csp.svg" class="client-img" alt="CSP">
          </div>
        </div>
        <div class="col-md-2">
          <div class="client-item">
            <img src="../assets/clients/chetemch.svg" class="client-img" alt="CSP">
          </div>
        </div>
        <div class="col-md-2">
          <div class="client-item">
            <img src="../assets/clients/beach_park.svg" class="client-img" alt="CSP">
          </div>
        </div>
        <div class="col-md-2">
          <div class="client-item">
            <img src="../assets/clients/3_coracoes.svg" class="client-img" alt="CSP">
          </div>
        </div>
        <div class="col-md-2">
          <div class="client-item">
            <img src="../assets/clients/camed_corretora.svg" class="client-img" alt="CSP">
          </div>
        </div>
        <div class="col-md-2">
          <div class="client-item">
            <img src="../assets/clients/camed_saude.svg" class="client-img" alt="CSP">
          </div>
        </div>
        <div class="col-md-2">
          <div class="client-item">
            <img src="../assets/clients/csi.svg" class="client-img" alt="CSP">
          </div>
        </div>
        <div class="col-md-2">
          <div class="client-item">
            <img src="../assets/clients/diagonal.svg" class="client-img" alt="CSP">
          </div>
        </div>
        <div class="col-md-2">
          <div class="client-item">
            <img src="../assets/clients/souza_reis.svg" class="client-img" alt="CSP">
          </div>
        </div>
        <div class="col-md-2">
          <div class="client-item">
            <img src="../assets/clients/instituto_frei_joao_pedro_de_vi.svg" class="client-img" alt="CSP">
          </div>
        </div>
        <div class="col-md-2">
          <div class="client-item">
            <img src="../assets/clients/conselho_regional_de_farmacia_do_ceara.svg" class="client-img" alt="CSP">
          </div>
        </div>
        <div class="col-md-2">
          <div class="client-item">
            <img src="../assets/clients/usibras.svg" class="client-img" alt="CSP">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Client'
  }
</script>

<style scoped lang="scss">
  .client {
    display: block;
    position: relative;
    padding: 30px 0;

    &-item {
      display: flex;
      justify-content: center;
      height: 85px;
      margin-bottom: 55px;
    }

    &-img {
      width: 100%;
      height: auto;
    }
  }

  .title {
    margin-bottom: 50px;
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
  }
</style>
