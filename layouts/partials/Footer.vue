<template>
  <footer class="footer">
    <!-- footer content -->
    <div class="container-fluid footer-content">
      <div class="row">
        <div class="col-md-12 col-lg-3 border-right">
          <div class="logo-footer">
            <nuxt-link to="/" class="logo-link">
              <img
                src="../../assets/img/logo_branca.svg"
                alt="Logo Footer"
                title="AjaxTI"
                class="img-fluid"
              >
            </nuxt-link>
            <div class="social-footer">
              <ul class="social-list">
                <li class="social-item">
                  <a
                    href="https://twitter.com/ajax_ti"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="social-link"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="social-item">
                  <a
                    href="https://www.facebook.com/ajaxti"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="social-link"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="social-item">
                  <a
                    href="https://www.instagram.com/ajax_ti/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="social-link"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li class="social-item">
                  <a
                    href="https://www.linkedin.com/company/ajaxti/about/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="social-link"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 border-right">
          <div class="row">
            <!-- menu item -->
            <div class="col-md-4">
              <nav class="menu-footer">
                <ul class="footer-nav">
                  <li class="footer-nav-item footer-nav-title">
                    {{ solution.name }}
                  </li>
                  <li
                    class="footer-nav-item"
                    v-for="(menu, index) in solution.items"
                    :key="index"
                  >
                    <nuxt-link
                      :to="menu.url"
                      class="footer-nav-link"
                    >
                      {{ menu.post_title }}
                    </nuxt-link>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- menu item -->
            <div class="col-md-4">
              <nav class="menu-footer">
                <ul class="footer-nav">
                  <li class="footer-nav-item footer-nav-title">
                    {{ information.name }}
                  </li>
                  <li
                    v-for="(menu, index) in information.items"
                    :key="index"
                    class="footer-nav-item"
                  >
                    <nuxt-link
                      :to="menu.url"
                      class="footer-nav-link"
                    >
                      {{ menu.post_title }}
                    </nuxt-link>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- menu item -->
            <div class="col-md-4">
              <nav class="menu-footer">
                <ul class="footer-nav">
                  <li class="footer-nav-item footer-nav-title">
                    {{ about.name }}
                  </li>
                  <li
                    v-for="(menu, index) in about.items"
                    :key="index"
                    class="footer-nav-item"
                  >
                    <a
                      :href="menu.url"
                      target="_blank"
                      class="footer-nav-link"
                    >
                      {{ menu.post_title }}
                    </a>
                    <!--
                    <nuxt-link
                      v-else
                      :to="menu.url"
                      class="footer-nav-link"
                    >
                      {{ menu.post_title }}
                    </nuxt-link>
                    -->
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <!-- newsletter form -->
        <div class="col-md-12 col-lg-3">
          <!--
          <div class="subscribe">
            <h5 class="subscribe-title">
              INSCREVA-SE
            </h5>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter email address"
              >
              <button
                type="submit"
                class="btn btn-secondary"
              >
                <i class="fas fa-angle-right"></i>
              </button>
            </div>
          </div>
          -->
          <!-- address -->
          <address class="footer-address">
            <h5 class="address-title">ONDE ESTAMOS</h5>
            <p class="address-text">Av Senador Virgílio Távora, 1500</p>
            <p class="address-text">Salas 503 e 903</p>
            <p class="address-text">
              <i class="fas fa-phone"></i>
              <i class="fab fa-whatsapp"></i>
              55+ 852180.2773
            </p>
            <p class="address-text">Aldeota, Fortaleza - CE</p>
            <p class="address-text">60.170-078</p>
          </address>
        </div>
      </div>
    </div>
    <!-- footer copyright -->
    <div class="footer-bottom">
      <div class="container-fluid footer-bottom-content">
        <h5 class="footer-bottom-title">
          Nós vamos além!
        </h5>
        <h5 class="footer-bottom-title">
          Ajax Advanced Technological Solution. All Rights Reserved.
        </h5>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        solution: [],
        information: [],
        about: [],
      }
    },

    created() {
      this.getMenuSolution();
      this.getMenuInformation();
      this.getMenuAbout();
    },

    methods: {
      async getMenuSolution() {
        await this.$axios
          .$get('/menus/v1/menus/footer_menu1')
          .then((res) => { this.solution = res; })
          .catch(() => { this.error = true; });
      },

      async getMenuInformation() {
        await this.$axios
          .$get('/menus/v1/menus/footer_menu2')
          .then((res) => { this.information = res; })
          .catch(() => { this.error = true; });
      },

      async getMenuAbout() {
        await this.$axios
          .$get('/menus/v1/menus/footer_menu3')
          .then((res) => { this.about = res; })
          .catch(() => { this.error = true; });
      },
    },
  }
</script>

<style scoped lang="scss">
  .footer {
    display: block;
    position: relative;
    color: #FFF;
    background-color: #212934;
    &-content { padding: 15px 40px; }
  }

  .logo-link {
    display: block;
    width: 75%;
    margin: 50px auto 0 auto;
  }

  .social-list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0;
    list-style: none;
  }

  .social-link {
    display: inline-block;
    width: 45px;
    height: 45px;
    margin-right: 20px;
    padding-top: .37rem;
    text-align: center;
    font-size: 1.4rem;
    color: #212934;
    background-color: #FFF;
    border-radius: 50%;
  }

  .footer-nav {
    padding: 0;
    list-style: none;
    &-title {
      margin-bottom: 1.3rem;
      font-size: 1.2rem;
    }
    &-link {
      display: inline-block;
      margin-top: 20px;
      color: #FFF;
    }
    &-item:nth-child(2) &-link { margin-top: 0; }
  }

  // address
  .address-text {
    margin-bottom: 5px;
    font-size: .9rem;
  }

  .footer-bottom {
    display: block;
    position: relative;
    border-top: 2px solid #FFF;
    &-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 40px;
    }
    &-title {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 1rem;
    }
  }

  .form-group {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1.5rem;
  }

  .form-control {
    height: 50px;
    &:focus { box-shadow: none; }
  }

  .btn-secondary {
    position: absolute;
    right: 0;
    padding: 1px 25px;
    font-size: 2rem;
    background-color: #333333;
    border: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  // mobile media
  @media (max-width: 768px) {
    .border-right { border-right: 0!important; }
  }
</style>
