<template>
  <section class="section page">
    <!-- loading -->
    <div v-if="loading" class="loading-content">
      <div class="clear-loading loading-effect-1">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- /loading -->
    <!-- content -->
    <div v-else class="container">
      <div class="row">
        <div class="col-md-6"
             v-for="(item, index) in items"
             :key="index"
        >
          <card-effect
            :category="item.categories[0]"
            :title="item.title.rendered"
            :text="item.excerpt.rendered"
            :url="item.slug"
            :image="item.acf.featured_image.sizes.medium"
            :alt="item.title.rendered"
          />
        </div>
      </div>
    </div>
    <!-- content -->
    <!-- pagination -->
    <div class="container overflow-auto">
      <div class="mt-3">
        <b-pagination-nav
          v-if="items.length > 6"
          :link-gen="linkGen"
          :number-of-pages="pages"
          v-model="currentPage"
        />
      </div>
    </div>
    <!-- /pagination -->
  </section>
</template>

<script>
  import CardEffect from '~/components/CardEffect.vue'
  import axios from 'axios'
  axios.defaults.baseURL = 'http://cms.ajaxti.com.br/wp-json';
  export default {
    name: 'categories',
    components: { CardEffect },
    data() {
      return {
        loading: true,
        error: false,
        items: [],
        pages: null,
        currentPage: 1,
        paginationAll: '',
        categories: [],
        currentID: '',
        searchLoading: true,
      }
    },

    created() {
      this.getCategories(this.$route.params.categories);
    },

    methods: {
      async getCategories(slug) {
        await axios.get(`/wp/v2/categories?slug=${slug}`)
          .then((res) => {
            this.getPosts('', res.data[0].id);
          })
      },

      async getPosts(number, id) {
        this.searchLoading = true;
        this.currentID = id;
        await axios.get(`/wp/v2/posts?categories=${id}`, {
          params: {
            per_page: 6,
            page: number = this.currentPage,
          }
        })
          .then((res) => {
            this.pages = res.headers['x-wp-totalpages'];
            this.items = res.data;
            console.log(res.data);
          })
          .catch(()   => {
            this.error = true;
          })
          .finally(() => {
            this.loading = false;
            this.searchLoading = false;
          })
      },

      linkGen(pageNum) {
        return this.getPosts(pageNum);
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
