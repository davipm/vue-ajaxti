<template>
  <section class="section opportunities-item">
    <!-- loading -->
    <div v-if="loading"  class="loading-content">
      <div class="clear-loading loading-effect-1">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- page content -->
    <div v-else v-for="item in opportunitie" class="container">
      <!-- header -->
      <h3 class="title">{{ item.title }}</h3>
      <h3 class="title subtitle">{{ item.acf.city }}</h3>
      <!-- page content -->
      <div class="page-content row">
        <div
          class="description col-md-8"
          v-html="item.acf.description"
        >
        </div>
        <div class="apply-form col-md-4">
          <div v-if="formLoading" class="form-loading">
            <div class="form-group">
              <div class="shine line"></div>
              <div class="shine box"></div>
            </div>
            <div class="form-group">
              <div class="shine line"></div>
              <div class="shine box"></div>
            </div>
            <div class="form-group">
              <div class="shine line"></div>
              <div class="shine box"></div>
            </div>
            <div class="form-group">
              <div class="shine line"></div>
              <div class="shine box"></div>
            </div>
            <div class="form-group">
              <div class="shine line"></div>
              <div class="shine box"></div>
            </div>
            <div class="form-group">
              <div class="shine box"></div>
            </div>
          </div>
          <iframe
            src="https://crunvik.000webhostapp.com/vagas-de-emprego/"
            frameborder="0"
            class="form-contact"
            @load="formLoading = false"
          ></iframe>
        </div>
        <div class="button-back">
          <nuxt-link
            to="/oportunidades"
            aria-label="Return to home"
            class="btn btn-primary">
            Voltar para lista
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'vagas',
    data() {
      return {
        loading: true,
        formLoading: true,
        opportunitie: [],
        seoTitle: '',
        seoDescription: '',
      }
    },

    watch: {
      '$route'(to, from) {
        this.formLoading = true;
      }
    },

    created() {
      this.getOpportunities(this.$route.params.slug);
    },

    methods: {
      async getOpportunities(slug) {
        await this.$axios
          .$get(`/api/v1/opportunities/${slug}`)
          .then((res) => {
            this.opportunitie = res;
            this.seoTitle = res[0].title;
          })
          .finally(() => {
            this.loading = false;
          })
      },

      loadingForm() {
        this.formLoading = false;
      }
    },

    head () {
      return {
        title: `${this.seoTitle} - AjaxTI`,
        meta: [
          { hid: 'description', name: 'description', content: this.description }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .opportunities-item {
    display: block;
    position: relative;
    padding: 60px 0;
    min-height: 60vh;
  }

  .title {
    margin-bottom: 0;
    font-weight: 300;
    text-transform: uppercase;
  }

  .subtitle {
    margin-bottom: 40px;
    font-size: 1.3rem;
  }

  .form {
    display: block;
    position: relative;
    padding: 0;
    margin: 0;

    &-control {
      color: #0E1B32;
      border: 1px solid #d5d5d5;
    }

    label {
      color: #0E1B32;
    }
  }

  .btn-primary-send {
    display: block;
    position: relative;
    width: 100%;
    padding: .8rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #FF6B3A;
    border: none;
    &:hover { background-color: #e64b3c; }
  }

  .btn-primary {
    color: #FFF;
    background-color: #FF6B3A;
    border: none;
  }

  // form loading
  .shine {
    display: block;
    position: relative;
    margin-top: 0;
    margin-bottom: 12px;
    height: 15px;
    width: 150px;
    border-radius: 3px;
  }

  .box {
    display: block;
    width: 100%;
    height: 37px;
    border-radius: 6px;
  }
</style>
