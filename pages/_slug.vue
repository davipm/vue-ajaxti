<template>
  <section class="section single">
    <!-- loading -->
    <div v-if="loading"  class="loading-content">
      <div class="clear-loading loading-effect-1">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- /loading -->

    <!-- page content -->
    <page-ind
      v-for="item in post"
      :key="item.id"
      :image="item.acf.image_bg"
      :textTop="item.acf.text_top_right"
      :title="item.title.rendered"
      :secondTitle="item.acf.second_title"
      :textBottom="item.acf.text_bottom_right"
      :cards="item.acf.crards"
      v-if="post[0].acf.layout === 'layoutInd'"
    ></page-ind>

    <page-out
      v-for="item in post"
      :key="item.id"
      :image="item.acf.image_bg"
      :textTop="item.acf.text_top_right"
      :title="item.title.rendered"
      :secondTitle="item.acf.second_title"
      :textBottom="item.acf.text_bottom_right"
      :title-content="item.acf.title_content"
      :cards="item.acf.items"
      v-if="post[0].acf.layout === 'layoutOut'"
    ></page-out>

    <page-saude
      v-for="item in post"
      :key="item.id"
      :image="item.acf.image_bg"
      :textTop="item.acf.text_top_right"
      :title="item.title.rendered"
      :secondTitle="item.acf.second_title"
      :textBottom="item.acf.text_bottom_right"
      :imageBgContent="item.acf.image_bg_content"
      :content="item.content.rendered"
      v-if="post[0].acf.layout === 'layoutSau'"
    ></page-saude>

    <!-- layout default -->
    <div
      v-for="(item, index) in post"
      :key="index"
      v-if="!post[0].acf.layout"
      class="container page-content"
    >
      <div class="row">
        <div class="col-md-9">
          <div class="page-header">
            <h3 class="single-title">
              {{ item.title.rendered }}
            </h3>
          </div>
          <div
            class="single-content"
            v-html="item.content.rendered"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import PageInd from '../layouts/partials/PageInd.vue'
  import PageSaude from '../layouts/partials/PageSaude.vue'
  import PageOut from "../layouts/partials/PageOut";
  export default {
    name: 'pageSlug',
    components: {
      PageOut,
      PageInd,
      PageSaude
    },
    data() {
      return {
        post: [],
        loading: true,
        error: false,
        title: '',
        description: '',
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
          .then((res) => {
            this.post = res;
            this.title = this.post[0].title.rendered;
            this.description = this.post[0].excerpt.rendered;
          })
          .catch(()   => { this.error = true; })
          .finally(() => { this.loading = false; });
      },
    },

    head () {
      return {
        title: `${ this.title } - AjaxTI`,
        meta: [
          { hid: 'description', name: 'description', content: this.description }
        ]
      }
    },
  }
</script>

<style scoped lang="scss">
  .single {
    display: block;
    position: relative;
    padding: 0;
    min-height: 60vh;
    &-title {
      margin-bottom: 40px;
      font-weight: 300;
      text-transform: uppercase;
    }
  }

  .page-content { padding: 60px 0; }

  .box {
    width: 50%;
    height: 40px;
  }
</style>
