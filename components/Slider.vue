<template>
  <b-carousel
    id="carousel1"
    fade
    style="text-shadow: 1px 1px 2px #333;"
    background="#FFF"
    :interval="4000"
    img-width="1024"
    img-height="550"
    v-model="slide"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >

    <b-carousel-slide>
      <img
        slot="img"
        width="100%"
        height="550"
        class="img-slide"
        src="../assets/img/foto_das_perninhas.png"
        alt="Image Slide"
      />
    </b-carousel-slide>
  </b-carousel>

</template>

<script>
  export default {
    name: 'Slider',
    data() {
      return {
        slide: 0,
        sliding: null,
      }
    },

    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },

      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .carousel-item {
    height: 550px;
  }

  @media (min-width: 1800px) {
    .carousel-item,
    .img-slide {
      height: 800px;
    }
  }

  @media (max-width: 576px) {
    .carousel-item,
    .img-slide {
      height: 255px;
    }
  }
</style>
