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
          <div v-for="client in clients"
               :key="client.id"
               class="col-md-2"
          >
            <div class="client-item">
              <img :src="client.icon"
                   :alt="client.title"
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
  export default {
    name: 'Client',
    data() {
      return {
        title: 'Testimonials',
        loading: true,
        error: false,
        clients: [],
      }
    },

    created() {
      this.getClients();
    },

    methods: {
      async getClients() {
        await this.$axios
          .$get('/api/v1/clients')
          .then((res) => {
            this.clients = res;
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
  .client {
    display: block;
    position: relative;
    padding: 30px 0;

    &-item {
      display: flex;
      justify-content: center;
      height: 85px;
      margin-bottom: 55px;
    }

    &-img {
      width: 100%;
      height: auto;
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
