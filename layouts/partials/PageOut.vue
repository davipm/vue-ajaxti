<template>
  <div class="layout-outsourcing">
    <div class="wrap">
      <div
        class="first-content"
        :style="{ backgroundImage: `url(${image})` }"
      >
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
                {{ title }}
              </h5>
              <h5 class="title-content second-title">
                {{ secondTitle }}
              </h5>
            </div>
            <div
              v-if="textBottom"
              v-html="textBottom"
              class="know-more"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="container">
        <!-- title -->
        <div
          v-if="titleContent"
          v-html="titleContent"
          id="outsorcing"
        ></div>
        <!-- grid -->
        <div class="row">
          <div
            v-if="cards"
            v-for="(card, index) in cards"
            :key="index"
            class="col-md-3"
          >
            <div class="item">
              <div class="item-number">
                <h1 class="item-title title-number">
                  {{ card.number }}
                </h1>
                <h1 class="item-title">
                  {{ card.title }}
                </h1>
              </div>
              <img
                :src="card.icon"
                :alt="card.title"
                class="item-img"
              >
              <div
                class="item-body"
                v-html="card.texto"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      image: String,
      textTop: String,
      title: String,
      secondTitle: String,
      textBottom: String,
      titleContent: String,
      cards: Array,
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
    height: 550px;
    background: 0 0/cover no-repeat;
  }
  /*
  .text-top-right {
    position: absolute;
    top: 3rem;
    right: 2rem;
    width: 38rem;
    font-size: 1.6rem;
    line-height: 1;
    text-align: right;
  }
  */
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

  // marks title
  .mark {
    display: inline-block;
    color: #F8880B;
    background-color: transparent;
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

    &-text { font-size: 1.2rem; }
  }

  // number for items
  .title-number {
    display: block;
    position: relative;
    font-size: 3.5rem;
    opacity: 0.6;
  }

  // col items
  .row .col-md-3 {
    &:nth-child(even) { margin-top: 60px; }
    &:nth-child(1) { color: #5190FC; }
    &:nth-child(2) { color: #AADF8D; }
    &:nth-child(3) { color: #BC9BF7; }
    &:nth-child(4) { color: #EB6B1E; }
  }

  .second-title {
    text-align: right;
    font-size: 4rem;
  }

  @media (max-width: 576px) {
    /*
    .text-top-right {
      font-size: 1rem;
      text-align: left;
      right: auto;
      width: auto;
    }
    */
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

<style lang="scss">
  #outsorcing .page-title {
    margin-bottom: 40px;
    text-align: center;
    font-size: 2.1rem;
    color: #EA071E;
  }

  #outsorcing .mark {
    display: inline-block;
    color: #F8880B;
    background-color: transparent;
  }
</style>
