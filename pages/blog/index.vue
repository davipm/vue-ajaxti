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
    <!-- category list -->
    <div class="categories">
      <ul class="categories-list">
        <li class="categories-item">
          <button
            @click="getPosts('', '')"
            :class="{ active: currentID === '' }"
            class="btn categories-link hvr-underline-from-center"
          >
            Todas
          </button>
        </li>
        <li
          v-for="categorie in categories"
          :key="categorie.id"
          class="categories-item"
        >
          <button
            @click="getPosts('', categorie.id)"
            :class="{ active: currentID === categorie.id }"
            class="btn categories-link hvr-underline-from-center"
          >
            {{ categorie.name }}
          </button>
        </li>
      </ul>
    </div>
    <!-- /category list -->
    <!-- box loading -->
    <div v-if="searchLoading" class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="shine box"></div>
        </div>
        <div class="col-md-6">
          <div class="shine box"></div>
        </div>
        <div class="col-md-6">
          <div class="shine box"></div>
        </div>
        <div class="col-md-6">
          <div class="shine box"></div>
        </div>
      </div>
    </div>
    <!-- /box loading -->
    <!-- content -->
    <div v-else class="container">
      <!--
      <h3 class="title">
        {{ title }}
      </h3>
      -->
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
    <!-- /content -->
  </section>
</template>

<script>
  import CardEffect from '~/components/CardEffect.vue'
  import axios from 'axios'
  axios.defaults.baseURL = 'http://cms.ajaxti.com.br/wp-json';
  export default {
    components: { CardEffect },
    data() {
      return {
        title: 'blog',
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
      axios.all([this.getPosts('', ''), this.getCategory()])
        .then(axios.spread(function (acct, perms) {  }));
    },

    methods: {
      async getPosts(number, id) {
        this.searchLoading = true;
        this.currentID = id;
        await axios.get(`/wp/v2/posts`, {
          params: {
            categories: id,
            per_page: 6,
            page: number = this.currentPage,
          }
        })
          .then((res) => {
            this.pages = res.headers['x-wp-totalpages'];
            this.items = res.data;
          })
          .catch(()   => {
            this.error = true;
          })
          .finally(() => {
            this.loading = false;
            this.searchLoading = false;
          })
      },

      async getCategory() {
        await axios
          .get('/wp/v2/categories')
          .then((res) => {
            this.categories = res.data;
          })
      },

      linkGen(pageNum) {
        return this.getPosts(pageNum);
      },
    }
  }
</script>

<style scoped lang="scss">
  .categories {
    display: block;
    position: relative;
    margin-bottom: 1.2rem;
    padding: 5px;

    &-list {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    &-link {
      display: block;
      position: relative;
      text-transform: uppercase;
      text-align: center;
      width: 150px;
      border-radius: 0;
    }

    /* Underline From Center */
    .hvr-underline-from-center {
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      position: relative;
      overflow: hidden;
    }
    .hvr-underline-from-center:before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 51%;
      right: 51%;
      bottom: 0;
      background: #FF6B3A;
      height: 4px;
      -webkit-transition-property: left, right;
      transition-property: left, right;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }
    .hvr-underline-from-center:hover:before,
    .hvr-underline-from-center:focus:before,
    .hvr-underline-from-center:active:before,
    .active:before {
      left: 0;
      right: 0;
    }
  }

  .title {
    margin-bottom: 40px;
    font-weight: 300;
    text-transform: uppercase;
  }

  .box {
    width: 100%;
    height: 300px;
  }

  .shine { background-size: 800px 300px; }

  @media (max-width: 576px) {
    .categories-list { display: block; }
    .categories-link { text-align: left; }
  }
</style>
