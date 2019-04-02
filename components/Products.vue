<template>
  <section class="section products">
    <div class="container">
      <!-- products loading -->
      <div v-if="loading" class="products-loading">
        <div class="products-item">
          <div class="row">
            <div class="col-md-6">
              <div class="shine line line-title"></div>
              <div class="shine line line-title"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
            </div>
            <div class="col-md-6">
              <div class="shine box"></div>
            </div>
          </div>
        </div>
        <div class="products-item">
          <div class="row">
            <div class="col-md-6">
              <div class="shine box"></div>
            </div>
            <div class="col-md-6">
              <div class="shine line line-title"></div>
              <div class="shine line line-title"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
              <div class="shine line"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- /products loading -->
      <div
        v-else
        v-for="(item, index) in products"
        :key="index"
        class="products-item"
      >
        <!-- image right -->
        <div v-if="item.id === 102" class="row">
          <div class="col-md-6">
            <img
              :src="item.image"
              :alt="item.title"
              class="img-fluid"
            >
          </div>
          <div class="col-md-6">
            <div class="products-content">
              <h5 class="products-title">{{ item.title }}</h5>
              <div v-html="item.description" class="products-text"></div>
            </div>
            <div class="products-buttons">
              <nuxt-link :to="item.know_more" class="btn btn-primary">
                Saiba mais
              </nuxt-link>
              <nuxt-link :to="item.prices_url" class="btn btn-secondary">
                Peça um orçamento
              </nuxt-link>
            </div>
          </div>
        </div>
        <!-- image left -->
        <div v-else class="row">
          <div class="col-md-6">
            <div class="products-content">
              <h5 class="products-title">
                {{ item.title }}
              </h5>
              <div v-html="item.description" class="products-text"></div>
            </div>
            <div class="products-buttons">
              <nuxt-link
                :to="item.know_more"
                class="btn btn-primary"
              >
                Saiba mais
              </nuxt-link>
              <nuxt-link
                :to="item.prices_url"
                class="btn btn-secondary"
              >
                Peça um orçamento
              </nuxt-link>
            </div>
          </div>
          <div class="col-md-6">
            <img
              :src="item.image"
              :alt="item.title"
              class="img-fluid"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Products',
    data() {
      return {
        products: [],
        loading: true,
        error: false,
      }
    },
    created() { this.getProducts(); },
    methods: {
      async getProducts() {
        await this.$axios
          .$get('/api/v1/products')
          .then((res) => { this.products = res; })
          .catch(()   => { this.error = true })
          .finally(() => { this.loading = false; })
      }
    }
  }
</script>

<style scoped lang="scss">
  .products {
    position: relative;
    display: block;
    background: url('../assets/img/transparencia_produtos.png') center/cover no-repeat ;
    &-item { margin-bottom: 30px; }
    &-content {
      display: block;
      margin-top: 80px;
    }
    &-title {
      display: block;
      font-size: 3rem;
      font-weight: 600;
      letter-spacing: 2px;
    }
    &-text { font-size: 1.2rem; }
    &-buttons {
      display: block;
      position: relative;
      margin-top: 30px;
      text-align: center;
      @media (max-width: 576px) { margin-bottom: 20px; }
    }
    &::after {
      content: '';
      display: block;
      position: relative;
      height: 50px;
      background-color: #FF6B3A;
    }
  }

  .btn {
    display: inline-block;
    width: 215px;
    margin-right: 15px;
    margin-bottom: 15px;
    padding: 7px 30px;
    color: #FFF;
    font-weight: 600;
    border: none;
    border-radius: 0;
  }

  .btn-primary {
    background-color: #212934;
    box-shadow: 0 5px #151420;
    &:hover {
      background-color: #151420;
      box-shadow: 0 5px #212934;
    }
  }

  .btn-secondary {
    background-color: #FF6B3A;
    box-shadow: 0 5px #7B451A;
    &:hover {
      background-color: #7B451A;
      box-shadow: 0 5px#FF6B3A;
    }
  }

  // loading
  .line-title {
    height: 2.5rem;
    border-radius: 5px;
  }

  .box {
    height: 450px;
    border-radius: 5px;
    background-size: 800px 450px;
  }
</style>
