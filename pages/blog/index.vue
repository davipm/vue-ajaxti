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
      <h3 class="title">{{ title }}</h3>
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
  </section>
</template>

<script>
  import CardEffect from '~/components/CardEffect.vue'
  export default {
    components: { CardEffect },
    data() {
      return {
        title: 'blog',
        loading: true,
        error: false,
        items: [],
        pages: 1,
        currentPage: 1,
        paginationAll: '',
      }
    },

    created() {
      this.getPosts();
    },

    methods: {
      async getPosts(number) {
        this.loading = true;
        await this.$axios
          .$get('/wp/v2/posts', {
            params: {
              per_page: 6,
              page: number = this.currentPage,
            }
          })
          .then((res) => {
            this.items = res;
          })
          .catch(()   => { this.error = true; })
          .finally(() => { this.loading = false; });
      },

      linkGen(pageNum) {
        return this.getPosts(pageNum);
      },
    }
  }
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 40px;
    font-weight: 300;
    text-transform: uppercase;
  }
</style>
