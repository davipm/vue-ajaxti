<template>
  <section class="section opportunities">
    <!-- loading -->
    <div v-if="loading"  class="loading-content">
      <div class="clear-loading loading-effect-1">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- page content -->
    <div v-else class="container">
      <!-- page header -->
      <h3 class="title">Oportunidades</h3>
      <!-- list content -->
      <div class="opportunities-list">
        <div class="row">
          <div class="col-md-9">
            <ul class="list">
              <li v-for="(item, index) in opportunities" :key="index" class="list-item">
                <nuxt-link :to="`/oportunidades/${item.slug}`" class="list-link">
                  {{ item.title }}
                  <div class="list-info">
                    <p class="list-text">
                      {{ item.city }} - {{ item.type }}
                    </p>
                  </div>
                </nuxt-link>
              </li>
            </ul>
            <!--<p class="last-update">Última atualização - 03/05/2019</p>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'oportunidades',
    data() {
      return {
        loading: true,
        error: false,
        opportunities: [],
      }
    },

    created() {
      this.getOpportunities();
    },

    methods: {
      async getOpportunities() {
        await this.$axios
          .$get('/api/v1/opportunities')
          .then((res) => {
            this.opportunities = res[0];
          })
          .catch(() => {
            console.log('error');
          })
          .finally(() => {
            this.loading = false;
          })
      }
    }
  }
</script>

<style scoped lang="scss">
  .opportunities {
    display: block;
    position: relative;
    padding: 60px 0;
    min-height: 60vh;
  }

  .title {
    margin-bottom: 40px;
    font-weight: 300;
    text-transform: uppercase;
  }

  .list {
    margin: 0;
    padding: 0;
    list-style: none;

    &-link {
      display: block;
      padding: 20px;
      color: #0E1B32;
      font-size: 1.3em;
      border: 1px solid #ccc;
      border-radius: 3px;
      margin-bottom: 15px;
      -webkit-transition: all .15s ease-in-out;
      -moz-transition: all .15s ease-in-out;
      -ms-transition: all .15s ease-in-out;
      -o-transition: all .15s ease-in-out;
      transition: all .15s ease-in-out;
      &:hover {
        margin-left: 15px;
        text-decoration: none;
        border-color: #0E1B32;
      }
    }

    &-info {
      display: block;
      position: relative;
      margin: 0;
    }

    &-text {
      font-size: .9rem;
      margin-bottom: 0;
    }
  }

  .last-update {
    text-align: center;
    padding: 30px 0;
    color: gray;
  }
</style>
