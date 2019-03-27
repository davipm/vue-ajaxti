<template>
  <section class="page">
    <!-- loading -->
    <div v-if="loading" class="loading-content">
      <div class="clear-loading loading-effect-1">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- /loading -->
    <!-- content -->
    <div v-else
         v-for="item in page"
         :key="item.id"
    >
      <div class="wrap">
        <div class="first-content"
             :style="{ backgroundImage: `url(${item.acf.image_bg})` }"
        >
          <div class="container-fluid">
            <div class="text-top-right"
                 v-html="item.acf.text_top_right"
            ></div>
            <div class="content-bottom">
              <!-- title page -->
              <div class="title">
                <h5 class="title-content">
                  {{ item.title.rendered }}
                </h5>
                <h5 class="title-content second-title">
                  {{ secondTitle }}
                </h5>
              </div>
              <!-- content bottom -->
              <div class="know-more"
                   v-html="item.acf.text_bottom_right"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <!-- page content -->
      <div class="second-content"
           :style="{ backgroundImage: `url(${item.acf.image_bg_content})` }"
      >
        <div class="container"
             v-html="item.content.rendered"
        ></div>
      </div>
    </div>
    <!-- /content -->
  </section>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        page: [],
        title: '',
        secondTitle: '',
        description: '',
        loading: true,
      }
    },

    created() {
      this.pageHealth();
    },

    methods: {
      async pageHealth() {
        await this.$axios
          .$get('/wp/v2/pages', {
            params: {
              slug: 'saude'
            }
          })
          .then((res) => {
            this.page = res;
            this.title = res[0].title.rendered;
            this.secondTitle = res[0].acf.second_title;
          })
          .catch(() => {
            this.error = true;
          })
          .finally(() => {
            this.loading = false;
          });
      },
    },

    head () {
      return {
        title: `${this.title} - AjaxTI`,
        meta: [
          { hid: 'description', name: 'description', content: this.description }
        ]
      }
    },
  }
</script>

<style scoped lang="scss">
  .wrap::after,
  .wrap::before {
    content: '';
    display: block;
    position: relative;
    width: 100%;
    height: 10px;
    background-color: #67C6BC;
  }

  .first-content {
    display: block;
    position: relative;
    height: 550px;
    background: 0 0/cover no-repeat;
  }

  .text-top-right {
    position: absolute;
    top: 3rem;
    right: 2rem;
    width: 38rem;
    font-size: 1.6rem;
    line-height: 1;
    text-align: right;
    color: #00655A;
  }

  .content-bottom {
    position: absolute;
    left: 15px;
    bottom: 0;
    width: calc(100% - 30px);
  }

  .title {
    position: relative;
    padding-right: 41rem;
    bottom: 0;
    width: 65rem;
    height: 15rem;
    background: url('../../assets/img/bg-title2.svg') center/cover no-repeat;

    &-content {
      position: relative;
      top: 2rem;
      left: 3rem;
      color: #FFF;
      font-size: 3rem;
    }
  }

  .know-more {
    position: absolute;
    right: 15px;
    bottom: 20px;
    width: 250px;
    color: #67C6BC;
    font-size: 1rem;
    a {
      color: #67C6BC;
      text-decoration: underline;
    }
  }

  .second-content {
    display: block;
    position: relative;
    padding: 200px 0;
    font-size: 2rem;
    font-weight: 600;
    color: #00655A;
    line-height: 1.5;
    background: 0 0/cover no-repeat;
  }

  .second-title {
    text-align: right;
    font-size: 4rem;
  }

  @media (max-width: 576px) {
    .text-top-right {
      font-size: 1rem;
      text-align: left;
      right: auto;
      width: auto;
    }

    .title {
      padding-right: 0;
      width: auto;
      height: auto;
      background: none;
      text-align: left;
      bottom: 7rem;
      &-content {
        top: auto;
        left: auto;
      }
    }
  }
</style>
