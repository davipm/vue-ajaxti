<template>
  <section class="section solution">
    <div class="container-fluid">
      <!-- heading -->
      <h3 class="title" v-html="title"></h3>
      <!-- content -->
      <!-- loading content -->
      <div v-if="loading" class="solution-loading solution-content">
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <div class="solution-item">
              <div class="shine box"></div>
              <div class="shine line line-title"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="solution-item">
              <div class="shine box"></div>
              <div class="shine line line-title"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="solution-item">
              <div class="shine box"></div>
              <div class="shine line line-title"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="solution-item">
              <div class="shine box"></div>
              <div class="shine line line-title"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="solution-item">
              <div class="shine box"></div>
              <div class="shine line line-title"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- /loading content -->
      <!-- page content -->
      <div v-else class="row solution-content">
        <div
          v-for="item in solutions"
          :key="item.id"
          class="col-lg-3 col-md-6"
        >
          <div class="solution-item">
            <img
              :src="item.image"
              :alt="item.title"
              class="solution-img"
            >
            <div class="solution-body">
              <h5 class="solution-title">
                {{ item.title }}
              </h5>
              <p
                class="solution-text"
                v-text="item.description"
              ></p>
            </div>
          </div>
        </div>
      </div>
      <!-- /page content -->
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
          .$get('/api/v1/solutions/')
          .then((res) => { this.solutions = res; })
          .catch(()   => { this.error = true; })
          .finally(() => { this.loading = false; });
      }
    }
  }
</script>

<style scoped lang="scss">
  .solution {
    padding-top: 60px;
    padding-bottom: 0;
    &-content { margin-top: 5rem; }
    &-item {
      display: block;
      position: relative;
      text-align: center;
    }
    &-img {
      display: block;
      position: relative;
      margin: auto;
      height: 90px;
    }
    &-title {
      margin-bottom: 1.2rem;
      font-weight: 600;
    }
    &-text { font-size: .85rem; }
    &-body { padding: 15px; }
    &-loading { padding-bottom: 70px; }
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

  // loading style
  .box {
    display: block;
    height: 90px;
    width: 150px;
    margin: auto;
    border-radius: 5px;
  }

  .line {
    margin-top: 0;
    &-title {
      height: 1.3rem;
      border-radius: 5px;
      margin-top: 20px;
      margin-bottom: 15px;
    }
  }

  // fixing col to be 5
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
