<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <nuxt-link class="navbar-brand" to="/">
        <img src="../../assets/img/logo.svg" class="img-fluid" alt="logo">
      </nuxt-link>
      <button class="navbar-toggler d-none"
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
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        menus: [
          { name: 'HOME',            href: '/'},
          //{ name: 'SOLUÇÕES',        href: '#1'},
          { name: 'INDÚSTRIA 4.0',   href: '/industria'},
          { name: 'SAÚDE',           href: '/saude'},
          //{ name: 'ENGENHARIA',      href: '#2' },
          { name: 'OUTSOURCING 4.0', href: '/outsorcing'},
          //{ name: 'BLOG',            href: '#3'},
          //{ name: 'CONTATO',         href: '#4'},
        ],
        isVisible: false,
      }
    },
  }
</script>

<style scoped>

</style>
