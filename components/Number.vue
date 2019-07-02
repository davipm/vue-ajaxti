<template>
  <section v-if="!loading" class="section number">
    <div class="container">
      <div class="row">
        <div v-for="item in number"
             :key="item.id"
             class="col-md-4"
        >
          <div class="number-item">
            <img :src="item.icon"
                 :alt="item.title"
                 :title="item.title"
                 class="number-img"
            >
            <div class="number-body">
              <p v-text="item.title"
                 class="number-text"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Number',
    data() {
      return {
        number: [],
        error: false,
        loading: true,
      }
    },

    created() {
      this.getNumber();
    },

    methods: {
      async getNumber() {
        await this.$axios
          .$get('/api/v1/number')
          .then((res) => {
            this.number = res;
          })
          .catch(() => {
            this.error = true;
          })
          .finally(() => {
            this.loading = false;
          });
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
