<template>
  <main>
    <!-- primary-frame-inside -->
    <div class="primary-frame">
      <div class="primary-frame-inside">

        <div class="flex justify-end pt-4 pr-4">
          <img :src="star" alt="star" class="h-8">
        </div>

        <div class="primary-frame-inside-top-content flex ten-percent">
          <!-- left side hero -->
          <div class="primary-frame-inside-content w-1/3">
            <h2 class="text-6xl hello font-normal">Hello,</h2>
            <h2 class="text-6xl pb-4 red-headline">I'm Lærke!</h2>

            <p class="pt-16 pb-4 text-sm white-text">With a passion to bring my creative ideas<br> to life through web design and development,<br>video editing, and graphic design.</p>
            <!-- button to go straight to contact -->
            <div class="primary-frame-inside-button pt-5">
              <button @click="isOpen = true" class="btn-second">Contact me</button>
              <teleport to="body">
                <div class="modal" v-if="isOpen">
                  <ContactMe @close="isOpen = false">

                  </ContactMe>
                </div>
              </teleport>
            </div>
          </div>
          
          <!-- right side hero -->
          <div class="w-2/3 right-hero">
            <div class="my-portrait h-auto flex justify-end">
              <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/Me%2FDSC_2997-1.jpg?alt=media&token=c2d34077-6e9a-46b0-bd3a-7094d97d9e3e" alt="portrait-me" class="w-full h-auto object-center">
            </div>  
            <div>
              <h3 class="text-5xl red-headline pt-4">Multimedia designer</h3>
              <div class="flex justify-between white-text">
                <p>Studying 3rd semester</p>
                <p>Portfolio</p>
              </div>
            </div>

            
          </div>
          
        </div>
        <div class="flex justify-start pb-4 pl-4">
          <img :src="star" alt="star" class="h-10">
        </div>

      </div>
    </div>









    <div class="portfolio-item-container flex flex-col flex-nowrap overflow-hidden w-full gap-y-12 secondary-bg">

      <!-- making a loop for all of my projects -->
      <div v-for="portfolio in portfolios" :key="portfolio" class="portfolio-item flex flex-col items-start primary-bg w-full">

        <!-- container for projects -->
        <div class="portfolio-content flex w-full" id="portfolio-view" v-motion-fade-visible-once>

          <!-- left portfolio -->
          <div class="bright-frame w-6/12">
            <div class="bright-frame-inside left-container flex items-center justify-center">
                <div class="bright-frame-insideContent flex flex-col items-center justify-center pt-16 pb-16">
                  <RouterLink :to="{ name: 'portfoliodetails', params:{id: portfolio.id}}">
                    <div>
                      <img :src="portfolio.portfolioFrontImg" class="product-image" alt="portfolio-img">
                    </div>   
                  </RouterLink>
                </div>
            </div>
          </div>
          
          <!-- right portfolio -->
          <div class="primary-frame w-6/12">
            <div class="primary-frame-inside right-container flex flex-col justify-end">
              <div class="flex flex-col justify-end ten-percent">
                <h4 class="white-text text-base font-text">{{ portfolio.portfolioNumber }}</h4>
                <h3 class="p-category white-text text-3xl pb-6">{{ portfolio.portfolioProduct }}</h3>
                <RouterLink :to="{ name: 'portfoliodetails', params:{id: portfolio.id}}">
                  <button class="btn-second">See my work</button>
                </RouterLink>
              </div>
              <div class="flex justify-end pb-4 pr-4">
                <img :src="star" alt="star" class="h-10">
              </div>
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

/*primary-frame-inside*/
.right-hero {
  padding-left: 10%;
}

.primary-frame-inside h2 {
  font-weight: 200;
  line-height: 1;
  transform: scaleY(1.1);
}

.hello {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--red-headline);
}
/*primary-frame-inside end*/


/* left side portfolio */
.left-container {
  height: 65vh;
}


/* right side portfolio */
.right-container {
  height: 65vh;
}

/* making container of projects end */


/* stying image */
.product-image {
  max-height: 50vh;
}

.product-image:hover {
  box-shadow:  9px 9px 18px var(--red-headline),
  -9px -9px 18px var(--primary-color);
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

  .primary-frame-inside-content {
    width: 100%;
  }

  .primary-frame-inside h1 {
    font-size: 36px;
  }

  .primary-frame-inside h2{
    font-size: 30px;
  }

  .primary-frame-inside-button {
    padding-top: 12px;
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