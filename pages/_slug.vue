<template>
  <section class="section single">
    <!-- loading -->
    <div v-if="loading" class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="mb-4">
            <div class="shine box"></div>
          </div>
          <div class="mb-4">
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
          </div>

          <div class="mb-4">
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
          </div>

          <div class="mb-4">
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
            <div class="shine"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- /loading -->
    <!-- page content -->
    <div v-else
         v-for="(item, index) in post"
         :key="index"
         class="container"
    >
      <div class="row">
        <div class="col-md-9">
          <div class="page-header">
            <h3 class="single-title">
              {{ item.title.rendered }}
            </h3>
          </div>
          <div class="single-content"
               v-html="item.content.rendered"
          ></div>
        </div>
      </div>

      <!-- pagination -->
      <!--
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <nuxt-link
              class="page-link"
              :to="`/blog`"
              tabindex="-1"
            >
              Voltar para lista
            </nuxt-link>
          </li>
        </ul>
      </nav>
      -->
      <!-- /pagination -->
    </div>
    <!-- page content -->
    <!--<pagination></pagination>-->
  </section>
</template>

<script>
  import Pagination from '~/components/Pagination.vue'
  export default {
    name: 'slug',
    components: { Pagination },
    data() {
      return {
        post: [],
        loading: true,
        error: false,
      }
    },

    watch: {
      '$route'(to, from) {
        this.getPost(to.params.slug);
        this.loading = true;
      }
    },

    created() {
      this.loading = true;
      this.getPost(this.$route.params.slug);
    },

    methods: {
      async getPost( slug ) {
        await this.$axios
          .$get(`/wp/v2/pages?slug=${slug}`)
          .then((res) => { this.post = res; })
          .catch(()   => { this.error = true; })
          .finally(() => { this.loading = false; });
      },
    }
  }
</script>

<style scoped lang="scss">
  .single {
    display: block;
    position: relative;
    min-height: 60vh;
    &-title {
      margin-bottom: 40px;
      font-weight: 300;
      text-transform: uppercase;
    }
  }

  .box {
    width: 50%;
    height: 40px;
  }
</style>
