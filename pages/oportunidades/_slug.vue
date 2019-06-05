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
          <!--<p>{{ formLoading }}</p>-->
          <iframe
            src="https://crunvik.000webhostapp.com/vagas-de-emprego/"
            frameborder="0"
            class="form-contact"
            @load="loadingForm"
          ></iframe>
          <!--
          <form class="form">
            <div class="form-group">
              <label for="name">Nome*</label>
              <input type="text" class="form-control" id="name">
            </div>
            <div class="form-group">
              <label for="email">Email*</label>
              <input type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
              <label for="tel">Celular*</label>
              <input type="tel" class="form-control" id="tel">
            </div>
            <div class="form-group">
              <label for="inputState">Estado*</label>
              <select id="inputState" class="form-control">
                <option selected>Escolha...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group">
              <label for="linkedin">Linkedin (Opcional)</label>
              <input type="url" class="form-control" id="linkedin">
            </div>
            <div class="custom-file mb-3">
              <input type="file" class="custom-file-input" id="customFile">
              <label class="custom-file-label" data-browse="Curriculo" for="customFile">Escolher arquivo</label>
            </div>
            <button type="submit" class="btn btn-primary">
              Quero me candidatar
            </button>
          </form>
          -->
        </div>
        <div class="button-back">
          <nuxt-link to="/oportunidades" aria-label="Return to home" class="btn btn-primary">Voltar para lista</nuxt-link>
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
          })
          .finally(() => {
            this.loading = false;
          })
      },

      loadingForm() {
        this.formLoading = false;
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
</style>
