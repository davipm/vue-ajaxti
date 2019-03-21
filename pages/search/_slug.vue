<template>
  <section class="section search">
    <div class="container">
      <h3 class="title">Resultado da pesquisa para: {{ $route.params.slug }}</h3>
      <div class="search-content">
        <div class="row">
          <div class="col-md-9">
            <div class="media" v-for="(post, index) in searchPost" :key="index">
              <img
                src="https://via.placeholder.com/300x220"
                class="align-self-center mr-3"
                alt="..."
                title=""
              >
              <div class="media-body">
                <nuxt-link to="/">
                  <h5 class="mt-0">Media heading</h5>
                </nuxt-link>
                Cras sit amet nibh libero, in gravida nulla. Nulla
                vel metus scelerisque ante sollicitudin. Cras purus
                odio, vestibulum in vulputate at, tempus viverra turpis.
                Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </div>
            </div>
            <div class="media" v-for="(post, index) in searchPage" :key="index">
              <img
                src="https://via.placeholder.com/300x220"
                class="align-self-center mr-3"
                alt="..."
                title=""
              >
              <div class="media-body">
                <nuxt-link to="/">
                  <h5 class="mt-0">Media heading</h5>
                </nuxt-link>
                Cras sit amet nibh libero, in gravida nulla. Nulla
                vel metus scelerisque ante sollicitudin. Cras purus
                odio, vestibulum in vulputate at, tempus viverra turpis.
                Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
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
              this.pageTitle = `Resultado da pesquisa para:`;
              console.log(res.data)
            })
            .catch(()   => { this.error = true; })
            .finally(() => { this.loading = false; })
        }
        else {
          axios.get(`/wp/v2/posts?search=${slug}`)
            .then(( res ) => {
              this.searchPost = res.data;
              this.pageTitle = `Resultado da pesquisa para: ${slug}`;
              console.log(res.data)
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
