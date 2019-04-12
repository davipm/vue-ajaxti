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

<style lang="scss">
  .form-contact {
    display: block;
    position: relative;
    width: 100%;
    height: 700px;
    border: none;
    @media (max-width: 768px) {
      height: 810px;
    }
    @media (max-width: 576px) {
      height: 832px;
    }
  }

  form {
    padding: 10px;
  }

  .form-control {
    border: 1px solid #d5d5d5;
    color: #00734A;
  }

  .form-control:focus,
  .form-control:visited,
  .form-control:active {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
  }

  label {
    color: #00734A;
    font-weight: 500;
  }

  .btn-send {
    background-color: #D8D9DA;
    border: 1px solid #D8D9DA;
    color: #808184;
    padding: 6px 8px;
    &:hover {
      background-color: #808184;
      border: 1px solid #D8D9DA;
      color: #D8D9DA;
    }
  }
</style>
