<template>
  <figure class="figure effect-romeo">
    <img :src="image" :alt="alt">
    <figcaption>
      <h6 v-if="category === 1">Noticia</h6>
      <h2>{{ title }}</h2>
      <div v-html="text" class="text"></div>
      <nuxt-link :to="`/blog/${url}`">
        View more
      </nuxt-link>
    </figcaption>
  </figure>
</template>

<script>
  export default {
    name: 'CardEffect',
    props: {
      title: {
        type: String,
        required: false,
      },
      category: {
        type: Number,
        required: false,
      },
      text: {
        type: String,
        required: false,
      },
      url: {
        type: String,
        required: false,
      },
      image: {
        type: String,
        required: false,
      },
      alt: {
        type: String,
        required: false,
      },
    }
  }
</script>

<style scoped lang="scss">
  .figure {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    background: #3085a3;
    text-align: center;
    cursor: pointer;

    img {
      position: relative;
      display: block;
      min-width: 100%;
      max-height: 100%;
      opacity: 0.8;
      -webkit-transition: all .15s ease;
      -moz-transition: all .15s ease;
      -ms-transition: all .15s ease;
      -o-transition: all .15s ease;
      transition: all .15s ease;
    }

    figcaption {
      padding: 2rem;
      color: #FFF;
      text-transform: uppercase;
      font-size: 1.25rem;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      -ms-backface-visibility: hidden;
      backface-visibility: hidden;
      &:before,
      &:after {
        pointer-events: none;
      }

      &,
      & > a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    figcaption > a {
      z-index: 1000;
      text-indent: 200%;
      white-space: nowrap;
    }

    h2 {
      word-spacing: -0.15em;
      font-weight: 300;
    }

    h2,
    .text { margin: 0; }

    .text {
      letter-spacing: 1px;
      font-size: 68.5%;
    }
  }

  // effect
  .effect-romeo {
    -webkit-perspective: 1000px;
    perspective: 1000px;

    img {
      -webkit-transform: translate3d(0,0, 300px);
      -moz-transform: translate3d(0,0, 300px);
      -ms-transform: translate3d(0,0, 300px);
      -o-transform: translate3d(0,0, 300px);
      transform: translate3d(0,0, 300px);
    }

    &:hover img {
      opacity: .6;
      -webkit-transform: translate3d(0,0,0);
      -moz-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      -o-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
    }

    & figcaption:before,
    & figcaption:after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80%;
      height: 1px;
      background-color: #FFF;
      content: '';
      -webkit-transform: translate3d(-50%, -50%, 0);
      -moz-transform: translate3d(-50%, -50%, 0);
      -ms-transform: translate3d(-50%, -50%, 0);
      -o-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);
      -webkit-transition: all .3s ease;
      -moz-transition: all .3s ease;
      -ms-transition: all .3s ease;
      -o-transition: all .3s ease;
      transition: all .3s ease;
    }

    &:hover figcaption::before {
      opacity: .5;
      -webkit-transform: translate3d(-50%, -50%, 0) rotate(45deg);
      -moz-transform: translate3d(-50%, -50%, 0) rotate(45deg);
      -ms-transform: translate3d(-50%, -50%, 0) rotate(45deg);
      -o-transform: translate3d(-50%, -50%, 0) rotate(45deg);
      transform: translate3d(-50%, -50%, 0) rotate(45deg);
    }

    &:hover figcaption::after {
      opacity: .5;
      -webkit-transform: translate3d(-50%, -50%, 0) rotate(-45deg);
      -moz-transform: translate3d(-50%, -50%, 0) rotate(-45deg);
      -ms-transform: translate3d(-50%, -50%, 0) rotate(-45deg);
      -o-transform: translate3d(-50%, -50%, 0) rotate(-45deg);
      transform: translate3d(-50%, -50%, 0) rotate(-45deg);
    }

    h2,
    .text {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      -webkit-transition: transform .35s;
      -moz-transition: transform .35s;
      -ms-transition: transform .35s;
      -o-transition: transform .35s;
      transition: transform .35s;
    }

    h2 {
      -webkit-transform: translate3d(0, -50%, 0) translate3d(0, -150%, 0);
      -moz-transform: translate3d(0, -50%, 0) translate3d(0, -150%, 0);
      -ms-transform: translate3d(0, -50%, 0) translate3d(0, -150%, 0);
      -o-transform: translate3d(0, -50%, 0) translate3d(0, -150%, 0);
      transform: translate3d(0, -50%, 0) translate3d(0, -150%, 0);
    }

    .text {
      padding: .25em 2em;
      -webkit-transform: translate3d(0, 180%, 0) translate3d(0, -150%, 0);
      -moz-transform: translate3d(0, 180%, 0) translate3d(0, -150%, 0);
      -ms-transform: translate3d(0, 180%, 0) translate3d(0, -150%, 0);
      -o-transform: translate3d(0, 180%, 0) translate3d(0, -150%, 0);
      transform: translate3d(0, 180%, 0) translate3d(0, -150%, 0);
    }

    &:hover h2 {
      -webkit-transform: translate3d(0, -50%, 0) translate3d(0, -100%, 0);
      -moz-transform: translate3d(0, -50%, 0) translate3d(0, -100%, 0);
      -ms-transform: translate3d(0, -50%, 0) translate3d(0, -100%, 0);
      -o-transform: translate3d(0, -50%, 0) translate3d(0, -100%, 0);
      transform: translate3d(0, -50%, 0) translate3d(0, -100%, 0);
    }

    &:hover .text {
      -webkit-transform: translate3d(0, -50%, 0) translate3d(0, 100%, 0);
      -moz-transform: translate3d(0, -50%, 0) translate3d(0, 100%, 0);
      -ms-transform: translate3d(0, -50%, 0) translate3d(0, 100%, 0);
      -o-transform: translate3d(0, -50%, 0) translate3d(0, 100%, 0);
      transform: translate3d(0, -50%, 0) translate3d(0, 100%, 0);
    }
  }
</style>
