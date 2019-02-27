<template>
  <section class="page">
    <div class="wrap">
      <div class="first-content">
        <div class="container-fluid">
          <div class="text-top-right">
            <p class="text">
              Sua empresa contará com a competência de especialistas na
              área da Engenharia Elétrica, Química e de Automação Industrial
              que, aliados à expertise dos Analistas da área de TI,
              colaboram para o avanço da tecnologia especializada
              em nosso país.
            </p>
          </div>
          <div class="content-bottom">
            <div class="title">
              <h5 class="title-content">
                Tecnologia para o
              </h5>
              <h5 class="title-content second-title text-right">
                Avanço
              </h5>
            </div>
            <div class="know-more">
              <p class="know-more-text">
                Mais sobre engenharia?
                <a href="#">
                  Clique aqui
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <div class="card">
              <img src="../../assets/img/industria-img-1.png" class="img-fluid" alt="">
              <div class="card-body">
                <p class="card-text">
                  Acumulamos mais
                  de 50.000 horas
                  de desenvolvimento
                  de soluções para a
                  Companhia
                  Siderúrgica
                  do Pecém,
                  atuando em projetos
                  capilares para a
                  otimização dos
                  processos de
                  produção da empresa.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img src="../../assets/img/industria-img-2.png" class="img-fluid" alt="">
              <div class="card-body">
                <p class="card-text">
                  Acumulamos mais
                  de 50.000 horas
                  de desenvolvimento
                  de soluções para a
                  Companhia
                  Siderúrgica
                  do Pecém,
                  atuando em projetos
                  capilares para a
                  otimização dos
                  processos de
                  produção da empresa.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img src="../../assets/img/industria-img-3.png" class="img-fluid" alt="">
              <div class="card-body">
                <p class="card-text">
                  Acumulamos mais
                  de 50.000 horas
                  de desenvolvimento
                  de soluções para a
                  Companhia
                  Siderúrgica
                  do Pecém,
                  atuando em projetos
                  capilares para a
                  otimização dos
                  processos de
                  produção da empresa.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img src="../../assets/img/industria-img-4.png" class="img-fluid" alt="">
              <div class="card-body">
                <p class="card-text">
                  Acumulamos mais
                  de 50.000 horas
                  de desenvolvimento
                  de soluções para a
                  Companhia
                  Siderúrgica
                  do Pecém,
                  atuando em projetos
                  capilares para a
                  otimização dos
                  processos de
                  produção da empresa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style scoped lang="scss">
  .wrap::after,
  .wrap::before {
    content: '';
    display: block;
    position: relative;
    width: 100%;
    height: 10px;
    background-color: #ff4500;
  }

  .first-content {
    display: block;
    position: relative;
    height: 700px;
    background: url('../../assets/img/engenharia-banner.png') 0 0/cover no-repeat;
  }

  .text-top-right {
    position: absolute;
    top: 3rem;
    right: 2rem;
    width: 38rem;
    font-size: 1.6rem;
    line-height: 1;
    text-align: right;
    color: #FFF;
  }

  .content-bottom {
    position: absolute;
    bottom: 0;
    width: calc(100% - 30px);
  }

  .title {
    position: relative;
    padding-right: 33rem;
    bottom: 0;
    width: 65rem;
    height: 15rem;
    background: url('../../assets/img/bg-title.svg') center/cover no-repeat;

    &-content {
      position: relative;
      top: 2rem;
      left: 3rem;
      color: #FFF;
      font-size: 4rem;
    }
  }

  .know-more {
    position: absolute;
    right: 15px;
    bottom: 20px;
    width: 250px;
    color: yellow;
    a {
      color: yellow;
      text-decoration: underline;
    }
  }

  // page content
  .page-content {
    margin: 50px 0 80px 0;
  }

  .card {
    border: none;
    border-radius: 0;
    background-color: #EEE;
    padding: 10px;
    &-body {
      padding-right: 40px;
      padding-left: 40px;
      font-size: 1.2rem;
      text-align: center;
    }
  }

  .second-title {
    font-size: 5.2rem;
  }
</style>
