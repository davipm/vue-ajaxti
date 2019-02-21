<template>
  <footer class="footer">
    <div class="container-fluid footer-content">
      <div class="row">
        <div class="col-md-3">
          <div class="logo-footer">
            <nuxt-link to="/" class="logo-link">
              <img src="../../assets/img/logo.svg" alt="">
            </nuxt-link>
            <div class="social-footer">
              <ul class="social-list">
                <li class="social-item">
                  <a href="#" class="social-link">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="social-item">
                  <a href="#" class="social-link">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="social-item">
                  <a href="#" class="social-link">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-4">
              <nav class="menu-footer">
                <ul class="footer-nav">
                  <li class="footer-nav-item footer-nav-title">
                    SOLUÇÕES
                  </li>
                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">
                      AD Experience
                    </a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">
                      Estoque
                    </a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">
                      Inventário
                    </a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">
                      Outsorcing
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-md-4">
              <nav class="menu-footer">
                <ul class="footer-nav">
                  <li class="footer-nav-item footer-nav-title">
                    INFORMAÇÕES
                  </li>
                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">
                      Licença
                    </a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">
                      Politica de Privacidade
                    </a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">
                      Uso de Cookies
                    </a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">
                     FAQ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-md-4">
              <nav class="menu-footer">
                <ul class="footer-nav">
                  <li class="footer-nav-item footer-nav-title">
                    SOBRE
                  </li>
                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">
                      AD Experience
                    </a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">
                      Team
                    </a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">
                      Soporte
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          div 3
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container-fluid footer-bottom-content">
        <h5 class="footer-bottom-title">Nós vamos além</h5>
        <h5 class="footer-bottom-title">Ajax Advanced Technological Solution. All Rights Reserved.</h5>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped lang="scss">
  .footer {
    display: block;
    position: relative;
    color: #FFF;
    background-color: #212934;
    &-content {
      padding: 15px 20px;
    }
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
    padding-top: 5px;
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

    &-item:nth-child(2) &-link {
      margin-top: 0;
    }
  }

  .footer-bottom {
    display: block;
    position: relative;
    border-top: 2px solid #FFF;

    &-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-title {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 1rem;
    }
  }
</style>
