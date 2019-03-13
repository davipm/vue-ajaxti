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
            :title="item.title"
            :category="item.category"
            :text="item.text"
            :url="item.url"
            :image="item.image"
            :alt="item.alt"
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
    name: 'index',
    components: {
      CardEffect
    },

    data() {
      return {
        title: 'blog',
        loading: true,
        error: false,
        items: [
          {
            title: 'Test',
            category: 'Categoria',
            text: 'Conteudo',
            url: 'url-test',
            image: 'https://tympanus.net/Development/HoverEffectIdeas/img/17.jpg',
            alt: 'Alt test',
          },
          {
            title: 'Test',
            category: 'Categoria',
            text: 'Conteudo',
            url: 'url-test',
            image: 'https://tympanus.net/Development/HoverEffectIdeas/img/17.jpg',
            alt: 'Alt test',
          },
          {
            title: 'Test',
            category: 'Categoria',
            text: 'Conteudo',
            url: 'url-test',
            image: 'https://tympanus.net/Development/HoverEffectIdeas/img/17.jpg',
            alt: 'Alt test',
          },
          {
            title: 'Test',
            category: 'Categoria',
            text: 'Conteudo',
            url: 'url-test',
            image: 'https://tympanus.net/Development/HoverEffectIdeas/img/17.jpg',
            alt: 'Alt test',
          },
        ]
      }
    },

    created() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
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
