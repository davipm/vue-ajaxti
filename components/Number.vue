<template>
  <section v-if="!loading" class="section number">
    <div class="container">
      <div class="row">
        <div
          v-for="item in number"
          :key="item.id"
          class="col-md-4"
        >
          <div class="number-item">
            <img
              :src="item.icon"
              :alt="item.title"
              :title="item.title"
              class="number-img"
            >
            <div class="number-body">
              <p class="number-text">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import API from '../services/API';

  export default {
    name: 'Number',
    data() {
      return {
        number: [],
        error: false,
        loading: false,
      }
    },

    created() {
      this.handleApi();
    },

    methods: {
      async handleApi() {
        this.loading = true;

        try {
          const response = await API.get('/api/v1/number');
          this.number = response.data;
        } catch (e) {
          this.error = true;
        }

        this.loading = false;
      }
    }
  }
</script>

<style scoped lang="scss">
  .number {
    display: block;
    position: relative;
    background-color: #FF6B3A;

    &-img {
      display: block;
      height: 85px;
      margin: auto;
    }

    &-body {
      margin-top: 40px;
      text-align: center;
      font-size: 1.5rem;
      color: #FFF;
    }
  }
</style>
