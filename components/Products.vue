<template>
  <section class="section products">
    <div class="container">
      <div v-for="(item, index) in items" :key="index" class="products-item">
        <div v-if="index % 2 === 0" class="row">
          <div class="col-md-6">
            <img :src="item.image" class="img-fluid" :alt="item.title">
          </div>
          <div class="col-md-6">
            <div class="products-content">
              <h5 class="products-title">{{ item.title }}</h5>
              <p class="products-text" v-text="item.text"></p>
            </div>
            <div class="products-buttons">
              <nuxt-link to="/" class="btn btn-primary">
                Saiba mais
              </nuxt-link>
              <nuxt-link to="/" class="btn btn-secondary">
                Peça um orçamento
              </nuxt-link>
            </div>
          </div>
        </div>
        <div v-else class="row">
          <div class="col-md-6">
            <div class="products-content">
              <h5 class="products-title">{{ item.title }}</h5>
              <p class="products-text" v-text="item.text"></p>
            </div>
            <div class="products-buttons">
              <nuxt-link to="/" class="btn btn-primary">
                Saiba mais
              </nuxt-link>
              <nuxt-link to="/" class="btn btn-secondary">
                Peça um orçamento
              </nuxt-link>
            </div>
          </div>
          <div class="col-md-6">
            <img :src="item.image" class="img-fluid" :alt="item.title">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Products',
    data() {
      return {
        items: [
          {
            title: `
              revolucione a forma
              de organizar seu
              estoque!
            `,
            text: `
              Modernize seu depósito/armazém, usando a ferramenta de
              estoque da Ajax. Com ela, você tem várias vantagens, como
              internação inteligente, conferência com nota cega e o melhor,
              o exclusivo sistema de convocação ativa, que distribui, automaticamente as demandas para os colaboradores.
              Dê adeus ás perdas por vencimento e elimine a ociosidade
              em campo de trabalho.
            `,
            image: '/_nuxt/assets/img/ipad_stok.png',
          },
          {
            title: `
              inventariar é sempre
              aquela dificuldade?
              vamos mudar isso
            `,
            text: `
              O Catalog da Ajax, é o sistema de leitura automática
              que agiliza a catalogação dos ativos da empresa.
              O aplicativo, tem interface web, e decodifica
              etiquetas NFC, códigos de barra e QR Code.
              Chega de dor de cabeça, na hora de realizar
              a listagem de seu patrimônio.
            `,
            image: '/_nuxt/assets/img/iphone_catalog.png',
          },
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .products {
    position: relative;
    display: block;
    background: url('../assets/img/transparencia_produtos.png') center/cover no-repeat ;

    &-item {
      margin-bottom: 30px;
    }

    &-content {
      display: block;
      margin-top: 80px;
    }

    &-title {
      display: block;
      font-size: 3rem;
      font-weight: 600;
      letter-spacing: 2px;
    }

    &-text {
      font-size: 1.2rem;
    }

    &-buttons {
      display: block;
      position: relative;
      margin-top: 30px;
      text-align: center;
    }
  }

  .btn {
    display: inline-block;
    width: 215px;
    margin-right: 15px;
    margin-bottom: 15px;
    padding: 7px 30px;
    color: #FFF;
    font-weight: 600;
    border: none;
    border-radius: 0;
  }

  .btn-primary {
    background-color: #212934;
    box-shadow: 0 5px #151420;
  }

  .btn-secondary {
    background-color: #FF6B3A;
    box-shadow: 0 5px #7B451A;
  }
</style>
