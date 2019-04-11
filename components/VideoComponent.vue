<template>
  <div class="video">
    <video
      autoplay
      muted
      loop
      playsinline
      class="video-content"
    >
      <source
        :src="url"
        type="video/mp4"
      >
      Your browser does not support HTML5 video.
    </video>
  </div>
</template>

<script>
  export default {
    name: 'VideoComponent',
    data() {
      return {
        url: 'http://cms.ajaxti.com.br/wp-content/uploads/2019/03/ajaxti-video.mp4',
      }
    },

    mounted() {
      this.getVideo();
    },

    methods: {
      async getVideo() {
        await this.$nextTick(function () {
          this.$axios
            .$get('/api/v1/video')
            .then((res) => {
              this.url = res['ajax-video'].icon.url;
              console.log(res);
            })
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .video {
    display: block;
    width: 100%;
    overflow: hidden;
    &-content {
      display: block;
      position: relative;
      width: 100%;
    }
    @media (max-width: 768px) { height: 27rem; }
    @media (max-width: 576px) { height: 12rem; }
  }
</style>
