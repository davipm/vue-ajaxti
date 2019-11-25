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
  import API from "../services/API";

  export default {
    name: 'Woman',
    data() {
      return {
        woman: [],
        loading: false,
        error: false,
      }
    },

    created() {
      this.handleApi();
    },

    methods: {
      async handleApi() {
        this.loading = true;

        try {
          const response = await API.get('/api/v1/woman');
          this.woman = response.data;
        } catch (e) {
          this.error = true;
        }

        this.loading = false;
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
