<template>
  <b-carousel
    id="carousel1"
    class="carousel-fade"
    style="text-shadow: 1px 1px 2px #333;"
    controls
    background="#ababab"
    :interval="4000"
    img-width="1024"
    img-height="480"
    v-model="slide"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <!-- Slides with image only -->
    <b-carousel-slide :img-src="image" />
  </b-carousel>

</template>

<script>
  export default {
    name: 'Slider',
    data() {
      return {
        slide: 0,
        sliding: null,
        image: '../assets/img/foto_das_perninhas.png',
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
