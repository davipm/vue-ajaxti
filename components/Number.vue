<template>
  <section class="section number">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="number-item">
            <img src="../assets/img/gears.svg" class="number-img" alt="">
            <div class="number-body">
              <p class="number-text">
                milhares de linhas
                de desenvolvimento
                na área industrial
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="number-item">
            <img src="../assets/img/gears.svg" class="number-img" alt="">
            <div class="number-body">
              <p class="number-text">
                mais de 50 projetos
                nos mais variados
                setores do mercado
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="number-item">
            <img src="../assets/img/gears.svg" class="number-img" alt="">
            <div class="number-body">
              <p class="number-text">
                perícia em projetos
                tecnológicos nas áreas
                de TI e Engenharia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Number'
  }
</script>

<style scoped lang="scss">
  .number {
    display: block;
    position: relative;
    background-color: #FF6B3A;

    &-img {
      display: block;
      height: 150px;
      margin: auto;
    }

    &-body {
      margin-top: 40px;
      text-align: center;
      font-size: 1.5rem;
      color: #FFF;
    }
  }
</style>
