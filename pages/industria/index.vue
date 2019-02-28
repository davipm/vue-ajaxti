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
              <h5 class="title-content second-title">
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
              <div class="image-wrap">
                <img src="../../assets/img/industria-img-1.png" class="img-fluid" alt="">
              </div>
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
              <div class="image-wrap">
                <img src="../../assets/img/industria-img-2.png" class="img-fluid" alt="">
              </div>
              <div class="card-body">
                <p class="card-text">
                  Atendemos por
                  meio de parcerias,
                  ao segmento
                  petrolífero, propondo
                  inovações tecnológicas,
                  ajudando a
                  elevar o processo
                  de extração mineral
                  de empresas como
                  a Braskem
                  para um patamar
                  mais elevado.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="image-wrap">
                <img src="../../assets/img/industria-img-3.png" class="img-fluid" alt="">
              </div>
              <div class="card-body">
                <p class="card-text">
                  TI e
                  Engenharia Civil.
                  Um encontro mais
                  que perfeito que
                  tem construído
                  maravilhas das
                  técnicas da
                  construção.
                  Diagonal, Souza
                  Reis são algumas
                  das empresas
                  atendidas na área.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="image-wrap">
                <img src="../../assets/img/industria-img-4.png" class="img-fluid" alt="">
              </div>
              <div class="card-body">
                <p class="card-text">
                  Linhas e mais linhas
                  de código para
                  ajudar os sistemas
                  que alimentam
                  linhas e mais linhas
                  de transmissão
                  de energia elétrica para
                  todo o País!
                  Desenvolvemos algorítimos
                  que rodam, no ONS,
                  por exemplo.
                  Estamos juntos!
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
    name: 'index',
    data() {
      return {
        title: 'Industria',
        description: ''
      }
    },

    head () {
      return {
        title: `${this.title} - AjaxTI`,
        meta: [
          { hid: 'description', name: 'description', content: this.description }
        ]
      }
    }
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
    height: 550px;
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
    left: 15px;
    bottom: 0;
    width: calc(100% - 30px);
  }

  .title {
    position: relative;
    padding-right: 41rem;
    bottom: 0;
    width: 65rem;
    height: 15rem;
    background: url('../../assets/img/bg-title.svg') center/cover no-repeat;

    &-content {
      position: relative;
      top: 2rem;
      left: 3rem;
      color: #FFF;
      font-size: 3rem;
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
    overflow-x: hidden;
    overflow-y: hidden;
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
      height: 300px;
    }
  }

  .second-title {
    text-align: right;
    font-size: 4rem;
  }

  .img-fluid {
    display: block;
    margin: 15px auto 20px auto;
  }

  .image-wrap:before,
  .image-wrap:after {
    content: '';
    position: relative;
    display: block;
    width: 2000%;
    height: 3px;
    right: 1000%;
    background-color: red;
    box-shadow: 0 -2px orange;
  }

  @media (max-width: 576px) {
    .card {
      margin-bottom: 20px;
    }

    .text-top-right {
      font-size: 1rem;
      text-align: left;
      right: auto;
      width: auto;
    }

    .title {
      padding-right: 0;
      width: auto;
      height: auto;
      background: none;
      text-align: left;
      bottom: 7rem;
      &-content {
        top: auto;
        left: auto;
      }
    }
  }
</style>
