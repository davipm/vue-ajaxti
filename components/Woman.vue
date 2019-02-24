<template>
  <section class="section woman">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-lg-8"></div>
        <div class="col-md-12 col-lg-4">
          <h4 class="title text-center">
            Gostou né?
          </h4>
          <h4 class="title mb-3">
            É que pra gente, desenvolver
            avanços tecnológicos é uma
            verdadeira paixão!
          </h4>
          <p class="text">
            Quer ler nosso E-book, <strong>"Os Dez Sinais de que sua Empresa ainda
            Não Entrou no Futuro da Tecnologia"?</strong> Clique aqui para recebê-lo
            completamente grátis! Será um prazer compartilhar experiências
            com você.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Woman'
  }
</script>

<style scoped lang="scss">
  .woman {
    display: block;
    position: relative;
    padding: 100px 0;
    background: url('../assets/img/foto_menina_do_game_of_thrones.png') center/cover no-repeat;
  }

  .title {
    display: block;
    font-weight: 600;
    font-size: 36px;
    line-height: 1.5;
  }
</style>
