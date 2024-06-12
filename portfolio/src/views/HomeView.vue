<template>
  <main>
    <section class="secondary-bg">
      <div class="hero">
        <div class="flex flex-col">
          <div class="portfolio slide-down-container">
            <!-- portfolio text -->
            <h1 class="text-9xl dark-headline text-center slide-down">PORTFOLIO</h1>
          </div>

          <div class="cat-peeking-container">
            <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/Cats%2FCat%20peeking.svg?alt=media&token=04a6dc7f-ed50-4f65-a8a7-db2eba5986a3" alt="" class="cat-peeking">
          </div>
        
        </div>
      </div>
    </section>


    <section class="pt-16 pb-16 black-bg">
      <div class="card-container flex flex-col gap-4 gap-y-10">

        <!-- making a loop for all of my projects -->
        <div v-for="portfolio in portfolios" :key="portfolio">
          <RouterLink :to="{ name: 'portfoliodetails', params:{id: portfolio.id}}">      
            <div>
              <div class="portfolio_img_container pb-2">
                <img :src="portfolio.portfolioImg" alt="portfolio-image" class="portfolio_img">
              </div>
              <p class="text-xs white-text">{{ portfolio.portfolioCategory }}</p>
              <h4 class="text-2xl light-headline leading-none">{{ portfolio.portfolioProduct }}</h4>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted, toRefs, computed } from 'vue'
import ContactMe from '../components/ContactMe.vue';
import usePortfolios from '../modules/usePortfolios';
import star from '../modules/star';

onMounted(() => {
  getPortfoliosData();
})

// get single page
const props = defineProps({
id: String
})

const { id } = toRefs(props)

const { portfolios, getPortfoliosData } = usePortfolios();

const portfolioDetail = computed(() => {
  return portfolios.value.filter(item => item.id == id.value)
})


// modal button open and close
const isOpen = ref(false);


onMounted(() => {
  window.scrollTo(0, 0)
})


</script>

<style scoped>
main {
  padding-top: 64px;
}

.cat-peeking-container {
  padding: 0 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cat-peeking {
  margin-top: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
}


/* projects */
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 3%;
}

.portfolio_img_container {
  height: 75vh;
  overflow: hidden;
}

.portfolio_img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
}








.portfolio {
  padding-top: 50px;
}

.short {
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
}


/* stying image */
.product-image {
  max-height: 70vh;
  transition: .5s ease;
  margin-top: -100px;
}

.overlay {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.product-image-container:hover .product-image {
  opacity: 0.8;
}

.product-image-container:hover .overlay {
  opacity: 1;
}

/* stying image end */


/* modal styling */
.modal {
  position: fixed;
  top: 10%;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal > div {
  background-color: var(--extra-white);
  border-radius: 10px;
  padding: 45px 20px;
  width: 90%;
  max-height: 80%;
  top: 40px;
  left: 40px;
  position: absolute;
  overflow-y: auto;
}

#floatyClose {
  position: absolute;
  top: 96px;
  margin: 10px;
  cursor: pointer;
  z-index:110;
}



/* responsive */
@media only screen and (max-width: 1150px) {

}

/* responsive end*/


</style>