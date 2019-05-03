<template>
  <div class="layout-industry">
    <div class="wrap">
      <div
        class="first-content"
        :style="{ backgroundImage: `url(${image})`}"
      >
        <div class="container-fluid">
          <div
            class="text-top-right"
            v-if="textTop"
            v-html="textTop"
          ></div>
          <div class="content-bottom">
            <div class="title">
              <h5 class="title-content">
                {{ title}}
              </h5>
              <h5 class="title-content second-title">
                {{ secondTitle }}
              </h5>
            </div>
            <div
              class="know-more"
              v-if="textBottom"
              v-html="textBottom"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- page content cards -->
    <div class="page-content">
      <div class="container-fluid">
        <div class="row">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="col-md-3"
          >
            <div class="card">
              <div class="image-wrap">
                <img
                  :src="card.card_image"
                  :alt="card.title"
                  class="img-fluid"
                >
              </div>
              <div class="card-body">
                <p class="card-text" v-text="card.description"></p>
              </div>
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
      cards: Array,
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
    background: 0 0/cover no-repeat;
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

<style lang="scss">
  .know-more a {
    color: yellow;
    text-decoration: underline;
  }
</style>
