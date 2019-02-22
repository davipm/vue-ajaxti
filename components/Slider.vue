<template>
  <b-carousel
    id="carousel1"
    fade
    style="text-shadow: 1px 1px 2px #333;"
    background="#ababab"
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
        src="../assets/img/foto_das_perninhas.png"
        alt="image slot"
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

<style scoped>
  .carousel-item {
    height: 550px;
  }
</style>
