<template>
  <section class="section search">
    <div class="container">
      <h3 class="title">Resultado da pesquisa para: {{ $route.params.slug }}</h3>
      <div class="search-content">
        <div class="row">
          <div class="col-md-9">
            <div class="media" v-for="(post, index) in searchPost" :key="index">
              <div class="media-body">
                <nuxt-link :to="`/blog/${post.slug}`">
                  <h5 class="mt-0">{{ post.title.rendered }}</h5>
                </nuxt-link>
                <div v-html="post.excerpt.rendered"></div>
              </div>
            </div>
            <div class="media" v-for="(page, index) in searchPage" :key="index">
              <div class="media-body">
                <nuxt-link :to="`/${page.slug}`">
                  <h5 class="mt-0">{{page.title.rendered}}</h5>
                </nuxt-link>
                <div v-html="page.excerpt.rendered"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  axios.defaults.baseURL = 'https://ajaxwebapp.azurewebsites.net/wp-json';
  export default {
    name: 'slug',
    data() {
      return {
        pageTitle: '',
        loading: true,
        error: false,
        searchPost: [],
        searchPage: [],
      }
    },

    created() {
      axios.all(
        [
          this.getPost(this.$route.params.slug),
          this.getPage(this.$route.params.slug)
        ]
      )
        .then(axios.spread(function (acct, perms) {  }));
    },

    methods: {
      getPost( slug ) {
        if ( slug === undefined ) {
          axios.get(`/wp/v2/posts`)
            .then(( res ) => {
              this.searchPost = res.data;
            })
            .catch(()   => { this.error = true; })
            .finally(() => { this.loading = false; })
        }
        else {
          axios.get(`/wp/v2/posts?search=${slug}`)
            .then(( res ) => {
              this.searchPost = res.data;
            })
            .catch(()   => { this.error = true; })
            .finally(() => { this.loading = false; })
        }
      },

      getPage( slug ) {
        if (slug === undefined) {
          axios.get(`/wp/v2/pages`)
            .then(( res ) => { this.searchPage = res.data; })
            .catch(() => { this.error = true; })
            .finally(() => { this.loading = false; })
        }
        else {
          axios.get(`/wp/v2/pages?search=${slug}`)
            .then(( res ) => { this.searchPage = res.data; })
            .catch(() => { this.error = true; })
            .finally(() => { this.loading = false; })
        }
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

  .media { margin-bottom: 20px; }
</style>
