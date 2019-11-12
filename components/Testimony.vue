<template>
  <section class="section testimony" v-if="items.length">
    <div class="container">
      <!-- header -->
      <h3 class="title">
        {{ title }}
      </h3>
      <!-- page content  -->
      <div class="section-content">
        <!-- no ssr -->
        <client-only>
          <carousel :items="1" :nav="false" :autoplay="true">
            <template slot="prev">
              <span class="prev"><i class="fas fa-chevron-left"></i></span>
            </template>
            <div
              v-for="(item, index) in items"
              :key="index"
              class="media"
            >
              <img
                :src="item.image.sizes.thumbnail"
                :alt="item.title"
                :title="item.title"
                class="align-self-center media-img mr-3"
              >
              <div class="media-body">
                <div v-html="item.text"></div>
                <h5 class="mt-0 mb-0">{{ item.title }}</h5>
                <h6 class="mt-0">{{ item.job }}</h6>
              </div>
            </div>
            <template slot="next">
              <span class="next"><i class="fas fa-chevron-right"></i></span>
            </template>
          </carousel>
        </client-only>
        <!-- /no ssr -->
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Testimony',
    data() {
      return {
        title: 'Depoimentos',
        error: false,
        loading: true,
        items: [],
      }
    },

    created() {
      this.getTestimony();
    },

    methods: {
      async getTestimony() {
        this.loading = true;

        try {
          const response = await axios.get('http://cms.ajaxti.com.br/wp-json/api/v1/testimony/');
          let obj = response.data;
          this.items = Object.keys(obj).map((key) => {
            return [obj[key]][0];
          });
        } catch (e) {
          this.error = true;
        }

        this.loading = false;
      }
    }
  }
</script>

<style scoped lang="scss">
  .testimony {
    display: block;
    position: relative;
    color: #FFF;
    background-color: #FF6B3A;
  }

  .title {
    margin-bottom: 50px;
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
  }

  .section-content {
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
  }

  // carousel
  .owl-carousel .owl-item img {
    display: inline-block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  @media (max-width: 756px) {
    .media {
      display: block;
      position: relative;

      &-img {
        display: block!important;
        margin: auto!important;
      }
    }
  }

  .prev {
    position: absolute;
    display: inline-block;
    padding: 5px 20px;
    top: 50%;
    left: -5rem;
    font-size: 2rem;
    cursor: pointer;
    transform: translateY(-80%);
    -webkit-transition: all .15s ease-in-out;
    -moz-transition: all .15s ease-in-out;
    -ms-transition: all .15s ease-in-out;
    -o-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;

    &:hover {
      font-size: 2.5rem;
    }
  }

  .next {
    position: absolute;
    display: inline-block;
    padding: 5px 20px;
    top: 50%;
    right: -5rem;
    font-size: 2rem;
    cursor: pointer;
    transform: translateY(-80%);
    -webkit-transition: all .15s ease-in-out;
    -moz-transition: all .15s ease-in-out;
    -ms-transition: all .15s ease-in-out;
    -o-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;

    &:hover {
      font-size: 2.5rem;
    }
  }
</style>
