<template>
  <header class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-1 col-lg-2"></div>
        <div class="col-md-12 col-lg-8">
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
                 55 852180.2773
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
        <div class="col-md-1 col-lg-2"></div>
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
            <li class="nav-item" v-for="(item, index) in menus" :key="index">
              <nuxt-link class="nav-link" :to="item.href">
                {{ item.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="search-content">
          <button class="btn btn-search" @click="showSearch">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </nav>
    <div class="search-box shadow" :class="{ 'show-search': isVisible }">
      <form>
        <input type="text" class="form-control" placeholder="Pesquisar">
        <button class="button-search">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        menus: [
          { name: 'HOME',            href: '/' },
          { name: 'SOLUÇÕES',        href: '/solucoes' },
          { name: 'INDÚSTRIA 4.0',   href: '/industria' },
          { name: 'ENGENHARIA',      href: '/engenharia' },
          { name: 'OUTSOURCING 4.0', href: '/outsorcing' },
          { name: 'BLOG',            href: '/blog' },
          { name: 'CONTATO',         href: '/contato' },
        ],
        isVisible: false,
      }
    },

    methods: {
      showSearch() {
        this.isVisible = !this.isVisible;
      }
    }
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
    &-nav {
      margin-left: auto;
    }
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 30px 10px 35px;;
    background: url('../../assets/img/bg-top.svg') 51% -14px/160% no-repeat;
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
    padding-right: 2rem;
    padding-left: 2rem;
    @media (max-width: 1366px) {
      padding-right: 1rem;
      padding-left: 1rem;
    }
  }

  .navbar-brand {
    width: 260px;
    height: auto;
    background-color: inherit;
  }

  .search-box {
    display: none;
    position: absolute;
    width: 100%;
    z-index: 9999;
    border-top: 1px solid #eee;

    .form-control {
      display: block;
      position: relative;
      padding-left: 20px;
      font-size: 2rem;
      font-weight: 600;
      color: #676767;
      height: 60px;
      border: none;
      border-radius: 0;
    }

    .button-search {
      position: absolute;
      right: 15px;
      bottom: 16px;
      font-size: 1.3rem;
      border: none;
      background-color: inherit;
    }
  }

  .show-search {
    display: block;
    -webkit-animation: fadeInFromNone 0.5s ease-out;
    -moz-animation: fadeInFromNone 0.5s ease-out;
    -o-animation: fadeInFromNone 0.5s ease-out;
    animation: fadeInFromNone 0.5s ease-out;
  }

  @-webkit-keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }

    1% {
      display: block;
      opacity: 0;
    }

    100% {
      display: block;
      opacity: 1;
    }
  }

  @-moz-keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }

    1% {
      display: block;
      opacity: 0;
    }

    100% {
      display: block;
      opacity: 1;
    }
  }

  @-o-keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }

    1% {
      display: block;
      opacity: 0;
    }

    100% {
      display: block;
      opacity: 1;
    }
  }

  @keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }

    1% {
      display: block;
      opacity: 0;
    }

    100% {
      display: block;
      opacity: 1;
    }
  }

  @media (max-width: 1366px) {
    .links {
      padding-top: 0;
      background-position: 51% -12px;
    }
  }

  @media (max-width: 768px) {
    .links {
      padding-top: 0;
      background-position: 51% -10px;
      background-size: 160%;
    }
  }
</style>
