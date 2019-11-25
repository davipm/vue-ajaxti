<template>
  <section class="section client">
    <div class="container">
      <!-- heading -->
      <h3 class="title">
        {{ title }}
      </h3>
      <!-- loading client -->
      <div v-if="loading" class="loading">
        <div class="row">
          <div class="col-md-2">
            <div class="shine box"></div>
          </div>

          <div class="col-md-2">
            <div class="shine box"></div>
          </div>

          <div class="col-md-2">
            <div class="shine box"></div>
          </div>

          <div class="col-md-2">
            <div class="shine box"></div>
          </div>

          <div class="col-md-2">
            <div class="shine box"></div>
          </div>

          <div class="col-md-2">
            <div class="shine box"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <div class="shine box"></div>
          </div>

          <div class="col-md-2">
            <div class="shine box"></div>
          </div>

          <div class="col-md-2">
            <div class="shine box"></div>
          </div>

          <div class="col-md-2">
            <div class="shine box"></div>
          </div>

          <div class="col-md-2">
            <div class="shine box"></div>
          </div>

          <div class="col-md-2">
            <div class="shine box"></div>
          </div>
        </div>
      </div>

      <!-- page content -->
      <div v-else class="client-content">
        <div class="row">
          <!-- client item -->
          <div
            v-for="client in clients"
            :key="client.id"
            class="col-md-2"
          >
            <!-- client img -->
            <div class="client-item">
              <img
                :src="client.icon"
                :alt="client.title"
                :title="client.title"
                class="client-img"
              >
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
    name: 'Client',
    data() {
      return {
        title: 'Nossos Clientes',
        loading: false,
        error: false,
        clients: [],
      }
    },

    created() {
      this.handleApi();
    },

    methods: {
      async handleApi() {
        this.loading = true;

        try {
          const response = await API.get('/api/v1/clients');
          this.clients = response.data;
        } catch (e) {
          this.error = true;
        }

        this.loading = false;
      }
    }
  }
</script>

<style scoped lang="scss">
  .client {
    display: block;
    position: relative;
    padding: 30px 0;

    // make Equal Height Columns
    &-item {
      display: flex;
      justify-content: center;
      height: 85px;
      margin-bottom: 55px;
    }

    // responsive images
    &-img {
      width: 100%;
      height: auto;

      @media (max-width: 576px) {
        width: 150px;
      }
    }
  }

  .title {
    margin-bottom: 50px;
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
  }

  .box {
    height: 100px;
    margin-bottom: 20px;
  }
</style>
