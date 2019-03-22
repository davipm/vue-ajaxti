<template>
  <section class="section contact-site">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <h5 class="subtitle" v-html="subtitle"></h5>
      <div class="contact-form">
        <!-- form verify -->
        <form class="form">
          <div class="row">
            <div class="col-md-6 col-lg-4 mb-2">
              <input type="text" class="form-control" placeholder="http://">
            </div>
            <div class="col-md-6 col-lg-4">
              <input type="email" class="form-control" placeholder="E-mail">
            </div>
            <div class="col-md-12 col-lg-4">
              <div class="send-btn">
                <a href="#" class="btn btn-primary">
                  {{ btnPrimary }}
                </a>
                <a href="#" class="btn btn-secondary">
                  {{ btnSecondary }}
                </a>
              </div>
            </div>
          </div>
        </form>
        <!-- /form verify -->
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ContactSite',
    data() {
      return {
        title: 'Vai desenvolvimento aí?',
        subtitle: `
          O quanto a Tecnologia da Informação, está
          transformando, <span class="highlight">efetivamente</span>, sua empresa?`,
        btnPrimary: 'Checar agora',
        btnSecondary: 'Não tenho site',
      }
    }
  }
</script>

<style scoped lang="scss">
  .contact-site {
    color: #FFF;
    text-align: center;
    background: url('../assets/img/bg_desenvolvimento.png') center/cover no-repeat;
  }

  .title {
    margin-bottom: 3rem;
    font-weight: 600;
    font-size: 3rem;
  }

  .subtitle {
    display: block;
    width: 70%;
    margin: auto;
    font-size: 30px;
  }

  .highlight {
    display: inline-block;
    color: #FFB700;
  }

  .contact-form {
    margin-top: 4rem;
  }

  .form-control {
    height: 44px;
  }

  .send-btn {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 576px) {
    form { padding: 0; }
    .btn {
      display: inline-block;
      margin-bottom: 20px;
      width: 200px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .btn-primary,
  .btn-secondary {
    padding: 7px 30px;
    color: #FFF;
    font-weight: 600;
    border: none;
    border-radius: 0;
  }

  .btn-primary {
    background-color: #FF6B3A;
    box-shadow: 0 5px #994023;
  }

  .btn-secondary {
    background-color: #FFB700;
    box-shadow: 0 5px #85630C;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 2rem;
    }

    .subtitle {
      width: 100%;
      font-size: 1.5rem;
    }

    .send-btn {
      margin-top: 20px;
      display: block;
    }
  }
</style>
