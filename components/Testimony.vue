<template>
  <section class="section testimony" v-if="!loading">
    <div class="container">
      <!-- header -->
      <h3 class="title">
        {{ title }}
      </h3>
      <!-- page content  -->
      <div class="section-content">
        <!-- no ssr -->
        <no-ssr>
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
                :src="item.img"
                class="align-self-center media-img mr-3"
                alt="..."
              >
              <div class="media-body">
                <div v-html="item.text"></div>
                <h5 class="mt-0 mb-0">{{ item.name }}</h5>
                <h6 class="mt-0"> {{ item.job }} </h6>
              </div>
            </div>
            <template slot="next">
              <span class="next"><i class="fas fa-chevron-right"></i></span>
            </template>
          </carousel>
        </no-ssr>
        <!-- /no ssr -->
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Testimony',
    data() {
      return {
        title: 'Depoimentos',
        error: false,
        loading: true,
        items: [
          {
            name: 'Nome da pessoa',
            job: 'Developer',
            img: 'https://via.placeholder.com/150x150',
            alt: '',
            text: `
              <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                    vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                    nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                  <p class="mb-0">
                    Donec sed odio dui. Nullam quis risus eget
                    urna mollis ornare vel eu leo. Cum sociis
                    natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus.
                  </p>
            `
          },
          {
            name: 'Nome da pessoa',
            job: 'Design',
            img: 'https://via.placeholder.com/150x150',
            alt: '',
            text: `
              <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                    vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                    nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                  <p class="mb-0">
                    Donec sed odio dui. Nullam quis risus eget
                    urna mollis ornare vel eu leo. Cum sociis
                    natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus.
                  </p>
            `
          },
        ]
      }
    },

    created() {
      setInterval(() => {
        this.loading = false;
      }, 2000);
    },

    methods: {
      getTestimony() {

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
    &:hover { font-size: 2.5rem; }
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
    &:hover { font-size: 2.5rem; }
  }
</style>
