<template>
  <section class="section solution">
    <div class="container-fluid">
      <h3 class="title">A Palavra é: <u>Solução</u></h3>
      <div class="row solution-content">
        <div class="col-lg-3 col-md-6">
          <div class="solution-item">
            <img src="../assets/img/web.svg" class="solution-img" alt="">
            <div class="solution-body">
              <h5 class="solution-title">WEB</h5>
              <p class="solution-text">
                Diversas soluções em ambiente web
                que ajudarão a fazer a diferença
                para sua corporação
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="solution-item">
            <img src="../assets/img/industria.svg" class="solution-img" alt="">
            <div class="solution-body">
              <h5 class="solution-title">INDÚSTRIA 4.0</h5>
              <p class="solution-text">
                Expertise em desenvolvimento de soluções
                para a indústria, de qualquer segmento:
                siderúrgica, construção, alimentícia,
                beneficiamento, etc.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="solution-item">
            <img src="../assets/img/desenvolvimento.svg" class="solution-img" alt="">
            <div class="solution-body">
              <h5 class="solution-title">DESENVOLVIMENTO</h5>
              <p class="solution-text">
                Linhas e linhas de códigos, elaboram
                sistemas eficazes que solucionam os mais
                variados problemas das empresas
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="solution-item">
            <img src="../assets/img/saude.svg" class="solution-img" alt="">
            <div class="solution-body">
              <h5 class="solution-title">SAÚDE</h5>
              <p class="solution-text">
                Entendemos por dentro, os sistemas de
                gestão de saúde. Conte com nossa
                experiência para tornar os processos
                mais eficientes
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="solution-item">
            <img src="../assets/img/outsourcing.svg" class="solution-img" alt="">
            <div class="solution-body">
              <h5 class="solution-title">OUTSOURCING 4.0</h5>
              <p class="solution-text">
                Vamos conversar sobre colaboração!
                Podemos dar suporte à área de
                TI de sua empresa, desenvolvendo
                projetos de dentro, com profissionais
                qualificados, à sua disposição
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Solution'
  }
</script>

<style scoped lang="scss">
  .solution {
    padding-top: 60px;
    padding-bottom: 0;

    &::after {
      content: '';
      display: block;
      position: relative;
      height: 50px;
      background-color: #FF6B3A;
    }
  }

  .title {
    display: block;
    font-weight: 600;
    font-size: 3rem;
    text-align: center;
  }

  .solution-content {
    margin-top: 5rem;
  }

  .solution-item {
    display: block;
    position: relative;
    text-align: center;
  }

  .solution-img {
    display: block;
    position: relative;
    margin: auto;
    height: 90px;
  }

  .solution-body {
    padding: 15px;
  }

  .solution-title {
    margin-bottom: 1.2rem;
    font-weight: 600;
  }

  .solution-text {
    font-size: .85rem;
  }

  .col-lg-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 20%;
    max-width: 20%;

    @media (max-width: 768px) {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }

    @media (max-width: 576px) {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
</style>
