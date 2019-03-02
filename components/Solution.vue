<template>
  <section class="section solution">
    <div class="container-fluid">
      <!-- heading -->
      <h3 class="title" v-html="title"></h3>
      <!-- content -->
      <div class="row solution-content">
        <div v-for="item in solutions"
             :key="item.id"
             class="col-lg-3 col-md-6"
        >
          <div class="solution-item">
            <img :src="item.image" class="solution-img" alt="">
            <div class="solution-body">
              <h5 class="solution-title">{{ item.title }}</h5>
              <p class="solution-text" v-text="item.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Solution',
    data() {
      return {
        title: `A Palavra é: <u>Solução</u>`,
        error: false,
        loading: true,
        solutions: [],
      }
    },

    created() {
      this.getSolutions();
    },

    methods: {
      async getSolutions() {
        await this.$axios
          .$get('/api/v1/solutions')
          .then((res) => {
            this.solutions = res;
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
  .solution {
    padding-top: 60px;
    padding-bottom: 0;

    &::after {
      content: '';
      display: block;
      position: relative;
      height: 50px;
      background-color: #FF6B3A;
    }
  }

  .title {
    display: block;
    font-weight: 600;
    font-size: 3rem;
    text-align: center;
  }

  .solution-content {
    margin-top: 5rem;
  }

  .solution-item {
    display: block;
    position: relative;
    text-align: center;
  }

  .solution-img {
    display: block;
    position: relative;
    margin: auto;
    height: 90px;
  }

  .solution-body {
    padding: 15px;
  }

  .solution-title {
    margin-bottom: 1.2rem;
    font-weight: 600;
  }

  .solution-text {
    font-size: .85rem;
  }

  .col-lg-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 20%;
    max-width: 20%;

    @media (max-width: 768px) {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }

    @media (max-width: 576px) {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
</style>
