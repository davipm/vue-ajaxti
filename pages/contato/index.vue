<template>
  <section class="page">
    <div class="container">
      <h3 class="title">Contato</h3>
      <!--
      <form @submit.prevent="sendEmail">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input v-model="form.email" type="email" required class="form-control" id="inputEmail4" placeholder="Email">
          </div>

          <div class="form-group col-md-6">
            <label for="inputPassword4">Nome</label>
            <input v-model="form.name" type="text" required class="form-control" id="inputPassword4" placeholder="Nome">
          </div>
        </div>

        <div class="form-group">
          <label for="inputAddress">Assunto</label>
          <input v-model="form.item" type="text" required class="form-control" id="inputAddress" placeholder="Assunto">
        </div>

        <div class="form-group">
          <label for="message">Mensagem</label>
          <textarea v-model="form.message" name="message" required id="message" cols="30" rows="10" class="form-control"></textarea>
        </div>

        <button type="submit" class="btn btn-primary btn-send">Enviar</button>
      </form>
      -->
      <div v-if="loading" class="form-loading">
        <div class="form-row">
          <div class="col-md-6">
            <div class="form-group">
              <div class="shine line"></div>
              <div class="shine box"></div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <div class="shine line"></div>
              <div class="shine box"></div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="shine line"></div>
          <div class="shine box"></div>
        </div>
        <div class="form-group">
          <div class="shine line"></div>
          <div class="shine box box-big"></div>
        </div>
      </div>

      <iframe
        src="https://crunvik.000webhostapp.com/patrocinios-form/"
        frameborder="0"
        class="form-contact"
        @load="loading = false"
      ></iframe>

    </div>
  </section>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        loading: true,
      }
    }
  }
</script>

<style scoped lang="scss">
  .page {
    display: block;
    position: relative;
    margin: 0;
    padding-top: 60px;
  }

  .title {
    margin-bottom: 20px;
    font-weight: 300;
    text-transform: uppercase;
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
    &-big {
      height: 250px;
      background-size: 800px 250px;
    }
  }
</style>
