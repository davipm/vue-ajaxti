<template>
  <section class="section testimony">
    <div class="container">
      <!-- header -->
      <h3 class="title">
        {{ title }}
      </h3>
      <!-- page content  -->
      <div class="section-content">
        <!-- no ssr -->
        <no-ssr>
          <carousel :items="1">
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
        items: [
          {
            name: 'Davi Pereira',
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
            name: 'Titulo',
            job: 'Desing',
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

  // carousel
  .owl-carousel .owl-item img {
    display: inline-block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
</style>
