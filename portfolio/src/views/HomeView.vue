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


    <!-- filter -->
    <section>
            <div class="flex justify-evenly items-center gap-4 pt-4 pb-4 three-percent">
                <div class="relative group">
                    <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/filter%2F14.jpg?alt=media&token=7e46a91b-2d26-4c85-9b33-ae8e4f0beae9" alt="">
                    <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span class="white-text font-headline">CLIENT WORK</span>
                    </div>
                </div>

                <div class="relative group">
                    <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/filter%2F15.jpg?alt=media&token=48ec5b97-39e3-4d13-85bb-efc6465f1118" alt="">
                    <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span class="white-text font-headline">CASE STUDIES</span>
                    </div>
                </div>

                <div class="relative group">
                    <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/filter%2F8.jpg?alt=media&token=7c178997-08b8-424a-b9ae-e837aaf138ff" alt="">
                    <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span class="white-text font-headline">PERSONAL WORK</span>
                    </div>
                </div>
            </div>
        </section>


        <section>
            <div class="flex justify-evenly items-center gap-4 pt-4 pb-4 three-percent">
                <div class="relative group">
                    <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/filter%2F14.jpg?alt=media&token=7e46a91b-2d26-4c85-9b33-ae8e4f0beae9" alt="">
                    <div class="flex flex-col absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span class="white-text font-headline">Title</span>
                        <span class="white-text font-headline">Short description</span>
                    </div>
                </div>

                <div class="relative group">
                    <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/filter%2F15.jpg?alt=media&token=48ec5b97-39e3-4d13-85bb-efc6465f1118" alt="">
                    <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span class="white-text font-headline">CASE STUDIES</span>
                    </div>
                </div>

                <div class="relative group">
                    <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/filter%2F8.jpg?alt=media&token=7c178997-08b8-424a-b9ae-e837aaf138ff" alt="">
                    <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span class="white-text font-headline">PERSONAL WORK</span>
                    </div>
                </div>

                <div class="relative group">
                    <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nielsen-portfolio.appspot.com/o/filter%2F14.jpg?alt=media&token=7e46a91b-2d26-4c85-9b33-ae8e4f0beae9" alt="">
                    <div class="flex flex-col absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span class="white-text font-headline">Title</span>
                        <span class="white-text font-headline">Short description</span>
                    </div>
                </div>

            </div>
        </section>
    

    <!-- portfolio section -->
    <div class="flex flex-col flex-nowrap overflow-hidden w-full gap-y-44 quaternary-bg pt-44" id="work">

      <!-- making a loop for all of my projects -->
      <div v-for="portfolio in portfolios" :key="portfolio" class="portfolio-item flex flex-col items-start secondary-bg w-full">

        <!-- container for projects -->
        <div class="portfolio-content flex justify-between six-percent w-full pt-10 pb-12 gap-16" id="portfolio-view">

          <!-- left side -->
          <div>
            <div>
              <h3 class="title dark-headline text-5xl pb-4">{{ portfolio.portfolioProduct }}</h3>
              <div>
                <p class="short pb-8">{{ portfolio.portfolioDescription }}</p>
              </div>

              <div>
                <h4 class="dark-headline text-2xl">Tech</h4>
                <p>{{ portfolio.portfolioTech.join(", ") }}</p>
              </div>

              <div class="flex  pt-10">
                <RouterLink :to="{ name: 'portfoliodetails', params:{id: portfolio.id}}">
                  <div class="product-image-container">
                    <button class="btn-3">See my work</button>
                  </div>   
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- right side -->
          <div class="flex justify-end flex-col">
            <div>
              <RouterLink :to="{ name: 'portfoliodetails', params:{id: portfolio.id}}">
                <div class="product-image-container">
                  <img :src="portfolio.portfolioImg" class="product-image" alt="portfolio-img">
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


/* first section */
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