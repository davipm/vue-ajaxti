<template>
  <section class="section products">
    <div class="container">
      <div class="product-item">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/img/ipad_stok.png" class="img-fluid" alt="">
          </div>
          <div class="col-md-6">
            <div class="products-content">
              <h5 class="products-title">
                revolucione a forma
                de organizar seu
                estoque!
              </h5>
              <p class="products-text">
                Modernize seu depósito/armazém, usando a ferramenta de
                estoque da Ajax. Com ela, você tem várias vantagens, como
                internação inteligente, conferência com nota cega e o melhor,
                o exclusivo sistema de convocação ativa, que distribui, automaticamente as demandas para os colaboradores.
                Dê adeus ás perdas por vencimento e elimine a ociosidade
                em campo de trabalho.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="product-item">
        <div class="row">
          <div class="col-md-6">
            <div class="products-content">
              <h5 class="products-title">
                inventariar é sempre
                aquela dificuldade?
                vamos mudar isso
              </h5>
              <p class="products-text">
                O Catalog da Ajax, é o sistema de leitura automática
                que agiliza a catalogação dos ativos da empresa.
                O aplicativo, tem interface web, e decodifica
                etiquetas NFC, códigos de barra e QR Code.
                Chega de dor de cabeça, na hora de realizar
                a listagem de seu patrimônio.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <img src="../assets/img/iphone_catalog.png" class="img-fluid" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Products'
  }
</script>

<style scoped lang="scss">
  .products {
    background: url('../assets/img/transparencia_produtos.png') center/cover no-repeat ;
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
  }
</style>
