<template>
  <section class="page">
    <div class="wrap">
      <div class="first-content">
        <div class="container-fluid">
          <!--
          <div class="text-top-right">
            <p class="text">
              O atendimento médico é, normalmente, cercado por
              uma série de procedimentos reguladores, definidos pela Agência
              Reguladora de Saúde, que contribuem para a organização
              do processo. É preciso experiência para entender o trâmite.
              E experiência na área, a Ajax tem de sobra!
            </p>
          </div>
          -->
          <div class="content-bottom">
            <div class="title">
              <h5 class="title-content">
                Tecnologia para a
              </h5>
              <h5 class="title-content second-title">
                Parceria
              </h5>
            </div>
            <div class="know-more">
              <p class="know-more-text">
                Conhece a modalidade de
                <strong>Outsourcing 4.0</strong>? Não?
                <a href="#">
                  <strong>Clique aqui</strong>
                </a> para saber mais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="container">
        <h3 class="page-title">
          Você conhece as vantagens do <span class="mark">outsourcing</span>? Listamos 4 bem legais:
        </h3>
        <div class="row">
          <div class="col-md-3">
            <div class="item">
              <div class="item-number">
                <h1 class="item-title title-number">1</h1>
                <h1 class="item-title">Experiência</h1>
              </div>
              <img src="../../assets/img/out-experiencia.png" class="item-img" alt="">
              <div class="item-body">
                <p class="item-text">
                  Sua empresa contará com
                  o know-how da <strong>Ajax</strong>,
                  que ficará inteiramente a
                  disposição de suas
                  demandas. Estamos
                  prontos para oferecer
                  as melhores soluções,
                  personalizadas às suas
                  necessidades.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="item">
              <div class="item-number">
                <h1 class="item-title title-number">2</h1>
                <h1 class="item-title">Garantia</h1>
              </div>
              <img src="../../assets/img/out-garantia.png" class="item-img" alt="">
              <div class="item-body">
                <p class="item-text">
                  Uma grande vantagem do
                  sistema de <strong>outsorcing</strong> é
                  a garantia dos riscos
                  operacionais, ou seja,
                  a <strong>Ajax</strong> garante que seu
                  projeto será feito com a
                  máxima expertise.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="item">
              <div class="item-number">
                <h1 class="item-title title-number">3</h1>
                <h1 class="item-title">Liberdade</h1>
              </div>
              <img src="../../assets/img/out-liberdade.png" class="item-img" alt="">
              <div class="item-body">
                <p class="item-text">
                  Sua empresa terá liberdade
                  para ficar 100% focada em
                  suas atividades principais.
                  Ao invés de criar mais
                  departamentos, com custos
                  de contratação de funcionários,
                  o foco pode ser inteiramente
                  aplicado na atividade-fim
                  do negócio.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="item">
              <div class="item-number">
                <h1 class="item-title title-number">4</h1>
                <h1 class="item-title">Economia</h1>
              </div>
              <img src="../../assets/img/out-img-1.png" class="item-img" alt="">
              <div class="item-body">
                <p class="item-text">
                  A economia é perceptível e
                  imediata, já que a empresa
                  fica apenas com o custo de
                  manutenção do serviço.
                  Todas as obrigações
                  trabalhistas ficam a cargo
                  da <strong>Ajax</strong>.
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
        title: 'Outsourcing',
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
  .wrap {
    position: relative;
    margin-bottom: 30px;
  }

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
    background: url('../../assets/img/outsorcing-banner.png') 0 0/cover no-repeat;
  }

  .text-top-right {
    position: absolute;
    top: 3rem;
    right: 2rem;
    width: 38rem;
    font-size: 1.6rem;
    line-height: 1;
    text-align: right;
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
    color: #333;
    font-size: 1.2rem;
    a {
      color: #333;
      text-decoration: underline;
    }
  }

  // page content
  .page-title {
    margin-bottom: 40px;
    text-align: center;
    font-size: 2.1rem;
    color: #EA071E;
  }

  // item
  .item {
    display: block;
    position: relative;
    margin-bottom: 60px;

    &-img {
      display: block;
      margin: 20px auto;
      height: 140px;
    }

    &-title {
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
    }

    &-text {
      font-size: 1.2rem;
    }
  }

  // number for items
  .title-number {
    display: block;
    position: relative;
    font-size: 3.5rem;
    opacity: 0.6;
  }

  // marks title
  .mark {
    display: inline-block;
    color: #F8880B;
    background-color: transparent;
  }

  // col items
  .row .col-md-3 {
    &:nth-child(even) {
      margin-top: 60px;
    }
    &:nth-child(1) {
      color: #5190FC;
    }
    &:nth-child(2) {
      color: #AADF8D;
    }
    &:nth-child(3) {
      color: #BC9BF7;
    }
    &:nth-child(4) {
      color: #EB6B1E;
    }
  }

  .second-title {
    text-align: right;
    font-size: 4rem;
  }

  @media (max-width: 576px) {
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
