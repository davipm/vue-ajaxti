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
      }
    },

    created() {
      /*
      setTimeout(() => {
        this.loading = false;
      }, 1000);*/
      this.getPosts();
    },

    methods: {
      async getPosts() {
        await this.$axios
          .$get('/wp/v2/posts')
          .then((res) => {
            this.items = res;
          })
          .catch(() => {
            this.error = true;
          })
          .finally(() => {
            this.loading = false;
          });
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
