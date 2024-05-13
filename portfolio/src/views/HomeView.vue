<template>
  <main>
    <section class="secondary-bg">
      <!-- primary-frame-inside -->
      <div class="flex justify-end pt-4 pr-4">
        <img :src="star" alt="star" class="h-12">
      </div>

        <div class="flex ten-percent justify-center">
          <div>
            <h1 class="text-9xl dark-headline text-center portfolio">PORTFOLIO</h1>

            <div class="cat-1 pr-16 pl-16">
              <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/different%20moon%201.svg?alt=media&token=00027135-a371-4cc0-b17b-943031deeba3" alt="">
            </div>
            
            

            <!-- button to go straight to contact -->
            <div class="pt-6 flex justify-center">
              <button @click="isOpen = true" class="btn-3">Contact me</button>
              <teleport to="body">
                <div class="modal" v-if="isOpen">
                  <ContactMe @close="isOpen = false">

                  </ContactMe>
                </div>
              </teleport>
            </div>
          </div>
        
          
        </div>
        <div class="flex justify-start pb-4 pl-4">
          <img :src="star" alt="star" class="h-14">
        </div>

    </section>
    
    








    <div class="flex flex-col flex-nowrap overflow-hidden w-full gap-y-44 quaternary-bg" id="work">

      <!-- making a loop for all of my projects -->
      <div v-for="portfolio in portfolios" :key="portfolio" class="portfolio-item flex flex-col items-start secondary-bg w-full"  v-motion-fade-visible-once>

        <!-- container for projects -->
        <div class="portfolio-content flex justify-between ten-percent w-full pt-10 pb-12 gap-16" id="portfolio-view">

          <!-- left side -->
          <div>
            <div class="pb-10">
              <h4 class="dark-headline text-5xl pb-4">{{ portfolio.portfolioProduct }}</h4>
              
              <p class="dark-text">{{ portfolio.portfolioShortDescription }}</p>
            </div>
            
              <h4 class="dark-headline text-5xl pb-4">Tools</h4>
            <p class="dark-text">{{ portfolio.portfolioShortDescription }}</p>

            <div class="flex  pt-10">
              <RouterLink :to="{ name: 'portfoliodetails', params:{id: portfolio.id}}">
                <div class="product-image-container">
                  <button class="btn-3">See my work</button>
                </div>   
              </RouterLink>
            </div>
            
          </div>

          <!-- right side -->
          <div class="flex justify-end flex-col">
            <div>
              <RouterLink :to="{ name: 'portfoliodetails', params:{id: portfolio.id}}">
                <div class="product-image-container">
                  <img :src="portfolio.portfolioFrontImg" class="product-image" alt="portfolio-img">
                  <div class="overlay"></div>
                </div>   
              </RouterLink>
            </div>

            <!-- number -->
            <div class="flex justify-end pt-4">
              <h5 class="text-7xl dark-headline">{{ portfolio.portfolioNumber }}</h5>
            </div>
          </div>
 
        </div>
      </div>
      </div>
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

/* first section */
.portfolio {
  margin-top: -30px;
}

.cat-1 {
  margin-top: -90px;
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


/* styling portfolio text */
.p-category {
  transform: scaleY(1.4);
  font-style: normal;
  font-weight: bold; 
}

/* styling portfolio text end */


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
  .bright-frame-inside {
    height: 50vh;
  }

  .right-container {
    height: 50vh;
  }

  .bright-frame-insideContent img {
    max-height: 40vh;
  }
}

@media only screen and (max-width: 1000px) {
  .bright-frame-inside {
    height: 45vh;
  }

  .right-container {
    height: 45vh;
  }
}

@media only screen and (max-width: 950px) {
  .primary-frame-inside {
    height: auto;
  }
  .primary-frame-inside-top-content {
    flex-direction: column;
  }

  .primary-frame-inside h1 {
    font-size: 36px;
  }

  .primary-frame-inside h2{
    font-size: 30px;
  }

  .primary-frame-inside button {
    margin-bottom: 24px;
    padding-top: 12px;
  }

  .bright-frame-inside {
    height: auto;
  }

  .right-container {
    height: auto;
  }

  .portfolio-item-container {
    row-gap: 44px;
  }

  .my-portrait {
    justify-content: flex-start;
    padding-bottom: 12px;
  }

  .passionBox {
    text-align: left;
    justify-content: flex-start;
  }

  .portfolio-content {
    flex-direction: column;
  }

  .bright-frame {
    width: 100%;
  }

  .secondary-frame {
    width: 100%;
  }

  .right-container {
    height: auto;
  }
}

@media only screen and (max-width: 900px) {
  .product-image {
      max-inline-size: 100%;
      block-size: auto;
      object-fit: contain;
  }    
}

@media only screen and (max-width: 700px) {
  .specialties .scroll-text {
    gap: 1rem;
  }

  .specialties .scroll-text span {
    font-size: 28px;
  }
  .scroll-text hr {
  height: 2px;
  width: 1.4rem;
  }
}

@media only screen and (max-width: 580px) {
  .primary-frame-inside h3 {
    font-size: 18px;
  }

  .passionBox p {
    padding-right: 40px;
  }

  #bright-frame-inside {
    height: auto;
  }
}

@media only screen and (max-width: 550px) {
  .primary-frame-inside h1 {
    font-size: 34px;
  }

  .primary-frame-inside h2 {
    font-size: 28px;
  }
}

@media only screen and (max-width: 500px) {
  .primary-frame-inside {
    padding-top: 45px;
  }

  .p-number {
    padding-top: 45px;
  }

  .passionBox p {
    padding-bottom: 45px;
  }

  .bright-frame-insideContent {
    padding-top: 45px;
    padding-bottom: 45px;
  }
}

@media only screen and (max-width: 480px) {
  .primary-frame-inside h1 {
    font-size: 28px;
  }

  .primary-frame-inside h2 {
    font-size: 23px;
  }
}

@media only screen and (max-width: 400px) {
  .primary-frame-inside h3 {
    font-size: 16px;
  }

  .primary-frame-inside h1 {
    font-size: 24px;
  }

  .primary-frame-inside h2 {
    font-size: 18px;
  }

  .p-category {
    font-size: 22px;
    line-height: 1.1;
    padding: 8px 0;
  }
}
/* responsive end*/


</style>