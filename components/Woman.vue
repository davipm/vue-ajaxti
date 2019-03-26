<template>
  <section class="section woman">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-lg-8"></div>
        <div v-for="(item, index) in woman" :key="index" class="col-md-12 col-lg-4">
          <h4 class="title text-center">
            {{ item.title }}
          </h4>
          <h4 class="title mb-3">
            {{ item.secont_title }}
          </h4>
          <div v-html="item.text"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Woman',
    data() {
      return {
        woman: [],
      }
    },
    created() { this.getWoman(); },
    methods: {
      async getWoman() {
        await this.$axios
          .$get('/api/v1/woman')
          .then((res) => { this.woman = res; })
          .catch(()   => { this.error = true })
          .finally(() => { this.loading = false; })
      }
    }
  }
</script>

<style scoped lang="scss">
  .woman {
    display: block;
    position: relative;
    padding: 100px 0;
    background: url('../assets/img/foto_menina_do_game_of_thrones.png') center/cover no-repeat;
  }

  .title {
    display: block;
    font-weight: 600;
    font-size: 36px;
    line-height: 1.5;
  }
</style>
