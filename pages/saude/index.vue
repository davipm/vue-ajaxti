<template>
  <section class="page">
    <div class="wrap">
      <div class="first-content">
        <div class="container-fluid">
          <div class="text-top-right">
            <p class="text">
              O atendimento médico é, normalmente, cercado por
              uma série de procedimentos reguladores, definidos pela Agência
              Reguladora de Saúde, que contribuem para a organização
              do processo. É preciso experiência para entender o trâmite.
              E experiência na área, a <strong>Ajax</strong> tem de sobra!
            </p>
          </div>
          <div class="content-bottom">
            <div class="title">
              <h5 class="title-content">
                Tecnologia para a
              </h5>
              <h5 class="title-content second-title">
                Vida
              </h5>
            </div>
            <div class="know-more">
              <p class="know-more-text">
                Mais sobre os procedimentos
                estabelcidos pela ANS:
                TISS, DIOPS, TPS, SIB e SIP?
                <a href="#" class="know-more-link">
                  Clique aqui
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="second-content">
      <div class="container">
        <p class="second-text">
          Além do gerenciamento dos processos, desenvolvemos
          milhares de soluções corporativas que atendem à área da
          saúde e que se conectam entre si para criar uma ambiente
          tecnologicamente mais dinâmicos.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        title: 'Saúde',
        description: 'Sobre Saúde',
        posts: {},
      }
    },

    created() {
      this.fetchSomething();
    },

    methods: {
      async fetchSomething() {
        this.posts = await this.$axios.$get('/wp/v2/posts');
        console.log(this.posts);
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
    background-color: #67C6BC;
  }

  .first-content {
    display: block;
    position: relative;
    height: 550px;
    background: url('../../assets/img/saude-banner-1.png') 0 0/cover no-repeat;
  }

  .text-top-right {
    position: absolute;
    top: 3rem;
    right: 2rem;
    width: 38rem;
    font-size: 1.6rem;
    line-height: 1;
    text-align: right;
    color: #00655A;
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
    color: #67C6BC;
    font-size: 1rem;
    a {
      color: #67C6BC;
      text-decoration: underline;
    }
  }

  .second-content {
    display: block;
    position: relative;
    padding: 200px 0;
    font-size: 2rem;
    font-weight: 600;
    color: #00655A;
    line-height: 1.5;
    background: url('../../assets/img/corredor.png') 0 0/cover no-repeat;
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
