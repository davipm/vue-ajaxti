<template>
  <section class="section page">
    <div class="container">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Nome</label>
          <input type="text" class="form-control" id="inputPassword4" placeholder="Nome">
        </div>
      </div>

      <div class="form-group">
        <label for="inputAddress">Assunto</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Assunto">
      </div>

      <div class="form-group">
        <label for="message">Mensagem</label>
        <textarea name="message" id="message" cols="30" rows="10" class="form-control"></textarea>
      </div>

      <button type="submit" class="btn btn-primary btn-send">Enviar</button>
      <!--
      <iframe src="http://ajaxwebapp.azurewebsites.net/contato/"
              frameborder="0"
      ></iframe>
      -->
    </div>
  </section>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss">
  iframe {
    display: block;
    position: relative;
    width: 100%;
    height: 570px;
    border: none;
    @media (max-width: 768px) {
      height: 710px;
    }
    @media (max-width: 576px) {
      height: 750px;
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
