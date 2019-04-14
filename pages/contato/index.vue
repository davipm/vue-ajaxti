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
      <iframe
        src="https://crunvik.000webhostapp.com/patrocinios-form/"
        frameborder="0"
        class="form-contact"
        @load="loading = !loading"
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
</style>
