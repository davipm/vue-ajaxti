<template>
  <section class="section contact-site">
    <div class="container">
      <h2 class="title">Vai desenvolvimento aí?</h2>
      <h5 class="subtitle">
        O quanto a Tecnologia da Informação, está
        transformando, <span class="highlight">efetivamente</span>, sua empresa?
      </h5>
      <div class="contact-form">
        <form action="">
          <div class="row">
            <div class="col-md-4">
              <input type="text" class="form-control" placeholder="http://">
            </div>
            <div class="col-md-4">
              <input type="email" class="form-control" placeholder="E-mail">
            </div>
            <div class="col-md-4">
              <div class="send-btn">
                <a href="#" class="btn btn-primary">Checar agora</a>
                <a href="#" class="btn btn-secondary">Não tenho site</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ContactSite'
  }
</script>

<style scoped lang="scss">
  .contact-site {
    text-align: center;
  }

  .title {
    margin-bottom: 3rem;
    font-weight: 500;
    font-size: 3rem;
  }

  .subtitle {
    display: block;
    width: 70%;
    margin: auto;
    font-size: 30px;
  }

  .highlight {
    color: #FFB700;
  }

  .contact-form {
    margin-top: 4rem;
  }

  .send-btn {
    display: flex;
    justify-content: space-between;
  }

  .btn-primary,
  .btn-secondary {
    padding: 7px 28px;
    color: #FFF;
    font-weight: 600;
    border: none;
    border-radius: 0;
  }

  .btn-primary {
    background-color: #FF6B3A;
  }

  .btn-secondary {
    background-color: #FFB700;
  }
</style>
