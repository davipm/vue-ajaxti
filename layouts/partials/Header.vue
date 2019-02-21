<template>
  <header class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="links">
            <ul class="social">
              <li class="social-item">
                <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
              </li>
              <li class="social-item">
                <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li class="social-item">
                <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
              </li>
            </ul>
            <ul class="contact">
              <li class="contact-item">
                <span class="contact-icon"><i class="fas fa-phone"></i></span>
                 55 852180.4208
              </li>
              <li class="contact-item">
                <span class="contact-icon"><i class="fas fa-envelope"></i></span>
                 contato@ajaxti.com.br
              </li>
              <li class="contact-item">
                <span class="contact-icon"><i class="fas fa-comments"></i></span>
                 chat
              </li>
              <li class="contact-item">
                <span class="contact-icon"><i class="fas fa-question"></i></span>
                 suporte
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <nuxt-link class="navbar-brand" to="/">
          <img src="../../assets/img/logo.svg" class="img-fluid" alt="logo">
        </nuxt-link>
        <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <nuxt-link class="nav-link" to="/">
                HOME
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/solucoes">
                SOLUÇÕES
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/industria">
                INDÚSTRIA 4.0
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/engenharia">
                ENGENHARIA
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/outsorcing">
                OUTSOURCING 4.0
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/blog">
                BLOG
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/contato">
                CONTATO
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped lang="scss">
  .header::before {
    content: '';
    display: block;
    position: relative;
    height: 10px;
    background-color: #212934;
  }

  .navbar {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px 10px 20px;
    background-color: #212934;
  }

  .social {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    &-link {
      display: inline-block;
      width: 27px;
      height: 27px;
      margin-right: 5px;
      padding-top: 5px;
      text-align: center;
      font-size: .8rem;
      border-radius: 50%;
      color: #FFF;
      background-color: #4E5661;
    }
  }

  .contact {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
    color: #FFF;

    &-icon {
      font-size: 1rem;
      margin-right: 5px;
      color: #4E5661;
    }

    &-item {
      margin-right: 20px;
      font-size: .8rem;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .nav-link {
    display: inline-block;
    text-transform: uppercase;
    font-weight: 500;
    font-size: .9rem;
    color: #212934;
    cursor: pointer;
    -webkit-transition: all .15s ease-in-out;
    -moz-transition: all .15s ease-in-out;
    -ms-transition: all .15s ease-in-out;
    -o-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;

    &:hover {
      color: #FFF;
      background-color: #212934;
    }
  }

  .nuxt-link-exact-active {
    color: #FFF;
    background-color: #212934;
  }

  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .navbar-brand {
    width: 260px;
    height: auto;
    margin-right: 160px;
    background-color: inherit;
  }
</style>
