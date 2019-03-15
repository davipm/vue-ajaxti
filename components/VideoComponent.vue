<template>
  <div class="video">
    <video autoplay muted loop playsinline class="video-content">
      <source src="../assets/img/ajaxti-video.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
  </div>
</template>

<script>
  export default {
    name: 'VideoComponent',
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
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
    }
    @media (max-width: 768px) { height: 27rem; }
    @media (max-width: 576px) { height: 12rem; }
  }
</style>
